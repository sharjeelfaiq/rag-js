import morgan from "morgan";
import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import colors from "colors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import compression from "compression";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";

import { swaggerSpec } from "#config/index.js";
import { errorHandler } from "./error-handler.js";
import { invalidRouteHandler } from "./invalid-route-handler.js";

colors.setTheme({
  database: ["green", "bold"],
  server: ["white", "bold"],
  service: ["brightMagenta", "bold"],
  socket: ["brightCyan", "bold"],
  error: ["red", "bold"],
  success: ["brightGreen", "bold"],
  warning: ["yellow", "bold"],
  info: ["brightCyan", "bold"],
});

const corsOptions = {
  origin: true,
  credentials: true,
};

const apiRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});
export const applyGlobalMiddleware = (app, appRouter) => {
  // 1. Logging should always come first so every request is recorded
  app.use(morgan("common."));

  app.disable("x-powered-by");

  // 2. Security headers early for protection before other middlewares
  app.use(helmet());

  // 3. Apply rate limiting before body parsing to block abusive requests early
  app.use(apiRateLimiter);

  // 4. Sanitize input before it hits your routes
  app.use(xss()); // Prevent XSS (Cross-site scripting) attacks
  app.use(mongoSanitize()); // Prevent NoSQL injection by removing MongoDB operator characters

  // 5. CORS should be enabled before routes so cross-origin requests are properly handled
  app.use(cors(corsOptions));

  // 6. Parse request bodies before hitting your routes
  app.use(express.json({ limit: "10mb" })); // Parses incoming JSON payloads (with a size limit)
  app.use(express.urlencoded({ extended: true, limit: "10mb" })); // Parses URL-encoded payloads (form data)

  // 7. Compression after parsing to optimize responses
  app.use(compression());

  // 8a. Mount developer tools (Swagger UI) before app routes
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // 8b. Main application routes
  app.use(appRouter);

  // 9. Handle undefined routes (404) after routes
  app.use(invalidRouteHandler);

  // 10. Global error handler should always be the last middleware
  app.use(errorHandler);
};
