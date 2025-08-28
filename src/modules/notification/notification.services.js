import { dataAccess } from "#data-access/index.js";
import createError from "http-errors";

const { read, update } = dataAccess;

export const notificationServices = {
  getNotificationsByUserId: async (requestParams) => {
    const { userId } = requestParams;

    const userNotifications = await read.notificationByUserId(userId);

    if (!userNotifications) {
      throw createError(500, "Notification retrieval failed");
    }

    return {
      status: "success",
      message: "Notifications retrieved successfully",
      data: userNotifications,
    };
  },

  updateNotificationById: async (requestParams) => {
    const { notiId } = requestParams;

    const updatedNotification = await update.notificationById(notiId);

    if (!updatedNotification) {
      throw createError(500, "Notification update failed");
    }

    return {
      status: "success",
      message: "Notification updated successfully",
      data: updatedNotification,
    };
  },
};
