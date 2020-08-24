---
title: Polishing the website
author: Jeremy Hager
author_url: https://github.com/jeremyhager/
author_image_url: https://avatars2.githubusercontent.com/u/47301461?s=460&u=05e044dcce4be18b670f9e2c9bda99c511cd4009&v=4
tags: [Website, Foreman, Katello]
description: Installing Foreman and Katello
---

The website is almost finished! I feel I can start focusing on Linux again. I also read about RedHat Developer Subscription, which allows you to use RedHat for free, with some limitations of course.

<!--truncate-->

I think I'll continue using CentOS for now though. My thoughts are that forcing myself to learn the free and open versions of everything will help my understanding of how each component and package works with each other. Plus, since it's all free and I can use however many VMs, CPU cores, etc. I want in my environment.

I was able to install Foreman, but I did run into a small issue:
```
Unable to resolve forward DNS for foreman.internal.virtnet
Your system does not meet configuration criteria
```

However a quick google lead me to a [quick fix:](https://projects.theforeman.org/issues/23754#note-2)
>Tina Ryn: And adding server name and ip to /etc/hosts worked as a bypass

And so that's just what I did, added a static IP address and added `foreman.internal.virtnet` to `/etc/hosts`. Another rerun of Foreman install and it started working. After that I needed to open the ports, but that was quick too. Finally, we are in business!

Once Foreman is configured I'll be able to move on to DHCP and DNS, and should be able to remove that pesky static `hosts` entry.

However, after I installed Foreman I realized quickly I'd want [Katello](https://www.theforeman.org/plugins/katello/) and all of the capabilities it brings (at this point namely: [errata](https://theforeman.org/plugins/katello/3.16/user_guide/errata/index.html) and [Smart Proxies](https://theforeman.org/plugins/katello/3.16/user_guide/smart_proxies/index.html)).

The install was fairly straight-forward as per Katello's [install instructions](https://theforeman.org/plugins/katello/3.16/installation/index.html).

### How's Linux going?

I'm finally able to move away from configuring the website to getting back with Linux. I didn't even include this section last time because there wasn't really anything Linux-y that I did at the time of posting that blog.

Onward with configuring Foreman and Katello!