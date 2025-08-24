import { globalUtils } from "#utils/index.js";
import { notificationServices } from "./notification.services.js";

const { routesAsyncHandler } = globalUtils;

export const notificationControllers = {
  getNotificationsByUserId: routesAsyncHandler(async (request, response) => {
    const requestParams = request.params;
    const responseBody =
      await notificationServices.getNotificationsByUserId(requestParams);
    response.status(200).json(responseBody);
  }),

  updateNotificationById: routesAsyncHandler(async (request, response) => {
    const requestParams = request.params;
    const responseBody =
      await notificationServices.updateNotificationById(requestParams);
    response.status(200).json(responseBody);
  }),
};
