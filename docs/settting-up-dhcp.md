---
id: setting-up-dhcp
title: Setting up dhcp
sidebar_label: Setting up dhcp
---
:::info
This guide assumes you've already gone through the [Setting up Bind](setting-up-bind.md) tutorial.
:::

## Install DHCP
```bash
sudo yum install dhcp
```

### Configure DHCP
The configuration for DHCP will include a few global defaults as well as allow bootp/pxe. To keep things easy to understand, the range will be kept separate from the server range which is 172.16.0.3-172.16.0.255. There are a few statements about bootp and pxeclients. These statements will point any network-boot clients to the pxe server (which is Foreman.internal.virtnet) and to have the pxe client ask for a file called 'pxelinux.0'.

```clike title="/etc/dhcp/dhcpd.conf"
option domain-name "internal.virtnet"; #default domain
option routers 172.16.0.2; #router or gateway configuration
option domain-name-servers 172.16.0.8; #dns servers
default-lease-time 14400; #lease of 14400 seconds, or 4 hours
max-lease-time 28800; #max lease of 8 hours
allow bootp; #allow clients to run a pxe boot
allow unknown-clients;

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
        next-server 172.16.0.10; #tftp server
        filename "pxelinux.0"; #filename to request
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

### Start and enable DHCP
Now that the configurations are complete, start and enable dhcpd:

```bash
sudo systemctl start dhcpd
```
```bash
sudo systemctl enable dhcpd
```