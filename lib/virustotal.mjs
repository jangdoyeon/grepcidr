import axios from "axios";
import { isValidIp } from "./utils.mjs";
import process from "process";
import { URL } from "url";
import { config } from "dotenv";
import { conf } from "../conf/conf.mjs";
config();

const NULL_DATA = "NULL";

export async function getInfoFromVT(target) {
  try {
    const API_KEY = process.env.VT_API_KEY;

    let targetType;

    if (isValidIp(target)) {
      targetType = "ip_addresses";
    } else {
      targetType = "domain";
    }

    const endpoint = `${targetType}/${target}`;

    const url = new URL(endpoint, conf.VT_BASE_URL).toString();

    const headers = {
      "x-apikey": API_KEY,
    };
    const res = await axios.get(url, { headers });

    // tls jubject
    const dns =
      res.data.data.attributes.last_https_certificate.subject.CN || NULL_DATA;
    // country
    const country = res.data.data.attributes.country || NULL_DATA;
    // server fingerprinter
    const jarm = res.data.data.attributes.jarm || NULL_DATA;
    // analysis statistic
    const last_analysis_stats =
      res.data.data.attributes.last_analysis_stats || NULL_DATA;
    // AS Owner
    const as_owner = res.data.data.attributes.as_owner || NULL_DATA;
    // reputation
    const reputation = res.data.data.attributes.reputation || NULL_DATA;

    console.log(`[-] From Virustotal 
 [+] DNS(From Cert Subject): ${dns}
 [+] Country : ${country}
 [+] Jarm (Server JA Fingerprinter) : ${jarm}
 [+] Analysis Statics : ${last_analysis_stats}
 [+] AS Owner : ${as_owner}
 [+] Reputation Score : ${reputation}
     `);

    return {
      dns,
      country,
      jarm,
      last_analysis_stats,
      as_owner,
      reputation,
    };
  } catch (err) {
    console.log("Error getting Virustotal information: ", err.response.data);
  }
}
