import { Server as SocketIOServer } from "socket.io";
import { logger } from "#config/index.js";

export const createSocketServer = (server, corsOrigin) => {
  const io = new SocketIOServer(server, { cors: { origin: corsOrigin } });

  io.on("connection", (socket) => {
    logger.info(`Connected: Socket at ${socket.id}`);

    socket.on("connect_error", (err) => {
      logger.error(`Connection error on ${socket.id}: ${err.message}`);
    });

    socket.on("error", (err) => {
      logger.error(`Runtime error on ${socket.id}: ${err.message}`);
    });

    socket.on("disconnect", (reason) => {
      logger.info(`Disconnected: Socket ${socket.id}, reason: ${reason}`);
    });
  });

  return io;
};
