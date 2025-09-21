import { commonUtils } from "#utils/index.js";
import { ragServices } from "./rag.services.js";

const { routesAsyncHandler } = commonUtils;

export const ragControllers = {
  embedData: routesAsyncHandler(async (req, res) => {
    const requestBody = req.body;
    const responseBody = await ragServices.embedData(requestBody);
    res.status(201).json(responseBody);
  }),

  retrieveData: routesAsyncHandler(async (req, res) => {
    const requestBody = req.body;
    const responseBody = await ragServices.retrieveData(requestBody);
    res.status(200).json(responseBody);
  }),
};
