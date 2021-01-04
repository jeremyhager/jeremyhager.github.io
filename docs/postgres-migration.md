---
id: postgres-migration
title: Postgresql migration
sidebar_label: Postgresql migration
---
## Preparing Foreman
### Create migration_backup folder
```bash
sudo su postgres -c "mkdir /var/foreman-backup/migration_backup"
```
### Stop Foreman server
```bash title="foreman.internal.virtnet"
sudo foreman-maintain service stop --exclude postgresql,rh-mongodb34-mongod
```
### Dump databases
```bash
sudo foreman-maintain backup offline --skip-pulp-content --preserve-directory -y /var/foreman-backup/migration_backup
```
## Restore database to postgresql1

```bash
PGPASSWORD='<FOREMAN_PASSWORD>' pg_restore -h postgresql1.internal.virtnet -U foreman -d foreman < /var/foreman-backup/migration_backup/foreman.dump
PGPASSWORD='<CANDLEPIN_PASSWORD>' pg_restore -h postgresql1.internal.virtnet -U candlepin -d candlepin < /var/foreman-backup/migration_backup/candlepin.dump
```

```bash
sudo foreman-installer --scenario katello --foreman-db-host postgresql1.internal.virtnet --foreman-db-password $foremanPassword --foreman-db-database foreman --foreman-db-manage false --katello-candlepin-db-host postgresql1.internal.virtnet --katello-candlepin-db-name candlepin --katello-candlepin-db-password $candlepinPassword --katello-candlepin-manage-db false
```
:::caution
Be sure to change the password for the foreman db and candlepin db.
:::

## Sources
- [Migration of existing Foreman database](https://theforeman.org/plugins/katello/3.18/user_guide/remote_databases/index.html#prepare-remote-postgres)