import OpenAI from "openai";

import { env } from "#config/index.js";

const { OPENAI_API_KEY } = env;

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

export const openaiUtils = {
  getEmbedding: async (prompt) => {
    const response = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: prompt,
    });

    return response.data[0].embedding;
  },

  getCompletion: async (prompt) => {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    return response.choices[0].message.content;
  },
};
