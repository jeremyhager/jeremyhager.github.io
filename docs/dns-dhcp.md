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