import { globalUtils } from "#utils/index.js";
import { authServices } from "./auth.services.js";

const { routesAsyncHandler } = globalUtils;

export const authControllers = {
  signUp: routesAsyncHandler(async (request, response) => {
    const responseBody = await authServices.signUp(request);
    response.status(201).json(responseBody);
  }),

  signIn: routesAsyncHandler(async (request, response) => {
    const responseBody = await authServices.signIn(request);
    response.status(200).json(responseBody);
  }),

  signOut: routesAsyncHandler(async (request, response) => {
    const responseBody = await authServices.signOut(request);
    response.status(200).json(responseBody);
  }),

  requestPasswordReset: routesAsyncHandler(async (request, response) => {
    const responseBody = await authServices.requestPasswordReset(request);
    response.status(200).json(responseBody);
  }),

  updatePassword: routesAsyncHandler(async (request, response) => {
    const responseBody = await authServices.updatePassword(request);
    response.status(200).json(responseBody);
  }),
};
