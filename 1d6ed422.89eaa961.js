(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(l,".").concat(u)]||p[u]||s[u]||c;return n?r.a.createElement(m,i(i({ref:t},b),{},{components:n})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var b=2;b<c;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),c=(n(0),n(122)),l={id:"dns-dhcp",title:"dns-dhcp configuration",sidebar_label:"dns-dhcp Configuration"},i={unversionedId:"dns-dhcp",id:"dns-dhcp",isDocsHomePage:!1,title:"dns-dhcp configuration",description:"Hardware Info",source:"@site/docs/dns-dhcp.md",slug:"/dns-dhcp",permalink:"/docs/dns-dhcp",editUrl:"https://github.com/jeremyhager/yugawa-website/edit/master/docs/dns-dhcp.md",version:"current",sidebar_label:"dns-dhcp Configuration",sidebar:"docs",previous:{title:"Foreman Configuration",permalink:"/docs/foreman"},next:{title:"PfSense Router",permalink:"/docs/pfsense-router"}},o=[{value:"Hardware Info",id:"hardware-info",children:[]},{value:"Package Info",id:"package-info",children:[]},{value:"OS Info",id:"os-info",children:[]},{value:"DNS Configuration",id:"dns-configuration",children:[{value:"/etc/named.conf",id:"etcnamedconf",children:[]},{value:"named.conf.local",id:"namedconflocal",children:[]},{value:"zones/internal.virtnet forward lookup zone",id:"zonesinternalvirtnet-forward-lookup-zone",children:[]},{value:"zones/86.168.192.rev reverse lookup zone",id:"zones86168192rev-reverse-lookup-zone",children:[]}]},{value:"DHCP Configuration",id:"dhcp-configuration",children:[]},{value:"Other configurations",id:"other-configurations",children:[]}],b={rightToc:o};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"hardware-info"},"Hardware Info"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Asset"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Capacity"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"CPU"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"RAM"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2048 (MiB)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"vda"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"12GB")))),Object(c.b)("h2",{id:"package-info"},"Package Info"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Spec"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bind"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bind.x86_64 32:9.11.4-16.P2.el7_8.6")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bind-utils"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bind-utils.x86_64 32:9.11.4-16.P2.el7_8.6")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"dhcp"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"12:4.2.5-79.el7.centos")))),Object(c.b)("h2",{id:"os-info"},"OS Info"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Spec"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Hostname"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"dns-dhcp.internal.virtnet")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"IP Address"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"192.168.86.8/24")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Kernel"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3.10.0-1062.el7.x86_64")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Release"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"CentOS Linux release 7.8.2003 (Core)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Firewall services"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"dhcpv6-client dns ssh")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Interfaces"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"eth0")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Automatic updates"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"False")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Last updated"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2020-09-13")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Users"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"jeremy, root (disabled)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Snapshot"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1600037836 (dns installed and configured)")))),Object(c.b)("h2",{id:"dns-configuration"},"DNS Configuration"),Object(c.b)("h3",{id:"etcnamedconf"},"/etc/named.conf"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike",metastring:'title="/etc/named.conf"',title:'"/etc/named.conf"'}),'acl "trusted" {\n    localnets\n};\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike",metastring:'title="/etc/named.conf"',title:'"/etc/named.conf"'}),"options {\n    listen-on port 53 { 127.0.0.1; 192.168.86.8;};\n    //...\n    allow-query     { trusted; };\n    //...\n}\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike",metastring:'title="/etc/named.conf"',title:'"/etc/named.conf"'}),'//...\ninclude "named.conf.local";\n')),Object(c.b)("h3",{id:"namedconflocal"},"named.conf.local"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike",metastring:'title="/var/named/named.conf.local"',title:'"/var/named/named.conf.local"'}),'zone "internal.virtnet" {\n    type master;\n    file "zones/internal.virtnet"; //relative zone file path\n};\n\nzone "86.168.192.in-addr.arpa" {\n    type master;\n    file "zones/86.168.192.rev";  //relative reverse zone file path for 192.168.86.0/24 subnet\n};\n')),Object(c.b)("h3",{id:"zonesinternalvirtnet-forward-lookup-zone"},"zones/internal.virtnet forward lookup zone"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike",metastring:'title="/var/named/zones/internal.virtnet"',title:'"/var/named/zones/internal.virtnet"'}),"$TTL    604800\n@       IN      SOA     dns-dhcp.internal.virtnet. admin.internal.virtnet. (\n            2020091000  ; Serial\n            604800      ; Refresh\n            86400       ; Retry\n            2419200     ; Expire\n            604800 )    ; Negative Cache TTL\n; name servers - NS records\n    IN      NS      dns-dhcp.internal.virtnet.\n; name servers - A records\ndns-dhcp.internal.virtnet.      IN      A       192.168.86.8\n\n; 192.168.86.0/24 - A records\nforeman.internal.virtnet.       IN      A       192.168.86.10\n")),Object(c.b)("h3",{id:"zones86168192rev-reverse-lookup-zone"},"zones/86.168.192.rev reverse lookup zone"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike",metastring:'title="/var/named/zones/86.168.192.rev"',title:'"/var/named/zones/86.168.192.rev"'}),"$TTL    604800\n@       IN      SOA     internal.virtnet. admin.internal.virtnet. (\n                        2020091000  ; Serial\n                        604800      ; Refresh\n                        86400       ; Retry\n                        2419200     ; Expire\n                    604800 )        ; Negative Cache TTL\n; name servers\n        IN      NS      dns-dhcp.internal.virtnet.\n\n; PTR Records\n8       IN      PTR     dns-dhcp.internal.virtnet.      ; 192.168.86.8\n10      IN      PTR     foreman.internal.virtnet.       ; 192.168.86.10\n")),Object(c.b)("h2",{id:"dhcp-configuration"},"DHCP Configuration"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike",metastring:'title="/etc/dhcp/dhcp.conf"',title:'"/etc/dhcp/dhcp.conf"'}),'option domain-name "internal.virtnet";\noption domain-name-servers 192.168.86.8;\noption subnet-mask 255.255.255.0;\ndefault-lease-time 600;\nmax-lease-time 7200;\nallow bootp;\n\nclass "kvmGuests" {\n    match if substring (hardware, 1,3) = 52:54:00;\n}\nclass "pxeClients" {\n    match if substring(option vendor-class-identifier, 0,9) = "PXEClient";\n    next-server 192.168.86.10;\n    filename "pxelinux.0";\n}\n\nsubnet 192.168.86.0 netmask 255.255.255.0 {\n    pool {\n        range 192.168.86.17 192.168.86.99;\n        option broadcast-address 192.168.86.255;\n        option routers 192.168.86.1;\n        option dynamic-bootp 192.168.86.17 192.168.86.24;\n        \n        deny unknown-clients;\n        allow members of "kvmGuests"\n    }\n}\n')),Object(c.b)("h2",{id:"other-configurations"},"Other configurations"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="/etc/sysconfig/network-scripts/ifcfg-eth0"',title:'"/etc/sysconfig/network-scripts/ifcfg-eth0"'}),'BOOTPROTO="static"\nIPADDR=192.168.86.8\nNETMASK=255.255.255.0\nNETWORK=192.168.86.0\nGATEWAY=192.168.86.1\nBRAODCAST=192.168.1.255\nDNS1=192.168.86.1\nDNS2=8.8.8.8\n')))}d.isMDXComponent=!0}}]);