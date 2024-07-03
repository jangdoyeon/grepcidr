import { Command } from "commander";
import { registCmds } from "../cmd/index.mjs";

export const program = new Command();

program
  .version("1.0.0")
  .description("Check if an IP is within AWS IP range or a specified CIDR");
//  .option("-i, --ip <ip>", "Gather IP Information")
//  .option("-c, --cidr <cidr>", "CIDR to check the IP address against")

registCmds(program);

program.parse(process.argv);
