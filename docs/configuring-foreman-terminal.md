---
id: configuring-foreman-terminal
title: Configuring Foreman in the terminal
sidebar_label: Configuring Foreman in the terminal
---
### Set up hammer variables

##### Create a `*.yml` file for to save credentials:


```yml title="~/.hammer/cli_config.yml"
:foreman:
 :host: 'https://foreman.internal.virtnet'
 :username: 'admin'
 :password: 'password'
```

##### Protect the password:
```bash
chmod 600 ~/.hammer/cli_config.yml
```

##### Set the organization:
```bash
hammer organization update --name "Default Organization" --new-name "internal.virtnet"
```

##### Finally set hammer variables:
```bash
hammer defaults add --param-name organization --param-value "internal.virtnet"
```

:::note
This was done for ease-of-use. It is not necessary in order to use `hammer`. However proceeding commands will be omitting specifying the eg. organization.
:::

### Setting up GPG keys
##### Create a product:
```bash
hammer product create --name "CentOS 7"
```
##### Download and store GPG Keys

First, download the CentOS 7 GPG key:
```bash
wget http://mirror.centos.org/centos/7/os/x86_64/RPM-GPG-KEY-CentOS-7
```
Then store via `hammer content-credentials`:
```bash
hammer content-credentials create --content-type gpg_key --key "RPM-GPG-KEY-CentOS-7" --name "RPM-GPG-KEY-CentOS-7"
```

Now let's do the same for EPEL 7 GPG key:
```bash
wget https://archive.fedoraproject.org/pub/epel/RPM-GPG-KEY-EPEL-7Server
```
```bash
hammer content-credentials create --content-type gpg_key --key "RPM-GPG-KEY-EPEL-7Server" --name "RPM-GPG-KEY-EPEL-7Server"
```

### Create Repos
##### CentOS 7 base repo:
```bash
hammer repository create --product "CentOS 7" --name "x86_64" --content-type "yum" --download-policy "on_demand" --gpg-key "RPM-GPG-KEY-CentOS-7" --url "http://mirror.centos.org/centos/7/os/x86_64/" --mirror-on-sync "no"
```
##### CentOS 7 extras repo:
```bash
hammer repository create --product "CentOS 7" --name "x86_64_extras" --content-type "yum" --download-policy "on_demand" --gpg-key "RPM-GPG-KEY-CentOS-7" --url "http://mirror.centos.org/centos/7/extras/x86_64/" --mirror-on-sync "no"
```
##### CentOS 7 updates repo:
```bash
hammer repository create --product "CentOS 7" --name "x86_64_updates" --content-type "yum" --download-policy "on_demand" --gpg-key "RPM-GPG-KEY-CentOS-7" --url "http://mirror.centos.org/centos/7/updates/x86_64/" --mirror-on-sync "no"
```
##### EPEL 7 repo:
```bash
hammer repository create --product "CentOS 7" --name "x86_64_epel" --content-type "yum" --download-policy "on_demand" --gpg-key "RPM-GPG-KEY-EPEL-7Server" --url "https://dl.fedoraproject.org/pub/epel/7Server/x86_64/" --mirror-on-sync "no"
```

### Sync Repos
You can sync the repos using a small loop:
```bash
for i in $(seq 1 4); do \
  hammer repository synchronize \
  --product "CentOS 7" \
  --id "$i"; \
  done
```
:::note
These will take a while to sync.
:::

### Content views
#### Create content view
```bash
hammer content-view create --name "CentOS 7 Content"
```
#### Add repos to content view
```bash
for i in $(seq 1 4); do \
  hammer content-view add-repository \
  --name "CentOS 7 Content" \
  --product "CentOS 7" \
  --repository-id "$i"; \
  done
```
#### Create lifecycle environment
```bash
hammer lifecycle-environment create --name "stable" --label "stable" --prior "Library"
```
#### Publish content view
```bash
hammer content-view publish --name "CentOS 7 Content"
```
:::note
It may take a bit to publish the content view.
:::

### Promote version to lifecycle environment
```bash
hammer content-view version promote --content-view "CentOS 7 Content" --version "1.0" --to-lifecycle-environment "stable"
```

### Activation keys
#### Create an activation key
```bash
hammer activation-key create --name "centos7-key" --description "Key to use with CentOS 7" --lifecycle-environment "stable" --content-view "CentOS 7 Content" --unlimited-hosts
```
#### Add subscription to activation key
```bash
hammer activation-key add-subscription --name "centos7-key" --quantity "1" --subscription-id "1"
```

### Backup database
:::caution
Ensure the user `postgres` has write access to the backup directory.
:::

#### Create backup directory
```bash
sudo mkdir /var/foreman-backup
```

#### Ensure `postgres` has write access to the backup directory
```bash
sudo chown -R postgres /var/foreman-backup
sudo chgrp /var/foreman-backup postgres
```
_While changing the group is specified here, the file permissions only need to be changed for the **user** `postgres`._

#### Backup Foreman
```bash
sudo foreman-maintain backup offline /var/foreman-backup
```

### Sources
- [Set hammer authentication](https://access.redhat.com/documentation/en-us/red_hat_satellite/6.2/html/hammer_cli_guide/chap-cli_guide-introduction_to_hammer#sect-CLI_Guide-Authentication)
- [Set organization name](https://access.redhat.com/documentation/en-us/red_hat_satellite/6.2/html-single/hammer_cli_guide/index#sect-CLI_Guide-Creating_and_Editing_ACME_Organization)
- [Katello guide](https://www.lisenet.com/2018/katello-create-products-repositories-content-views-lifecycle-environments-activation-keys/)
    - I've copied a lot here, but please give this a view as it helped me quite a bit.
- [foreman-maintain backup](https://access.redhat.com/documentation/en-us/red_hat_satellite/6.4/html/administering_red_hat_satellite/chap-red_hat_satellite-administering_red_hat_satellite-backup_and_disaster_recovery/#proc-Red_Hat_Satellite-Administering_Red_Hat_Satellite-Backing_up_Satellite_Server_or_Capsule_Server-To_Perform_a_Full_Offline_Backup_of_Satellite_Server_or_Capsule_Server)