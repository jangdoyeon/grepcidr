import ip from "ip";
import validator from "validator";

export function isValidIp(ipAddress) {
  validator.isIP(ipAddress);
  return ip.isV4Format(ipAddress);
}
