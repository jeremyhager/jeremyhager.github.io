---
title: Getting a Windows VM to work with libvirt
author: Jeremy Hager
author_url: https://github.com/jeremyhager/
author_image_url: https://avatars2.githubusercontent.com/u/47301461?s=460&u=05e044dcce4be18b670f9e2c9bda99c511cd4009&v=4
tags: [Website,Linux,Windows, Libvirt]
description: Trying to get autounattend.xml to work with a Windows VM and testing out libvirt in general
image: https://i.imgur.com/mErPwqL.png
---

<img src="/img/its-working-its-working.jpg" width="256"/>

So on my last entry I mentioned trying to get Windows Server 2016 to work on libvirt.
<!--truncate-->
After I tried installing the GUI to connect via VNC somewhere along the way I reconnected to ssh, and sure enough a little message popped up: `Web console: https://centos8.lan:9090/ or https://192.168.86.41:9090/`. I thought this a bit odd, then tested out to see if my suspicions were correct - could I use the web console to view the GUI on my Windows Server 2016 VM? Sure enough, it had an option to install a virtual machine manager under "Applications". From there I could see that it wasn't booting to the dvd/cdrom, which needed to be changed via `virsh`: 
```bash
destroy win2k16-docker
edit win2k16-docker
#find boot parameters
/boot
#change '<boot dev='hd'/>' to '<boot dev='cdrom'/>
#write changes
start win2k16-docker
```
Now that that was done, I ran into an error I haven't actually experienced before: `Windows Cannot find Microsoft software license terms`. Quick checksum on my ISO both on the windows machine where I created an unattend.xml and within centos8 itself revealed they were the same hash. So, no corrupted ISO files - perhaps when it was mounted it was corrupted? But then [I found the answer](https://techcommunity.microsoft.com/t5/windows-server-for-it-pro/windows-cannot-find-microsoft-software-license-terms-during/m-p/167986/highlight/true#M530): The default start RAM was 512KiB, which apparently needs at least 700KiB. I decided from here to increase the memory via `virsh` to 2048 MiB, as it was likely I would reach that amount quickly anyway:

```bash
destroy win2k16-docker
edit win2k16-docker
/<memory
#change memory from 512KiB to 2048 MiB
#before: <memory unit='KiB'>2097152</memory>
#after: <memory unit='MiB'>2048</memory>
#write changes
start win2k16-docker
```
I watched on the web console as the server booted, installed, configured, then prompted me for logon. I logged on with the preconfigured password - everything was working! But I quickly realized my vm was on a different network, and I couldn't connect via Enter-PSSession. Even opening the `TrustedHosts` to `*`, I wasn't getting anywhere.

I then read into libvirt more and found that by default, the [vswitch is in NAT mode](https://wiki.libvirt.org/page/VirtualNetworking#Network_Address_Translation_.28NAT.29). At this pointed I needed to change the switch so I could bridge the network from my home LAN into vm-space. I found a guide online by RedHat explaining the procedure - fair warning, PDF: [RedHat PDF Guide](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/pdf/configuring_and_managing_virtualization/Red_Hat_Enterprise_Linux-8-Configuring_and_managing_virtualization-en-US.pdf#page=168&zoom=100,70,-820). That in turn lead me to configuring a bridge, as can be found on their documentation site [here](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_and_managing_networking/configuring-a-network-bridge_configuring-and-managing-networking#configuring-a-network-bridge-using-nmcli-commands_configuring-a-network-bridge). As I already had a bridge that existed, I decided to configure it to connect to my PCIe and integrated NICs:

```bash
nmcli device status
sudo nmcli connection modify eno1 master virbr0
sudo nmcli connection modify enp2s0 master virbr0
#changed the connection type to auto, didn't feel like assigning static just yet
sudo nmcli connection modify virbr0 ipv4.method auto
sudo nmcli connection up virvr0
nmcli device
sudo nmcli connection modify virbr0 connection.autoconnect-slaves 1
sudo nmcli connection up virbr0

#time to switch the connection for the windows vm from the default to virbr0
sudo virsh --connect qemu:///system
exit
sudo virt-xml win2k16-docker --edit --network bridge=virbr0
```
Then my ssh session dropped, and after a quick minute my server got a new IP address (after confirming with a `ping` from my windows machine). I then ssh'd back into centos8 and 
also changed the ip of the web manager. From there, I went back to the windows machine, which still had the old IP scheme and not my home lan. This is after `ipconfig /release` and `ipconfig /renew` as well. I realized I hadn't rebooted the vm at this point so I thought perhaps that was issue:
```bash
#in virsh
sudo destroy win2k16-docker
sudo start win2k16-docker
```
Voila, my 2016 server reported that it was now using the home LAN IP. Time to see if I can connect from my windows machine:
```PowerShell
Enter-PSSession -ComputerName $ServerIP -Credential (Get-Credential)
[$ServerIP]:
```
Yay it works! Time to remove the current server instance and test to see if I can get this to work completely touchless.

```bash
#virsh
undefine win2k16-docker --remove-all-storage
exit
sudo virt-install --connect qemu:///system -n win2k16-docker -r 768 -f /home/imgs/win2k16-docker.img -s 32 -c /home/isos/win2k16-unattend.iso --os-type win2k16 --boot cdrom --network=bridge=virbr0 --accelerate --hvm --vnc
^c
```
Went to the web console to check to see how it was doing. Sure enough, installing on its own just fine. However seemed that the machine  turned off by itself (probably need to enable autostart later on), so I had to restart it manually: `start win2k16-docker`. Once it was up, I decided to see if I could view the dhcp info without logging on: `net-dhcp-leases default` but that wouldn't list, so I just checked my router info. Sure enough I found a new IP, and ran a connect to see if the base install would work:

```PowerShell
Enter-PSSession -ComputerName $NewServer_IP -Credential (Get-Credential)
[$ServerIP]:
```

It's working now! Time to move on to working with Linux again.

### How's Linux going?
As seen above, I made some good progress and discoveries with `virsh`. However I spent a considerable amount of time (and good progress nonetheless!) on getting server 2016 to work. I'm excited to move forward with Linux.

### Resources
* [Use rsync to view copy progress](https://unix.stackexchange.com/a/65222)