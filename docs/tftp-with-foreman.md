---
id: tftp-with-foreman
title: PXE boot using Foreman
sidebar_label: PXE boot using Foreman
---

sudo virt-install --connect qemu:///system \
     --network=bridge:virbr0 \
     -n ubuntu-20.04 \
     -f /home/imgs/ubuntu-20.04.img \
     -r 2048 \
     -s 12 \
     --cdrom=/home/isos/ubuntu-20.04.1-live-server-amd64.iso \
     --accelerate --hvm --graphics vnc \
     --os-type=ubuntu18.04


sudo firewall-cmd --permanent --direct --add-rule ipv4 filter OUTPUT 1 -m state --state ESTABLISHED,RELATED -j ACCEPT