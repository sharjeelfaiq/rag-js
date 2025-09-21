import mongoose from "mongoose";

import createError from "http-errors";
import { DocumentModel } from "#models/index.js";

const { isValidObjectId } = mongoose;

export const ragRepository = {
  read: {
    documentsByVector: async (embedding, k = 5) => {
      if (!Array.isArray(embedding))
        throw createError(400, "Invalid embedding");

      return await DocumentModel.aggregate([
        {
          $vectorSearch: {
            index: "vector_index_1", // replace with your Atlas vector index name
            queryVector: embedding,
            path: "embedding",
            numCandidates: 50, // number of candidates to consider for nearest neighbors
            limit: k, // number of results you want
          },
        },
      ]);
    },
  },

  write: {
    document: (data) => {
      return DocumentModel.create(data);
    },

    documents: (data) => {
      return DocumentModel.insertMany(data);
    },
  },

  remove: {
    documentById: (id) => {
      if (!isValidObjectId(id)) throw createError(400, "Invalid document ID");
      return DocumentModel.findByIdAndDelete(id).exec();
    },
  },
};
