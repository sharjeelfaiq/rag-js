import { blacklistedTokenRepository } from "./blacklisted-token.repository.js";
import { notificationRepository } from "./notification.repository.js";
import { userRepository } from "./user.repository.js";
import { otpRepository } from "./otp.repository.js";

export const repository = {
  read: {
    ...blacklistedTokenRepository.read,
    ...notificationRepository.read,
    ...userRepository.read,
    ...otpRepository.read,
  },

  write: {
    ...blacklistedTokenRepository.write,
    ...notificationRepository.write,
    ...userRepository.write,
    ...otpRepository.write,
  },

  update: {
    ...notificationRepository.update,
    ...userRepository.update,
  },

  remove: {
    ...userRepository.remove,
  },
};
