import { Command } from "commander";
import { checkIpInAwsRanges } from "./check-aws-ip.mjs";
import { checkIpInCidr } from "./check-cidr.mjs";
import { getInfoFromVT } from "./virustotal.mjs";
const program = new Command();

program
  .version("1.0.0")
  .description("Check if an IP is within AWS IP range or a specified CIDR")
  .option("-i, --ip <ip>", "Gather IP Information")
  .option("-c, --cidr <cidr>", "CIDR to check the IP address against")
  .parse(process.argv);

const options = program.opts();

if (!options.ip) {
  console.error("IP address is required");
  process.exit(1);
}

function main() {
  if (options.cidr) {
    console.log("check cidr");
    checkIpInCidr(options.ip, options.cidr);
  } else {
    checkIpInAwsRanges(options.ip);
    getInfoFromVT(options.ip);
  }
}

main();
