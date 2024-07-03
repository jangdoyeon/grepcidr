import ip from "ip";

export function isValidIp(ipAddress) {
  return ip.isV4Format(ipAddress);
}
