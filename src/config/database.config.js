import createError from "http-errors";
import mongoose from "mongoose";

import { logger } from "./logger.config.js";
import { DATABASE_URI } from "#constants/index.js";

let isConnected = false;

export const connectDatabase = async () => {
  if (isConnected) {
    logger.warn("Using existing Database connection");
    return;
  }

  try {
    if (!DATABASE_URI) {
      throw createError(500, "Database URI is not defined.");
    }

    const connection = await mongoose.connect(DATABASE_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    isConnected = !!connection.connections[0].readyState;
    logger.info(`Connected: Database (url: ${DATABASE_URI})`.database);

    const db = mongoose.connection;

    db.on("error", (error) => {
      logger.error(`Connection Failed: Database\nerror: ${error.message}`);
    });

    db.on("disconnected", () => {
      logger.error("Disconnected: Database");
      isConnected = false;
    });

    process.on("SIGINT", async () => {
      await db.close();
      logger.info("Disconnected: Database");
      process.exit(0);
    });
  } catch (error) {
    logger.error(`Connection Failed: Database\nerror: ${error.message}`);
    process.exit(1);
  }
};
