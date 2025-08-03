import createError from "http-errors";

export const globalUtils = {
  // 🟡 For Express middleware or route handlers
  wrapExpressAsync: (fn) =>
    async (req, res, next) => {
      try {
        await fn(req, res, next);
      } catch (error) {
        next(error);
      }
    },

  // 🔵 For general top-level async functions
  wrapGeneralAsync: (fn) =>
    async (...args) => {
      try {
        await fn(...args);
      } catch (err) {
        throw createError(500, err.message);
      }
    },

  // 🟢 For parsing string query params or env values
  parseDelimitedString: (input) => {
    return Array.isArray(input)
      ? input
      : input?.split(",").map((s) => s.trim());
  },
};
