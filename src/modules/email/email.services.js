import createError from "http-errors";

import { jwtUtils, sendEmail } from "#utils/index.js";
import { dataAccess } from "#data-access/index.js";
import { frontendUrl } from "#constants/index.js";

const { read, update, remove } = dataAccess;

export const emailServices = {
  checkVerificationToken: async (request) => {
    const { verificationToken } = request.query;

    if (!verificationToken || typeof verificationToken !== "string") {
      throw createError(
        400,
        "Verification token is required and must be a string"
      );
    }

    const decodedToken = jwtUtils.verify(verificationToken);

    const { id } = decodedToken;

    if (!id) {
      throw createError(400, "Token does not contain the user id");
    }

    const isUserUpdated = await update.userById(id, {
      isEmailVerified: true,
    });

    if (!isUserUpdated) {
      throw createError(500, "An error occurred while verifying the email");
    }

    if (!frontendUrl) {
      throw createError(500, "Frontend URL is not defined");
    }

    const sentEmail = await sendEmail("verification-notification", {
      frontendUrl,
    });

    if (!sentEmail) {
      throw createError(500, "Failed to send the verification email.");
    }

    return sentEmail;
  },

  sendVerificationToken: async (request) => {
    const { email } = request.body;

    const user = await read.userByEmail(email);

    if (!user) {
      throw createError(404, "User not found");
    }

    const verificationToken = jwtUtils.generate(
      { id: user._id },
      "verificationToken"
    );

    if (!verificationToken) {
      await remove.userById(user._id.toString());
      throw createError(500, "An error occurred while generating the token.");
    }

    const sentEmail = await sendEmail("verification-email", {
      email,
      subject: "Welcome - Verify your email",
      verificationToken,
    });

    if (!sentEmail) {
      await remove.userById(user._id.toString());
      throw createError(500, "Failed to send the welcome email.");
    }

    return {
      success: true,
      message: "Verification email sent successfully",
    };
  },
};
