---
id: tftp-with-foreman
title: PXE boot using Foreman
sidebar_label: PXE boot using Foreman
---
:::info
This is part of the Foreman tutorial series. Be sure to refer to the [first tutorial](Installing-Foreman-with-Katello.md) if you have not already.
:::

## Setting up TFTP
The default install of foreman should include Smart Proxy. As such, the following settings should be available to manipulate after installing and configuring foreman:  
```bash
sudo foreman-installer --foreman-proxy-tftp=true
```
This may reset the Foreman password. The password can be found here:
```yaml title="/etc/foreman-installer/scenarios.d/katello-answers.yaml"
initial_admin_username: admin
initial_admin_password: password
```
## Configure Unattended options
### Create subnet
Then create/associate the subnet in Foreman for the servers:
```bash
hammer subnet create \
    --organizations "internal.virtnet" \
    --locations "Default Location" \
    --name "Virtnet_LAN" \
    --network "172.16.0.0" \
    --mask "255.255.0.0" \
    --network-type "IPv4" \
    --gateway "172.16.0.1" \
    --dns-primary "172.16.0.8" \
    --boot-mode "DHCP" \
    --ipam "None" \
    --domain-ids "1" \
    --tftp-id "1"
```
### Find pulp info for medium
Find the pulp info that will be used for creating a medium:
```bash
hammer repository list
```
```text title="output" {4}
---|----------------|----------|--------------|------------------------------------------------------
ID | NAME           | PRODUCT  | CONTENT TYPE | URL
---|----------------|----------|--------------|------------------------------------------------------
1  | x86_64         | CentOS 7 | yum          | http://mirror.centos.org/centos/7/os/x86_64/
4  | x86_64_epel    | CentOS 7 | yum          | https://dl.fedoraproject.org/pub/epel/7Server/x86_64/
2  | x86_64_extras  | CentOS 7 | yum          | http://mirror.centos.org/centos/7/extras/x86_64/
3  | x86_64_updates | CentOS 7 | yum          | http://mirror.centos.org/centos/7/updates/x86_64/
---|----------------|----------|--------------|------------------------------------------------------
```
Copy the ID from the x86_64 repo in the output and get the published url:
```bash
hammer repository info --id 1
```
```text title="output" {11}
ID:                 1
Name:               x86_64
Label:              x86_64
Description:
Organization:       internal.virtnet
Red Hat Repository: no
Content Type:       yum
Mirror on Sync:     no
URL:                http://mirror.centos.org/centos/7/os/x86_64/
Publish Via HTTP:   yes
Published At:       http://foreman.internal.virtnet/pulp/repos/Default_Organization/Library/custom/CentOS_7/x86_64/
Relative Path:      Default_Organization/Library/custom/CentOS_7/x86_64
Download Policy:    on_demand
### Line cut for brevity
```

### Create medium
```bash
hammer medium create \
  --organizations "internal.virtnet" \
  --locations "Default Location" \
  --name CentOS7_Pulp \
  --path "http://foreman.internal.virtnet/pulp/repos/Default_Organization/Library/custom/CentOS_7/x86_64/" \
  --os-family "Redhat" \
  --operatingsystems "CentOS-7"
```
## Create a hostgroup for CentOS 7
### Get proxy info
The proxy info for puppet should be the same name as our server - all the same confirm with the following command:
```bash
hammer proxy list
```
```text title="output" {4}
---|--------------------------|---------------------------------------|--------------------------
ID | NAME                     | URL                                   | FEATURES
---|--------------------------|---------------------------------------|--------------------------
1  | foreman.internal.virtnet | https://foreman.internal.virtnet:9090 | Pulp, Pulpcore, Puppet...
---|--------------------------|---------------------------------------|--------------------------
```
### Create the hostgroup for CentOS servers
:::note
 As of writing this, the hammer subcommand will fail on `--operatingsystem`.
 This is a [known bug](https://bugzilla.redhat.com/show_bug.cgi?id=1649011). The work-around is to use `hammer --no-use-defaults`.
:::

```bash title="" {1,7,8,15}
hammer --no-use-defaults hostgroup create \
  --query-organization "internal.virtnet" \
  --locations "Default Location" \
  --name "centos7-group" \
  --description "Host group for CentOS 7 servers" \
  --lifecycle-environment "stable" \
  --content-view "CentOS 7 Content" \
  --content-source-id "1" \
  --puppet-environment "production" \
  --puppet-proxy "foreman.internal.virtnet" \
  --puppet-ca-proxy "foreman.internal.virtnet" \
  --domain "internal.virtnet" \
  --subnet "Virtnet_LAN" \
  --architecture "x86_64" \
  --operatingsystem "CentOS-7" \
  --medium "CentOS7_Pulp" \
  --partition-table "Kickstart default" \
  --pxe-loader "Grub2 BIOS" \
  --ask-root-password yes
```
I've highlighted a few lines that had me asking questions. Here are the explanations for each:
```bash
--no-use-defaults #As mentioned above, this is a work-around for the flag --operatingsystem failing
--content-view "CentOS 7 Content" #The NAME of the content view (not the label)
--content-source-id "1" #Content ID to use from the content-view specified in --content-view
--operatingsystem "CentOS-7" #which OS to use. In this case, it is set to CentOS-7.
```
### Associate key with hostgroup
```bash
hammer hostgroup set-parameter  \
  --name "kt_activation_keys" \
  --value "centos7-key" \
  --hostgroup "centos7-group"
```

## Add firewall rule
Finally, allow TFTP in the firewall:
```bash
sudo firewall-cmd --add-service=tftp
sudo firewall-cmd --runtime-to-permanent
sudo firewall-cmd --reload
```


## Sources
- [Foreman Smart Proxy settings](https://www.theforeman.org/manuals/2.2/index.html#listening-configuration-settingsyaml)
- [Foreman TFTP settings](https://theforeman.org/manuals/2.2/index.html#4.3.9TFTP)
- [Associate subnet with Foreman](https://www.lisenet.com/2018/katello-create-a-domain-subnet-installation-media-os-provisioning-templates-host-groups-pxe-boot/) <sup>[archive](https://web.archive.org/web/20201209152001/https://www.lisenet.com/2018/katello-create-a-domain-subnet-installation-media-os-provisioning-templates-host-groups-pxe-boot/)</sup>
- [More Foreman info from another blog](https://elatov.github.io/2018/10/using-foreman-to-provision-and-configure-machines/) <sup>[archive](https://web.archive.org/web/20201209151907/https://elatov.github.io/2018/10/using-foreman-to-provision-and-configure-machines/)</sup>
- [hammer subcommand failing](https://projects.theforeman.org/issues/22171)