---
id: configuring-foreman-terminal
title: Configuring Foreman in the terminal
sidebar_label: Configuring Foreman in the terminal
---
### Set up hammer variables

##### Create a `*.yml` file for to save credentials:


```yml title="~/.hammer/cli_config.yml"
:foreman:
 :host: 'https://satellite.example.com/'
 :username: 'username'
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
hammer content-credentials create --content-type GPG --key "RPM-GPG-KEY-CentOS-7" --name "RPM-GPG-KEY-CentOS-7"
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


### Sources
- [Set hammer authentication](https://access.redhat.com/documentation/en-us/red_hat_satellite/6.2/html/hammer_cli_guide/chap-cli_guide-introduction_to_hammer#sect-CLI_Guide-Authentication)
- [Set organization name](https://access.redhat.com/documentation/en-us/red_hat_satellite/6.2/html-single/hammer_cli_guide/index#sect-CLI_Guide-Creating_and_Editing_ACME_Organization)
- [Katello guide](https://www.lisenet.com/2018/katello-create-products-repositories-content-views-lifecycle-environments-activation-keys/)
    - I've copied a lot here, but please give this a view as it helped me quite a bit.