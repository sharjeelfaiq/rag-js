import { globalUtils } from "#utils/index.js";
import { healthServices } from "./health.services.js";

const { wrapExpressAsync } = globalUtils;

export const healthControllers = {
  checkHealth: wrapExpressAsync(async (_, res) => {
    const data = await healthServices.checkHealth();

    const isHealthy = data.status === "healthy" ? 200 : 503;

    const response = {
      success: true,
      message: isHealthy ? "System operational" : "System degraded",
      data,
    };

    res.status(isHealthy ? 200 : 503).json(response);
  }),

  checkDetailedHealth: wrapExpressAsync(async (_, res) => {
    const data = await healthServices.checkDetailedHealth();

    const isHealthy = data.status === "healthy" ? 200 : 503;

    const response = {
      success: true,
      message: isHealthy ? "System operational" : "System degraded",
      data,
    };

    res.status(isHealthy ? 200 : 503).json(response);
  }),
};
