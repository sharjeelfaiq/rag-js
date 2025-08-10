import { globalUtils } from "#utils/index.js";
import { authServices } from "./auth.services.js";

const { wrapExpressAsync } = globalUtils;

export const authControllers = {
  signUp: wrapExpressAsync(async (request, response) => {
    const responseBody = await authServices.signUp(request);
    response.status(201).json(responseBody);
  }),

  signIn: wrapExpressAsync(async (request, response) => {
    const responseBody = await authServices.signIn(request);
    response.status(200).json(responseBody);
  }),

  signOut: wrapExpressAsync(async (request, response) => {
    const responseBody = await authServices.signOut(request);
    response.status(200).json(responseBody);
  }),

  requestPasswordReset: wrapExpressAsync(async (request, response) => {
    const responseBody = await authServices.requestPasswordReset(request);
    response.status(200).json(responseBody);
  }),

  updatePassword: wrapExpressAsync(async (request, response) => {
    const responseBody = await authServices.updatePassword(request);
    response.status(200).json(responseBody);
  }),
};
