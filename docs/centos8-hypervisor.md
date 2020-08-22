---
id: centos8-hypervisor
title: Hypervisor Configuration
sidebar_label: Hypervisor Configuration
image: https://i.imgur.com/mErPwqL.png
---

## Hardware Info

|Asset     |Capacity     |Product ID| 
|----------|-------------|----------|
|CPU	   |6,12    	 |[i5-10400](https://ark.intel.com/content/www/us/en/ark/products/199271/intel-core-i5-10400-processor-12m-cache-up-to-4-30-ghz.html)          |
|RAM       |32GB         |[CMW32GX4M2C3200C16](https://www.corsair.com/us/en/Categories/Products/Memory/Vengeance-PRO-RGB-Black/p/CMW32GX4M2C3200C16)	    |
|Motherboard|128GB RAM   |[PRIME-Z490M-PLUS](https://www.asus.com/us/Motherboards/PRIME-Z490M-PLUS/)	    |
|sda; `/`,`/boot`,`/boot/efi`,`[swap]`| 256GB| PDF! [ASP900S3-256GM-C](https://www.adata.com/upload/downloadfile/Datasheet_SP900-EN-20150213.pdf) |
|sdb; `/home` |1TB	 |[MZ-75E1T0B/AM](https://www.samsung.com/us/computing/memory-storage/solid-state-drives/ssd-850-evo-2-5-sata-iii-1tb-mz-75e1t0b-am/)   |
|PCIe NIC  | single-port 1GB| [I210T1](https://ark.intel.com/content/www/us/en/ark/products/68668/intel-ethernet-server-adapter-i210-t1.html)|
|CPU Cooler| Single Fan | [RR-212S-20PK-R1](https://www.coolermaster.com/catalog/coolers/cpu-air-coolers/hyper-212-black-edition/)
|Case | Micro ATX Mini Tower |[FD-CA-MESH-C-MINI-BKO-TGD](https://www.fractal-design.com/products/cases/meshify/meshify-c-mini-dark-tempered-glass/black/)|

## OS Info

|Name   | Spec   |
|-------|--------|
|Hostname| centos8|
|IP address| DHCP|
|Kernel | 4.18.0-193.14.2.el8_2.x86_64|
|Release|CentOS Linux release 8.2.2004 (Core)|
|Firewall services| cockpit dhcpv6-client ssh|
|Interfaces| enp2s0, virbr0 (main) |
|Automatic updates| False |
|Last updated| 2020-08-19 |
|Users  | jeremy, root (disabled)|

## Package Info
|Name   | Spec   |
|-------|--------|
|Libvirt|4.5.0|
|cockpit|211.3-1.el8|
|rsync|3.1.3-7.el8.x86_64|