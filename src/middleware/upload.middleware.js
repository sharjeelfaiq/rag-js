import multer from "multer";

import { storage } from "#config/index.js";
import { formFields } from "./middleware-config/upload.js";

export const uploadMiddleware = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
}).fields(formFields);
