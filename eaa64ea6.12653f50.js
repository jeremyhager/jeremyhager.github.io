(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(120)),c={id:"base-vm-server-setup",title:"Base vm server setup",sidebar_label:"Base vm server setup"},i={unversionedId:"base-vm-server-setup",id:"base-vm-server-setup",isDocsHomePage:!1,title:"Base vm server setup",description:"Create a VM",source:"@site/docs\\base-vm-server-setup.md",slug:"/base-vm-server-setup",permalink:"/docs/base-vm-server-setup",editUrl:"https://github.com/jeremyhager/yugawa-website/edit/master/docs/base-vm-server-setup.md",version:"current",sidebar_label:"Base vm server setup",sidebar:"docs",previous:{title:"DevOps Guide",permalink:"/docs/devops-guide"},next:{title:"Installing Foreman with Katello",permalink:"/docs/installing-foreman-with-katello"}},s=[{value:"Create a VM",id:"create-a-vm",children:[]},{value:"Configure VM",id:"configure-vm",children:[]},{value:"Wrapping up",id:"wrapping-up",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"create-a-vm"},"Create a VM"),Object(o.b)("p",null,"On the hypervisor run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'sudo virt-install --connect qemu:///system \\\n     --network=bridge:virbr0 \\ #this is the name of the network "switch" to connect to\n     --initrd-inject="/home/jeremy/ks.cfg" \\ #inject the kickstart file to the vm\n     --extra-args="ks=file:/ks.cfg console=ttyS0" \\ #boot args: use the kickstart file and connect to the console\n     -n $serverName \\ #the name of the vm\n     -f /home/imgs/$serverName.img \\ #location and name of vm image\n     -r 1024 \\ #startup ram\n     -s 12 \\ #hard drive size\n     --location=/home/isos/CentOS-7-x86_64-DVD-1908.iso \\ /#iso location to boot from\n     --os-type=centos7.0 \\ #os type info\n     --accelerate --hvm --graphics none #accelerate: use KVM, hvm: full hardware virtualization, graphics none: no grahpics support\n')),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This tutorial assumes ssh has been enabled via the kickstart file."))),Object(o.b)("h3",{id:"configure-vm"},"Configure VM"),Object(o.b)("h4",{id:"update"},"Update"),Object(o.b)("p",null,"Once completed, the Anaconda installer should pop up and afterward a login prompt to ",Object(o.b)("inlineCode",{parentName:"p"},"localhost"),". Login as the user set up in the kickstart file. Next thing to do is update."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo yum -y update\n")),Object(o.b)("h4",{id:"change-hostname"},"Change hostname"),Object(o.b)("p",null,"Change the hostname to something easy to remember and meaningful. For example, if the vm is hosting foreman name it ",Object(o.b)("inlineCode",{parentName:"p"},"foreman.internal.virtnet"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo hostnamectl set-hostname new-hostname.internal.virtnet\n")),Object(o.b)("p",null,"Give the vm a quick reboot to ensure changes are set:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo halt --reboot\n")),Object(o.b)("h4",{id:"set-ip-address"},"Set IP address"),Object(o.b)("p",null,"First, get the interface that the vm is using to communicate externally:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"ip addr\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Most likely this will be ",Object(o.b)("inlineCode",{parentName:"em"},"eth0"),".")),Object(o.b)("p",null,"Now add the following content to the interface config file (be sure to ",Object(o.b)("inlineCode",{parentName:"p"},"sudo"),"!):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="/etc/sysconfig/network-scripts/ifcfg-eth0"',title:'"/etc/sysconfig/network-scripts/ifcfg-eth0"'}),'BOOTPROTO="static" #Switch to static IP\nIPADDR=192.168.86.10 #Set the IP address.\nNETMASK=255.255.255.0 #Subnet mask\nNETWORK=192.168.86.0 #Network ID\nGATEWAY=192.168.86.1 #Gateway\nBRAODCAST=192.168.1.255 #Broadcast\nDNS1=192.168.86.1 #Internal DNS server\nDNS2=8.8.8.8 #External DNS server\n')),Object(o.b)("p",null,"Once the changes are complete, restart the network:"),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Heads up!")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you are connected via ssh you will likely loose your connection. Be sure there is a way to access the vm without ssh (eg. using the console on the hypervisor) incase of a malformed network config file."))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo systemctl restart network\n")),Object(o.b)("h3",{id:"wrapping-up"},"Wrapping up"),Object(o.b)("p",null,"You should now have a fully updated vm with the appropriate amount of ram, storage, and cpu power. Along with ssh enabled and a hostname to boot. Specific how-tos can be viewed on the sidebar."))}p.isMDXComponent=!0},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,d=b["".concat(c,".").concat(u)]||b[u]||m[u]||o;return n?r.a.createElement(d,i(i({ref:t},l),{},{components:n})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);