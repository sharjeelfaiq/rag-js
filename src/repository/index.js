import { blacklistedTokenRepository } from "./blacklisted-token.repository.js";
import { notificationRepository } from "./notification.repository.js";
import { otpRepository } from "./otp.repository.js";
import { ragRepository } from "./rag.repository.js";
import { userRepository } from "./user.repository.js";

export const repository = {
  read: {
    ...blacklistedTokenRepository.read,
    ...notificationRepository.read,
    ...otpRepository.read,
    ...ragRepository.read,
    ...userRepository.read,
  },

  write: {
    ...blacklistedTokenRepository.write,
    ...notificationRepository.write,
    ...otpRepository.write,
    ...ragRepository.write,
    ...userRepository.write,
  },

  update: {
    ...notificationRepository.update,
    ...userRepository.update,
  },

  remove: {
    ...ragRepository.remove,
    ...userRepository.remove,
  },
};
