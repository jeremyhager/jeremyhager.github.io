---
id: creating-new-network
title: Creating new VM network
sidebar_label: Creating new VM network
---

## Create an the xml for an isolated network:
```bash title="/tmp/VMswitch.xml"
<network>
 <name>VMnetwork</name>
 <bridge name="VMnetwork"/>
 <ip address="172.16.0.1" netmask="255.255.0.0"/>
</network>
```

## Define the new network:
```bash title="virsh"
net-define /tmp/vmswitch.xml
#Network VMnetwork defined from /tmp/vmswitch.xml
net-autostart VMnetwork
#Network VMnetwork marked as autostarted
net-start VMnetwork
#Network VMnetwork started
```

## Change a VM network
### Get current interfaces
```bash title="virsh"
domiflist dns-dhcp
```
### Attach a new interface
```bash
virsh attach-interface \
     --domain dns-dhcp \
     --type bridge \
     --source VMnetwork \
     --model virtio \
     --config --live
```
### Detach old interface
```bash
detach-interface --domain dns-dhcp --type bridge --mac 52:54:00:8a:92:ea --config
```
Reboot the VM so the changes are made:
```bash title="dns-dhcp"
halt
```
```bash title="virsh"
destroy dns-dhcp
start dns-dhcp
```

## Source
- [Add a second NIC for a libvirt guest](https://kashyapc.fedorapeople.org/virt/add-network-card-in-guest.txt)