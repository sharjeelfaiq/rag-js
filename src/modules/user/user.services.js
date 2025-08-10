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

  getById: async (request) => {
    const { id } = request.params;

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

  updateById: async (request) => {
    const { id } = request.params;
    const data = { ...request.body, ...request.files };

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

  deleteById: async (request) => {
    const { id } = request.params;

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
