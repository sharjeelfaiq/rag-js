import { globalUtils } from "#utils/index.js";
import { userServices } from "./user.services.js";

const { routesAsyncHandler } = globalUtils;

export const userControllers = {
  getAll: routesAsyncHandler(async (_request, response) => {
    const responseBody = await userServices.getAll();
    response.status(200).json(responseBody);
  }),

  getById: routesAsyncHandler(async (request, response) => {
    const responseBody = await userServices.getById(request);
    response.status(200).json(responseBody);
  }),

  updateById: routesAsyncHandler(async (request, response) => {
    const responseBody = await userServices.updateById(request);
    response.status(200).json(responseBody);
  }),

  deleteById: routesAsyncHandler(async (request, response) => {
    const responseBody = await userServices.deleteById(request);
    response.status(204).json(responseBody);
  }),
};
