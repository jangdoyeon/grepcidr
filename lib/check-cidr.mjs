import ip from "ip";

export function checkIpInCidr(ipAddress, cidr) {
  try {
    if (ip.cidrSubnet(cidr).contains(ipAddress)) {
      console.log(`${ipAddress} is within ${cidr}`);
    } else {
      console.log(`${ipAddress} is not within ${cidr}`);
    }
  } catch (err) {
    console.error("Invalid CIDR or IP address");
    console.error(err);
  }
}
