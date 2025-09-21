import mongoose from "mongoose";

const { Schema, model } = mongoose;

const DocumentSchema = new Schema(
  {
    prompt: { type: String, required: [true, "Text is required"], trim: true },

    embedding: { type: [Number], required: [true, "Embedding is required"] },

    metadata: { type: Object, default: {} },
  },
  { timestamps: true }
);

export const DocumentModel = model("Document", DocumentSchema);
