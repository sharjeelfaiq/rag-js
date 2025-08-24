import createError from "http-errors";

import { globalUtils, tokenUtils } from "#utils/index.js";

const { routesAsyncHandler } = globalUtils;

export const validate = {
  dto: (schema) =>
    routesAsyncHandler(async (request, _response, next) => {
      const { value, error } = schema.validate(request.body, {
        abortEarly: false,
      });

      if (error) {
        const errorMessages = error.details.map(({ message }) => message);
        throw createError(
          400,
          `Validation failed: ${errorMessages.join(", ")}`,
        );
      }

      request.body = value;
      next();
    }),

  accessToken: routesAsyncHandler(async (request, _response, next) => {
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw createError(401, "Authorization token missing or malformed.");
    }

    const accessToken = authHeader.split(" ")[1]; // Get token after 'Bearer '

    const decodedToken = tokenUtils.verify(accessToken);

    request.user = decodedToken;
    next();
  }),

  authRole: (authorizedRole) =>
    routesAsyncHandler(async (request, _response, next) => {
      if (!request.user) {
        throw createError(401, "Authentication required.");
      }

      if (request.user.role !== authorizedRole) {
        throw createError(
          403,
          `Access denied: ${authorizedRole} role required.`,
        );
      }
      next();
    }),
};
