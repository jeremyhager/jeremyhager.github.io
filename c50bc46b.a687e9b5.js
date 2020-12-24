(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{112:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return o}));var n=a(2),r=a(6),l=(a(0),a(134)),i={id:"setting-up-ldap-servers",title:"Setting up ldap servers",sidebar_label:"Setting up ldap servers"},c={unversionedId:"setting-up-ldap-servers",id:"setting-up-ldap-servers",isDocsHomePage:!1,title:"Setting up ldap servers",description:"Now that Foreman is set up to provision hosts and DHCP is pointed to the Foreman server, it's time to set up the ldap servers.",source:"@site/docs/setting-up-ldap-servers.md",slug:"/setting-up-ldap-servers",permalink:"/docs/setting-up-ldap-servers",editUrl:"https://github.com/jeremyhager/yugawa-website/edit/master/docs/setting-up-ldap-servers.md",version:"current",sidebar_label:"Setting up ldap servers",sidebar:"docs",previous:{title:"Creating Foreman hosts",permalink:"/docs/creating-foreman-hosts"},next:{title:"Configuring ldap",permalink:"/docs/configuring-ldap"}},s=[{value:"Creating ldap VMs",id:"creating-ldap-vms",children:[]},{value:"On ldap1 and ldap2",id:"on-ldap1-and-ldap2",children:[{value:"Open ports",id:"open-ports",children:[]},{value:"Install freeipa:",id:"install-freeipa",children:[]}]},{value:"On ldap1",id:"on-ldap1",children:[{value:"Configure Freeipa using interactive mode",id:"configure-freeipa-using-interactive-mode",children:[]},{value:"Import records to dns server",id:"import-records-to-dns-server",children:[]}]},{value:"Enroll ldap2",id:"enroll-ldap2",children:[{value:"On ldap2",id:"on-ldap2",children:[]},{value:"On ldap1",id:"on-ldap1-1",children:[]},{value:"On ldap2",id:"on-ldap2-1",children:[]}]},{value:"Sources",id:"sources",children:[]}],p={rightToc:s};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Now that Foreman is set up to provision hosts and DHCP is pointed to the Foreman server, it's time to set up the ldap servers."),Object(l.b)("h2",{id:"creating-ldap-vms"},"Creating ldap VMs"),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"By default the kickstart file has created only the root account. After setting up ldap the root account will be disabled."))),Object(l.b)("p",null,"First create the 2 servers on the hypervisor:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="ldap1"',title:'"ldap1"'}),"sudo virt-install --connect qemu:///system \\\n    --network=bridge:VMnetwork,mac=52:54:00:00:00:11 \\\n    -n ldap1 \\\n    -f /home/imgs/ldap1.img \\\n    -r 2048 \\\n    -s 12 \\\n    --pxe \\\n    --noautoconsole \\\n    --os-type=centos7.0 \\\n    --accelerate --hvm --vnc\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="ldap2"',title:'"ldap2"'}),"sudo virt-install --connect qemu:///system \\\n    --network=bridge:VMnetwork,mac=52:54:00:00:00:12 \\\n    -n ldap2 \\\n    -f /home/imgs/ldap2.img \\\n    -r 2048 \\\n    -s 12 \\\n    --pxe \\\n    --noautoconsole \\\n    --os-type=centos7.0 \\\n    --accelerate --hvm --vnc\n")),Object(l.b)("h2",{id:"on-ldap1-and-ldap2"},"On ldap1 and ldap2"),Object(l.b)("h3",{id:"open-ports"},"Open ports"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="ldap services"',title:'"ldap','services"':!0}),"firewall-cmd --add-service=freeipa-ldap --add-service=freeipa-ldaps\nfirewall-cmd --add-service=freeipa-ldap --add-service=freeipa-ldaps --permanent\n")),Object(l.b)("h3",{id:"install-freeipa"},"Install freeipa:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yum -y install freeipa-server\n")),Object(l.b)("h2",{id:"on-ldap1"},"On ldap1"),Object(l.b)("h3",{id:"configure-freeipa-using-interactive-mode"},"Configure Freeipa using interactive mode"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ipa-server-install\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Questions"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Answers"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Configure BIND?"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Server hostname"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[","ldap1.internal.virtnet","]"," ","[","ENTER","]")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Confirm domain"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[","internal.virtnet","]"," ","[","Enter","]")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Confirm realm"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[","INTERNAL.VIRTNET","]"," ","[","Enter","]")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Directory Manager password"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Super secure password")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IPA admin password"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Also secure password")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Continue to configure the system with these values?"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")))),Object(l.b)("h3",{id:"import-records-to-dns-server"},"Import records to dns server"),Object(l.b)("p",null,"Next cat the db file and copy the output into the main zone lookup file on the dns server:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="ldap1 server"',title:'"ldap1','server"':!0}),"cat /tmp/ipa.system.records._SwtPx.db\n")),Object(l.b)("p",null,"Then copy+paste that into the dns-dhcp server:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="/var/named/zones/internal.virtnet"',title:'"/var/named/zones/internal.virtnet"'}),'$TTL    604800\n@       IN      SOA     dns-dhcp.internal.virtnet. admin.internal.virtnet. (\n#...\n_kerberos-master._tcp.internal.virtnet. 86400 IN SRV 0 100 88 ldap1.internal.virtnet.\n_kerberos-master._udp.internal.virtnet. 86400 IN SRV 0 100 88 ldap1.internal.virtnet.\n_kerberos._tcp.internal.virtnet. 86400 IN SRV 0 100 88 ldap1.internal.virtnet.\n_kerberos._udp.internal.virtnet. 86400 IN SRV 0 100 88 ldap1.internal.virtnet.\n_kerberos.internal.virtnet. 86400 IN TXT "INTERNAL.VIRTNET"\n_kpasswd._tcp.internal.virtnet. 86400 IN SRV 0 100 464 ldap1.internal.virtnet.\n_kpasswd._udp.internal.virtnet. 86400 IN SRV 0 100 464 ldap1.internal.virtnet.\n_ldap._tcp.internal.virtnet. 86400 IN SRV 0 100 389 ldap1.internal.virtnet.\n_ntp._udp.internal.virtnet. 86400 IN SRV 0 100 123 ldap1.internal.virtnet.\nipa-ca.internal.virtnet. 86400 IN A 172.16.0.11\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"The ipa-client-install command was successful\n\nPlease add records in this file to your DNS system: /tmp/ipa.system.records._SwtPx.db\n==============================================================================\nSetup complete\n\nNext steps:\n        1. You must make sure these network ports are open:\n                TCP Ports:\n                  * 80, 443: HTTP/HTTPS\n                  * 389, 636: LDAP/LDAPS\n                  * 88, 464: kerberos\n                UDP Ports:\n                  * 88, 464: kerberos\n                  * 123: ntp\n\n        2. You can now obtain a kerberos ticket using the command: 'kinit admin'\n           This ticket will allow you to use the IPA tools (e.g., ipa user-add)\n           and the web user interface.\n\nBe sure to back up the CA certificates stored in /root/cacert.p12\nThese files are required to create replicas. The password for these\nfiles is the Directory Manager passwordmy \n")),Object(l.b)("h2",{id:"enroll-ldap2"},"Enroll ldap2"),Object(l.b)("h3",{id:"on-ldap2"},"On ldap2"),Object(l.b)("p",null,"Now that ldap1 is the master ldap server, join the ldap2 as a client to the domain:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ipa-client-install --domain=internal.virtnet --realm=INTERNAL.VIRTNET --server=ldap1.internal.virtnet\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Questions"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Answers"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Proceed with fixed values and no DNS discovery? ","[no]",":"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Continue to configure the system with these values? ","[no]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User authorized to enroll computers:"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"admin")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Password for ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"mailto:admin@INTERNAL.VIRTNET"}),"admin@INTERNAL.VIRTNET"),":"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[","admin password","]")))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text",metastring:'title="expected output"',title:'"expected','output"':!0}),"Successfully retrieved CA cert\n    Subject:     CN=Certificate Authority,O=INTERNAL.VIRTNET\n    Issuer:      CN=Certificate Authority,O=INTERNAL.VIRTNET\n    Valid From:  2020-12-19 00:23:18\n    Valid Until: 2040-12-19 00:23:18\n\nEnrolled in IPA realm INTERNAL.VIRTNET\n\n...\n")),Object(l.b)("h3",{id:"on-ldap1-1"},"On ldap1"),Object(l.b)("p",null,"Authenticate as admin and add ldap2 as a member of the ",Object(l.b)("inlineCode",{parentName:"p"},"ipaservers")," group:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kinit admin\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ipa hostgroup-add-member ipaservers --hosts ldap2.internal.virtnet\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text",metastring:'title="expected output"',title:'"expected','output"':!0}),"Host-group: ipaservers\n  Description: IPA server hosts\n  Member hosts: ldap1.internal.virtnet, ldap2.internal.virtnet\n-------------------------\nNumber of members added 1\n-------------------------\n")),Object(l.b)("p",null,"Confirm both the group and severs show up with the following commands:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ipa hostgroup-find\nipa host-find --in-hostgroups=ipaservers\n")),Object(l.b)("h3",{id:"on-ldap2-1"},"On ldap2"),Object(l.b)("p",null,"Once successfully added, run the following command to add ldap2 as a replica:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ipa-replica-install\n")),Object(l.b)("p",null,"Finally, run ",Object(l.b)("inlineCode",{parentName:"p"},"ipa-ca-install")," as recommended:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ipa-ca-install\n")),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"This will require the directory manager's password. Additionally, this will take some time."))),Object(l.b)("h2",{id:"sources"},"Sources"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.freeipa.org/page/V4/Replica_Setup"}),"freeipa replica setup"))))}o.isMDXComponent=!0},134:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=o(a),u=n,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||l;return a?r.a.createElement(m,c(c({ref:t},p),{},{components:a})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<l;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);