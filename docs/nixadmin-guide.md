---
id: nixadmin-guide
title: Linux Sysadmin Main Guide
sidebar_label: Linux Sysadmin Main Guide
---


## Main Guide

:::info
This will be used as the main guide, however the other guides in Docs/Guides will be used as reference and to double-check what I'm learning.
:::

1) Set up a KVM hypervisor.  
[![img](https://img.shields.io/badge/Status-Completed-brightgreen)](centos8-hypervisor.md)


2) Inside of that KVM hypervisor, install a ~~Spacewalk~~ **Foreman** server. Use CentOS ~~6~~ **7** as the distro for all work below. (For bonus points, set up errata importation on the CentOS channels, so you can properly see security update advisory information.).  
![img](https://img.shields.io/badge/Status-In%20Progress-blueviolet)

3) Create a VM to provide named and dhcpd service to your entire environment. Set up the dhcp daemon to use the ~~Spacewalk~~ **Foreman** server as the pxeboot machine (thus allowing you to use Cobbler to do unattended OS installs). Make sure that every forward zone you create has a reverse zone associated with it. Use something like "internal.virtnet" (but not ".local") as your internal DNS zone.  
![img](https://img.shields.io/badge/Status-Not%20Started-lightgrey) 

4) Use that ~~Spacewalk~~ **Foreman** server to automatically (without touching it) install a new pair of OS instances, with which you will then create a Master/Master pair of LDAP servers. Make sure they register with the ~~Spacewalk~~ **Foreman** server. Do not allow anonymous bind, do not use unencrypted LDAP.  
![img](https://img.shields.io/badge/Status-Not%20Started-lightgrey) 

5) Reconfigure all 3 servers to use LDAP authentication. _(use `freeipa`)_  
![img](https://img.shields.io/badge/Status-Not%20Started-lightgrey) 

6) Create two new VMs, again unattendedly, which will then be Postgresql VMs. Use pgpool-II to set up master/master replication between them. Export the database from your ~~Spacewalk~~ **Foreman** server and import it into the new pgsql cluster. Reconfigure your ~~Spacewalk~~ **Foreman** instance to run off of that server.  
![img](https://img.shields.io/badge/Status-Not%20Started-lightgrey) 

7) Set up a Puppet Master. Plug it into the ~~Spacewalk~~ **Foreman** server for identifying the inventory it will need to work with. (Cheat and use ansible for deployment purposes, again plugging into the ~~Spacewalk~~ **Foreman** server.)    
![img](https://img.shields.io/badge/Status-Not%20Started-lightgrey) 

8) Deploy another VM. Install iscsitgt and nfs-kernel-server on it. Export a LUN and an NFS share.  
![img](https://img.shields.io/badge/Status-Not%20Started-lightgrey) 

9) Deploy another VM. Install bacula on it, using the postgresql cluster to store its database. Register each machine on it, storing to flatfile. Store the bacula VM's image on the iscsi LUN, and every other machine on the NFS share.  
![img](https://img.shields.io/badge/Status-Not%20Started-lightgrey) 

10) Deploy two more VMs. These will have httpd (Apache2) on them. Leave essentially default for now.  
![img](https://img.shields.io/badge/Status-Not%20Started-lightgrey) 

11) Deploy two more VMs. These will have tomcat on them. Use JBoss Cache to replicate the session caches between them. Use the httpd servers as the frontends for this. The application you will run is JBoss Wiki.  
![img](https://img.shields.io/badge/Status-Not%20Started-lightgrey) 

12) You guessed right, deploy another VM. This will do iptables-based NAT/round-robin loadbalancing between the two httpd servers.  
![img](https://img.shields.io/badge/Status-Not%20Started-lightgrey) 

13) Deploy another VM. On this VM, install postfix. Set it up to use a gmail account to allow you to have it send emails, and receive messages only from your internal network.  
![img](https://img.shields.io/badge/Status-Not%20Started-lightgrey) 

14) Deploy another VM. On this VM, set up a Nagios server. Have it use snmp to monitor the communication state of every relevant service involved above. This means doing a "is the right port open" check, and a "I got the right kind of response" check and "We still have filesystem space free" check.  
![img](https://img.shields.io/badge/Status-Not%20Started-lightgrey) 

15) Deploy another VM. On this VM, set up a syslog daemon to listen to every other server's input. Reconfigure each other server to send their logging output to various files on the syslog server. (For extra credit, set up logstash or kibana or greylog to parse those logs.) _(use elk stack)_  
![img](https://img.shields.io/badge/Status-Not%20Started-lightgrey) 

16) Document every last step you did in getting to this point in your brand new Wiki.  
![img](https://img.shields.io/badge/Status-Not%20Started-lightgrey) 

17) Now go back and create Puppet Manifests to ensure that every last one of these machines is authenticating to the LDAP servers, registered to the ~~Spacewalk~~ **Foreman** server, and backed up by the bacula server.  
![img](https://img.shields.io/badge/Status-Not%20Started-lightgrey) 

18) Now go back, reference your documents, and set up a Puppet Razor profile that hooks into each of these things to allow you to recreate, from scratch, each individual server.  
![img](https://img.shields.io/badge/Status-Not%20Started-lightgrey) 

19) Destroy every secondary machine you've created and use the above profile to recreate them, joining them to the clusters as needed.  
![img](https://img.shields.io/badge/Status-Not%20Started-lightgrey) 

20) Bonus exercise: create three more VMs. A CentOS ~~5, 6, and 7~~ **6, 7, 8** machine. On each of these machines, set them up to allow you to create custom RPMs and import them into the ~~Spacewalk~~ **Foreman** server instance. Ensure your Puppet configurations work for all three and produce like-for-like behaviors.  
![img](https://img.shields.io/badge/Status-Not%20Started-lightgrey) 

### Extra-extra Credit
Get Foreman to work with Chef



### Sources
The original source of this has been modified to include a Foreman server, using freeipa for LDAP, and elk stack for central logs.

- [original source](https://old.reddit.com/r/linuxadmin/comments/2s924h/how_did_you_get_your_start/cnnw1ma/?context=3)
- [modified source](https://old.reddit.com/r/linuxadmin/comments/8wvowf/update_on_uiconrad_list_for_2018/e1zpwfv/)