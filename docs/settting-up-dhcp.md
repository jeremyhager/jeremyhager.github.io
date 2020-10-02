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
The configuration for DHCP will include a few global defaults as well as allow bootp/pxe. Since this machine resides on the same network as a home network, we don't want this dhcp server interfering with the exiting dhcp server. Additionally, to keep things easy to understand, the range will be kept separate from the home network which is 192.168.86.100-250. In order to do this we match the first half of the MAC address and create a group called "kvmGuests' and only allow requests to be answered from that group on the DHCP server.

Finally there are a few statements about bootp and pxeclients. These statements will point any network-boot clients to the pxe server (which is Foreman.internal.virtnet) and to have the pxe client ask for a file called 'pxelinux.0'.

```clike title="/etc/dhcp/dhcpd.conf"
option domain-name "internal.virtnet"; //default domain
option domain-name-servers 192.168.86.8; //dns server(s)
option subnet-mask 255.255.255.0; //subnet mask for the subnet
default-lease-time 14400; //lease of 14400 seconds, or 4 hours
max-lease-time 28800; //max lease of 8 hours
allow bootp; //allow clients to run a pxe boot

//the kvmGuests class will only be composed of clients who are created in the vm environment
class "kvmGuests" {
    match if substring (hardware, 1,3) = 52:54:00;
}
//if the client is PXE, sent it to the .10 server and ask for the "pxelinux.0" file
class "pxeClients" {
    match if substring(option vendor-class-identifier, 0,9) = "PXEClient";
    next-server 192.168.86.10;
    filename "pxelinux.0";
}

//subnet for the 192.168.86.0/24 network
subnet 192.168.86.0 netmask 255.255.255.0 {
    pool {
        range 192.168.86.17 192.168.86.99; //dhcp lease range
        option broadcast-address 192.168.86.255; //network broadcast address
        option routers 192.168.86.1; //router or gateway configuration
        option dynamic-bootp 192.168.86.17 192.168.86.24;
        //bootp or pxe clients will use the addresses .17 to .24
        deny unknown-clients; //do not allow unknown clients
        allow members of "kvmGuests" //only allow clients of the from the vm environment
    }
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