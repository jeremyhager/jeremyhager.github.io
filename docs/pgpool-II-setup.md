---
id: pgpool-II-setup
title: pgpool-II setup
sidebar_label: pgpool-II setup
---
## On both VMs
### Create archive for postgresql
```bash
sudo su postgres -c "mkdir /var/lib/pgsql/12/archive"
```
## Set up pgpool on postgresql1
### Install pgpool-II for postgresql 12
```bash
sudo yum -y install pgpool-II-pg12
```
### Install pgpool-II debug tool
```bash
sudo yum -y install pgpool-II-pg12-debuginfo
```
### configure postgresql.conf
```clike title="/var/lib/pgsql/12/data/postgresql.conf"
listen_addresses = '*'
...
archive_mode = on
archive_command = 'cp "%p" "/var/lib/pgsql/12/archive/%f"'
...
max_wal_senders = 10
...
max_replication_slots = 10
...
wal_level = replica
...
hot_standby = on
...
wal_log_hints = on
    
```
### Configure postgresql roles
```bash
sudo su - postgres -c psql
```
```sql

```



## Configure pcp.conf
Md5 the pgpool user's password
```bash
pg_md5 -p
```
```bash title="/etc/pgpool-II/pcp.conf"
pgpool:[md5 password]
```
## Set up sample-stream conf file
```bash
sudo cp /etc/pgpool-II/pgpool.conf.sample-stream pgpool.conf
```
```text title="pgpool.conf"
listen_addresses = '172.16.0.13'
...
backend_hostname0 = 'postgresql1.internal.virtnet'

```

## Sources
- [Configuring pcp.conf](https://www.pgpool.net/docs/42/en/html/configuring-pcp-conf.html)