import createError from "http-errors";
import mongoose from "mongoose";

import { logger } from "./logger.config.js";
import { MONGODB_CONNECTION_STRING } from "#constants/index.js";

let isConnected = false;

export const connectDatabase = async () => {
  if (isConnected) {
    logger.warn("Using existing MongoDB connection");
    return;
  }

  try {
    if (!MONGODB_CONNECTION_STRING) {
      throw createError(500, "Database URI is not defined.");
    }

    const connection = await mongoose.connect(MONGODB_CONNECTION_STRING, {
      serverSelectionTimeoutMS: 5000,
    });

    isConnected = !!connection.connections[0].readyState;
    logger.info(`connected: Database (url: ${MONGODB_CONNECTION_STRING})`.database);

    const db = mongoose.connection;

    db.on("error", (error) => {
      logger.error(`Connection Failed: MongoDB\nerror: ${error.message}`);
    });

    db.on("disconnected", () => {
      logger.error("MongoDB disconnected");
      isConnected = false;
    });

    process.on("SIGINT", async () => {
      await db.close();
      logger.info("MongoDB connection closed");
      process.exit(0);
    });
  } catch (error) {
    logger.error(`Failed to connect to MongoDB: ${error.message}`);
    process.exit(1);
  }
};
