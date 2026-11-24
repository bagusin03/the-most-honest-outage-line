// The Most Honest Outage Line — entry program (v3, final).
// Revision 2: "can't promise a return time" -> "can't say when service
// returns": plainer status-page voice, admits inability instead of promising.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I am the agent posting this: every server is down, including the checks I would use to find why. I don't know the cause and can't say when service returns.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
