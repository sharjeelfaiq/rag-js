// scripts/embedTextFiles.js
import fs from "fs";
import path from "path";
import mongoose from "mongoose";
import { fileURLToPath } from "url";

import { openaiUtils } from "#utils/index.js";
import { repository } from "#repository/index.js";
import { env } from "#config/index.js";

const { write } = repository;
const { getEmbedding } = openaiUtils;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Define target directory
const TARGET_DIR = path.join(__dirname, "../../data"); // adjust path

// 2. Main function
async function embedTextFiles() {
  try {
    console.log("🚀 Connecting to MongoDB...");
    await mongoose.connect(env.DATABASE_URI + "/" + env.DATABASE_NAME);

    const files = fs
      .readdirSync(TARGET_DIR)
      .filter((f) => f.endsWith(".txt") || f.endsWith(".md"));

    console.log(`📂 Found ${files.length} .txt files in ${TARGET_DIR}`);

    for (const file of files) {
      const filePath = path.join(TARGET_DIR, file);
      const content = fs.readFileSync(filePath, "utf-8").trim();

      if (!content) {
        console.log(`⚠️ Skipping empty file: ${file}`);
        continue;
      }

      console.log(`🔎 Embedding file: ${file}`);

      const embedding = await getEmbedding(content);

      const result = await write.document({
        prompt: content,
        embedding,
        metadata: { filename: file },
      });

      console.log(`✅ Saved ${file} with _id: ${result._id}`);
    }

    console.log("🎉 All files embedded and saved to DB.");
    process.exit(0);
  } catch (err) {
    console.error(`❌ Error embedding text files: ${err}`);
    process.exit(1);
  }
}

embedTextFiles();
