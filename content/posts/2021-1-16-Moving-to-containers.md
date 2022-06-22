---
title: Moving to containers
author: Jeremy Hager
author_url: https://github.com/jeremyhager/
author_image_url: https://avatars2.githubusercontent.com/u/47301461?s=460&u=05e044dcce4be18b670f9e2c9bda99c511cd4009&v=4
tags: [containers]
description: Moving away from local hardware and into the cloud
---

<img src="/img/im-glory-bound.png" width="256"/>

Going to keep this short - It's time to move from classic VMs to containers.

<!--truncate-->

Currently I have [several VMs](/docs/) that are hosted from my home server. However what I *really* want to learn is not only nix administration but also cloud technologies and IaC. I still plan to try to follow the [sysadmin guide](/docs/nixadmin-guide), but from here on out going to try to set all future infrastructure under Kubernetes.

I've already done some work with pgpool and postgres - but I am going to take a step back and revert the Foreman VM to before the postgres migration so the postgres servers are on containers. This means the configuration is no longer coming from Foreman but from a container orchestration source. I plan to use Kubernetes (as mentioned) for this so when the cloud migration occurs I will have been ready. So good riddance to Foreman, I plan to start using modern technologies.

In short, I'll start to use: Kubernetes, Terraform, and of course good ol' Python. If possible, I'll side-load this to my current hypervisor so I don't have to change the work I've already done. Then, if all goes well, I'll start connecting it to some cloud services.