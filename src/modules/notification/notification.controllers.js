import { globalUtils } from "#utils/index.js";
import { notificationServices } from "./notification.services.js";

const { wrapExpressAsync } = globalUtils;

export const notificationControllers = {
  read: wrapExpressAsync(async (request, response) => {
    const responseBody = await notificationServices.read(request);
    response.status(200).json(responseBody);
  }),

  updateById: wrapExpressAsync(async (request, response) => {
    const responseBody = await notificationServices.updateById(request);
    response.status(200).json(responseBody);
  }),
};
