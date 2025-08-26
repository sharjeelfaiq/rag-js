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

export const applyMiddleware = (app, appRouter) => {
  // 1. Request logging
  app.use(morgan("common."));

  // Disable Express signature header
  app.disable("x-powered-by");

  // 2. Security headers (Helmet also disables X-Powered-By)
  app.use(helmet());

  // Extra step: remove or override sensitive headers
  app.use((req, res, next) => {
    res.removeHeader("Server"); // Hide server technology
    res.removeHeader("X-Powered-By"); // Double safety (if added elsewhere)
    next();
  });

  // 3. Rate limiting
  app.use(apiRateLimiter);

  // 4. Input sanitization
  app.use(xss()); // Prevent XSS
  app.use(mongoSanitize()); // Prevent NoSQL injection

  // 5. CORS setup
  app.use(cors(corsOptions));

  // 6. Body parsing
  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ extended: true, limit: "10mb" }));

  // 7. Response compression
  app.use(compression());

  // 8a. API docs
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // 8b. Routes
  app.use(appRouter);

  // 9. 404 handler
  app.use(invalidRouteHandler);

  // 10. Error handler (last)
  app.use(errorHandler);
};
