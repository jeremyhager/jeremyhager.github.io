---
id: postgres-prereqs
title: Postgresql prerequisites
sidebar_label: Postgres prerequisites
---
```json
        {
          type: 'category',
          label: 'Postgresql',
          items: [
            'postgres-prereqs',
            'postgres-pgpool-install',
            'postgres-migration',
            'pgpool-II-setup',
          ],
        },
```


## Set up pgpool-II and postgresql repo on Foreman
Similar to [before](configuring-foreman-terminal) we'll need to add the pgpool repo to Foreman:
### Download GPG key
```bash
wget https://www.pgpool.net/yum/RPM-GPG-KEY-PGPOOL2
wget https://ftp.postgresql.org/pub/repos/yum/RPM-GPG-KEY-PGDG-12
```
### Store GPG to Foreman
```bash
hammer content-credentials create --content-type gpg_key --key "RPM-GPG-KEY-PGPOOL2" --name "RPM-GPG-KEY-PGPOOL2"
hammer content-credentials create --content-type gpg_key --key "RPM-GPG-KEY-PGDG-12" --name "RPM-GPG-KEY-PGDG-12"
```
### Create repo
```bash title="pgpool-II"
hammer repository create --product "CentOS 7" --name "pgpool_x86_64" --content-type "yum" --download-policy "on_demand" --gpg-key "RPM-GPG-KEY-PGPOOL2" --url "https://www.pgpool.net/yum/rpms/4.2/redhat/rhel-7-x86_64/" --mirror-on-sync "no"
```
```bash title="postgresql-12"
hammer repository create --product "CentOS 7" --name "postgresql-12_x86_64" --content-type "yum" --download-policy "on_demand" --gpg-key "RPM-GPG-KEY-PGDG-12" --url "https://ftp.postgresql.org/pub/repos/yum/12/redhat/rhel-7Server-x86_64/" --mirror-on-sync "no"
```
## Sync Foreman repo
```bash title="pgpool-II"
hammer repository synchronize --product "CentOS 7" --name "pgpool_x86_64"
```
```bash title="postgresql-12"
hammer repository synchronize --product "CentOS 7" --name "postgresql-12_x86_64"
```

## Add to content view
```bash title="pgpool-II"
hammer content-view add-repository \
  --name "CentOS 7 Content" \
  --product "CentOS 7" \
  --repository "pgpool_x86_64"
```
```bash title="postgresql-12"
hammer content-view add-repository \
  --name "CentOS 7 Content" \
  --product "CentOS 7" \
  --repository "postgresql-12_x86_64"
```
### Publish content view
```bash
hammer content-view publish --id 2 --major 1 --minor 1 --description "Added pgpool-II, postgresql-12, and mongodb"
```
### Promote new version
```bash
hammer content-view version promote --content-view "CentOS 7 Content" --version "1.1" --to-lifecycle-environment "stable"
```

## Create hosts on Foreman
```bash title="postgresql1"
hammer host create \
        --name "postgresql1.internal.virtnet" \
        --hostgroup "centos7-group" \
        --interface "type=interface,mac=52:54:00:00:00:13,ip=172.16.0.13,managed=true,primary=true,provision=true" \
        --location "Default Location"
```
```bash title="postgresql2"
hammer host create \
        --name "postgresql2.internal.virtnet" \
        --hostgroup "centos7-group" \
        --interface "type=interface,mac=52:54:00:00:00:14,ip=172.16.0.14,managed=true,primary=true,provision=true" \
        --location "Default Location"
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

## Troubleshooting
### Content view version
It may be necessary to find the current/new version of the content view. Run the following to get the new version assuming the content-view id is `2`:
```bash
hammer content-view info --id 2
```
```text title="expected output" {7,8}
...
Versions:
 1) ID:        2
    Version:   1.0
    Published: 2020/12/17 16:44:25
 2) ID:        3
    Version:   2.0
    Published: 2020/12/26 06:07:16

...
```

Above can be seen the output above, the version is `2.0` and was published later. In this case we'll need to publish version `2.0`.

## Source
- [Installing pgpool-II using rpms](https://www.pgpool.net/docs/latest/en/html/install-rpm.html)