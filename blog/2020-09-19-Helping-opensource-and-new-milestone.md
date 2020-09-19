---
title: Helping open source projects and a new milestone
author: Jeremy Hager
author_url: https://github.com/jeremyhager/
author_image_url: https://avatars2.githubusercontent.com/u/47301461?s=460&u=05e044dcce4be18b670f9e2c9bda99c511cd4009&v=4
tags: [named, dhcpd, Libvirt]
description: Setting up named and dhcpd, troubleshooting libvirt and pxe, helping out open-source projects
---

I've been busy! I created a new vm, [dns-dhcp](/docs/dns-dhcp) which will serve my dns and dhcp for the `internal.virtnet` environment. I configured dhcp to only hand out addresses to libvirt vms (they all start with `52:54:00`), and I've spent a few hours a day trying to find out why pxe boot wasn't working on libvirt.

<!--truncate-->

### DNS-DHCP
The vm [dns-dhcp](/docs/dns-dhcp) was relatively easy to set up. The Digital Ocean guide combined with the sysadmin guide book was a great combination of resources that helped me get dns set up correctly. I also did have some help from 

### New milestone
Up until the point of pxe, I've actually already done most of the things here once a few months back in some form or another. I set up ESXi on my machine that is now running Libvirt on CentOS 8, I set up Spacewalk and imported errata, I got dhcp and dns set up as well. I was just about to reach pxe booting when  took a step away from it all for a little while and focused on some other things for a while.

For me, this is significant because from here on out it'll all be brand-new. I suppose now would be a good time to reflect on the long-term goals for this. The [guides](/docs/nixadmin-guide) category includes a few how-tos without a lot of information. My _hope_ is to have some passing familiarity with all of it. As for the long-term goal of the Linux Sysadmin Main Guide:
- Finish the Main Guide
- Integrate the on-prem vms with AWS
- Do it all again, but with Docker and Terraform

Sounds redundant but my hope with all of this will be to learn the basics of Linux, then utilizing AWS for cloud-type vms, finally learn all about containers and infrastructure as a code. It's a big goal, but one that I think is important so I learn, re-learn, and learn everything I can about open source enterprise.