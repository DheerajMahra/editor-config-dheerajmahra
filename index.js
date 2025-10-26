#!/usr/bin/env node
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const EDITOR_CONFIG_FILENAME = ".editorconfig";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to .editorconfig in this project
const src = path.join(__dirname, `templates/${EDITOR_CONFIG_FILENAME}`);
// Path to user's directory to copy this config
const dest = path.join(process.cwd(), EDITOR_CONFIG_FILENAME);

const copyEditorConfigToDest = async () => {
  try {
    await fs.copyFile(src, dest);
    console.log(`\n✅ ${EDITOR_CONFIG_FILENAME} added successfully!\n`);
  } catch (error) {
    console.error(`\n❌ Failed to add ${EDITOR_CONFIG_FILENAME}.\n`, error);
  }
};

copyEditorConfigToDest();
