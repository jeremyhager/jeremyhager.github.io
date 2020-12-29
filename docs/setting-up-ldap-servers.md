---
id: setting-up-ldap-servers
title: Setting up ldap servers
sidebar_label: Setting up ldap servers
---

Now that Foreman is set up to provision hosts and DHCP is pointed to the Foreman server, it's time to set up the ldap servers.
## Create hosts on Foreman
```bash title="ldap1"
hammer host create \
        --name "ldap1.internal.virtnet" \
        --hostgroup "centos7-group" \
        --interface "type=interface,mac=52:54:00:00:00:11,ip=172.16.0.11,managed=true,primary=true,provision=true" \
        --location "Default Location"
```
```bash title="ldap2"
hammer host create \
        --name "ldap2.internal.virtnet" \
        --hostgroup "centos7-group" \
        --interface "type=interface,mac=52:54:00:00:00:12,ip=172.16.0.12,managed=true,primary=true,provision=true" \
        --location "Default Location"
```

## Creating ldap VMs
:::note
By default the kickstart file has created only the root account. After setting up ldap the root account will be disabled.
:::
First create the 2 servers on the hypervisor:

```bash title="ldap1"
sudo virt-install --connect qemu:///system \
    --network=bridge:VMnetwork,mac=52:54:00:00:00:11 \
    -n ldap1 \
    -f /home/imgs/ldap1.img \
    -r 2048 \
    -s 12 \
    --pxe \
    --noautoconsole \
    --os-type=centos7.0 \
    --accelerate --hvm --vnc
```
```bash title="ldap2"
sudo virt-install --connect qemu:///system \
    --network=bridge:VMnetwork,mac=52:54:00:00:00:12 \
    -n ldap2 \
    -f /home/imgs/ldap2.img \
    -r 2048 \
    -s 12 \
    --pxe \
    --noautoconsole \
    --os-type=centos7.0 \
    --accelerate --hvm --vnc
```


## On ldap1 and ldap2
### Open ports
```bash title="ldap services"
firewall-cmd --add-service=freeipa-ldap --add-service=freeipa-ldaps
firewall-cmd --add-service=freeipa-ldap --add-service=freeipa-ldaps --permanent
```
### Install freeipa:
```bash
yum -y install freeipa-server
```
## On ldap1
### Configure Freeipa using interactive mode
```bash
ipa-server-install
```
|Questions|Answers|
|---------|-------|
|Configure BIND?| No|
|Server hostname| \[ldap1.internal.virtnet\] \[ENTER\]|
|Confirm domain | \[internal.virtnet\] \[Enter\]|
|Confirm realm  | \[INTERNAL.VIRTNET\] \[Enter\]|
|Directory Manager password| Super secure password|
|IPA admin password| Also secure password|
|Continue to configure the system with these values?| yes|

### Import records to dns server

Next cat the db file and copy the output into the main zone lookup file on the dns server:

```bash title="ldap1 server"
cat /tmp/ipa.system.records._SwtPx.db
```

Then copy+paste that into the dns-dhcp server:
```bash title="/var/named/zones/internal.virtnet"
$TTL    604800
@       IN      SOA     dns-dhcp.internal.virtnet. admin.internal.virtnet. (
#...
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

```text
The ipa-client-install command was successful

Please add records in this file to your DNS system: /tmp/ipa.system.records._SwtPx.db
==============================================================================
Setup complete

Next steps:
        1. You must make sure these network ports are open:
                TCP Ports:
                  * 80, 443: HTTP/HTTPS
                  * 389, 636: LDAP/LDAPS
                  * 88, 464: kerberos
                UDP Ports:
                  * 88, 464: kerberos
                  * 123: ntp

        2. You can now obtain a kerberos ticket using the command: 'kinit admin'
           This ticket will allow you to use the IPA tools (e.g., ipa user-add)
           and the web user interface.

Be sure to back up the CA certificates stored in /root/cacert.p12
These files are required to create replicas. The password for these
files is the Directory Manager passwordmy 
```
## Enroll ldap2
### On ldap2
Now that ldap1 is the master ldap server, join the ldap2 as a client to the domain:
```bash
ipa-client-install --domain=internal.virtnet --realm=INTERNAL.VIRTNET --server=ldap1.internal.virtnet
```

|Questions|Answers|
|---------|-------|
|Proceed with fixed values and no DNS discovery? [no]:| yes|
|Continue to configure the system with these values? [no]| yes|
|User authorized to enroll computers: | admin|
|Password for admin@INTERNAL.VIRTNET:| \[admin password\]|

```text title="expected output"
Successfully retrieved CA cert
    Subject:     CN=Certificate Authority,O=INTERNAL.VIRTNET
    Issuer:      CN=Certificate Authority,O=INTERNAL.VIRTNET
    Valid From:  2020-12-19 00:23:18
    Valid Until: 2040-12-19 00:23:18

Enrolled in IPA realm INTERNAL.VIRTNET

...
```
### On ldap1
Authenticate as admin and add ldap2 as a member of the `ipaservers` group:
```bash
kinit admin
```
```bash
ipa hostgroup-add-member ipaservers --hosts ldap2.internal.virtnet
```
```text title="expected output"
Host-group: ipaservers
  Description: IPA server hosts
  Member hosts: ldap1.internal.virtnet, ldap2.internal.virtnet
-------------------------
Number of members added 1
-------------------------
```
Confirm both the group and severs show up with the following commands:
```bash
ipa hostgroup-find
ipa host-find --in-hostgroups=ipaservers
```
### On ldap2
Once successfully added, run the following command to add ldap2 as a replica:
```bash
ipa-replica-install
```
Finally, run `ipa-ca-install` as recommended:
```bash
ipa-ca-install
```
:::note
This will require the directory manager's password. Additionally, this will take some time.
:::

## Sources
- [freeipa replica setup](https://www.freeipa.org/page/V4/Replica_Setup)