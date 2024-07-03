# grepcidr

---

Information gathering

## Feature

---

- check if IP is included in AWS-IP-Range
- check IP information from VirusTotal
- check if IP is included in CIDR

## Prerequisites

---

Node.js

## Usage

---

1. git clone
2. npm install

```
npm install
```

3. Link project globally

```
npm link
```

4. use command

- help

```
$ grepcidr

Usage: grepcidr [options] [command]

Check if an IP is within AWS IP range or a specified CIDR

Options:
  -V, --version      output the version number
  -h, --help         display help for command

Commands:
  ip [options] <ip>  Get IP information
  help [command]     display help for command
```

- ip information gathering from Virustotal

```
$ grepcidr ip 1.1.1.1

[-] From AWS IP Range
 [+] False, 1.1.1.1 is not within any AWS ranges
[-] From Virustotal
 [+] DNS(From Cert Subject): cloudflare-dns.com
 [+] Country : NULL
 [+] Jarm (Server JA Fingerprinter) : 27d3ed3ed0003ed1dc42d43d00041d6183ff1bfae51ebd88d70384363d525c
 [+] Analysis Statics : [object Object]
 [+] AS Owner : CLOUDFLARENET
 [+] Reputation Score : 100
```

- check if IP is included in CIDR

```
$ grepcidr ip 1.1.1.1 -c 1.1.1.0/24

1.1.1.1 is within 1.1.1.0/24
```
