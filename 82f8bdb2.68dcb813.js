(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,h=d["".concat(r,".").concat(u)]||d[u]||m[u]||o;return n?i.a.createElement(h,s(s({ref:t},c),{},{components:n})):i.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),o=(n(0),n(122)),r={title:'Installing a "headless" CentOS 7 VM',author:"Jeremy Hager",author_url:"https://github.com/jeremyhager/",author_image_url:"https://avatars2.githubusercontent.com/u/47301461?s=460&u=05e044dcce4be18b670f9e2c9bda99c511cd4009&v=4",tags:["Website","Linux","Windows","Libvirt"],description:"Trying to get CentOS 7 to work with the serial console and start documentation",image:"https://i.imgur.com/mErPwqL.png"},s={permalink:"/blog/2020/08/11/headless-centos7-vm",editUrl:"https://github.com/jeremyhager/yugawa-website/edit/master/blog/2020-08-11-headless-centos7-vm.md",source:"@site/blog\\2020-08-11-headless-centos7-vm.md",description:"Trying to get CentOS 7 to work with the serial console and start documentation",date:"2020-08-11T00:00:00.000Z",tags:[{label:"Website",permalink:"/blog/tags/website"},{label:"Linux",permalink:"/blog/tags/linux"},{label:"Windows",permalink:"/blog/tags/windows"},{label:"Libvirt",permalink:"/blog/tags/libvirt"}],title:'Installing a "headless" CentOS 7 VM',readingTime:5.39,truncated:!0,prevItem:{title:"Got a new website up and running!",permalink:"/blog/2020/08/16/new-website"},nextItem:{title:"Getting a Windows VM to work with libvirt",permalink:"/blog/2020/08/05/windows-vm-with-libvirt"}},l=[{value:"How&#39;s Linux going?",id:"hows-linux-going",children:[]},{value:"Resources",id:"resources",children:[]}],c={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("img",{src:"/img/me-hoy-minoy.jpg",width:"256"}),Object(o.b)("p",null,"I found a section in the Unix and Linux Sysadmin Handbook about kickstart files - something I crossed by earlier when I was trying to get CentOS 7 to work on my homebuilt computer. However I was going through the book page-by-page at the time, and like I mentioned I felt like I was spending too much time on getting CentOS 7 to work on my homebuilt hardware. "),Object(o.b)("p",null,"An interesting error I kept running into when I first was trying to get the VM to work was ",Object(o.b)("inlineCode",{parentName:"p"},"ERROR Kernel arguments are only supported with location or kernel installs"),".\nHere is what I was running that would create this error:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'sudo virt-install --connect qemu:///system --network=bridge:virbr0 --initrd-inject="home/jeremy/ks.cfg" --extra-args="ks=file:/ks.cfg console=ttys0" -n MoinMoin -f /home/imgs/moinmoin.img -r 1024 -s 12 -c /home/isos/CentOS-7-x86_64-DVD-1908.iso --os-type=centos7.0 --accelerate --hvm --nographics --boot cdrom\n')),Object(o.b)("p",null,"For anyone reading this that has experience with libvirt/virt-install, you probably already see what I'm doing wrong. When I searched \"ERROR Kernel arguments are only supported with location or kernel installs\" online with quotes, I had a hard time finding anything related to what I was doing. However I still didn't know what was going on even after reading anything I could find on the matter, so the next thing I tried was to remove the ",Object(o.b)("inlineCode",{parentName:"p"},"--extra-args")," portion to see if something was conflicting:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'sudo virt-install --connect qemu:///system --network=bridge:virbr0 --initrd-inject="home/jeremy/ks.cfg" --extra-args="ks=file:/ks.cfg console=ttys0" -n MoinMoin -f /home/imgs/moinmoin.img -r 1024 -s 12 -c /home/isos/CentOS-7-x86_64-DVD-1908.iso --os-type=centos7.0 --accelerate --hvm --nographics --boot cdrom\n\nERROR    Install method does not support initrd injections.\n')),Object(o.b)("p",null,"So now I have this new error, which says whatever way I am trying to install doesn't support initrd injections. I tried enabling libvirt logging and even taking a look around in the source code of libvirt, but I had no luck finding my errors. After some time digging and searching, I found a comment on a serverfault page that lead me to the answer:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"slm: How were you able to get the --extra-args switch to work with --cdrom? According to the virt-install man page --extra-args only works with --location?")),Object(o.b)("p",null,"So there it was: I had to change ",Object(o.b)("inlineCode",{parentName:"p"},"--cdrom")," to ",Object(o.b)("inlineCode",{parentName:"p"},"location")," in order to work with ",Object(o.b)("inlineCode",{parentName:"p"},"--extra-args"),". Now I revised my command to the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'sudo virt-install --connect qemu:///system --network=bridge:virbr0 --initrd-inject="/home/jeremy/ks.cfg" --extra-args="ks=file:/ks.cfg console=ttyS0" -n MoinMoin -f /home/imgs/moinmoin.img -r 1024 -s 12 --location=/home/isos/CentOS-7-x86_64-DVD-1908.iso --os-type=centos7.0 --accelerate --hvm --graphics none\n')),Object(o.b)("p",null,"Then boom: Install flew by and I was connected via serial console to the VM! Now in my defense to the comment slm made above, I went back to the man page of virt-install and I did not see it ",Object(o.b)("em",{parentName:"p"},"explicitly")," expressed that one ",Object(o.b)("strong",{parentName:"p"},"cannot")," use ",Object(o.b)("inlineCode",{parentName:"p"},"--extra-args")," with ",Object(o.b)("inlineCode",{parentName:"p"},"-c")," and ",Object(o.b)("inlineCode",{parentName:"p"},"--extra-args")," ",Object(o.b)("strong",{parentName:"p"},"only")," works with ",Object(o.b)("inlineCode",{parentName:"p"},"--location"),". However it ",Object(o.b)("em",{parentName:"p"},"does")," state that ",Object(o.b)("inlineCode",{parentName:"p"},"--extra-args")," is used to pass kernel arguments from ",Object(o.b)("inlineCode",{parentName:"p"},"--location"),". So I suppose one could say that if I read it more carefully perhaps I'd make the connection...however I still do wish it was a bit more explicit for those that may have a lapse in reading comprehension."),Object(o.b)("p",null,"One thing I noticed is that by using ",Object(o.b)("inlineCode",{parentName:"p"},"--location")," I no longer needed to eject the cdrom before undefining the VM in virsh. In case you ever run into this yourself, the syntax is rather easy to eject an ISO from virsh: ",Object(o.b)("inlineCode",{parentName:"p"},"change-media domain PATH --eject")," where ",Object(o.b)("inlineCode",{parentName:"p"},"PATH")," = sda, sdb, etc. Finding what ",Object(o.b)("inlineCode",{parentName:"p"},"PATH")," to use is also easy: ",Object(o.b)("inlineCode",{parentName:"p"},"domblklist domain"),". "),Object(o.b)("h4",{id:"here-are-the-man-pages-for-virt-install-specifically-on-the-arguments-used"},"Here are the man pages for virt-install, specifically on the arguments used"),Object(o.b)("details",null,Object(o.b)("summary",null,"virt-install man page: -x, --extra-args KERNELARGS"),'#### -x, --extra-args KERNELARGS Additional kernel command line arguments to pass to the installer when performing a guest install from "--location". One common usage is specifying an anaconda kickstart file for automated installs, such as --extra-args "ks=https://myserver/my.ks"'),Object(o.b)("details",null,Object(o.b)("summary",null,"virt-install man page: -c, --cdrom PATH"),"#### -c, --cdrom PATH ISO file or CDROM device to use for VM install media. After install, the the virtual CDROM device will remain attached to the VM, but with the ISO or host path media ejected."),Object(o.b)("details",null,Object(o.b)("summary",null,"virt-install man page: -l, --location OPTIONS"),"#### --l, --location OPTIONS Distribution tree installation source. virt-install can recognize certain distribution trees and fetches a bootable kernel/initrd pair to launch the install.",Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{})," --location allows things like --extra-args for kernel arguments, and using --initrd-inject. If you want to\n use those options with CDROM media, you can pass the ISO to --location as well which works for some, but\n not all, CDROM media.\n\n The \"LOCATION\" can take one of the following forms:\n\n https://host/path\n     An HTTP server location containing an installable distribution image.\n\n ftp://host/path\n     An FTP server location containing an installable distribution image.\n\n ISO Probe the ISO and extract files using 'isoinfo'\n\n DIRECTORY\n     Path to a local directory containing an installable distribution image. Note that the directory will\n     not be accessible by the guest after initial boot, so the OS installer will need another way to access\n     the rest of the install media.\n\n Some distro specific url samples:\n\n Fedora/Red Hat Based\n     https://download.fedoraproject.org/pub/fedora/linux/releases/29/Server/x86_64/os\n\n Debian\n     https://ftp.us.debian.org/debian/dists/stable/main/installer-amd64/\n\n Ubuntu\n     https://us.archive.ubuntu.com/ubuntu/dists/wily/main/installer-amd64/\n\n Suse\n     https://download.opensuse.org/pub/opensuse/distribution/leap/42.3/repo/oss/\n\n Additionally, --location can take 'kernel' and 'initrd' sub options. These paths relative to the specified\n location URL/ISO that allow selecting specific files for kernel/initrd within the install tree. This can\n be useful if virt-install/ libosinfo doesn't know where to find the kernel in the specified --location.\n\n For example, if you have an ISO that libosinfo doesn't know about called my-unknown.iso, with a kernel at\n 'kernel/fookernel' and initrd at 'kernel/fooinitrd', you can make this work with:\n\n --location my-unknown.iso,kernel=kernel/fookernel,initrd=kernel/fooinitrd\n"))),Object(o.b)("details",null,Object(o.b)("summary",null,"virt-install man page: --initrd-inject PATH"),'#### ---initrd-inject PATH Add PATH to the root of the initrd fetched with "--location". This can be used to run an automated install without requiring a network hosted kickstart file:',Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'       --initrd-inject=/path/to/my.ks --extra-args "ks=file:/my.ks"\n'))),Object(o.b)("p",null,"If you don't believe me, check out the references below and look for yourself (or just run a ",Object(o.b)("inlineCode",{parentName:"p"},"man virt-intall"),")."),Object(o.b)("h3",{id:"hows-linux-going"},"How's Linux going?"),Object(o.b)("p",null,"I've got a kickstart file working and CentOS 7 is installed as a VM! I am now going to be working on installing MoinMoin, a simple wiki that I found centos.org uses as well for its wiki. This way I can write detailed instructions on everything I do."),Object(o.b)("h3",{id:"resources"},"Resources"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/virtualization_deployment_and_administration_guide/sect-guest_virtual_machine_installation_overview-creating_guests_with_virt_install/#sect-Guest_virtual_machine_installation_overview-virt_install-Kickstart"}),"Installing a virtual machine with Kickstart")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/installation_guide/sect-kickstart-syntax"}),"Creating a Kickstart file via RedHat")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.centos.org/en-US/centos/install-guide/Kickstart2/"}),"Creating a Kickstart file via CentOS")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://linux.die.net/man/1/virt-install"}),"virt-install man page online")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://serverfault.com/questions/257962/kvm-guest-installed-from-console-but-how-to-get-to-the-guests-console#comment263251_257962"}),"slm comments on ServerFault about ",Object(o.b)("inlineCode",{parentName:"a"},"--extra-args")," exclusivity with ",Object(o.b)("inlineCode",{parentName:"a"},"--location"))),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://serverfault.com/a/400006"}),"On the same thread as slm - brayden points out using ",Object(o.b)("inlineCode",{parentName:"a"},"--extra-args='console=ttys0'")," to connect to a serial console during install of a VM")))}b.isMDXComponent=!0}}]);