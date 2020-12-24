---
id: pfsense-router
title: PfSense Router
sidebar_label: PfSense Router
---

## Hardware Info
|Asset     |Capacity     |
|----------|-------------|
|CPU	   |2        	 |
|RAM       |12288 (MiB)  |
|vda       |32GB         |


## OS Info
|Name   | Spec   |
|-------|--------|
|Hostname| router.internal.virtnet|
|WAN IP (vnet0)| 192.168.86.4/24|
|LAN IP (vnet1)|172.16.0.2|
|Kernel | 11.3-STABLE|
|Interfaces| vnet0, vnet1 |
|Automatic updates| False |
|Last updated| 2020-10-8 |
|Users  | admin|
|Snapshot|1602169002| 

## Snapshot info
|Name      |Description    |
|----------|---------------|
|1608682916|(no special snapshot, created 2020-12-22)

## WAN Rules
|Rule   |    Description|
|-------|---------------|
|Pass: TCP/443, 192.168.86.0/24 -> WAN interface|Allow remote management from home LAN|
|Pass: TCP/22, WAN net -> LAN net  |Allow ssh into LAN|
|Pass: ICMP/Echo request, WAN net -> self |Allow ping to firewall from LAN|
