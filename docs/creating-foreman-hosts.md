---
id: creating-foreman-hosts
title: Creating Foreman hosts (informational only)
sidebar_label: Creating foreman hosts
---
:::info
This is part of the Foreman tutorial series. Be sure to refer to the [first tutorial](Installing-Foreman-with-Katello.md) if you have not already.
:::
:::caution
This page is informational only. For each future host, a tutorial will be given on how to create the host in that moment.
:::

## Gathering info
QEMU/KVM will have the MAC address starting with 52:54:00-, and to keep things easy the MACs last octet will be set to the numerical IP address of the server.

|Host                         | IP Address|      MAC Address|
|-----------------------------|-----------|-----------------|
|ldap1.internal.virtnet       |172.16.0.11|52:54:00:00:00:11|
|ldap2.internal.virtnet       |172.16.0.12|52:54:00:00:00:12|
|postgresql1.internal.virtnet |172.16.0.13|52:54:00:00:00:13|
|postgresql2.internal.virtnet |172.16.0.14|52:54:00:00:00:14|
|iscsitgt-nfs.internal.virtnet|172.16.0.15|52:54:00:00:00:15|
|bacula.internal.virtnet      |172.16.0.16|52:54:00:00:00:16|
|httpd1.internal.virtnet      |172.16.0.17|52:54:00:00:00:17|
|httpd2.internal.virtnet      |172.16.0.18|52:54:00:00:00:18|
|tomcat1.internal.virtnet     |172.16.0.19|52:54:00:00:00:19|
|tomcat2.internal.virtnet     |172.16.0.20|52:54:00:00:00:20|
|iptables.internal.virtnet    |172.16.0.21|52:54:00:00:00:21|
|postfix.internal.virtnet     |172.16.0.22|52:54:00:00:00:22|
|nagios.internal.virtnet      |172.16.0.23|52:54:00:00:00:23|
|syslog.internal.virtnet      |172.16.0.24|52:54:00:00:00:24|

### Declaring Arrays
Use a for-loop with the above information. First, create arrays containing the hosts, ip address, and mac addresses:
<table>
<tr>
<td>

```clike title="hosts array"
hostsArr=(
    ldap1.internal.virtnet
    ldap2.internal.virtnet
    postgresql1.internal.virtnet
    postgresql2.internal.virtnet
    iscsitgt-nfs.internal.virtnet
    bacula.internal.virtnet
    httpd1.internal.virtnet
    httpd2.internal.virtnet
    tomcat1.internal.virtnet
    tomcat2.internal.virtnet
    iptables.internal.virtnet
    postfix.internal.virtnet
    nagios.internal.virtnet
    syslog.internal.virtnet
)
```

</td>
<td>

```clike title="IP array"
IPArr=(
    172.16.0.11
    172.16.0.12
    172.16.0.13
    172.16.0.14
    172.16.0.15
    172.16.0.16
    172.16.0.17
    172.16.0.18
    172.16.0.19
    172.16.0.20
    172.16.0.21
    172.16.0.22
    172.16.0.23
    172.16.0.24
)
```

</td>
<td>

```clike title="Mac array"
macArr=(
    52:54:00:00:00:11
    52:54:00:00:00:12
    52:54:00:00:00:13
    52:54:00:00:00:14
    52:54:00:00:00:15
    52:54:00:00:00:16
    52:54:00:00:00:17
    52:54:00:00:00:18
    52:54:00:00:00:19
    52:54:00:00:00:20
    52:54:00:00:00:21
    52:54:00:00:00:22
    52:54:00:00:00:23
    52:54:00:00:00:24
)
```

</td>
</tr>
</table>

## Provisioning Hosts
Because the number of hosts are the same as IP and Mac addresses, we can "cheat" a little and just index the host array:
```bash
for i in ${!hostsArr[@]}; do \
    hammer host create \
        --name "${hostsArr[$i]}" \
        --hostgroup "centos7-group" \
        --interface "type=interface,mac=${macArr[$i]},ip=${IPArr[$i]},managed=true,primary=true,provision=true" \
        --location "Default Location"
done
```

## Testing
To view the provisioning script for the host, go the the following url in a browser:
```text
https://172.16.0.10/unattended/provision?spoof=172.16.0.11
```

### If the provisioning token has expired
When going to the spoof url an error may pop up:
```text
unattended: provisioning token for host host.internal.virtnet expired
```
To fix, update the host and set the build flag to false, then true:
```bash
hammer host update --build false --id $ID
hammer host update --build true --id $ID
```
This occurs when the provisioning/build token expires for a build. Some discussion on this can be found [here](https://community.theforeman.org/t/build-token-expired-what-is-it-for-and-how-to-configure-it/7567/3).

### Anaconda errors on package installation process
An odd issue can occur with using the repos as a medium vs. an ISO. This was reported on a recent (as of writing this article) [community post](https://community.theforeman.org/t/error-populating-transaction-anaconda-is-retrying/20634/14). The work around is to "touch" all rpms in the repo used. The curl command can be run anywhere that can reach the foreman server that has been set up. The small script has been adjusted for these tutorials.
```bash title="the following was a quick solution to just 'touch' all rpms"
for i in {a..z}; do for j in `curl http://foreman.internal.virtnet/pulp/repos/Default_Organization/Library/custom/CentOS_7/x86_64/Packages/$i/| grep href |awk '{print $2}'|cut -f2 -d">"|cut -f1 -d"<"`; do curl http://foreman.internal.virtnet/pulp/repos/Default_Organization/Library/custom/CentOS_7/x86_64/Packages/$i/$j > /dev/null; done;done
for i in `curl http://foreman.internal.virtnet/pulp/repos/Default_Organization/Library/custom/CentOS_7/x86_64/Packages/3/| grep href |awk '{print $2}'|cut -f2 -d">"|cut -f1 -d"<"`; do curl http://foreman.internal.virtnet/pulp/repos/Default_Organization/Library/custom/CentOS_7/x86_64/Packages/3/$i > /dev/null; done
```
:::note
This will take a bit to run.
:::