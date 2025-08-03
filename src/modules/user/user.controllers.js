import { globalUtils } from "#utils/index.js";
import { userServices } from "./user.services.js";

const { wrapExpressAsync } = globalUtils;

export const userControllers = {
  getAll: wrapExpressAsync(async (_, res) => {
    const data = await userServices.getAll();

    const response = {
      success: true,
      message: "Users retrieved successfully",
      data,
    };

    res.status(200).json(response);
  }),

  getById: wrapExpressAsync(async (req, res) => {
    const { params: pathParams } = req;

    const data = await userServices.getById(pathParams);

    const response = {
      success: true,
      message: "User retrieved successfully",
      data,
    };

    res.status(200).json(response);
  }),

  updateById: wrapExpressAsync(async (req, res) => {
    const { params: pathParams, body: reqBody, files: reqFiles } = req;

    const data = await userServices.updateById(pathParams, reqBody, reqFiles);

    const response = {
      success: true,
      message: "User updated successfully",
      data,
    };

    res.status(200).json(response);
  }),

  deleteById: wrapExpressAsync(async (req, res) => {
    const { params: pathParams } = req;

    await userServices.deleteById(pathParams);

    const response = {
      success: true,
      message: "User deleted successfully",
    };

    res.status(204).json(response);
  }),
};
