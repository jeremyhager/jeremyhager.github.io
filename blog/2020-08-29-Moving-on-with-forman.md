---
title: Moving on with Foreman
author: Jeremy Hager
author_url: https://github.com/jeremyhager/
author_image_url: https://avatars2.githubusercontent.com/u/47301461?s=460&u=05e044dcce4be18b670f9e2c9bda99c511cd4009&v=4
tags: [Website, Foreman, Katello]
description: Troubleshooting Katello backups and virsh
---
<img src="/img/light-half-full.jpg" width="256"/>

Foreman has been giving me a little trouble as I began to set it up. First thing that happened is I could not import errata correctly, and I tried 2 different scripts out there to accomplish it. After several re-tries, I figured a fresh start would be good and reverted the Foreman VM back to before all of these changes happened.

<!--truncate-->

Well after going through the process again, I unfortunately ran into another issue: I tried to back up the server. I went through the entire process of importing GPG keys, syncing repos, publishing, etc. Following the guide I found [here](https://www.lisenet.com/2018/katello-create-products-repositories-content-views-lifecycle-environments-activation-keys/), step 12 is to use `katello-backup`. However the new version of this is `foreman-maintain`.

Eventually I found the right command: `sudo foreman-maintain backup offline /mnt/backup`. Everything seemed to go okay...
```bash
Starting backup: 2020-08-25 18:13:10 -0400
Running preparation steps required to run the next scenarios
================================================================================
Make sure Foreman DB is up:
/ Checking connection to the Foreman DB                               [OK]
--------------------------------------------------------------------------------


Running Backup
================================================================================
Confirm turning off services is allowed:
WARNING: This script will stop your services.

Do you want to proceed?, [y(yes), q(quit)] y
                                                                      [OK]
--------------------------------------------------------------------------------
Prepare backup Directory:
Creating backup folder /mnt/backup/katello-backup-2020-08-25-18-13-10 [OK]
--------------------------------------------------------------------------------
Check if the directory exists and is writable:                        [OK]
--------------------------------------------------------------------------------
.
.
.
#etc.
```

But then this hit me:
```bash
Backup Candlepin DB offline:
/ Collecting data from /var/opt/rh/rh-postgresql12/lib/pgsql/data/    [FAIL]
Failed executing tar --selinux --create --file=/mnt/backup/katello-backup-2020-08-25-18-13-10/pgsql_data.tar --listed-incremental=/mnt/backup/katello-backup-2020-08-25-18-13-10/.postgres.snar --transform 's,^,var/opt/rh/rh-postgresql12/lib/pgsql/data/,S' -S *, exit status 2:
 tar: /mnt/backup/katello-backup-2020-08-25-18-13-10/pgsql_data.tar: Wrote only 4096 of 10240 bytes
tar: Error is not recoverable: exiting now
--------------------------------------------------------------------------------
Scenario [Backup] failed.

The following steps ended up in failing state:

  [backup-offline-candlepin-db]

Resolve the failed steps and rerun
the command. In case the failures are false positives,
use --whitelist="backup-offline-candlepin-db"


The runner is already in quit state
```

I spent a few days on this issue and tried multiple different avenues. To cut a long story short (re-initiating the backup, rebooting the server, starting PostgreSQL "manually", reading `journalctl -xe`), I decided I needed to cut my losses and revert the VM again. So I took a snapshot of the vm, backed it up, and copied the xml of the broken server. Right now I don't think I have the know-how to fix this, but it could be a good troubleshooting project later on. So onward and upward, after reverting the VM I re-did my work.

### Importing errata
This time I was able to backup my foreman/katello instance properly, but I was unable to import errata. Every time I did try, I would get the following message:
```text
Skipping errata [...] — No packages found
```
I tried setting `--include-repo=` after running `pulp-admin repo list`, but that did not result in any errata info as well. I looked at the GitHub page for the perl script to see if anyone else has ran into a similar issue. Sure enough, an [open issue](https://github.com/rdrgmnzs/pulp_centos_errata_import/issues/27) showed up: "All errata fail to import showing no package found". However it seemed to be a dead end after giving the suggestions a try. Finally I looked at the script itself to see what it was doing, and hopefully where it was failing. I found the spot I was looking for:

```clike title="Lines 155-156"
  # Get all packages in current channel
  my @allpkg = `pulp-admin $pulp_args rpm repo content rpm --repo-id=$repo --fields=filename | grep Filename: | awk '{print \$2}' `;
  chomp @allpkg;
```

What this told me is that it was using `pulp-admin rpm repo` to import/find the relevant information for the errata. I ran `pulp-admin rpm repo list`, and got zero repos back. There must have been a step I missed or something was amiss in general because I could not find a way for `pulp-admin rpm repo` to recognize and import my existing yum repo. I tried using an alterative script based in python, `katello-centos-errata-import`, but I had little luck with that one as well. Once again I felt the need to move on and try at a later time before spinning my wheels for too long.

### Restoring the Foreman vm
I did make some snapshots of the vm along the way, and decided to rename them since I was starting to not know what the differences were. That seemed like it was a bad idea though - after I set the names of the snapshots to better-suited names than timestamps, I couldn't revert the snapshot to right before I tried to import errata. What was strange is command would _appear_ to execute successfully but I knew it wasn't, if only because it would be too quick to bring the virsh prompt back. After trying others I realized they all had the same issue: they would appear to execute quickly but the vm was still in the same state before applying. Finally I tried applying an old snapshot that still had the timestamp as its name and the snapshot applied correctly.

I renamed the snapshot I needed to the timestamp and tried to apply the snapshot again. Sure enough, the timestamp-named snapshot restored the vm. At this point I believe I need to cut my losses entirely on Foreman for now, and proceed with the other steps of the Linux sysadmin guide. The guide is to learn about Linux system administration, not just Foreman administration. I am excited to move on to step 3 in the Linux sysadmin guide, which will have me set up named, dhcpd, and having the dhcp use the Foreman server for pxeboot.

### How's Linux going?

Excited to move on from Foreman! I may not be "done" with it but I am happy to be able to focus on something else for a little while.

### Sources
- [Image source](https://www.reddit.com/r/OSHA/comments/iiaoyw/this_light_bulb_in_our_walkin_fridge/)
- [Perl script to import errata](https://github.com/rdrgmnzs/pulp_centos_errata_import/)
- [Lines 155-156 of perl script](https://github.com/rdrgmnzs/pulp_centos_errata_import/blob/master/errata_import.pl#L154-L156)
- [Python script to import errata](https://github.com/nicolas-r/katello-centos-errata-import)