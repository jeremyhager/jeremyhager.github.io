---
id: base-vm-server-setup
title: Base vm server setup
sidebar_label: Base vm server setup
---

### Create a VM
```bash
sudo virt-install --connect qemu:///system /
     --network=bridge:virbr0 / #this is the name of the network "switch" to connect to
     --initrd-inject="/home/jeremy/ks.cfg" / #inject the kickstart file to the vm
     --extra-args="ks=file:/ks.cfg console=ttyS0" / #boot args: use the kickstart file and connect to the console
     -n $serverName / #the name of the vm
     -f /home/imgs/$serverName.img / #location and name of vm image
     -r 1024 / #startup ram
     -s 12 / #hard drive size
     --location=/home/isos/CentOS-7-x86_64-DVD-1908.iso /#iso location to boot from
     --os-type=centos7.0 /#os type info
     --accelerate --hvm --graphics none #accelerate: use KVM, hvm: full hardware virtualization, graphics none: no grahpics support
```

Once completed, you should see the Anaconda installer and then a login prompt to `localhost`. Login as your user 