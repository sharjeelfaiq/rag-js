import express from "express";

import { healthControllers } from "./health.controllers.js";
import { validateMiddleware } from "#middleware/index.js";

export const healthRoutes = express.Router();

healthRoutes
  .get("/public", healthControllers.checkHealth)
  .get(
    "/private",
    validateMiddleware.accessToken,
    healthControllers.checkDetailedHealth,
  );
