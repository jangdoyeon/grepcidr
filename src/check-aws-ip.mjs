import axios from "axios";
import ip from "ip";
import { conf } from "./config.mjs";

export async function checkIpInAwsRanges(ipAddress) {
  try {
    const url = conf.AWS_IP_RANGES;
    const response = await axios.get(url);
    const awsRanges = response.data.prefixes;

    for (const range of awsRanges) {
      const ipPrefix = range.ip_prefix;

      if (ip.cidrSubnet(ipPrefix).contains(ipAddress)) {
        const prefix_str = JSON.stringify(range);
        console.log(
          `[-] From AWS IP Range
 [+] True, ${ipAddress} is within the AWS range ${range.ip_prefix}
 [+] ${prefix_str}`
        );
        return;
      }
    }
    console.log(`The IP address ${ipAddress} is not within any AWS ranges`);
  } catch (error) {
    console.error("Error fetching AWS IP ranges:", error);
  }
}
