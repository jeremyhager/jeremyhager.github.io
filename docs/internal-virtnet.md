---
id: internal-virtnet-overview
slug: /
title: Internal.Virtnet Overview
sidebar_label: Internal.Virtnet Overview
---

`Internal.VirtNet` is the internal environment used to learn Linux system administration. This page serves as a high-level overview of that environment in the form of a logical diagram.

![](/img/internal-virtnet.svg)

:::tip Image hard to see?
If image is too small to view, open it in a new tab - it also includes links to the relevant docs!
:::

|Machine|fqdn|IP|
|-------|----|--|
|[Hypervisor](centos8-hypervisor.md)|Centos8|192.168.86.6|
|[PfSense](pfsense-router)|router.internal.virtnet|WAN: 192.168.86.4 / LAN: 172.16.0.2|
|[Foreman](Foreman.md)|foreman.internal.virtnet|172.16.0.10|
|[DNS and DHCP](dns-dhcp.md)|dns-dhcp.internal.virtnet|172.16.0.8|
|[LDAP IPA](ldap1-ldap2)|ldap1.internal.virtnet / ldap2.internal.virtnet| 172.16.0.11 / 172.16.0.12|
