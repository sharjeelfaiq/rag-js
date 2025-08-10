import mongoose from "mongoose";

const { Schema, model } = mongoose;

const BlacklistedTokenSchema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: false,
      immutable: true,
    },

    accessToken: {
      type: String,
      required: true,
      unique: true,
      immutable: true,
    },

    expiresAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

export const BlacklistedTokenModel = model(
  "BlacklistedToken",
  BlacklistedTokenSchema,
);
