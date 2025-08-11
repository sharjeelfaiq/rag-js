import createError from "http-errors";

import { dataAccess } from "#data-access/index.js";

const { read, update, remove } = dataAccess;

export const userServices = {
  getAll: async () => {
    const users = await read.users();

    return {
      success: true,
      message: "Users retrieved successfully",
      data: users,
    };
  },

  getById: async (requestParams) => {
    const { id } = requestParams;

    const user = await read.userById(id);

    if (!user) {
      throw createError(404, "User not found");
    }

    return {
      success: true,
      message: "User retrieved successfully",
      data: user,
    };
  },

  updateById: async (requestParams, requestFiles, requestBody) => {
    const { id } = requestParams;
    const data = { ...requestBody, ...requestFiles };

    const existingUser = await read.userById(id);

    if (!existingUser) {
      throw createError(404, "User not found");
    }

    const updatedUser = await update.userById(id, data);

    if (!updatedUser) {
      throw createError(500, "User update failed");
    }

    return {
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    };
  },

  deleteById: async (requestParams) => {
    const { id } = requestParams;

    const user = await remove.userById(id);

    if (!user) {
      throw createError(404, "User not found");
    }

    return {
      success: true,
      message: "User deleted successfully",
    };
  },
};
