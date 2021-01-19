---
id: ldap1-ldap2
title: Ldap servers
sidebar_label: Ldap servers
---
## Hardware Info
|Asset     |Capacity     |
|----------|-------------|
|CPU	   |2        	 |
|RAM       |2048 (MiB)   |
|vda       |12GB         |

## OS Info
|Name             |ldap1 Spec                               |ldap2 Spec|
|-----------------|-----------------------------------------|----------|
|Hostname         |ldap1.internal.virtnet                   |ldap2.internal.virtnet|
|IP Address       |172.16.0.11/16                           |172.16.0.12/16
|Kernel           |3.10.0-1062.el7.x86_64                   |3.10.0-1160.6.1.el7.x86_64
|Release          |CentOS Linux release 7.8.2003 (Core)     |
|Firewall services|dhcpv6-client dns ssh                    |
|Interfaces       |eth0                                     |eth0
|Automatic updates|False                                    |False
|Last updated     |2020-09-13                               |2020-12-28
|Users            |jeremy (ldap), root (disabled)           |jeremy (ldap), root (disabled)


## Package Info
|Name   | Spec   |
|-------|--------|
|freeipa-server|ipa-server-4.6.8-5.el7.centos.x86_64|

## Snapshot info
### ldap1
|Name      |Description                            |
|----------|---------------------------------------|
|1608682711|ldap set up and ready to go            |
### ldap2
|Name      |Description                            |
|----------|---------------------------------------|
|1608682789|ldap set up and ready to go            |
## LDAP configuration
### Anonymous bind disabled
```clike title="dn: cn=config"
nsslapd-allow-anonymous-access: rootdse
```
### Require secure binds
```clike title="cn=config"
nsslapd-require-secure-binds: on
```
### Custom Users
```clike title="Jeremy"
User login: jeremy
First name: jeremy
Last name: hager
Home directory: /home/jeremy
Login shell: /bin/sh
Principal name: jeremy@INTERNAL.VIRTNET
//...
Member of groups: sudo-users, ipausers
Indirect Member of Sudo rule: All
```
```clike title="realm-proxy"
User login: realm-proxy
First name: Smart
Last name: Proxy
Home directory: /home/realm-proxy
Login shell: /bin/sh
Principal name: realm-proxy@INTERNAL.VIRTNET
//...
Member of groups: ipausers
Roles: Smart Proxy Host Manager
```
### Custom groups
```clike
  Group name: sudo-users
  Description: Users who can use sudo on any machine
  GID: 1586400006
  Member users: jeremy
  Member of Sudo rule: All
```