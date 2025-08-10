import { globalUtils } from "#utils/index.js";
import { emailServices } from "./email.services.js";

const { wrapExpressAsync } = globalUtils;

export const emailControllers = {
  checkVerificationToken: wrapExpressAsync(async (request, response) => {
    const responseBody = await emailServices.checkVerificationToken(request);
    response.status(200).send(responseBody);
  }),

  sendVerificationToken: wrapExpressAsync(async (request, response) => {
    const responseBody = await emailServices.sendVerificationToken(request);
    response.status(200).json(responseBody);
  }),
};
