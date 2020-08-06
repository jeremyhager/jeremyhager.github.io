# 2020-08-05
<img src="https://raw.githubusercontent.com/jeremyhager/jeremyhager.github.io/master/images/its-working-its-working.jpg" alt="It's working, it's working!" width="256">

### Getting a Windows VM to work with libvirt

So on my last entry I mentioned trying to get Windows Server 2016 to work on libvirt. After I tried installing the GUI to connect via VNC somewhere along the way I reconnected to ssh, and sure enough a little message popped up: `Web console: https://centos8.lan:9090/ or https://192.168.86.41:9090/`. I thought this a bit odd, then tested out to see if my suspicions were correct - could I use the web console to view the GUI on my Windows Server 2016 VM? Sure enough, it had an option to install a virtual machine manager under "Applications". From there I could see that it wasn't booting to the dvd/cdrom, which needed to be changed via `virsh`: 
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
<hr>
<br>

# 2020-08-03
<img src="https://raw.githubusercontent.com/jeremyhager/jeremyhager.github.io/master/images/ihave.jpg" alt="I have no idea what I'm doing" width="256">

### Lazy logging/blogging

For now, just going to keep updating the README.md so I can keep a short list of interesting things I find on the internet that's helpful. Like a favorites bar but public.

Currently trying to learn more about Linux and going through _UNIX and Linux System Administration Handbook, <sup>5<sup>th</sup> Edition</sup>_, while following a Reddit post about how to learn Enterprise Linux basics. You can find this by IConrad [here](https://www.reddit.com/r/linuxadmin/comments/2s924h/how_did_you_get_your_start/cnnw1ma/?context=3) <sup>([archive](https://web.archive.org/web/20200803230945/https://old.reddit.com/r/linuxadmin/comments/2s924h/how_did_you_get_your_start/cnnw1ma/?context=3), in case it ever gets removed)</sup>. I'm going through the IConrad post and referencing the Linux handbook while I walk through, while trying to adjust as I go for more modern takes if possible.

One of the things I foresee  wanting to do is bin packing (containers on VMs). Why? Well, as I am learning Enterprise basics I'd like to scale the number of VMs I have from a dozen or two to several dozen if possible. Since Windows servers now come in containers I am thinking the best, most modern way of learning would this be route. It also allows me for future learning by migrating and testing these containers and VMs on a cloud provider. Finally I'm not as worried about performance, which I'd think would be a cause of concern.

### How's Linux going?

Well I tried installing CentOS 7 1908 on my brand-new computer and every time I would select to install from the GRUB loader the computer would freeze. I started looking around and sure enough, if you look up intel 630 - the integrated graphics [my CPU](https://ark.intel.com/content/www/us/en/ark/products/199271/intel-core-i5-10400-processor-12m-cache-up-to-4-30-ghz.html) uses - with Linux [people have suggested](https://access.redhat.com/discussions/3410491) to boot with the flag `i915.alpha_support=1` in the GRUB loader. I tried that to no avail with several different options, as well as attempting to [install in Text Mode](https://docs.centos.org/en-US/centos/install-guide/Text_Installation_Intro-x86/). CentOS 7 would just keep freezing after every install.

I tried Centos 7 2003 next, but no dice (same issue, would freeze). Finally, I decided to boot to a Ubuntu 20.04 flash drive to see what was going on. Sure enough, that worked just fine. I did give a pretty honest effort to get CentOS 7 to work, in hopes I could just say "I did it!" or maybe even "why yes I've used CentOS 7", but I ended up installing CentOS 8 2004 and sure enough, the GUI came up and I was able to configure my machine. I suppose in the end I decided I wanted to get my hands into Linux quick and this seemed to do the trick. Besides, I could always install the VMs as Centos 7.

So, onward with learning!

### Resources

Here are some resources I am using to get Windows Server 2016 Core installed on Centos 8 2004 as a Guest VM:

* [Automating server 2016 install with unattend.xml](https://taylor.dev/automating-windows-server-2016-installs/) <sup>_[archive](https://web.archive.org/web/20200803234543/https://taylor.dev/automating-windows-server-2016-installs/)_</sup>
* [Create media for automated unattended install of Windows 10](https://www.tenforums.com/tutorials/96683-create-media-automated-unattended-install-windows-10-a.html) <sup>_[archive](https://web.archive.org/web/20200323053542/https://www.tenforums.com/tutorials/96683-create-media-automated-unattended-install-windows-10-a.html)_</sup>
* [How to start/install GUI on RHEL 8 / CentOS 8 Linux](https://linuxconfig.org/redhat-8-start-gui) <sup>_[archive](https://web.archive.org/web/20190921143654/https://linuxconfig.org/redhat-8-start-gui)_</sup>
* [how to install and configure vnc on centOS 8](https://linuxize.com/post/how-to-install-and-configure-vnc-on-centos-8/) <sup>_[archive](https://web.archive.org/web/20200803234555/https://linuxize.com/post/how-to-install-and-configure-vnc-on-centos-8/)_</sup>

