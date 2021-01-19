---
id: foreman-content-keys-backup
title: Content views, activation keys, and backing up Foreman
sidebar_label: Content views, activation keys, and backing up
---
## Content views
### Create content view
```bash
hammer content-view create --name "CentOS 7 Content"
```
### Add repos to content view
```bash
for i in $(seq 1 4); do \
  hammer content-view add-repository \
  --name "CentOS 7 Content" \
  --product "CentOS 7" \
  --repository-id "$i"; \
  done
```
### Create lifecycle environment
```bash
hammer lifecycle-environment create --name "stable" --label "stable" --prior "Library"
```
### Publish content view
```bash
hammer content-view publish --name "CentOS 7 Content"
```
:::note
It may take a bit to publish the content view.
:::

## Promote version to lifecycle environment
```bash
hammer content-view version promote --content-view "CentOS 7 Content" --version "1.0" --to-lifecycle-environment "stable"
```
## Activation keys
### Create an activation key
```bash
hammer activation-key create --name "centos7-key" --description "Key to use with CentOS 7" --lifecycle-environment "stable" --content-view "CentOS 7 Content" --unlimited-hosts
```
### Add subscription to activation key
```bash
hammer activation-key add-subscription --name "centos7-key" --quantity "1" --subscription-id "1"
```

## Backup database
:::caution
Ensure the user `postgres` has write access to the backup directory.
:::

### Create backup directory
```bash
sudo mkdir /var/foreman-backup
```

### Ensure `postgres` has write access to the backup directory
```bash
sudo chown -R postgres /var/foreman-backup
sudo chgrp postgres /var/foreman-backup
```
_While changing the group is specified here, the file permissions only need to be changed for the **user** `postgres`._

### Backup Foreman
```bash
sudo foreman-maintain backup offline /var/foreman-backup
```

## Troubleshooting
### Could not publish the content view: 500 Internal error
This can be caused when running `yum update`, but not also running `foreman-installer --scenario katello --update`. Run the following:
```bash
sudo foreman-installer --scenario katello --update
```
### Candlepin fails
#### Memory
It's possible it is cased by [not having enough memory](https://bugzilla.redhat.com/show_bug.cgi?id=1890487#c7). As such Candlepin will be one of the first services to fail. It is recommended to increase the total amount of memory for the foreman server.

View how to do this can be found on the "expanding memory" section [here](base-vm-server-setup).

#### Java
Candlepin can fail seemingly randomly due to an error with Java. According to a [community thread](https://community.theforeman.org/t/tomcat-candlepin-keep-crashing-with-a-task-create-organization-default-organization/15482/7), the workaround is to install an older version of Java:
```bash
wget http://vault.centos.org/7.6.1810/updates/x86_64/Packages/java-1.8.0-openjdk-headless-1.8.0.222.b10-0.el7_6.x86_64.rpm
wget http://vault.centos.org/7.6.1810/updates/x86_64/Packages/java-1.8.0-openjdk-1.8.0.222.b10-0.el7_6.x86_64.rpm

yum downgrade java-1.8.0-openjdk-1.8.0.222.b10-0.el7_6.x86_64.rpm java-1.8.0-openjdk-headless-1.8.0.222.b10-0.el7_6.x86_64.rpm
```