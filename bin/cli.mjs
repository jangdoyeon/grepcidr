#!/usr/bin/env node

import { Command } from "commander";
import { registCmds } from "../cmd/index.mjs";

export const program = new Command();

program
  .version("1.0.0")
  .description("Check if an IP is within AWS IP range or a specified CIDR");

registCmds(program);

program.parse(process.argv);
