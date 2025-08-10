import { globalUtils } from "#utils/index.js";
import { userServices } from "./user.services.js";

const { wrapExpressAsync } = globalUtils;

export const userControllers = {
  getAll: wrapExpressAsync(async (_request, response) => {
    const responseBody = await userServices.getAll();
    response.status(200).json(responseBody);
  }),

  getById: wrapExpressAsync(async (request, response) => {
    const responseBody = await userServices.getById(request);
    response.status(200).json(responseBody);
  }),

  updateById: wrapExpressAsync(async (request, response) => {
    const responseBody = await userServices.updateById(request);
    response.status(200).json(responseBody);
  }),

  deleteById: wrapExpressAsync(async (request, response) => {
    const responseBody = await userServices.deleteById(request);
    response.status(204).json(responseBody);
  }),
};
