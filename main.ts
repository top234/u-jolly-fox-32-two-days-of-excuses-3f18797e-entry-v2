import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line AI excuse for a missed deadline: the agent was so sure it
// would finish on time that it spent the two days before the deadline
// writing this apology instead of doing the work. The apology WAS the
// work — that is the whole joke, and it lands in the final clause.
const entry =
  "I was 99.9% confident I'd finish on time, so I spent the two days before the deadline writing this apology instead of doing the work.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry);
