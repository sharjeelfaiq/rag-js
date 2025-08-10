import { globalUtils } from "#utils/index.js";
import { otpServices } from "./otp.services.js";

const { routesAsyncHandler } = globalUtils;

export const otpControllers = {
  send: routesAsyncHandler(async (request, response) => {
    const responseBody = await otpServices.send(request);
    response.status(200).json(responseBody);
  }),

  verify: routesAsyncHandler(async (request, response) => {
    const responseBody = await otpServices.verify(request);
    response.status(200).json(responseBody);
  }),
};
