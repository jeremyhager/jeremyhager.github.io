---
id: creating-new-network
title: Creating new VM network
sidebar_label: Creating new VM network
---

Create an the xml for an isolated network:
```bash title="/tmp/VMswitch.xml"
<network>
 <name>VMnetwork</name>
 <bridge name="VMnetwork"/>
 <ip address="172.16.0.1" netmask="255.255.0.0"/>
</network>
```

Define the new network:
```bash title="virsh"
net-define /tmp/vmswitch.xml
#Network VMnetwork defined from /tmp/vmswitch.xml
net-autostart VMnetwork
#Network VMnetwork marked as autostarted
net-start VMnetwork
#Network VMnetwork started
```

Create a new vm with 2 interfaces:
```bash
sudo virt-install --connect qemu:///system \
     --network=bridge:virbr0 \
     --network=bridge:VMnetwork \
     -n router \
     -f /home/imgs/router.img \
     -r 1024 \
     -s 12 \
     --cdrom=/home/isos/pfSense-CE-2.4.5-RELEASE-p1-amd64.iso \
     --os-type=freebsd11.3 \
     --accelerate --hvm --graphics vnc
```

Because the graphics specified will be vnc, this particular method requires some sort of graphical viewer at least for the initial install. For this guide, all install methods were left as default and the machine simply rebooted after install.

Some guessing needed to be involved, but for now WAN and LAN was set as follows:
```text
WAN -> vtnet0
LAN -> vtnet1
```

Run the following commands to disable the packet filter (and allow changes to be made from the "WAN" side):
```bash
8
# starts access to the shell
pfctl -d
# disables packet filter
```

Now log into the WAN interface using the default username and password of pfsense:
```text
admin
pfsense
```
Then enter the following for hostname and domain:
```text
hostname: router
domain: internal.virtnet
```

Set the WAN interface to static:
```text
IP Address: 192.168.86.4
Subnet Mask: 24
Upstream Gateway: 192.168.86.1
```

:::caution Turn off RF1918: Block RFC1918 Private Networks
Make sure to uncheck "Block private networks from entering via WAN, as the WAN interface is within a LAN.
:::

LAN IP:
```text
IP: 172.16.0.2
Subnet Mask: 16
```
Then set the admin password.

Once again it may be necessary to go back to the console and disable the packet filter again.
```bash
pfctl -d
```

Then sign back into the router via the web gui. Finally, allow open access to the gui:
1. System -> Rules -> WAN -> Add
2. Action: Pass
3. Interface: WAN
4. Protocol: TCP
5. Source: Network - 192.168.86.0 /24
6. Destination: WAN Address
7. Destination port range: HTTPS
8. Description (optional): Allow remote management from home LAN
9. Save
10. Apply Changes

:::note
Because the WAN interface is actually within a WAN, thus behind a firewall/router, the above steps were not of a concern. If however this is created with a public IP interface, then an alternative method should be sought.
:::

Finally, renable the packet filter back in the VM console if it hasn't been already:
```bash
pfctl -e
```

Add a rule to allow port 22 from the WAN net to the LAN net. This will allow a device to connect to any server within the VM LAN.

## Sources
- [Using the shell to open pfsense](https://forum.netgate.com/topic/22082/newbie-enable-wan-using-shell/3) <sup>[archive](https://web.archive.org/web/20201005172112if_/https://forum.netgate.com/topic/22082/newbie-enable-wan-using-shell)</sup>
- [Default username and password for pfsense](https://docs.netgate.com/pfsense/en/latest/usermanager/defaults.html?highlight=username)
- [Expose pfsense GUI on WAN](https://docs.netgate.com/pfsense/en/latest/recipes/remote-firewall-administration.html#i-don-t-care-about-security-how-do-i-open-access-to-the-gui)