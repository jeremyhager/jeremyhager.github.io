---
id: configuring-ldap
title: Configuring ldap
sidebar_label: Configuring ldap
---

## Anonymous bind
Anonymous bind is disabled on FreeIPA by default, however anonymous access is not.
### Check anonymous access
Check the status of anonymous access on the ldap environment:
```bash
ldapsearch -x -u -h ldap1.internal.virtnet -b cn=config "(cn=config)" nsslapd-allow-anonymous-access  -W -D "cn=Directory Manager"
```
:::note
The LDAP password is the Directory Manager password.
:::
```text title="expected output" {6}
...

# config
dn: cn=config
ufn: config
nsslapd-allow-anonymous-access: on

# config, Account Policy Plugin, plugins, config

...
```
If `nsslapd-allow-anonymous-access` is set to `on`, then anonymous bind needs to be secured.
### Disable anonymous bind
On either ldap server change the anonymous access value to `rootdse`:
```bash
ldapmodify -x -D "cn=Directory Manager" -W -h ldap1.internal.virtnet -p 389 -ZZ
```
The terminal will then be blank and waiting input. Enter the following, then ctrl+c to escape:
```text title="input"
dn: cn=config
changetype: modify
replace: nsslapd-allow-anonymous-access
nsslapd-allow-anonymous-access: rootdse
```
```text title="output"
modifying entry "cn=config"
```
Once the output confirms the change, ctrl+c to exit the `ldapmodify` shell. Then restart the directory service on both servers:
```bash
systemctl restart dirsrv.target
```
## Secure Connections
### Require secure binds
Run the following command to modify the secure-binds attribute:
```bash
ldapmodify -D "cn=Directory Manager" -W -x
```
```text title="input"
dn: cn=config
changetype: modify
replace: nsslapd-require-secure-binds
nsslapd-require-secure-binds: on
```
```text title="output"
modifying entry "cn=config"
```
Then restart the service on both servers:
```bash
systemctl restart dirsrv.target
```

## Sources
- [Check if anonymous bind is enabled](http://www.billyrayvalentine.com/disable-anonymous-binds-in-ipa-v3-and-enable-them-again.html) <sup>[Archive](https://web.archive.org/web/20201221182301/http://www.billyrayvalentine.com/disable-anonymous-binds-in-ipa-v3-and-enable-them-again.html)</sup>
- [Disable anonymous bind](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/linux_domain_identity_authentication_and_policy_guide/disabling-anon-binds)
- [Require secure binds](https://access.redhat.com/documentation/en-us/red_hat_directory_server/10/html/administration_guide/configuring-special-binds#requiring-secure-binds)