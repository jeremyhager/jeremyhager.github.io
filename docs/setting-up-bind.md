---
id: setting-up-bind
title: Setting up Bind
sidebar_label: Setting up Bind
---
:::info
This guide assumes you've already gone through the [base vm server setup](base-vm-server-setup.md) tutorial.
:::
### Install BIND
```bash
sudo yum install bind bind-utils
```
This will install bind on a machine and any dependences needed, as well as its accompanying utility package `bind-utils`.

### Configure named.conf
#### Add an ACL
Allows dns request from the local network the BIND server is on. If this is being set up on a home network, then any device on the home network will be able to query the server.
```bash
sudo vi /etc/named.conf
```
```clike title="/etc/named.conf"
acl "trusted" {
    localnets;
};
```
#### Configure `options` statement
Allow queries to be made on the local network interface and allow any queries from the "trusted" acl.
```clike title="/etc/named.conf"
options {
    listen-on port 53 { 127.0.0.1; 172.16.0.8;}; //add the local network IP
    ... //do NOT include these 3 dots in the file, this is just just to indicate there is likely lines between these options.
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
### Create local named file
This file will serve the local subnet the BIND server will be on. First zone statement will link the `internal.virtnet` domain file, second zone statement will create a reverse zone file. Both of these files will contain static information on the hosts we specify, specifically for the environments created within the how-to's series.

```clike title="/var/named/named.conf.local"
# This file should be empty when first created
zone "internal.virtnet" {
    type master;
    file "zones/internal.virtnet"; //relative zone file path
};

zone "16.172.in-addr.arpa" {
    type master;
    file "zones/16.172.rev";  //relative reverse zone file path for 172.16.0.0/16 subnet
};
```

### Forward lookup zone
#### Create zone directory
There is not /var/named/zones by default, so it must be created:
```bash
sudo mkdir /var/named/zones
```
#### Create forward lookup zone file
For the serial number, a common practice is to use the current date. For example, the serial number below means the file was last edited 2020, September 10th at 00 hours.
This has the added benefit fin that someone reading the config file will know right away when the last change was.
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
```

### Reverse zone file
```clike title="/var/named/zones/16.172.rev"
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
8.0     IN      PTR     dns-dhcp.internal.virtnet.      ; 172.16.0.8
10.0    IN      PTR     foreman.internal.virtnet.       ; 172.16.0.10
11.0	IN	    PTR	    ldap1.internal.virtnet.	        ; 172.16.0.11
12.0	IN	    PTR	    ldap2.internal.virtnet.	        ; 172.16.0.12
13.0	IN	    PTR	    postgresql1.internal.virtnet.	; 172.16.0.13
14.0	IN	    PTR	    postgresql2.internal.virtnet.	; 172.16.0.14
15.0	IN	    PTR	    iscsitgt-nfs.internal.virtnet.	; 172.16.0.15
16.0	IN	    PTR	    bacula.internal.virtnet.	    ; 172.16.0.16
17.0	IN  	PTR	    httpd1.internal.virtnet.	    ; 172.16.0.17
18.0	IN	    PTR	    httpd2.internal.virtnet.	    ; 172.16.0.18
19.0	IN	    PTR	    tomcat1.internal.virtnet.	    ; 172.16.0.19
20.0	IN	    PTR	    tomcat2.internal.virtnet.	    ; 172.16.0.20
21.0	IN	    PTR	    iptables.internal.virtnet.	    ; 172.16.0.21
22.0	IN	    PTR	    postfix.internal.virtnet.	    ; 172.16.0.22
23.0	IN	    PTR	    nagios.internal.virtnet.	    ; 172.16.0.23
24.0	IN	    PTR	    syslog.internal.virtnet.	    ; 172.16.0.24
```

### Check BIND syntax
Double-check for any errors in the configuration:
```bash
sudo named-checkconf
```
If there are errors, `named-checkconf` will show something similar to this:
```text
/etc/named.conf:66: missing ';' before end of file
```
In this case, the `/etc/named.conf` only had 65 lines, so `named-checkconf` is actually specifying the linked file `/var/named/named.conf.local`. The file was missing a semicolon at the end.

If `named-checkconf` has no response, then the configuration does not have any syntax errors.

### Check for zone errors
If the configuration syntax checks out, it's time to check for errors in the zone files.

First check the forward lookup zone:
```bash
sudo named-checkzone internal.virtnet /var/named/zones/internal.virtnet
```
Example output:
```text
zone internal.virtnet/IN: loaded serial 3
OK
```
Now check the reverse lookup zone:
```bash
sudo named-checkzone 16.172.in-addr.arpa /var/named/zones/16.172.rev
```
Example output:
```text
zone 16.172.in-addr.arpa/IN: loaded serial 3
OK
```
If both commands reply `OK`, then it's time to start BIND.

### Start and Enable BIND

First enable the `named` service, then start the service so it's running.
```bash
sudo systemctl enable named
```
```bash
sudo systemctl start named
```

### Set DNS to resolve to self

```text title="/etc/sysconfig/network-scripts/ifcfg-eth0"
#Change DNS1 to localhost and optionally change DNS2 to secondary dns host
DNS1=127.0.0.1 #Localhost
DNS2=172.16.0.1 #local DNS server, eg. router
```

Once the changes are complete, restart the network:
:::caution Heads up!
If you are connected via ssh you will _may_ loose your connection. Be sure there is a way to access the vm without ssh (eg. using the console on the hypervisor) incase of a malformed network config file.
:::
```bash
sudo systemctl restart network
```

### Allow DNS in firewall

In order to respond to DNS requests, the final step is to add the dns service in the firewall:
```bash
sudo firewall-cmd --permanent --add-service=dns
```
Now restart the firewall so the changes take effect:
```bash
sudo firewall-cmd --reload
```

### Testing
Time to test that BIND can respond to requests externally and reverse-lookups work:
```bash title="external host"
nslookup foreman.internal.virtnet 172.16.0.8
```
A response should look something like this:
```text
Server:         172.16.0.8
Address:        172.16.0.8#53

Name:   foreman.internal.virtnet
Address: 172.16.0.10
```

Finally, test the reverse lookup zones are working properly:
```bash
nslookup 172.16.0.10 172.16.0.8
```
Response should look similar to this:
```text
10.0.16.172.in-addr.arpa        name = foreman.internal.virtnet.
```

### Source
- [How to configure BIND](https://www.digitalocean.com/community/tutorials/how-to-configure-bind-as-a-private-network-dns-server-on-centos-7)
    - Note the tutorial here is only for 1 DNS server, while on digital ocean is for 2.