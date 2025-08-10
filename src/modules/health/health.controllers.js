import { globalUtils } from "#utils/index.js";
import { healthServices } from "./health.services.js";

const { wrapExpressAsync } = globalUtils;

export const healthControllers = {
  checkHealth: wrapExpressAsync(async (_request, response) => {
    const responseBody = await healthServices.checkHealth();
    response.status(200).json(responseBody);
  }),

  checkDetailedHealth: wrapExpressAsync(async (_request, response) => {
    const responseBody = await healthServices.checkDetailedHealth();
    response.status(200).json(responseBody);
  }),
};
