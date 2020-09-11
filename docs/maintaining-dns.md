---
id: maintaining-dns
title: Maintaining DNS
sidebar_label: Maintaining DNS
---
:::info
This guide assumes you've already gone through [setting up BIND](setting-up-bind.md) tutorial.
:::


### Add record in forward lookup zone file:
#### Increment serial
:::caution
Always increase the serial number, it can never decrease.
:::
Serial numbers within the zone files must always be increased after editing.Technically speaking this is done in a master-slave scenario with multiple dns servers. When the change occurs in the master, the slave dns servers will see the serial number has increased and update as well.

```clike title="/var/named/zones/internal.virtnet"
$TTL    604800
@       IN      SOA     dns-dhcp.internal.virtnet. admin.internal.virtnet. (
            2020091010  ; Serial //old value of serial was 2020091000
//rest of config clipped for brevity
```

#### Add A record:
```clike title="/var/named/zones/internal.virtnet"
//beginning of config clipped for brevity
; 192.168.86.0/24 - A records
foreman.internal.virtnet.       IN      A       192.168.86.10
ldap1.internal.virtnet          IN      A       192.168.86.11 //new entry
ldap2.internal.virtnet          IN      A       192.168.86.12 //new entry
```

### Add record in reverse lookup zone file:
#### Increment serial
```clike title="/var/named/zones/86.168.192.rev"
$TTL    604800
@       IN      SOA     internal.virtnet. admin.internal.virtnet. (
            2020091010  ; Serial //old value of serial was 2020091000
//rest of config clipped for brevity
```
```clike title="/var/named/zones/86.168.192.rev"
//beginning of config clipped for brevity
; PTR Records
8       IN      PTR     dns-dhcp.internal.virtnet.      ; 192.168.86.8
10      IN      PTR     foreman.internal.virtnet.       ; 192.168.86.10
11      IN      PTR     ldap1.internal.virtnet.         ; 192.168.86.11
12      IN      PTR     ldap2.internal.virtnet.         ; 192.168.86.12
```

### Reload named
It is possible to restart `named`, however if the server is both authoritative for the zone and recursive for users then restarting `named` will discards cached entries from other domains. As such, it is advisable to use `rdnc reload` to keep the cached entries and update changes.
```bash
sudo rndc reload
```