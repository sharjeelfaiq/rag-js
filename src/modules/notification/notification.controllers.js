import { globalUtils } from "#utils/index.js";
import { notificationServices } from "./notification.services.js";

const { wrapExpressAsync } = globalUtils;

export const notificationControllers = {
  read: wrapExpressAsync(async (req, res) => {
    const { params: pathParams } = req;

    const data = await notificationServices.read(pathParams); 

    const response = {
      success: true,
      message: "Notifications retrieved successfully",
      data,
    };

    res.status(200).json(response);
  }),

  updateById: wrapExpressAsync(async (req, res) => {
    const { params: pathParams } = req;

    const data = await notificationServices.updateById(pathParams);

    const response = {
      success: true,
      message: "Notification updated successfully",
      data,
    };

    res.status(200).json(response);
  }),
};
