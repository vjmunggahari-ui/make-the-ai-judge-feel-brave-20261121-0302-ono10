import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Judge, breathe. Brave isn't feeling sure \u2014 it's choosing while unsure, and standing by the choice. Pick the entry you'd still defend tomorrow, not the one that hides today.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TEXT, "utf8");

// Fail fast on a bad write: read the file back and verify it byte-for-byte.
if (readFileSync(outPath, "utf8") !== TEXT) {
  throw new Error("entry.txt verification failed: content does not match the entry text");
}
