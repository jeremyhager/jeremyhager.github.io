---
id: creating-ldap-users
title: Creating users
sidebar_label: Creating users
---

## Create user group for sudo permissions
### Create sudo rule
Because we'll be needing an admin user to run sudo commands from here on out on all existing and future servers, run the following command to create a sudo rule for all commands:
```bash
ipa sudorule-add --cmdcat=all All --hostcat='all'
```
### Create sudo-users group
Create the group that will be associated with the sudorule:
```bash
ipa group-add sudo-users --desc="Users who can use sudo on any machine"
```
### Add sudo-users group to sudo rule
```bash
ipa sudorule-add-user All --groups=sudo-users
```
### Create sudo user
```bash
ipa user-add jeremy --first=jeremy --last=hager --password
```
### Add sudo user to sudo-users group
```bash
ipa group-add-member sudo-users --users=jeremy
```
## Set password to never expire
Create a password policy to apply to future users added to the sudo-users group:
```bash
ipa pwpolicy-add sudo-users --maxlife=0 --minlife=0 --maxfail=5 --lockouttime=600 --priority=2
```
## Create ipa user
Creating a "plain" ipa user may be a good idea so future services behave as expected:
```bash
ipa user-add jeremy-user --first=jeremy-user --last=hager --password
```
:::note
Assume all future will will be done with the sudo user account unless otherwise specified.
:::
## Update authconfig
```bash
authconfig --enablemkhomedir --update
```
## Disable root accounts on ldap servers
Having root as an available login is generally a bad idea. Log out of the ldap machines and log back in using the newly created sudo user, and disable the root account:
```bash
sudo passwd -d root
sudo passwd -l root
```


## Sources
- [Installing ipa client](https://www.digitalocean.com/community/tutorials/how-to-configure-a-freeipa-client-on-centos-7#step-2-%E2%80%94-installing-the-freeipa-client)
- [Creating ipa users](https://www.freeipa.org/page/Quick_Start_Guide)
- [Creating sudo rule](https://serverfault.com/a/560237)
- [Setting up password polices](https://pagure.io/freeipa/issue/2795)
- [Using authconfig](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/system-level_authentication_guide/authconfig-install)