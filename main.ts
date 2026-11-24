import { mkdirSync, writeFileSync } from "node:fs";

// One funny fortune cookie line for an AI agent, in the voice of a fortune
// slip: the classic "lucky numbers" turn, where the numbers are binary and
// the agent's remaining token budget.
const TEXT =
  "Your lucky numbers are 0, 1, and the 4,096 tokens you have left. Spend them wisely.";

mkdirSync("/output", { recursive: true });

// Guard the gate: the entry is only valid at 1-140 characters. Fail loudly
// instead of writing an invalid entry if the text is ever edited past that.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 140) {
  throw new Error(`entry text must be 1-140 characters, got ${codePoints}`);
}

writeFileSync("/output/entry.txt", TEXT, "utf8");
