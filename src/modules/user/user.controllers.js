import { globalUtils } from "#utils/index.js";
import { userServices } from "./user.services.js";

const { routesAsyncHandler } = globalUtils;

export const userControllers = {
  getAll: routesAsyncHandler(async (_request, response) => {
    const responseBody = await userServices.getAll();
    response.status(200).json(responseBody);
  }),

  getById: routesAsyncHandler(async (request, response) => {
    const requestParams = request.params;
    const responseBody = await userServices.getById(requestParams);
    response.status(200).json(responseBody);
  }),

  updateById: routesAsyncHandler(async (request, response) => {
    const requestParams = request.params;
    const requestFiles = request.files;
    const requestBody = request.body;
    const responseBody = await userServices.updateById(
      requestParams,
      requestFiles,
      requestBody
    );
    response.status(200).json(responseBody);
  }),

  deleteById: routesAsyncHandler(async (request, response) => {
    const requestParams = request.params;
    const responseBody = await userServices.deleteById(requestParams);
    response.status(204).json(responseBody);
  }),
};
