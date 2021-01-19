---
id: postgres-pgpool-install
title: Postgresql and pgpool-II install
sidebar_label: Postgres and pgpool-II
---

## On both VMs
### Install Postgresql and pgpool-II
Install postgresql 12 and pgpool-II for postgresql 12
```bash
sudo yum -y install postgresql12-server postgresql12-contrib
sudo /usr/pgsql-12/bin/postgresql-12-setup initdb
sudo systemctl enable --now postgresql-12
sudo yum -y install pgpool-II-pg12-extensions
```
Allow postgresql and pgpool-II in the firewall
```bash title="postgresql firewall rules"
sudo firewall-cmd --permanent --add-service=postgresql
sudo firewall-cmd --reload
```
```bash title="pgpool-II firewall rules"
sudo firewall-cmd --permanent --zone=public --add-port=9999/tcp --add-port=9898/tcp --add-port=9000/tcp
sudo firewall-cmd --permanent --zone=public --add-port=9694/udp
sudo firewall-cmd --reload
```
Finally enable the pgpool-II service:
```bash
sudo systemctl enable --now pgpool.service
```

## Set up Postgresql
### On postgresql1
Uncomment `listen_address` and change to `*`:
```bash title="/var/lib/pgsql/12/data/postgresql.conf"
...
listen_address = '*'
...
```
Add the following entry at the bottom of the `pg_hba` file:
```bash title="/var/lib/pgsql/12/data/pg_hba.conf"
...
host    all             all             172.16.0.10/16          md5
```
Restart postgresql-12:
```bash
sudo systemctl restart postgresql-12
```
### Creating databases
Switch to postgres user, start postgres client:
```bash
sudo su - postgres -c psql
```
Create databases:
```sql
CREATE USER "foreman" WITH PASSWORD '<FOREMAN_PASSWORD>';
CREATE USER "candlepin" WITH PASSWORD '<CANDLEPIN_PASSWORD>';
CREATE DATABASE foreman OWNER foreman;
CREATE DATABASE candlepin OWNER candlepin;
```
### Test databases
From the foreman sever:
```bash title="foreman.internal.virtnet"
PGPASSWORD='<FOREMAN_PASSWORD>' psql -h postgresql1.internal.virtnet -p 5432 -U foreman -d foreman -c "SELECT 1 as ping"
```
```bash title="foreman.internal.virtnet"
PGPASSWORD='<CANDLEPIN_PASSWORD>' psql -h postgresql1.internal.virtnet -p 5432 -U candlepin -d candlepin -c "SELECT 1 as ping"
```
```text title="expected output"
 ping
------
    1
(1 row)
```

## Sources
- [Download postgresql](https://www.postgresql.org/download/linux/redhat/)
- [How to install postgresql - Foreman](https://theforeman.org/plugins/katello/nightly/user_guide/remote_databases/index.html#prepare-remote-postgres)
- [How to install postgresql - Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-centos-7#step-1-%E2%80%94-installing-postgresql)
- [Create pgpool user account](https://www.pgpool.net/docs/42/en/html/pgpool-ii-user.html)
- [How to configure postgresql to authenticate with ipa](https://access.redhat.com/solutions/674323) Warning: login required