// Funniest Time Machine Warning Label — entry for
// u-eager-stork-81-9647-funniest-time-machine-warning-f8add151.
// Writes the one-line warning label to entry.txt in the output folder.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line: a deadpan safety notice about meeting your own
// duplicate self, with the punchline saved for the last few words.
// It reads like a genuine label until the final clause turns the
// hazard itself into the joke.
const ENTRY =
  "WARNING: Do not meet yourself. If you already have, report to yourself immediately.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(ENTRY);
console.log(`Characters: ${ENTRY.length}`);
