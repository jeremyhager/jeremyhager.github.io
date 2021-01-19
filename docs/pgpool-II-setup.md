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
### Create postgresql users
```bash
sudo su - postgres -c psql
```
```sql
CREATE ROLE pgpool WITH LOGIN;
CREATE ROLE repl WITH REPLICATION LOGIN;
\password pgpool
\password repl
\password postgres
```
Grant pg_monitor to pgpool:
```sql
GRANT pg_monitor TO pgpool;
```

```clike title="/var/lib/pgsql/12/data/pg_hba.conf"
host    all             all             samenet                 md5
host    replication     all             samenet                 md5
```
## Allow passwordless ssh on all servers
### Generate ssh files for root
```bash title="all servers"
sudo ssh-keygen -t rsa -f id_rsa_pgpool
```
Copy files to servers
```bash title="postgresql1"
sudo scp id_rsa_pgpool.pub jeremy@postgresql2.internal.virtnet:/home/jeremy/id_rsa_pgpool_psql1.pub
```
```bash title="postgresql2"
sudo scp id_rsa_pgpool.pub jeremy@postgresql1.internal.virtnet:/home/jeremy/id_rsa_pgpool_psql2.pub
```
```text title="expected output"
Password:
Password:
Password:
jeremy@postgresql1.internal.virtnet's password: 
```
When asked for passwords, simply hit enter and leave blank. When asked for the user's password to a postgres server enter in the password for that user.


### Copy public keys into authorized_keys
Use postgres by creating directories and files, and adjusting permissions:
:::note
This is normally done via `ssh-copy-id`, however for postgres a manual method is needed.
:::
```bash
sudo su - postgres -c 'mkdir -p ~postgres/.ssh'
```
```bash
sudo su - postgres -c 'touch ~postgres/.ssh/authorized_keys'
```
```bash title="postgresql1"
sudo sh -c 'cat id_rsa_pgpool_psql2.pub >> ~postgres/.ssh/authorized_keys'
sudo rm id_rsa_pgpool_psql2.pub
```
```bash title="postgresql2"
sudo sh -c 'cat id_rsa_pgpool_psql1.pub >> ~postgres/.ssh/authorized_keys'
sudo rm id_rsa_pgpool_psql1.pub
```
```bash
sudo su - postgres -c 'chmod 700 ~postgres/.ssh'
```
```bash
sudo su - postgres -c 'chmod 600 ~postgres/.ssh/authorized_keys'
```

### Generate ssh files for postgres
```bash
sudo su - postgres
```
```bash
cd ~/.ssh
```
```bash
ssh-keygen -t rsa -f id_rsa_pgpool
```
Copy files to servers
```bash title="postgresql1"
scp id_rsa_pgpool.pub jeremy@postgresql2.internal.virtnet:/home/jeremy/id_rsa_pgpool_psql-postgres1.pub
```
```bash title="postgresql2"
scp id_rsa_pgpool.pub jeremy@postgresql1.internal.virtnet:/home/jeremy/id_rsa_pgpool_psql-postgres2.pub
```
Exit postgres user
```bash
exit
```
Copy psql-postgres.pub files
```bash title="postgresql1"
sudo sh -c 'cat id_rsa_pgpool_psql-postgres2.pub >> ~postgres/.ssh/authorized_keys'
```
```bash
rm id_rsa_pgpool_psql-postgres2.pub
```
```bash title="postgresql2"
sudo sh -c 'cat id_rsa_pgpool_psql-postgres1.pub >> ~postgres/.ssh/authorized_keys'
```
```bash
rm id_rsa_pgpool_psql-postgres1.pub
```
### Test passwordless ssh


<!--
### Configure postgresql roles
```bash title="/var/lib/pgsql/12/data/pg_ident.conf"
# MAPNAME       SYSTEM-USERNAME         PG-USERNAME
internal_virtnet pgpool                 pgpool
internal_virtnet repl                   repl
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
-->
## Sources
- [pgpool-II and watchdog example](https://www.pgpool.net/docs/42/en/html/example-cluster.html)
- [copy via scp](https://unix.stackexchange.com/a/106482)
- [run append as root](https://stackoverflow.com/a/82278/14952836)