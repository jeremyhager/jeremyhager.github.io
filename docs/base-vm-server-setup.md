---
id: base-vm-server-setup
title: Base vm server setup
sidebar_label: Base vm server setup
---

## Create a VM
On the hypervisor run the following command:
```bash
sudo virt-install --connect qemu:///system \
     --network=bridge:VMnetwork \
     --initrd-inject="/home/jeremy/ks.cfg" \
     --extra-args="ks=file:/ks.cfg console=ttyS0" \
     -n $serverName \
     -f /home/imgs/$serverName.img \
     -r 1024 \
     -s 12 \
     --location=/home/isos/CentOS-7-x86_64-DVD-1908.iso \
     --os-type=centos7.0 \
     --accelerate --hvm --graphics none
```
:::note
This tutorial assumes ssh has been enabled via the kickstart file.
:::
## Configure VM

### Change hostname
Change the hostname to something easy to remember and meaningful. For example, if the vm is hosting foreman name it `foreman.internal.virtnet`.
```bash
sudo hostnamectl set-hostname new-hostname.internal.virtnet
```
Give the vm a quick reboot to ensure changes are set:
```bash
sudo halt --reboot
```

### Set IP address
First, get the interface that the vm is using to communicate externally:
```bash
ip addr
```
_Most likely this will be `eth0`._

Now add the following content to the interface config file (be sure to `sudo`!):
```text title="/etc/sysconfig/network-scripts/ifcfg-eth0"
BOOTPROTO="static" #Switch to static IP
IPADDR=172.16.0.10 #Set the IP address.
NETMASK=255.255.0.0 #Subnet mask
NETWORK=172.16.0.0 #Network ID
GATEWAY=172.16.0.2 #Gateway
BROADCAST=172.16.255.255 #Broadcast
DNS1=172.16.0.8 #Internal DNS server
DNS2=8.8.8.8 #External DNS server
```

Once the changes are complete, restart the network:
:::caution Heads up!
If you are connected via ssh you will likely loose your connection. Be sure there is a way to access the vm without ssh (eg. using the console on the hypervisor) incase of a malformed network config file.
:::
```bash
sudo systemctl restart network
```

Finally, update the VM:
```bash
sudo yum -y update
```

## Wrapping up
You should now have a fully updated vm with the appropriate amount of ram, storage, and cpu power. Along with ssh enabled and a hostname to boot. Specific how-tos can be viewed on the sidebar.

## Troubleshooting
### Expanding memory
Shutdown VM, edit xml, then start:
```bash title="virsh"
shutdown foreman
edit foreman
# old value
<memory unit='MiB'>1024</memory>
<currentMemory unit='KiB'>1048576</currentMemory>
# new value
<memory unit='MiB'>8192</memory>
#delete <currentMemory unit='KiB'>1048576</currentMemory>
#save
start foreman
```
### Expanding storage
Shutdown VM and list the volumes for the vm:
```bash title="virsh"
shutdown foreman
domblklist foreman
```
use `qemu-img` to resize:
```bash
#set the size
sudo qemu-img resize /home/imgs/foreman.img 32G
```
Start the VM back up:
```bash title="virsh"
#check the command worked
domblkinfo foreman vda --human
start foreman
```
<!--
Expand the storage within the VM:
```bash title="foreman"
#get storage mount point info
lsblk
sudo fdisk /dev/vda
p
d
#(select default, eg. 3)
n
p
#(select default, eg. 3)
#(enter sector number from earlier p command, eg.: 10487808 - this should be default/enter anyway)
#hit enter for last sector
t
#(select default, eg. 3)
8e
w
```
Check the size of vda has expanded:
```bash title="" {4}
lsblk
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sr0     11:0    1 1024M  0 rom
vda    253:0    0   32G  0 disk
├─vda1 253:1    0    4G  0 part /
├─vda2 253:2    0    1G  0 part [SWAP]
└─vda3 253:3    0    7G  0 part /var
```
-->