---
id: postgres-setup
title: Postgresql setup
sidebar_label: Postgres setup
---

## Refresh build token
On the foreman server run the following:
```bash
hammer host update --build false --id 'postgresql1.internal.virtnet'
hammer host update --build false --id 'postgresql2.internal.virtnet'
hammer host update --build true --id 'postgresql1.internal.virtnet'
hammer host update --build true --id 'postgresql2.internal.virtnet'
```
## Create postgresql VMs
On the hypervisor, run the following commands:

```bash title="postgresql1"
sudo virt-install --connect qemu:///system \
    --network=bridge:VMnetwork,mac=52:54:00:00:00:13 \
    -n postgresql1 \
    -f /home/imgs/postgresql1.img \
    -r 2048 \
    -s 32 \
    --pxe \
    --noautoconsole \
    --os-type=centos7.0 \
    --accelerate --hvm --vnc
```
```bash title="postgresql2"
sudo virt-install --connect qemu:///system \
    --network=bridge:VMnetwork,mac=52:54:00:00:00:14 \
    -n postgresql2 \
    -f /home/imgs/postgresql2.img \
    -r 2048 \
    -s 32 \
    --pxe \
    --noautoconsole \
    --os-type=centos7.0 \
    --accelerate --hvm --vnc
```