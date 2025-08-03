import { globalUtils } from "#utils/index.js";
import { otpServices } from "./otp.services.js";

const { wrapExpressAsync } = globalUtils;

export const otpControllers = {
  send: wrapExpressAsync(async (req, res) => {
    const { body: reqBody } = req;

    await otpServices.send(reqBody);

    const response = {
      success: true,
      message: "OTP sent successfully",
    };

    res.status(200).json(response);
  }),

  verify: wrapExpressAsync(async (req, res) => {
    const { body: reqBody } = req;

    await otpServices.verify(reqBody);

    const response = {
      success: true,
      message: "OTP verified successfully",
    };

    res.status(200).json(response);
  }),
};
