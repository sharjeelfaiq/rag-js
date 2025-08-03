import { globalUtils } from "#utils/index.js";
import { authServices } from "./auth.services.js";

const { wrapExpressAsync } = globalUtils;

export const authControllers = {
  signUp: wrapExpressAsync(async (req, res) => {
    const { body: reqBody } = req;

    await authServices.signUp(reqBody);

    const response = {
      success: true,
      message: "Signed up successfully. Please verify your email address.",
    };

    res.status(201).json(response);
  }),

  signIn: wrapExpressAsync(async (req, res) => {
    const { body: reqBody } = req;

    const data = await authServices.signIn(reqBody);

    const response = {
      success: true,
      message: "Signed in successfully.",
      data,
    };

    res.status(200).json(response);
  }),

  signOut: wrapExpressAsync(async (req, res) => {
    const { headers: reqHeaders } = req;

    await authServices.signOut(reqHeaders);

    const response = {
      success: true,
      message: "Signed out successfully.",
    };

    res.status(200).json(response);
  }),

  requestPasswordReset: wrapExpressAsync(async (req, res) => {
    const { body: reqBody } = req;

    await authServices.requestPasswordReset(reqBody);

    const response = {
      success: true,
      message: "Reset password email sent successfully.",
    };

    res.status(200).json(response);
  }),

  updatePassword: wrapExpressAsync(async (req, res) => {
    const { body: reqBody } = req;

    await authServices.updatePassword(reqBody);

    const response = {
      success: true,
      message: "Password updated successfully.",
    };

    res.status(200).json(response);
  }),
};
