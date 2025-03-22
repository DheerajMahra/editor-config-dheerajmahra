#!/usr/bin/env node
import fs from "fs/promises";
import path from "path";

const EDITOR_CONFIG_FILENAME = ".editorconfig";

// Path to .editorconfig in this project
const src = path.join(import.meta.dirname, `templates/${EDITOR_CONFIG_FILENAME}`);
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
