---
id: setting-up-bind
title: Setting up Bind
sidebar_label: Setting up Bind
tags: test
---
:::info
This guide assumes you've already gone through the [base vm server setup](base-vm-server-setup.md) tutorial.
:::
### Install BIND
```bash
sudo yum install bind bind-utils
```
This will install bind on a machine and any dependences needed, as well as its accompanying utility package `bind-utils`.

### Configure `named.conf`
#### Add an ACL
Allows dns request from the local network the BIND server is on. If this is being set up on a home network, then any device on the home network will be able to query the server.
```bash
sudo vi /etc/named.conf
```
```clike title="/etc/named.conf"
acl "trusted" {
    localnets
};
```
#### Configure `options` statement
Allow queries to be made on the local network interface and allow any queries from the "trusted" acl.
```clike title="/etc/named.conf"
options {
    listen-on port 53 { 127.0.0.1; 192.168.86.8;}; #add the local network IP
    ... #do NOT include these 3 dots in the file, this is just just to indicate there is likely lines between these options.
    allow-query     { trusted; };
    ...
}
```
#### Include a local zones file
Add the `named.conf.local` at the bottom of the `named.conf` file. This will be where zone files will be:
```clike title="/etc/named.conf"
include "named.conf.local";
```
Note this is a relative path - so this will likely be in `/var/named/`.
### Configure for primary DNS server

```bash title="/var/named/named.conf.local"
# This file should be empty when first created
zone "dns-dhcp.internal.virtnet" {
    type master;
    file "/etc/named/zones/db.nyc3.example.com"; # zone file path
};
```


### Source
- [How to configure BIND](https://www.digitalocean.com/community/tutorials/how-to-configure-bind-as-a-private-network-dns-server-on-centos-7)
    - Note the tutorial here is only for 1 DNS server, while on digital ocean is for 2.