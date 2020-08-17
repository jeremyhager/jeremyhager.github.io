---
title: Installing a "headless" CentOS 7 VM
author: Jeremy Hager
author_url: https://github.com/jeremyhager/
author_image_url: https://avatars2.githubusercontent.com/u/47301461?s=460&u=05e044dcce4be18b670f9e2c9bda99c511cd4009&v=4
tags: [Website,Linux,Windows, Libvirt]
description: First blog post on the new wegbsite!
image: https://i.imgur.com/mErPwqL.png
---

<img src="/img/me-hoy-minoy.jpg" width="256"/>

I found a section in the Unix and Linux Sysadmin Handbook about kickstart files - something I crossed by earlier when I was trying to get CentOS 7 to work on my homebuilt computer. However I was going through the book page-by-page at the time, and like I mentioned I felt like I was spending too much time on getting CentOS 7 to work on my homebuilt hardware. 

<!--truncate-->

An interesting error I kept running into when I first was trying to get the VM to work was `ERROR Kernel arguments are only supported with location or kernel installs`.
Here is what I was running that would create this error:
```bash
sudo virt-install --connect qemu:///system --network=bridge:virbr0 --initrd-inject="home/jeremy/ks.cfg" --extra-args="ks=file:/ks.cfg console=ttys0" -n MoinMoin -f /home/imgs/moinmoin.img -r 1024 -s 12 -c /home/isos/CentOS-7-x86_64-DVD-1908.iso --os-type=centos7.0 --accelerate --hvm --nographics --boot cdrom
```
For anyone reading this that has experience with libvirt/virt-install, you probably already see what I'm doing wrong. When I searched "ERROR Kernel arguments are only supported with location or kernel installs" online with quotes, I had a hard time finding anything related to what I was doing. However I still didn't know what was going on even after reading anything I could find on the matter, so the next thing I tried was to remove the `--extra-args` portion to see if something was conflicting:
```bash
sudo virt-install --connect qemu:///system --network=bridge:virbr0 --initrd-inject="home/jeremy/ks.cfg" --extra-args="ks=file:/ks.cfg console=ttys0" -n MoinMoin -f /home/imgs/moinmoin.img -r 1024 -s 12 -c /home/isos/CentOS-7-x86_64-DVD-1908.iso --os-type=centos7.0 --accelerate --hvm --nographics --boot cdrom

ERROR    Install method does not support initrd injections.
```
So now I have this new error, which says whatever way I am trying to install doesn't support initrd injections. I tried enabling libvirt logging and even taking a look around in the source code of libvirt, but I had no luck finding my errors. After some time digging and searching, I found a comment on a serverfault page that lead me to the answer:

>slm: How were you able to get the --extra-args switch to work with --cdrom? According to the virt-install man page --extra-args only works with --location?

So there it was: I had to change `--cdrom` to `location` in order to work with `--extra-args`. Now I revised my command to the following:

```bash
sudo virt-install --connect qemu:///system --network=bridge:virbr0 --initrd-inject="/home/jeremy/ks.cfg" --extra-args="ks=file:/ks.cfg console=ttyS0" -n MoinMoin -f /home/imgs/moinmoin.img -r 1024 -s 12 --location=/home/isos/CentOS-7-x86_64-DVD-1908.iso --os-type=centos7.0 --accelerate --hvm --graphics none
```

Then boom: Install flew by and I was connected via serial console to the VM! Now in my defense to the comment slm made above, I went back to the man page of virt-install and I did not see it _explicitly_ expressed that one **cannot** use `--extra-args` with `-c` and `--extra-args` **only** works with `--location`. However it _does_ state that `--extra-args` is used to pass kernel arguments from `--location`. So I suppose one could say that if I read it more carefully perhaps I'd make the connection...however I still do wish it was a bit more explicit for those that may have a lapse in reading comprehension.

One thing I noticed is that by using `--location` I no longer needed to eject the cdrom before undefining the VM in virsh. In case you ever run into this yourself, the syntax is rather easy to eject an ISO from virsh: `change-media domain PATH --eject` where `PATH` = sda, sdb, etc. Finding what `PATH` to use is also easy: `domblklist domain`. 

#### Here are the man pages for virt-install, specifically on the arguments used
<details>
  <summary>virt-install man page: -x, --extra-args KERNELARGS</summary>
  
  #### -x, --extra-args KERNELARGS
  
     Additional kernel command line arguments to pass to the installer when performing a guest install from
     "--location". One common usage is specifying an anaconda kickstart file for automated installs, such as
     --extra-args "ks=https://myserver/my.ks"
</details>


<details>
  <summary>virt-install man page: -c, --cdrom PATH</summary>
  
  #### -c, --cdrom PATH
  
     ISO file or CDROM device to use for VM install media. After install, the the virtual CDROM device will
     remain attached to the VM, but with the ISO or host path media ejected.
</details>

<details>
  <summary>virt-install man page: -l, --location OPTIONS</summary>
  
  #### --l, --location OPTIONS
  
     Distribution tree installation source. virt-install can recognize certain distribution trees and fetches a
     bootable kernel/initrd pair to launch the install.

     --location allows things like --extra-args for kernel arguments, and using --initrd-inject. If you want to
     use those options with CDROM media, you can pass the ISO to --location as well which works for some, but
     not all, CDROM media.

     The "LOCATION" can take one of the following forms:

     https://host/path
         An HTTP server location containing an installable distribution image.

     ftp://host/path
         An FTP server location containing an installable distribution image.

     ISO Probe the ISO and extract files using 'isoinfo'

     DIRECTORY
         Path to a local directory containing an installable distribution image. Note that the directory will
         not be accessible by the guest after initial boot, so the OS installer will need another way to access
         the rest of the install media.

     Some distro specific url samples:

     Fedora/Red Hat Based
         https://download.fedoraproject.org/pub/fedora/linux/releases/29/Server/x86_64/os

     Debian
         https://ftp.us.debian.org/debian/dists/stable/main/installer-amd64/

     Ubuntu
         https://us.archive.ubuntu.com/ubuntu/dists/wily/main/installer-amd64/

     Suse
         https://download.opensuse.org/pub/opensuse/distribution/leap/42.3/repo/oss/

     Additionally, --location can take 'kernel' and 'initrd' sub options. These paths relative to the specified
     location URL/ISO that allow selecting specific files for kernel/initrd within the install tree. This can
     be useful if virt-install/ libosinfo doesn't know where to find the kernel in the specified --location.

     For example, if you have an ISO that libosinfo doesn't know about called my-unknown.iso, with a kernel at
     'kernel/fookernel' and initrd at 'kernel/fooinitrd', you can make this work with:

     --location my-unknown.iso,kernel=kernel/fookernel,initrd=kernel/fooinitrd
</details>

<details>
  <summary>virt-install man page: --initrd-inject PATH</summary>
  
  #### ---initrd-inject PATH
  
    Add PATH to the root of the initrd fetched with "--location". This can be used to run an automated install
           without requiring a network hosted kickstart file:

           --initrd-inject=/path/to/my.ks --extra-args "ks=file:/my.ks"
</details>

If you don't believe me, check out the references below and look for yourself (or just run a `man virt-intall`).

### How's Linux going?

I've got a kickstart file working and CentOS 7 is installed as a VM! I am now going to be working on installing MoinMoin, a simple wiki that I found centos.org uses as well for its wiki. This way I can write detailed instructions on everything I do.

### Resources
[Installing a virtual machine with Kickstart](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/virtualization_deployment_and_administration_guide/sect-guest_virtual_machine_installation_overview-creating_guests_with_virt_install/#sect-Guest_virtual_machine_installation_overview-virt_install-Kickstart)

[Creating a Kickstart file via RedHat](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/installation_guide/sect-kickstart-syntax)

[Creating a Kickstart file via CentOS](https://docs.centos.org/en-US/centos/install-guide/Kickstart2/)

[virt-install man page online](https://linux.die.net/man/1/virt-install)

[slm comments on ServerFault about `--extra-args` exclusivity with `--location`](https://serverfault.com/questions/257962/kvm-guest-installed-from-console-but-how-to-get-to-the-guests-console#comment263251_257962)

[On the same thread as slm - brayden points out using `--extra-args='console=ttys0'` to connect to a serial console during install of a VM](https://serverfault.com/a/400006)