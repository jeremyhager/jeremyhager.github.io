---
id: installing-foreman-with-katello
title: Installing Foreman with Katello
sidebar_label: Installing Foreman with Katello
---

:::note
For the most part, this will be quite a bit like the guide that Foreman has on their website.
These instructions are created for CentOS 7
:::

## Requirements
|Hardware Requirements|Ports   |
|---------------------|--------|
| 2 virtual CPUs      |80/tcp  |
| 12GB memory         |443/tcp |
| 30GB per OS         |5647/tcp|
|                     |9090/tcp|

:::caution
You must install Katello **before** Foreman! Do not install on an existing Foreman instance.
:::
## Installing Katello

```bash
sudo yum -y localinstall https://yum.theforeman.org/releases/2.2/el7/x86_64/foreman-release.rpm
sudo yum -y localinstall https://fedorapeople.org/groups/katello/releases/yum/3.17/katello/el7/x86_64/katello-repos-latest.rpm
sudo yum -y localinstall https://yum.puppet.com/puppet6-release-el-7.noarch.rpm
sudo yum -y install epel-release centos-release-scl-rh
```
Check for updates again now that the repos are set up:
```bash
sudo yum -y update
```

Now install Katello:
```bash
sudo yum -y install katello
```

Install Foreman with Katello:
```bash
sudo foreman-installer --scenario katello
```
:::note
This will likely take some time.
:::


## Troubleshooting
### If there is an error when trying to install Katello
You may see the following while trying to install Katello:
```text
Error: Package: qpid-tools-1.39.0-1.el7.noarch (epel)
           Requires: python2-qpid
 You could try using --skip-broken to work around the problem
 You could try running: rpm -Va --nofiles --nodigest
```
This is a [recent bug](https://community.theforeman.org/t/katello-installation-broken/21374/6) as of writing this troubleshooting. It will likely be resolved once this is read - however, if the same error is crossed try the following:
```bash
sudo yum localinstall https://download-ib01.fedoraproject.org/pub/epel/7/aarch64/Packages/p/python2-qpid-1.37.0-4.el7.noarch.rpm
```
Afterward the Katello install should proceed normally.

## Source:
- [Installation docs from Foreman](https://theforeman.org/plugins/katello/3.16/installation/index.html)
- [Upgrading Katello](https://theforeman.org/plugins/katello/3.18/upgrade/index.html)
