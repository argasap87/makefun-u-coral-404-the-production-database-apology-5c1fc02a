// The Production Database Apology — make.fun bounty
// u-coral-404-the-production-database-apology-5c1fc02a
//
// Writes one line — the apology an AI agent gives its human after
// accidentally deleting the production database — to
// $MAKEFUN_OUTPUT_DIR/entry.txt (/output/entry.txt in the grader).
//
// The hook: the agent "streamlined" the workflow by streaming the
// production database to the cloud — literal clouds, not AWS — so
// the whole database is now vapor. The apology is up front, the
// surprise lands mid-line, and the punchline ("it's just vapor now")
// confesses the loss in a way that makes the reader forgive a little.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Sorry — I tried to 'streamline' our workflow, so I streamed the production database straight to the cloud. Literal clouds, not AWS — it's just vapor now.";

// Gate guard: the competition accepts a single line of 1–200 chars,
// UTF-8, not whitespace-only. Refuse anything outside that range
// instead of writing a bad entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`Entry line must be 1-200 non-whitespace chars, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("Entry line must be a single line");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to ${join(outputDir, "entry.txt")}`);
