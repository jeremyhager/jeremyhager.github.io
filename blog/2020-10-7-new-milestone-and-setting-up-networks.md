---
title: New milestone and setting up networks
author: Jeremy Hager
author_url: https://github.com/jeremyhager/
author_image_url: https://avatars2.githubusercontent.com/u/47301461?s=460&u=05e044dcce4be18b670f9e2c9bda99c511cd4009&v=4
tags: [named, dhcpd, Libvirt]
description: Setting up named and dhcpd, troubleshooting libvirt and pxe, and setting up a network for libvirt.
---
<img src="/img/here-there-be-dragons.png" width="256"/>

I've been busy! I created a new vm, [dns-dhcp](/docs/dns-dhcp) which will serve my dns and dhcp for the `internal.virtnet` environment. I configured dhcp to only hand out addresses to libvirt vms (they all start with `52:54:00`), I've spent a few hours a day trying to find out why pxe boot wasn't working on libvirt, and finally realized I had to create a new network for my environment.

This post will be a bit longer than my typical blog posts, as it is a culmination of the last few weeks.

<!--truncate-->

### DNS-DHCP
The vm [dns-dhcp](/docs/dns-dhcp) was relatively easy to set up. The Digital Ocean guide combined with the sysadmin guide book was a great combination of resources that helped me get dns set up correctly. I also did have some help from the last time I set up DNS and DHCP, so I wasn't completely out on my own. Fortunately I had already done the difficult work of figuring out how filters work in dhcpd already, so I copied a bit from my work previously. After I set everything up, all checked were completed and it seemed like it would hand out addresses just fine. But as you will see later on in this post, I probably didn't need to be as concerned with it.

### PXE and libvirt
I spent a long time trying to understand why my VMs weren't getting a PXE boot - not just a PXE _response_ but just booting to PXE. When I originally was creating VMs I expected to boot to PXE right away, per the command I was running:
```bash {7}
sudo virt-install --connect qemu:///system \
    --network=bridge:virbr0 \
    -n ldap1 \
    -f /home/imgs/ldap1.img \
    -r 1024 \
    -s 12 \
    --pxe \
    --os-type=centos7.0 \
    --accelerate --hvm --graphics none
```
The `-pxe` flag should force the vm to boot to pxe, but the only response I was able to find was the following:
```text
Starting install...
Allocating 'ldap1.img'                                      |  12 GB  00:00:00  
Connected to domain ldap1
Escape character is ^]
```
And as if I had no connection to the console, nothing further was done. I then went to check the log:

```bash title="tail ~/.cache/virt-manager/virt-install.log"
File "/usr/share/virt-manager/virtinst/install/installer.py", line 491, in _create_guest
    domain = self.conn.createXML(install_xml or final_xml, 0)
  File "/usr/lib64/python3.6/site-packages/libvirt.py", line 3725, in createXML
    if ret is None:raise libvirtError('virDomainCreateXML() failed', conn=self)
libvirt.libvirtError: error creating macvtap interface macvtap0@enp2s0 (52:54:00:46:89:a3): Device or resource busy
[Thu, 17 Sep 2020 07:58:38 virt-install 27264] DEBUG (installer:566) Removing created disk path=/var/lib/libvirt/images/ldap1.qcow2 vol_object=<libvirt.virStorageVol object at 0x7f9c813e9c88>
[Thu, 17 Sep 2020 07:58:38 virt-install 27264] DEBUG (cli:278) Domain installation does not appear to have been successful.
If it was, you can restart your domain by running:
  virsh --connect qemu:///system start ldap1
otherwise, please restart your installation.
```
However the timestamps were earlier in the morning than when I was trying to PXE boot, so I didn't believe it was too relevant. So I tried a few other things:
- Checked dhcp and dhcpd server, neither indicated the VM had contacted one
- Tested in cockpit by creating a new VM, which gave the following message:  
`Network selection does not support pxe boot`
- Tested using the `enp2s0` active bridge interface, even though Cockpit specified it wouldn't work.
  - I found someone else trying something similar and [suggested a different interface](https://github.com/cockpit-project/cockpit/pull/11179#issuecomment-464080955). It did not work for me though.

Finally I posted to Reddit after exhausting all what felt like my options simply to just get a _prompt_, I wasn't even trying to _contact_ the PXE server at this point. It was suggested to try `virt-manager`, which I was trying to avoid in an effort to only use the terminal. However, I must admit that after using it I was able to figure out what was going on.

I began by trying to create a new vm from scratch via the gui, but ran into the same issue as before where selecting the default network would not work. I did have a few more options which I didn't see when I was using cockpit. I then found an [irc log from ubuntu](https://irclogs.ubuntu.com/2016/09/13/%23maas.html#t13:54) discussing a very similar issue. The suggestion was to check the xml of the vm, and I did so - then I started to connect a few dots. The irc xml was for the `default` network, but I had disabled that nic and replaced it with the bridge `virbr0`. There were more options in virt-manager as well. I then decided to try to connect the VM to another interface by specifying the shared device name and typing in "virbr0", and setting the device model to "Hypervisor Default", which defaulted to `rtl8139`. Once completed, a quick reboot later, I got a PXE prompt! I still was getting a DHCP lease from my home router instead of the dns-dhcp VM, so I had to sort that out next.

### New milestone
Up until the point of pxe, I've actually already done most of the things here once a few months back in some form or another. I set up ESXi on my machine that is now running Libvirt on CentOS 8, I set up Spacewalk and imported errata, I got dhcp and dns set up as well. I was just about to reach pxe booting when  took a step away from it all for a little while and focused on some other things for a while. For me, this is significant because from here on out it'll all be brand-new. 

### Creating a new network
As I indicated in the dns-dhcp above, it may have not been as necessary for me to filter MAC addresses for DHCP leases. I began to realize that things would be much easier to administer if I had a separate network for my VM infrastructure. The catalyst for this was dhcp.

Once I started to try and fail at creating a PXE server, or at least get a dhcp address from the dhcp server, I realized it would be difficult to block my home router from handing out addresses first. Normally, routers and modems may come with some sort of advanced option to filter by MAC addresses or perhaps block certain MAC addresses from requesting leases in the first place. But the router I purchased I intended to be as simple and easy as possible - a Google wifi router. It works perfectly in that I can easily connect it and forget about it, but if I want to do anything more advanced it starts to lack in functionality. The VM I set up to test was an ubuntu server VM, I figured I would give it a quick install and try for being the test subject.

I began by creating a new network which was completely isolated from the home LAN . The ubuntu server VM would act as the client, and I created a CentOS 7 VM to act as the router. The router had connections on both interfaces and ubuntu's interface was connected to the internal `VMnetwork` to test DHCP by changing the xml in virsh. My goal at this point wasn't DHCP, but just to get routing to work on the network. The trouble I was having is that even though routes were set, and interfaces were configured, and icmp was enabled, I could not reach the outside world from the ubuntu VM. I had static settings on everything but I couldn't ping from the router to the ubuntu server, nor the other way around. After a long time of fiddling with firewalld, routes, and everything else I could think of I decided to create a pfsense VM in place of the CentOS 7 router I created. I got pfsense set up correctly and made sure icmp was enabled, then tried ping from/to the ubuntu VM. It still did not work.

From everything I was seeing, I should have been able to at least ping from the LAN interface of pfsense to the ubuntu VM as they were both on the same network. Even if there was some sort of odd isolation virsh was doing that I was unaware of, pinging internally should have at least worked. I went into cockpit again and looked at the network I created to see if there was something I was missing from the terminal. I then switched over to the VM, looked at network interfaces, and there it was: my ubuntu VM was connected to `virbr0`, the bridge interface. It was not connected to the isolated VMnetwork.

I once again switched the networks, only using the GUI this time, and noticed a checkbox "Persistence - Always Attach" was unchecked by default. My assumption at this point is that virsh must have that also had something similar going on, and that after several reboots and network restarts I must have defaulted back to the bridge interface. Once I confirmed the VMnetwork would stick after rebooting the VM, I went back and changed the routes and set the IP to the new interface (no longer `ens1`, but now `ens2`). After that, ping worked! I then pinged an external IP and that worked as well! Finally, after adding dns, I pinged google.com and was able to resolve. The final test was using `apt update`, and I was able to update.

### Future plans

I suppose now would be a good time to reflect on the long-term goals for this project. The [guides](/docs/nixadmin-guide) category includes a few how-tos without a lot of information. My _hope_ is to have some passing familiarity with all of it. As for the long-term goal of the Linux Sysadmin Main Guide:
- Finish the Main Guide
- Integrate the on-prem vms with AWS, possibly with Linode and/or Digital Ocean as well.
- Do it all again, but with Docker,Kubernetes, and Terraform

Sounds redundant but my hope with all of this will be to learn the basics of Linux, then utilizing AWS for cloud-type vms, finally learn all about containers and infrastructure as a code. It's a big goal, but one that I think is important so I can learn, re-learn, and learn everything I can about open source enterprise.