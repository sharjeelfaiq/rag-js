import { globalUtils } from "#utils/index.js";
import { otpServices } from "./otp.services.js";

const { wrapExpressAsync } = globalUtils;

export const otpControllers = {
  send: wrapExpressAsync(async (request, response) => {
    const responseBody = await otpServices.send(request);
    response.status(200).json(responseBody);
  }),

  verify: wrapExpressAsync(async (request, response) => {
    const responseBody = await otpServices.verify(request);
    response.status(200).json(responseBody);
  }),
};
