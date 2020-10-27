(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=o,h=u["".concat(a,".").concat(b)]||u[b]||m[b]||i;return n?r.a.createElement(h,c(c({ref:t},l),{},{components:n})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var o=n(2),r=n(6),i=(n(0),n(122)),a={title:"Getting a Windows VM to work with libvirt",author:"Jeremy Hager",author_url:"https://github.com/jeremyhager/",author_image_url:"https://avatars2.githubusercontent.com/u/47301461?s=460&u=05e044dcce4be18b670f9e2c9bda99c511cd4009&v=4",tags:["Website","Linux","Windows","Libvirt"],description:"Trying to get autounattend.xml to work with a Windows VM and testing out libvirt in general",image:"https://i.imgur.com/mErPwqL.png"},c={permalink:"/blog/2020/08/05/windows-vm-with-libvirt",editUrl:"https://github.com/jeremyhager/yugawa-website/edit/master/blog/2020-08-05-windows-vm-with-libvirt.md",source:"@site/blog\\2020-08-05-windows-vm-with-libvirt.md",description:"Trying to get autounattend.xml to work with a Windows VM and testing out libvirt in general",date:"2020-08-05T00:00:00.000Z",tags:[{label:"Website",permalink:"/blog/tags/website"},{label:"Linux",permalink:"/blog/tags/linux"},{label:"Windows",permalink:"/blog/tags/windows"},{label:"Libvirt",permalink:"/blog/tags/libvirt"}],title:"Getting a Windows VM to work with libvirt",readingTime:4.24,truncated:!0,prevItem:{title:'Installing a "headless" CentOS 7 VM',permalink:"/blog/2020/08/11/headless-centos7-vm"},nextItem:{title:"Lazy logging/blogging",permalink:"/blog/2020/08/03/lazy-logging-blogging"}},s=[{value:"How&#39;s Linux going?",id:"hows-linux-going",children:[]},{value:"Resources",id:"resources",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("img",{src:"/img/its-working-its-working.jpg",width:"256"}),Object(i.b)("p",null,"So on my last entry I mentioned trying to get Windows Server 2016 to work on libvirt."),Object(i.b)("p",null,"After I tried installing the GUI to connect via VNC somewhere along the way I reconnected to ssh, and sure enough a little message popped up: ",Object(i.b)("inlineCode",{parentName:"p"},"Web console: https://centos8.lan:9090/ or https://192.168.86.41:9090/"),'. I thought this a bit odd, then tested out to see if my suspicions were correct - could I use the web console to view the GUI on my Windows Server 2016 VM? Sure enough, it had an option to install a virtual machine manager under "Applications". From there I could see that it wasn\'t booting to the dvd/cdrom, which needed to be changed via ',Object(i.b)("inlineCode",{parentName:"p"},"virsh"),": "),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"destroy win2k16-docker\nedit win2k16-docker\n#find boot parameters\n/boot\n#change '<boot dev='hd'/>' to '<boot dev='cdrom'/>\n#write changes\nstart win2k16-docker\n")),Object(i.b)("p",null,"Now that that was done, I ran into an error I haven't actually experienced before: ",Object(i.b)("inlineCode",{parentName:"p"},"Windows Cannot find Microsoft software license terms"),". Quick checksum on my ISO both on the windows machine where I created an unattend.xml and within centos8 itself revealed they were the same hash. So, no corrupted ISO files - perhaps when it was mounted it was corrupted? But then ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://techcommunity.microsoft.com/t5/windows-server-for-it-pro/windows-cannot-find-microsoft-software-license-terms-during/m-p/167986/highlight/true#M530"}),"I found the answer"),": The default start RAM was 512KiB, which apparently needs at least 700KiB. I decided from here to increase the memory via ",Object(i.b)("inlineCode",{parentName:"p"},"virsh")," to 2048 MiB, as it was likely I would reach that amount quickly anyway:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"destroy win2k16-docker\nedit win2k16-docker\n/<memory\n#change memory from 512KiB to 2048 MiB\n#before: <memory unit='KiB'>2097152</memory>\n#after: <memory unit='MiB'>2048</memory>\n#write changes\nstart win2k16-docker\n")),Object(i.b)("p",null,"I watched on the web console as the server booted, installed, configured, then prompted me for logon. I logged on with the preconfigured password - everything was working! But I quickly realized my vm was on a different network, and I couldn't connect via Enter-PSSession. Even opening the ",Object(i.b)("inlineCode",{parentName:"p"},"TrustedHosts")," to ",Object(i.b)("inlineCode",{parentName:"p"},"*"),", I wasn't getting anywhere."),Object(i.b)("p",null,"I then read into libvirt more and found that by default, the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://wiki.libvirt.org/page/VirtualNetworking#Network_Address_Translation_.28NAT.29"}),"vswitch is in NAT mode"),". At this pointed I needed to change the switch so I could bridge the network from my home LAN into vm-space. I found a guide online by RedHat explaining the procedure - fair warning, PDF: ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/pdf/configuring_and_managing_virtualization/Red_Hat_Enterprise_Linux-8-Configuring_and_managing_virtualization-en-US.pdf#page=168&zoom=100,70,-820"}),"RedHat PDF Guide"),". That in turn lead me to configuring a bridge, as can be found on their documentation site ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_and_managing_networking/configuring-a-network-bridge_configuring-and-managing-networking#configuring-a-network-bridge-using-nmcli-commands_configuring-a-network-bridge"}),"here"),". As I already had a bridge that existed, I decided to configure it to connect to my PCIe and integrated NICs:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"nmcli device status\nsudo nmcli connection modify eno1 master virbr0\nsudo nmcli connection modify enp2s0 master virbr0\n#changed the connection type to auto, didn't feel like assigning static just yet\nsudo nmcli connection modify virbr0 ipv4.method auto\nsudo nmcli connection up virvr0\nnmcli device\nsudo nmcli connection modify virbr0 connection.autoconnect-slaves 1\nsudo nmcli connection up virbr0\n\n#time to switch the connection for the windows vm from the default to virbr0\nsudo virsh --connect qemu:///system\nexit\nsudo virt-xml win2k16-docker --edit --network bridge=virbr0\n")),Object(i.b)("p",null,"Then my ssh session dropped, and after a quick minute my server got a new IP address (after confirming with a ",Object(i.b)("inlineCode",{parentName:"p"},"ping")," from my windows machine). I then ssh'd back into centos8 and\nalso changed the ip of the web manager. From there, I went back to the windows machine, which still had the old IP scheme and not my home lan. This is after ",Object(i.b)("inlineCode",{parentName:"p"},"ipconfig /release")," and ",Object(i.b)("inlineCode",{parentName:"p"},"ipconfig /renew")," as well. I realized I hadn't rebooted the vm at this point so I thought perhaps that was issue:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"#in virsh\nsudo destroy win2k16-docker\nsudo start win2k16-docker\n")),Object(i.b)("p",null,"Voila, my 2016 server reported that it was now using the home LAN IP. Time to see if I can connect from my windows machine:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-PowerShell"}),"Enter-PSSession -ComputerName $ServerIP -Credential (Get-Credential)\n[$ServerIP]:\n")),Object(i.b)("p",null,"Yay it works! Time to remove the current server instance and test to see if I can get this to work completely touchless."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"#virsh\nundefine win2k16-docker --remove-all-storage\nexit\nsudo virt-install --connect qemu:///system -n win2k16-docker -r 768 -f /home/imgs/win2k16-docker.img -s 32 -c /home/isos/win2k16-unattend.iso --os-type win2k16 --boot cdrom --network=bridge=virbr0 --accelerate --hvm --vnc\n^c\n")),Object(i.b)("p",null,"Went to the web console to check to see how it was doing. Sure enough, installing on its own just fine. However seemed that the machine  turned off by itself (probably need to enable autostart later on), so I had to restart it manually: ",Object(i.b)("inlineCode",{parentName:"p"},"start win2k16-docker"),". Once it was up, I decided to see if I could view the dhcp info without logging on: ",Object(i.b)("inlineCode",{parentName:"p"},"net-dhcp-leases default")," but that wouldn't list, so I just checked my router info. Sure enough I found a new IP, and ran a connect to see if the base install would work:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-PowerShell"}),"Enter-PSSession -ComputerName $NewServer_IP -Credential (Get-Credential)\n[$ServerIP]:\n")),Object(i.b)("p",null,"It's working now! Time to move on to working with Linux again."),Object(i.b)("h3",{id:"hows-linux-going"},"How's Linux going?"),Object(i.b)("p",null,"As seen above, I made some good progress and discoveries with ",Object(i.b)("inlineCode",{parentName:"p"},"virsh"),". However I spent a considerable amount of time (and good progress nonetheless!) on getting server 2016 to work. I'm excited to move forward with Linux."),Object(i.b)("h3",{id:"resources"},"Resources"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://unix.stackexchange.com/a/65222"}),"Use rsync to view copy progress"))))}d.isMDXComponent=!0}}]);