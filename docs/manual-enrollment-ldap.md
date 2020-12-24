---
id: manual-enrollment-ldap
title: Manual Enrollment
sidebar_label: Manual Enrollment
---
:::note
Manual enrollment will be required for the dns-dhcp server
:::
## Install freeipa client
```bash
sudo yum -y install freeipa-client
```
### Run client install
```bash
sudo ipa-client-install
```
## Test
Simply ssh into the machine using an ldap user created earlier to confirm it worked:
```bash title="remote computer"
ssh jeremy@dns-dhcp.internal.virtnet
```