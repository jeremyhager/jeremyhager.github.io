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
     --type network \
     --source VMnetwork \
     --model virtio \
     --config
```
### Detach old interface
```bash title="virsh"
destroy dns-dhcp
detach-interface --domain dns-dhcp --type bridge --mac 52:54:00:8a:92:ea --config
```
Start the VM again:
```bash title="virsh"
start dns-dhcp
```

## Troubleshooting
### Setting static IP address for a new interface
You may need to create the interface within `network-scripts/` after adding an interface on the hypervisor. This can be easily scripts, as follows:
```bash title="~/set-new-nic.sh"
#!/bin/bash
#finds name of new interface, creates ifcfg file if need-be, then populates with parameters
interface=`ls /sys/class/net | grep -v lo`
ifcfg_file=`ls /etc/sysconfig/network-scripts | grep ifcfg-$interface`

if [ -z "${ifcfg_file}" ]; then
     echo "==> ifcfg-${interface} does not exist, creating now..."
     read -p "Enter IP address: " ip_addr
     read -p "Enter network mask: " net_mask
     read -p "Enter network ID: " net_work
     read -p "Enter broadcast: " broad_cast
     read -p "Enter gateway: " gate_way
     mac_addr=`ip addr show $interface | awk 'FNR == 2 {print $2}'`

     read -p "Enter DNS server (leave blank for self): " dns_svr
     if [ -z "${dns_svr}" ]; then
          echo "==> Setting DNS server to 127.0.0.1"
          dns_svr="127.0.0.1"
     fi

     tee /etc/sysconfig/network-scripts/ifcfg-$interface << EOF > /dev/null
DEVICE=$interface
HWADDR=$mac_addr
BOOTPROTO=static
ONBOOT="yes"
IPADDR=$ip_addr
NETMASK=$net_mask
NETWORK=$net_work
BROADCAST=$broad_cast
DNS1=$dns_svr
GATEWAY=$gate_way
EOF
echo "==> ifcfg-${interface} has been created."
else
     echo "${ifcfg_file} exists, check the directory /etc/sysconfig/network-scripts"
fi
```
:::tip
The original network-scripts/ifcfg-eth0 file can (and probably should) be deleted.
:::

#### Machine networking may need to be restarted
After setting the IP the machine's network service may need to be restarted once or twice for the IP to take affect.

## Source
- [Add a second NIC for a libvirt guest](https://kashyapc.fedorapeople.org/virt/add-network-card-in-guest.txt)
- [List available NICs](https://superuser.com/a/753582)