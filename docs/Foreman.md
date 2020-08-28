---
id: foreman
title: Foreman Configuration
sidebar_label: Foreman Configuration
---
## Hardware Info
|Asset     |Capacity     |
|----------|-------------|
|CPU	   |2        	 |
|RAM       |12288         |
|vda       |32GB         |


## OS Info
|Name   | Spec   |
|-------|--------|
|Hostname| foreman.internal.virtnet|
|IP address| 192.168.86.10/24|
|Kernel | 3.10.0-1062.el7.x86_64|
|Release|CentOS Linux release 7.8.2003 (Core)|
|Firewall services| dhcpv6-client http https ssh|
|Firewall Ports|5647/tcp 9090/tcp|
|Interfaces| eth0 |
|Automatic updates| False |
|Last updated| 2020-08-24 |
|Users  | jeremy, root (disabled)|
|Snapshot|1598279687, 2020-08-24| 

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

## Other configurations
```plain title="/etc/hosts"
192.168.86.10 foreman.internal.virtnet
```

```yaml title="~/.hammer/cli_config.yml"
:foreman:
 :host: 'https://foreman.internal.virtnet'
 :username: 'admin'
 :password: 'password'
```
