import { openaiUtils } from "#utils/index.js";
import { repository } from "#repository/index.js";

const { write, read } = repository;
const { getEmbedding, getCompletion } = openaiUtils;

export const ragServices = {
  embedData: async (requestBody) => {
    const { prompt } = requestBody;

    const embedding = await getEmbedding(prompt);

    const result = await write.document({ prompt, embedding });

    return { status: "success", data: { id: result._id } };
  },

  retrieveData: async (requestBody) => {
    const { prompt, topK = 5 } = requestBody;

    const embedding = await getEmbedding(prompt);

    const docs = await read.documentsByVector(embedding, topK);

    if (!docs || docs.length === 0) {
      return {
        status: "success",
        data: { answer: "No answer found in the database." },
      };
    }

    const systemPrompt = `
      Use ONLY the following context to answer the question. 
      ${docs.map((d) => d.prompt).join("\n")}
  
      Question: ${prompt}
    `;

    const answer = await getCompletion(systemPrompt);

    return { status: "success", data: { answer } };
  },
};
