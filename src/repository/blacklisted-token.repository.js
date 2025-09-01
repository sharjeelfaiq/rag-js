import { BlacklistedTokenModel } from "#models/index.js";

export const blacklistedTokenRepository = {
  write: {
    blacklistedToken: (data) => {
      const { accessToken, userId, expiresAt } = data;

      return BlacklistedTokenModel.create({
        accessToken,
        userId,
        expiresAt,
      });
    },
  },
};
