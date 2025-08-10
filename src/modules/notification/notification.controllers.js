import { globalUtils } from "#utils/index.js";
import { notificationServices } from "./notification.services.js";

const { routesAsyncHandler } = globalUtils;

export const notificationControllers = {
  read: routesAsyncHandler(async (request, response) => {
    const responseBody = await notificationServices.read(request);
    response.status(200).json(responseBody);
  }),

  updateById: routesAsyncHandler(async (request, response) => {
    const responseBody = await notificationServices.updateById(request);
    response.status(200).json(responseBody);
  }),
};
