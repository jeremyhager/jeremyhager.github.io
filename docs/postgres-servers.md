---
id: postgres-servers
title: Postgres servers
sidebar_label: Postgres servers
---
## Hardware Info
|Asset     |Capacity     |
|----------|-------------|
|CPU	   |2        	 |
|RAM       |12288 (MiB)  |
|vda       |32GB         |

## OS Info
|Name             | postgresql1 Spec                   |postgresql2 Spec|
|-----------------|------------------------------------|----------------|
|Hostname         |postgresql1.internal.virtnet        |postgresql2.internal.virtnet|
|IP address       |172.16.0.13/16                      |172.16.0.14/16|
|Kernel           |3.10.0-1160.11.1.el7.x86_64         |3.10.0-1160.11.1.el7.x86_64|
|Release          |CentOS Linux 7 (Core)               |CentOS Linux 7 (Core)|
|Firewall services|dhcpv6-client http https ssh        |dhcpv6-client postgresql ssh|
|Firewall Ports   |9999/tcp 9898/tcp 9000/tcp 9694/udp |9999/tcp 9898/tcp 9000/tcp 9694/udp|
|Interfaces       |eth0                                |eth0
|Automatic updates|False                               |False
|Last updated     |2021-01-01                          |2021-01-01 
|Users            |ldap, root (local)                  |ldap, root (local) 
## Snapshot info
### postgresql1
|Name      |Description         |
|----------|--------------------|
|1609528151|Pre ldap/gssapi auth|
## Package Info
|Name   | Spec   |
|-------|--------|
## IPA info
|Name   |    Spec|
|-------|--------|