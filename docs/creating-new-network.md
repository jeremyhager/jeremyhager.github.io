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
     --initrd-inject="/home/jeremy/ks.cfg" \
     --extra-args="ks=file:/ks.cfg console=ttyS0" \
     -n router \
     -f /home/imgs/router.img \
     -r 1024 \
     -s 12 \
     --location=/home/isos/CentOS-7-x86_64-DVD-1908.iso \
     --os-type=centos7.0 \
     --accelerate --hvm --graphics none
```

Set the IP on the new interface (in this case, eth1):
```bash title="/etc/sysconfig/network-scripts/ifcfg-eth1"
BOOTPROTO="static"
IPADDR=192.168.86.10
NETMASK=255.255.255.0
NETWORK=192.168.86.0
GATEWAY=192.168.86.1
BRAODCAST=192.168.1.255
DNS1=192.168.86.1
DNS2=8.8.8.8
```