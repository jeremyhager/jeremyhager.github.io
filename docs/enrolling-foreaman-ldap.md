---
id: enrolling-foreman-ldap
title: Enrolling Foreman
sidebar_label: Enrolling Foreman
---



## Preparations
### Install the necessary tools:
```bash
sudo yum -y install ipa-client foreman-proxy ipa-admintools
```
### Run the ipa client installer:
```bash
sudo ipa-client-install
```
```text title="expected output" {5}
WARNING: ntpd time&date synchronization service will not be configured as
conflicting service (chronyd) is enabled
Use --force-ntpd option to disable it and force configuration of ntpd

Discovery was successful!
Client hostname: foreman.internal.virtnet
Realm: INTERNAL.VIRTNET
DNS Domain: internal.virtnet
IPA Server: ldap1.internal.virtnet
BaseDN: dc=internal,dc=virtnet
```
If it was configured successfully, refer to the following table:

|Questions                                                |Answers            |
|---------------------------------------------------------|-------------------|
|Continue to configure the system with these values? [no]:| yes               |
|User authorized to enroll computers:                     | admin             |
|Password for admin@INTERNAL.VIRTNET:                     | \[admin password\]|

```text title="expected output"
...
Configuring internal.virtnet as NIS domain.
Client configuration complete.
The ipa-client-install command was successful
```
### Set up smart proxy
```bash
sudo foreman-prepare-realm admin realm-proxy
```
```text title="expected output"
-------------------------
Number of members added 1
-------------------------
Keytab successfully retrieved and stored in: freeipa.keytab
Realm Proxy User:    realm-proxy
Realm Proxy Keytab:  /home/jeremy/freeipa.keytab
```
Copy/move the keytab file into `/etc/foreman-proxy` and set the permissions:
```bash
sudo mv /home/jeremy/freeipa.keytab /etc/foreman-proxy
sudo chown foreman-proxy:foreman-proxy /etc/foreman-proxy/freeipa.keytab
```
Enable realm via https:
```yaml title="/etc/foreman-proxy/settings.d/realm.yml" {3}
---
# Can be true, false, or http/https to enable just one of the protocols
:enabled: https

# Available providers:
#   realm_ad
#   realm_freeipa
:use_provider: realm_freeipa
```
Trust the IPA certificate authority:
```bash
sudo cp /etc/ipa/ca.crt /etc/pki/ca-trust/source/anchors/ipa.crt
sudo update-ca-trust enable
sudo update-ca-trust
```
### Re-run the installer to enable realms
```bash
sudo foreman-installer --scenario katello --foreman-proxy-realm true \
    --foreman-proxy-realm-keytab /etc/foreman-proxy/freeipa.keytab \
    --foreman-proxy-realm-principal realm-proxy
```
## Create realm in foreman
Now that foreman is set up for realms, create a realm in foreman:
```bash
hammer realm create --location "Default Location" \
    --name "internal.virtnet_realm" \
    --organization "internal.virtnet" \
    --realm-proxy-id 1 \
    --realm-type "FreeIPA"
```
### Associate realm with hostgroup
Update the hostgroup in foreman to include the realm id. This will automatically add the hosts within the group to the realm:
```bash
hammer hostgroup update --id 1 --realm-id 1
```
## Disable root password on hostgroup
Now that all future VMs should be joined to the realm there is no reason the root account should have a password - and thus be able to be logged in.
```bash
hammer hostgroup update --id 1 --ask-root-password false
```

## Sources
- [ldap guide for Satellite](https://access.redhat.com/documentation/en-us/red_hat_satellite/6.0/html/user_guide/chap-red_hat_satellite-user_guide-configuring_identity_management_in_red_hat_satellite)
- [Realm guide for foreman](https://theforeman.org/manuals/2.3/index.html#4.3.8Realm)