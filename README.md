# 2020-08-03
<img src="https://raw.githubusercontent.com/jeremyhager/jeremyhager.github.io/master/images/ihave.jpg" alt="I have no idea what I'm doing" width="250">

### Lazy logging/blogging

For now, just going to keep updating the README.md so I can keep a short list of interesting things I find on the internet that's helpful. Like a favorites bar but public.

Currently trying to learn more about Linux and going through _UNIX and Linux System Administration Handbook, <sup>5<sup>th</sup> Edition</sup>_, while following a Reddit post about how to learn Enterprise Linux basics. You can find this by IConrad [here](https://www.reddit.com/r/linuxadmin/comments/2s924h/how_did_you_get_your_start/cnnw1ma/?context=3) <sup>([archive](https://web.archive.org/web/20200803230945/https://old.reddit.com/r/linuxadmin/comments/2s924h/how_did_you_get_your_start/cnnw1ma/?context=3), in case it ever gets removed)</sup>. I'm going through the IConrad post and referencing the Linux handbook while I walk through, while trying to adjust as I go for more modern takes if possible.

One of the things I forsee wanting to do is bin packing (containers on VMs). Why? Well, as I am learning Enterprise basics I'd like to scale the number of VMs I have from a dozen or two to several dozen if possible. Since Windows servers now come in containers I am thinking the best, most modern way of learning would this be route. It also allows me for future learning by migrating and testing these containers and VMs on a cloud provider. Finally I'm not as worried about performance, which I'd think would be a cause of concern.

### How's Linux going?

Well I tried installing CentOS 7 1908 on my brand-new computer and every time I would select to install from the GRUB loader the computer would freeze. I started looking around and sure enough, if you look up intel 630 - the integrated grahpics [my CPU](https://ark.intel.com/content/www/us/en/ark/products/199271/intel-core-i5-10400-processor-12m-cache-up-to-4-30-ghz.html) uses - with Linux [people have suggested](https://access.redhat.com/discussions/3410491) to boot with the flag `i915.alpha_support=1` in the GRUB loader. I tried that to no avail with several different options, as well as attempting to [install in Text Mode](https://docs.centos.org/en-US/centos/install-guide/Text_Installation_Intro-x86/). CentOS 7 would just keep freezing after every install.

I tried Centos 7 2003 next, but no dice (same issue, would freeze). Finally I decided to boot to a Ubuntu 20.04 flash drive to see what was going on. Sure enough, that worked just fine. I did give a pretty honest effort to get CentOS 7 to work, in hopes I could just say "I did it!" or maybe even "why yes I've used CentOS 7", but I ended up installing CentOS 8 2004 and sure enough, the GUI came up and I was able to configure my machine. I suppose in the end I decided I wanted to get my hands into Linux quick and this seemed to do the trick. Besides, I could always install the VMs as Centos 7.

So, onward with learning!

### Resources

Here are some resources I am using to get Windows Server 2016 Core installed on Centos 8 2004 as a Guest VM:

* [Automating server 2016 install with unattend.xml](https://taylor.dev/automating-windows-server-2016-installs/) <sup>_[archive](https://web.archive.org/web/20200803234543/https://taylor.dev/automating-windows-server-2016-installs/)_</sup>
* [Create media for automated unattended install of Windows 10](https://www.tenforums.com/tutorials/96683-create-media-automated-unattended-install-windows-10-a.html) <sup>_[archive](https://web.archive.org/web/20200323053542/https://www.tenforums.com/tutorials/96683-create-media-automated-unattended-install-windows-10-a.html)_</sup>
* [How to start/install GUI on RHEL 8 / CentOS 8 Linux](https://linuxconfig.org/redhat-8-start-gui) <sup>_[archive](https://web.archive.org/web/20190921143654/https://linuxconfig.org/redhat-8-start-gui)_</sup>
* [how to install and configure vnc on centOS 8](https://linuxize.com/post/how-to-install-and-configure-vnc-on-centos-8/) <sup>_[archive](https://web.archive.org/web/20200803234555/https://linuxize.com/post/how-to-install-and-configure-vnc-on-centos-8/)_</sup>

