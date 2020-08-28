---
id: installing-foreman-with-katello
title: Installing Foreman with Katello
sidebar_label: Installing Foreman with Katello
---

:::note
For the most part, this will be quite a bit like the guide that Foreman has on their website.
These instructions are created for CentOS 7
:::

### Requirements
|Hardware Requirements|Ports   |
|---------------------|--------|
| 2 virtual CPUs      |80/tcp  |
| 8GB memory          |443/tcp |
| 30GB per OS         |5647/tcp|
|                     |9090/tcp|

:::caution
You must install Katello **before** Foreman! Do not install on an existing Foreman instance.
:::
### Installing Katello

```bash
sudo yum -y localinstall https://yum.theforeman.org/releases/2.1/el7/x86_64/foreman-release.rpm
sudo yum -y localinstall https://fedorapeople.org/groups/katello/releases/yum/3.16/katello/el7/x86_64/katello-repos-latest.rpm
sudo yum -y localinstall https://yum.puppet.com/puppet6-release-el-7.noarch.rpm
sudo yum -y localinstall https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
sudo yum -y install foreman-release-scl
```
Once completed, it's time to double-check updates if you haven't already:

```bash
sudo yum -y update
```

Now install Katello:
```bash
sudo yum -y install katello
```

Now you are ready to install Foreman with Katello:
```bash
sudo foreman-installer --scenario katello
```
:::note
This will likely take some time.
:::

### Source:
- [Installation docs from Foreman](https://theforeman.org/plugins/katello/3.16/installation/index.html)