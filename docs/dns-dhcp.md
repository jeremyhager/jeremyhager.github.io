---
id: dns-dhcp
title: dns-dhcp configuration
sidebar_label: dns-dhcp Configuration
---
## Hardware Info
|Asset     |Capacity     |
|----------|-------------|
|CPU	   |2        	 |
|RAM       |2048 (MiB)   |
|vda       |12GB         |

## Package Info
|Name   | Spec   |
|-------|--------|
|bind   |bind.x86_64 32:9.11.4-16.P2.el7_8.6|
|bind-utils|bind-utils.x86_64 32:9.11.4-16.P2.el7_8.6|

## OS Info
|Name|Spec|
|----|----|
|Hostname|dns-dhcp.internal.virtnet|
|IP Address|192.168.86.8/24|
|Kernel|3.10.0-1062.el7.x86_64|
|Release|CentOS Linux release 7.8.2003 (Core)|
|Firewall services|dhcpv6-client dns ssh|
|Interfaces|eth0|
|Automatic updates|False|
|Last updated|2020-09-13|
|Users|jeremy, root (disabled)|
|Snapshot|1600037836|

## DNS Configuration
### /etc/named.conf
```clike title="/etc/named.conf"
acl "trusted" {
    localnets
};
```

```clike title="/etc/named.conf"
options {
    listen-on port 53 { 127.0.0.1; 192.168.86.8;};
    //...
    allow-query     { trusted; };
    //...
}
```

```clike title="/etc/named.conf"
//...
include "named.conf.local";
```
### named.conf.local
```clike title="/var/named/named.conf.local"
zone "internal.virtnet" {
    type master;
    file "zones/internal.virtnet"; //relative zone file path
};

zone "86.168.192.in-addr.arpa" {
    type master;
    file "zones/86.168.192.rev";  //relative reverse zone file path for 192.168.86.0/24 subnet
};
```
### zones/internal.virtnet forward lookup zone
```clike title="/var/named/zones/internal.virtnet"
$TTL    604800
@       IN      SOA     dns-dhcp.internal.virtnet. admin.internal.virtnet. (
            2020091000  ; Serial
            604800      ; Refresh
            86400       ; Retry
            2419200     ; Expire
            604800 )    ; Negative Cache TTL
; name servers - NS records
    IN      NS      dns-dhcp.internal.virtnet.
; name servers - A records
dns-dhcp.internal.virtnet.      IN      A       192.168.86.8

; 192.168.86.0/24 - A records
foreman.internal.virtnet.       IN      A       192.168.86.10
```
### zones/86.168.192.rev reverse lookup zone
```clike title="/var/named/zones/86.168.192.rev"
$TTL    604800
@       IN      SOA     internal.virtnet. admin.internal.virtnet. (
                        2020091000  ; Serial
                        604800      ; Refresh
                        86400       ; Retry
                        2419200     ; Expire
                    604800 )        ; Negative Cache TTL
; name servers
        IN      NS      dns-dhcp.internal.virtnet.

; PTR Records
8       IN      PTR     dns-dhcp.internal.virtnet.      ; 192.168.86.8
10      IN      PTR     foreman.internal.virtnet.       ; 192.168.86.10
```
## Other configurations
```text title="/etc/sysconfig/network-scripts/ifcfg-eth0"
BOOTPROTO="static"
IPADDR=192.168.86.8
NETMASK=255.255.255.0
NETWORK=192.168.86.0
GATEWAY=192.168.86.1
BRAODCAST=192.168.1.255
DNS1=192.168.86.1
DNS2=8.8.8.8
```