import express from "express";

import { ragControllers } from "./rag.controllers.js";

export const ragRoutes = express.Router();

ragRoutes
  .post("/embed-data", ragControllers.embedData)
  .post("/retrieve-data", ragControllers.retrieveData);
