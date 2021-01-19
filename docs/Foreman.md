---
id: foreman
title: Foreman Configuration
sidebar_label: Foreman Configuration
---
## Hardware Info
|Asset     |Capacity     |
|----------|-------------|
|CPU	   |2        	 |
|RAM       |12288 (MiB)  |
|vda       |128GB         |


## OS Info
|Name   | Spec   |
|-------|--------|
|Hostname| foreman.internal.virtnet|
|IP address| 172.16.0.10|
|Kernel | 3.10.0-1062.el7.x86_64|
|Release|CentOS Linux release 7.8.2003 (Core)|
|Firewall services| dhcpv6-client http https ssh|
|Firewall Ports|5647/tcp 9090/tcp|
|Interfaces| eth0 |
|Automatic updates| False |
|Last updated| 2020-08-24 |
|Users  | jeremy (local), root (disabled)|


## Snapshot info
|Name      |Description                            |
|----------|---------------------------------------|
|1609372699|Pre database migration                 |
|1609956117|Resizing /dev/vda                      |
|1610387700|Pre database migration; databases dumped|

## Package Info
|Name   | Spec   |
|-------|--------|
|foreman-release| foreman-release.noarch 0:2.1.1-1.el7|
|katello-repos|katello-repos.noarch 0:3.16.0-1.el7|
|puppet6-release|puppet6-release.noarch 0:6.0.0-10.el7|
|epel-release|epel-release.noarch 0:7-12|
|foreman-release-scl|foreman-release-scl.noarch 0:7-3.el7|
|centos-release-scl-rh|centos-release-scl-rh.noarch 0:2-3.el7.centos|
|Katello|katello.noarch 0:3.16.0-1.el7|

## Foreman info
|Name   |    Spec|
|-------|--------|
|Product|CentOS 7|
|Repos  |x86_64, x86_64_epel, x86_64_extras, x86_64_updates|
|Subscriptions|CentOS 7, 206675996097|

## Other configurations
```plain title="/etc/hosts"
192.168.86.10 foreman.internal.virtnet
```

```text title="/etc/sysconfig/network-scripts/ifcfg-eth0"
BOOTPROTO="static"
IPADDR=192.168.86.10
NETMASK=255.255.255.0
NETWORK=192.168.86.0
GATEWAY=192.168.86.1
BRAODCAST=192.168.1.255
DNS1=192.168.86.1
DNS2=8.8.8.8
```

```yaml title="/home/jeremy/.hammer/cli_config.yml"
:foreman:
 :host: 'https://foreman.internal.virtnet'
 :username: 'admin'
 :password: 'password'
```
