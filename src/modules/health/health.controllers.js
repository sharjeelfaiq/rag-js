import { globalUtils } from "#utils/index.js";
import { healthServices } from "./health.services.js";

const { routesAsyncHandler } = globalUtils;

export const healthControllers = {
  checkHealth: routesAsyncHandler(async (_request, response) => {
    const responseBody = await healthServices.checkHealth();
    response.status(200).json(responseBody);
  }),

  checkDetailedHealth: routesAsyncHandler(async (_request, response) => {
    const responseBody = await healthServices.checkDetailedHealth();
    response.status(200).json(responseBody);
  }),
};
