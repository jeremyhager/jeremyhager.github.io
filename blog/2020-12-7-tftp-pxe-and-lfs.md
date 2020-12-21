---
title: TFTP/PXE and LFS
author: Jeremy Hager
author_url: https://github.com/jeremyhager/
author_image_url: https://avatars2.githubusercontent.com/u/47301461?s=460&u=05e044dcce4be18b670f9e2c9bda99c511cd4009&v=4
tags: [tftp, foreman, lfs]
description: Setting up TFTP and PXE with Foreman and beginning Linux From Scratch.
---

<img src="/img/lfs.png" width="256"/>

Next in the list of things to do - TFTP - or PXE, if you'd prefer. Plus, I'm starting with Linux From Scratch so I can better understand Linux as a whole.

<!--truncate-->

### TFTP

First, I ended up rebuilding my environment after having a difficult time moving it from one subnet to another. After a few tries to get Foreman set back up, I was able to install the TFTP service on Foreman and now 

### iPerf
I noticed when I tried using tftp to download the ldap VM OS it was running for a very log time. I began to suspect the network drivers had something to do with it and did a little testing on my centos 7 vm using `iperf` to connect to external urls:

|driver |upload  |download|
|-------|--------|--------|
|e1000e |349Kbps |189Kbps |
|e1000  |37.9Mbps|423Kbps |
|rtl8139|33.1Mbps|773Kbps |
|virtio |41.1Mbps|169Mbps |

For whatever reason, I was having a hard time using virtio initially. Running a packet trace on the router showed there were bad checksums in the udp packet when I tried to `ping google.com`. This was the second time I had this issue, only the first time I had the good graces of being able to use a fully-virtualized driver. After searching around the internet on why dns would be an issue for a virtio driver but not rtl8139, I eventually came to the conclusion it was related to the paravirtualization - most likely related to [this thread](https://unix.stackexchange.com/a/584368). Most of the answers came up "it's nothing to worry about", but seeing as DNS just *didn't work* on virtio I swapped to rtil8139. That was until I started testing tftp with Foreman, and noticed an extremely slow download speed. I went back and needed to change the driver. However, that ended up with errors as mentioned above: checksum errors in the packets.

After searching for a while I eventually had my answer: An [open bug from 2015 on FreeBSD](https://bugs.freebsd.org/bugzilla/show_bug.cgi?id=165059) is most likely related, but fortunately there is a workaround. The issue can be caused by pfsense's hardware checksum offload which [needs be disabled](https://docs.netgate.com/pfsense/en/latest/virtualization/virtio.html#disable-hardware-checksum-offloading).

After that, I was able to use the virtio driver on my VMs. Not only that, but it improved the lookup performance of my local DNS server - my guess is that since UDP was failing it would try a UDP lookup but then switch to TCP, which would work after a few tries.