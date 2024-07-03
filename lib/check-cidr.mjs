import ip from "ip";

export function checkIpInCidr(ipAddress, cidr) {
  try {
    if (ip.cidrSubnet(cidr).contains(ipAddress)) {
      console.log(
        `The IP address ${ipAddress} is within the CIDR range ${cidr}`
      );
    } else {
      console.log(
        `The IP address ${ipAddress} is not within the CIDR range ${cidr}`
      );
    }
  } catch (err) {
    console.error("Invalid CIDR or IP address");
    console.error(err);
  }
}
