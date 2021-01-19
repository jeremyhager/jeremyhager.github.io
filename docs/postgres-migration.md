---
id: postgres-migration
title: Postgresql migration
sidebar_label: Postgresql migration
---
## Preparing Foreman
### Stop foreman
```bash
sudo foreman-maintain service stop --exclude postgresql
```
### Create migration_backup folder
```bash
sudo su postgres -c "mkdir /var/foreman-backup/migration_backup"
```
### Dump databases and restore to postgresql1
Switch to postgres and run the following commands
```bash
sudo su - postgres
```
```bash
pg_dump -C foreman | psql -h postgresql1.internal.virtnet -U foreman -d foreman
```
```bash
pg_dump -C candlepin | psql -h postgresql1.internal.virtnet -U candlepin -d candlepin
```
### Reconfigure foreman to use the postgresql1 database
```bash
sudo foreman-installer --scenario katello --foreman-db-host postgresql1.internal.virtnet --foreman-db-password $foremanPassword --foreman-db-database foreman --foreman-db-manage false --katello-candlepin-db-host postgresql1.internal.virtnet --katello-candlepin-db-name candlepin --katello-candlepin-db-password $candlepinPassword --katello-candlepin-manage-db false
```
:::caution
Be sure to change the password for the foreman db and candlepin db.
:::

## Troubleshooting
### wrong number of arguments (2 for 1)
If you get the following error:
```text
================================================================================
Data consistency warning:                                             [FAIL]
wrong number of arguments (2 for 1)
--------------------------------------------------------------------------------
Scenario [Backup] failed.

The following steps ended up in failing state:

  [backup-online-safety-confirmation]
```

You may need to fix the following file, adding `actions_msg`:
```ruby title="/usr/share/gems/gems/foreman_maintain-0.7.1/definitions/procedures/backup/online/safety_confirmation.rb" {2}
      def run
        answer = ask_decision(warning_message(@include_db_dumps), actions_msg: 'y(yes), q(quit)')
        abort! unless answer == :yes
      end
```

## Sources
- [Migration of existing Foreman database](https://theforeman.org/plugins/katello/3.18/user_guide/remote_databases/index.html#prepare-remote-postgres)