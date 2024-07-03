import { program } from "../bin/cli.mjs";
import { ipCmd } from "./ip.mjs";

/**
 * @param {program} program
 */
export async function registCmds(program) {
  ipCmd(program);
}
