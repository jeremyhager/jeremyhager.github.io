---
id: base-vm-server-setup
title: Base vm server setup
sidebar_label: Base vm server setup
---

### Create a VM
On the hypervisor run the following command:
```bash
sudo virt-install --connect qemu:///system \
     --network=bridge:virbr0 \ #this is the name of the network "switch" to connect to
     --initrd-inject="/home/jeremy/ks.cfg" \ #inject the kickstart file to the vm
     --extra-args="ks=file:/ks.cfg console=ttyS0" \ #boot args: use the kickstart file and connect to the console
     -n $serverName \ #the name of the vm
     -f /home/imgs/$serverName.img \ #location and name of vm image
     -r 1024 \ #startup ram
     -s 12 \ #hard drive size
     --location=/home/isos/CentOS-7-x86_64-DVD-1908.iso \ /#iso location to boot from
     --os-type=centos7.0 \ #os type info
     --accelerate --hvm --graphics none #accelerate: use KVM, hvm: full hardware virtualization, graphics none: no grahpics support
```
:::note
This tutorial assumes ssh has been enabled via the kickstart file.
:::
### Configure VM
#### Update
Once completed, the Anaconda installer should pop up and afterward a login prompt to `localhost`. Login as the user set up in the kickstart file. Next thing to do is update.
```bash
sudo yum -y update
```
#### Change hostname
Change the hostname to something easy to remember and meaningful. For example, if the vm is hosting foreman name it `foreman.internal.virtnet`.
```bash
sudo hostnamectl set-hostname new-hostname.internal.virtnet
```
Give the vm a quick reboot to ensure changes are set:
```bash
sudo halt --reboot
```

#### Set IP address
First, get the interface that the vm is using to communicate externally:
```bash
ip addr
```
_Most likely this will be `eth0`._

Now add the following content to the interface config file (be sure to `sudo`!):
```text title="/etc/sysconfig/network-scripts/ifcfg-eth0"
BOOTPROTO="static" #Switch to static IP
IPADDR=192.168.86.10 #Set the IP address.
NETMASK=255.255.255.0 #Subnet mask
NETWORK=192.168.86.0 #Network ID
GATEWAY=192.168.86.1 #Gateway
BRAODCAST=192.168.1.255 #Broadcast
DNS1=192.168.86.1 #Internal DNS server
DNS2=8.8.8.8 #External DNS server
```

Once the changes are complete, restart the network:
:::caution Heads up!
If you are connected via ssh you will likely loose your connection. Be sure there is a way to access the vm without ssh (eg. using the console on the hypervisor) incase of a malformed network config file.
:::
```bash
sudo systemctl restart network
```

### Wrapping up
You should now have a fully updated vm with the appropriate amount of ram, storage, and cpu power. Along with ssh enabled and a hostname to boot. Specific how-tos can be viewed on the sidebar.