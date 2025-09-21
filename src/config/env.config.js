import dotenv from "dotenv";
import { cleanEnv, str, port, email, url, testOnly } from "envalid";

import { logger } from "./logger.config.js";

const envFile = `.env.${process.env.NODE_ENV || "development"}`;
dotenv.config({ path: envFile });

const validators = {
  PORT: port({ devDefault: 3000, desc: "Port number" }),
  NODE_ENV: str({
    choices: ["development", "test", "production"],
    default: "development",
    desc: "Environment type",
  }),

  BACKEND_URL: url({ desc: "Backend URL" }),
  FRONTEND_URL: url({ desc: "Frontend URL" }),

  DATABASE_URI: url({ desc: "MongoDB connection string" }),
  DATABASE_NAME: str({ desc: "MongoDB database name" }),

  JWT_SECRET_KEY: str({
    devDefault: testOnly("test-secret"),
    desc: "JWT secret key",
  }),

  EMAIL_HOST: str({ desc: "Email host" }),
  EMAIL_PORT: port({ desc: "Email port" }),
  USER_EMAIL: email({ desc: "Email address" }),
  USER_PASSWORD: str({ desc: "Email password" }),

  CLOUDINARY_CLOUD_NAME: str({ desc: "Cloudinary cloud name" }),
  CLOUDINARY_API_KEY: str({ desc: "Cloudinary API key" }),
  CLOUDINARY_API_SECRET: str({ desc: "Cloudinary API secret" }),

  OPENAI_API_KEY: str({ desc: "OpenAI API key" }),
};

export const env = cleanEnv(process.env, validators, {
  reporter: ({ errors }) => {
    const invalidVars = Object.keys(errors);
    if (invalidVars.length > 0) {
      logger.error(`Invalid ENV variables: ${invalidVars}`);
      process.exit(1);
    }
  },
});
