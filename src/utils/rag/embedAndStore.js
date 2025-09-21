import OpenAI from "openai";

import { env, logger } from "#config/index.js";
import { repository } from "#repository/index.js";

const BATCH_SIZE = 100;

const { write } = repository;

const { OPENAI_API_KEY } = env;

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

export async function embedAndStore(chunks, metadata = {}) {
  try {
    // 🚫 remove empty strings
    chunks = chunks.filter((c) => typeof c === "string" && c.trim().length > 0);

    const results = [];

    logger.info(`🚀 Sending ${chunks.length} chunks to OpenAI...`);

    for (let i = 0; i < chunks.length; i += BATCH_SIZE) {
      const batch = chunks.slice(i, i + BATCH_SIZE);

      if (batch.length === 0) continue; // skip empty batches

      const response = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: batch,
      });

      const docs = response.data.map((item, idx) => ({
        text: batch[idx],
        embedding: item.embedding,
        metadata,
      }));

      await write.documents(docs);
      results.push(...docs);
    }

    return results;
  } catch (error) {
    logger.error(`Error embedding chunks: ${error.message}`);
    if (error.stack) logger.error(`${error.stack}`);
    return [];
  }
}
