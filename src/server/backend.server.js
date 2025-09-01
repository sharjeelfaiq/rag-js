import appRouter from "#routes/index.js";
import { commonMiddleware as setupMiddleware } from "#middleware/index.js";
import { logger, env, connectDatabase } from "#config/index.js";

const { PORT, BACKEND_URL } = env;

export const createBackendServer = async (server, app) => {
  await connectDatabase();

  setupMiddleware(app, appRouter);

  server.listen(PORT || 5000, () => {
    logger.info(`[connected] Backend (url: ${BACKEND_URL})`.server);
  });
};
