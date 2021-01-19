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

## OS Info
|Name|Spec|
|----|----|
|Hostname|dns-dhcp.internal.virtnet|
|IP Address|172.16.0.8/24|
|Kernel|3.10.0-1062.el7.x86_64|
|Release|CentOS Linux release 7.8.2003 (Core)|
|Firewall services|dhcpv6-client dns ssh|
|Interfaces|eth0|
|Automatic updates|False|
|Last updated|2020-09-13|
|Users|jeremy, root (disabled)|
|Snapshot|1600037836 (dns installed and configured)|

## Package Info
|Name   | Spec   |
|-------|--------|
|bind   |bind.x86_64 32:9.11.4-16.P2.el7_8.6|
|bind-utils|bind-utils.x86_64 32:9.11.4-16.P2.el7_8.6|
|dhcp|12:4.2.5-79.el7.centos|

## Snapshot info
|Name      |Description                            |
|----------|---------------------------------------|
|1608682843|Post ldap enrollment                   |
## DNS Configuration
### /etc/named.conf
```clike title="/etc/named.conf"
acl "trusted" {
    localnets;
};
```

```clike title="/etc/named.conf"
options {
    listen-on port 53 { 127.0.0.1; 172.16.0.8;};
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

zone "16.172.in-addr.arpa" {
    type master;
    file "zones/16.172.rev";  //relative reverse zone file path for 172.16.0.0/16 subnet
};
```
### zones/internal.virtnet forward lookup zone
```clike title="/var/named/zones/internal.virtnet"
$TTL    604800
@       IN      SOA     dns-dhcp.internal.virtnet. admin.internal.virtnet. (
            2020121815  ; Serial
            604800      ; Refresh
            86400       ; Retry
            2419200     ; Expire
            604800 )    ; Negative Cache TTL
; name servers - NS records
    IN      NS      dns-dhcp.internal.virtnet.
; name servers - A records
dns-dhcp.internal.virtnet.      IN      A       172.16.0.8

; 172.16.0.0/16 - A records
foreman.internal.virtnet.       IN      A       172.16.0.10
ldap1.internal.virtnet.         IN      A       172.16.0.11
ldap2.internal.virtnet.         IN      A       172.16.0.12
postgresql1.internal.virtnet.   IN      A       172.16.0.13
postgresql2.internal.virtnet.   IN      A       172.16.0.14
iscsitgt-nfs.internal.virtnet.  IN      A       172.16.0.15
bacula.internal.virtnet.        IN      A       172.16.0.16
httpd1.internal.virtnet.        IN      A       172.16.0.17
httpd2.internal.virtnet.        IN      A       172.16.0.18
tomcat1.internal.virtnet.       IN      A       172.16.0.19
tomcat2.internal.virtnet.       IN      A       172.16.0.20
iptables.internal.virtnet.      IN      A       172.16.0.21
postfix.internal.virtnet.       IN      A       172.16.0.22
nagios.internal.virtnet.        IN      A       172.16.0.23
syslog.internal.virtnet.        IN      A       172.16.0.24

; domain info
_kerberos-master._tcp.internal.virtnet. 86400 IN SRV 0 100 88 ldap1.internal.virtnet.
_kerberos-master._udp.internal.virtnet. 86400 IN SRV 0 100 88 ldap1.internal.virtnet.
_kerberos._tcp.internal.virtnet. 86400 IN SRV 0 100 88 ldap1.internal.virtnet.
_kerberos._udp.internal.virtnet. 86400 IN SRV 0 100 88 ldap1.internal.virtnet.
_kerberos.internal.virtnet. 86400 IN TXT "INTERNAL.VIRTNET"
_kpasswd._tcp.internal.virtnet. 86400 IN SRV 0 100 464 ldap1.internal.virtnet.
_kpasswd._udp.internal.virtnet. 86400 IN SRV 0 100 464 ldap1.internal.virtnet.
_ldap._tcp.internal.virtnet. 86400 IN SRV 0 100 389 ldap1.internal.virtnet.
_ntp._udp.internal.virtnet. 86400 IN SRV 0 100 123 ldap1.internal.virtnet.
ipa-ca.internal.virtnet. 86400 IN A 172.16.0.11
```
### zones/16.172.rev reverse lookup zone
```clike title="/var/named/zones/16.172.rev"
$TTL    604800
@       IN      SOA     internal.virtnet. admin.internal.virtnet. (
                        2020121815  ; Serial
                        604800      ; Refresh
                        86400       ; Retry
                        2419200     ; Expire
                    604800 )        ; Negative Cache TTL
; name servers
        IN      NS      dns-dhcp.internal.virtnet.

; PTR Records
8.0     IN      PTR     dns-dhcp.internal.virtnet.      ; 172.16.0.8
10.0    IN      PTR     foreman.internal.virtnet.       ; 172.16.0.10
11.0    IN      PTR     ldap1.internal.virtnet.         ; 172.16.0.11
12.0    IN      PTR     ldap2.internal.virtnet.         ; 172.16.0.12
13.0    IN      PTR     postgresql1.internal.virtnet.   ; 172.16.0.13
14.0    IN      PTR     postgresql2.internal.virtnet.   ; 172.16.0.14
15.0    IN      PTR     iscsitgt-nfs.internal.virtnet.  ; 172.16.0.15
16.0    IN      PTR     bacula.internal.virtnet.        ; 172.16.0.16
17.0    IN      PTR     httpd1.internal.virtnet.        ; 172.16.0.17
18.0    IN      PTR     httpd2.internal.virtnet.        ; 172.16.0.18
19.0    IN      PTR     tomcat1.internal.virtnet.       ; 172.16.0.19
20.0    IN      PTR     tomcat2.internal.virtnet.       ; 172.16.0.20
21.0    IN      PTR     iptables.internal.virtnet.      ; 172.16.0.21
22.0    IN      PTR     postfix.internal.virtnet.       ; 172.16.0.22
23.0    IN      PTR     nagios.internal.virtnet.        ; 172.16.0.23
24.0    IN      PTR     syslog.internal.virtnet.        ; 172.16.0.24
```
## DHCP Configuration
```clike title="/etc/dhcp/dhcpd.conf"
#
# DHCP Server Configuration file.
#   see /usr/share/doc/dhcp*/dhcpd.conf.example
#   see dhcpd.conf(5) man page
#
option domain-name "internal.virtnet"; #default domain
#option domain-name-servers 172.16.0.8; #dns server(s)
#option subnet-mask 255.255.0.0; #subnet mask for the subnet
default-lease-time 14400; #lease of 14400 seconds, or 4 hours
max-lease-time 28800; #max lease of 8 hours
allow bootp; #allow clients to run a pxe boot

#if the client is PXE, sent it to the .10 server and ask for the "pxelinux.0" file
class "pxeClients" {
    match if substring(option vendor-class-identifier, 0,9) = "PXEClient";
    next-server 172.16.0.10;
    filename "pxelinux.0";
}

#subnet for the 172.16.0.0/16 network
subnet 172.16.0.0 netmask 255.255.0.0 {
    pool {
        range 172.16.1.0 172.16.1.255; #dhcp lease range
        option broadcast-address 172.16.255.255; #network broadcast address
        option routers 172.16.0.2; #router or gateway configuration
        option domain-name-servers 172.16.0.8;
        #option dynamic-bootp 172.16.1.0 172.16.1.16;
        #bootp or pxe clients will use the addresses 1.0 to 1.24
        allow unknown-clients; #allow unknown clients
        #allow any; #only any member on the network
        default-lease-time 14400;
        max-lease-time 28800;
        next-server 172.16.0.10;
        filename "pxelinux.0";
    }
}

#Static IP assignments
host ldap1 {
    hardware ethernet 52:54:00:00:00:11;
    fixed-address 172.16.0.11;
}
host ldap2 {
    hardware ethernet 52:54:00:00:00:12;
    fixed-address 172.16.0.12;
}
host postgresql1 {
    hardware ethernet 52:54:00:00:00:13;
    fixed-address 172.16.0.13;
}
host postgresql2 {
    hardware ethernet 52:54:00:00:00:14;
    fixed-address 172.16.0.14;
}
host iscsitgt-nfs {
    hardware ethernet 52:54:00:00:00:15;
    fixed-address 172.16.0.15;
}
host bacula {
    hardware ethernet 52:54:00:00:00:16;
    fixed-address 172.16.0.16;
}
host httpd1 {
    hardware ethernet 52:54:00:00:00:17;
    fixed-address 172.16.0.17;
}
host httpd2 {
    hardware ethernet 52:54:00:00:00:18;
    fixed-address 172.16.0.18;
}
host tomcat1 {
    hardware ethernet 52:54:00:00:00:19;
    fixed-address 172.16.0.19;
}
host tomcat2 {
    hardware ethernet 52:54:00:00:00:20;
    fixed-address 172.16.0.20;
}
host iptables {
    hardware ethernet 52:54:00:00:00:21;
    fixed-address 172.16.0.21;
}
host postfix {
    hardware ethernet 52:54:00:00:00:22;
    fixed-address 172.16.0.22;
}
host nagios {
    hardware ethernet 52:54:00:00:00:23;
    fixed-address 172.16.0.23;
}
host syslog {
    hardware ethernet 52:54:00:00:00:24;
    fixed-address 172.16.0.24;
}
```

## Other configurations
```text title="/etc/sysconfig/network-scripts/ifcfg-eth0"
DEVICE=eth0
HWADDR=52:54:00:01:49:44
BOOTPROTO=static
ONBOOT="yes"
IPADDR=172.16.0.8
NETMASK=255.255.0.0
NETWORK=172.16.0.0
BROADCAST=172.16.255.255
DNS1=127.0.0.1
GATEWAY=172.16.0.2
```