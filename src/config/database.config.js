import createError from "http-errors";
import mongoose from "mongoose";

import { logger } from "./logger.config.js";
import { env } from "./env.config.js";

let isConnected = false;

const { DATABASE_URI } = env;

export const connectDatabase = async () => {
  if (isConnected) {
    logger.warn("Using existing MongoDB connection");
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
    logger.info(`connected: Database (url: ${DATABASE_URI})`.database);

    const db = mongoose.connection;

    db.on("error", (err) => {
      logger.error(`Connection Failed: MongoDB\nerror: ${err.message}`);
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
