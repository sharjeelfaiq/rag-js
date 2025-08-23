import express from "express";
import { createServer } from "http";

import { connectDatabase } from "#config/index.js";
import { applyGlobalMiddleware } from "#middleware/index.js";
import { logger, env } from "#config/index.js";
import { globalUtils } from "#utils/index.js";
import { isProdEnv } from "#constants/index.js";
import { createSocketServer } from "./socket.js";
import appRouter from "#routes/index.js";

const {
  PORT,
  BACKEND_BASE_URL_DEV,
  BACKEND_BASE_URL_PROD,
  FRONTEND_BASE_URL_DEV,
  FRONTEND_BASE_URL_PROD,
} = env;

const { asyncHandler } = globalUtils;

export const startServer = asyncHandler(async () => {
  await connectDatabase();

  const app = express();
  applyGlobalMiddleware(app, appRouter);

  const server = createServer(app);
  const io = createSocketServer(server, {
    cors: {
      origin: isProdEnv ? FRONTEND_BASE_URL_PROD : FRONTEND_BASE_URL_DEV,
    },
  });

  server.listen(PORT || 5000, () => {
    logger.info(
      `connected: Server (url: ${isProdEnv ? BACKEND_BASE_URL_PROD : BACKEND_BASE_URL_DEV})`
        .server
    );
  });

  return { app, server, io };
});
