import { program } from "../bin/cli.mjs";
import { checkIpInAwsRanges } from "../lib/check-aws-ip.mjs";
import { checkIpInCidr } from "../lib/check-cidr.mjs";
import { getInfoFromVT } from "../lib/virustotal.mjs";

/**
 * @param {program} program
 */
export async function ipCmd(program) {
  program //
    .command("ip <ip>")
    .description("Get IP information")
    .option("-c, --cidr <cidr>", "Check if IP is in CIDR")
    .action((ip, options) => {
      if (options.cidr) {
        checkIpInCidr(ip, options.cidr);
      } else {
        getInfoFromVT(ip);
        checkIpInAwsRanges(ip);
      }
    });
}
