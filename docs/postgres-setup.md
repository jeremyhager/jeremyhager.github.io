---
id: postgres-setup
title: Postgresql setup
sidebar_label: Postgres setup
---

## Set up Postgresql
### On both VMs
```bash
sudo yum -y install postgresql12-server
sudo postgresql-setup initdb
sudo systemctl enable --now postgresql12-server
```
## Set up pgpool
### On postgresql1
Install pgpool-II for postgresql 12:
```bash
sudo yum -y install pgpool-II-pg12
```
Install pgpool-II debug tool:
```bash
sudo yum -y install pgpool-II-pg12-debuginfo
```

## Sources
- [Download [postgresql](https://www.postgresql.org/download/linux/redhat/)
- [How to install postgresql](https://theforeman.org/plugins/katello/nightly/user_guide/remote_databases/index.html#prepare-remote-postgres)