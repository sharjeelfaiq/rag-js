import { dataAccess } from "#data-access/index.js";
import createError from "http-errors";

const { read, update } = dataAccess;

export const notificationServices = {
  read: async (request) => {
    const { userId } = request.params;

    const data = await read.notificationByUserId(userId);

    if (!data) {
      throw createError(500, "Notification retrieval failed");
    }

    return {
      success: true,
      message: "Notifications retrieved successfully",
      data,
    };
  },

  updateById: async (request) => {
    const { notiId } = request.params;

    const data = await update.notificationById(notiId);

    if (!data) {
      throw createError(500, "Notification update failed");
    }

    return {
      success: true,
      message: "Notification updated successfully",
      data,
    };
  },
};
