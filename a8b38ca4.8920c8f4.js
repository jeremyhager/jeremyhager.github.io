(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),l=(n(0),n(122)),i={id:"setting-up-bind",title:"Setting up Bind",sidebar_label:"Setting up Bind"},o={unversionedId:"setting-up-bind",id:"setting-up-bind",isDocsHomePage:!1,title:"Setting up Bind",description:"This guide assumes you've already gone through the base vm server setup tutorial.",source:"@site/docs\\setting-up-bind.md",slug:"/setting-up-bind",permalink:"/docs/setting-up-bind",editUrl:"https://github.com/jeremyhager/yugawa-website/edit/master/docs/setting-up-bind.md",version:"current",sidebar_label:"Setting up Bind",sidebar:"docs",previous:{title:"Configuring Foreman in the terminal",permalink:"/docs/configuring-foreman-terminal"},next:{title:"Maintaining DNS",permalink:"/docs/maintaining-dns"}},c=[{value:"Install BIND",id:"install-bind",children:[]},{value:"Configure named.conf",id:"configure-namedconf",children:[]},{value:"Create local named file",id:"create-local-named-file",children:[]},{value:"Forward lookup zone",id:"forward-lookup-zone",children:[]},{value:"Reverse zone file",id:"reverse-zone-file",children:[]},{value:"Check BIND syntax",id:"check-bind-syntax",children:[]},{value:"Check for zone errors",id:"check-for-zone-errors",children:[]},{value:"Start and Enable BIND",id:"start-and-enable-bind",children:[]},{value:"Set DNS to resolve to self",id:"set-dns-to-resolve-to-self",children:[]},{value:"Allow DNS in firewall",id:"allow-dns-in-firewall",children:[]},{value:"Testing",id:"testing",children:[]},{value:"Source",id:"source",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"This guide assumes you've already gone through the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/base-vm-server-setup"}),"base vm server setup")," tutorial."))),Object(l.b)("h3",{id:"install-bind"},"Install BIND"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo yum install bind bind-utils\n")),Object(l.b)("p",null,"This will install bind on a machine and any dependences needed, as well as its accompanying utility package ",Object(l.b)("inlineCode",{parentName:"p"},"bind-utils"),"."),Object(l.b)("h3",{id:"configure-namedconf"},"Configure named.conf"),Object(l.b)("h4",{id:"add-an-acl"},"Add an ACL"),Object(l.b)("p",null,"Allows dns request from the local network the BIND server is on. If this is being set up on a home network, then any device on the home network will be able to query the server."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo vi /etc/named.conf\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike",metastring:'title="/etc/named.conf"',title:'"/etc/named.conf"'}),'acl "trusted" {\n    localnets\n};\n')),Object(l.b)("h4",{id:"configure-options-statement"},"Configure ",Object(l.b)("inlineCode",{parentName:"h4"},"options")," statement"),Object(l.b)("p",null,'Allow queries to be made on the local network interface and allow any queries from the "trusted" acl.'),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike",metastring:'title="/etc/named.conf"',title:'"/etc/named.conf"'}),"options {\n    listen-on port 53 { 127.0.0.1; 172.16.0.8;}; //add the local network IP\n    ... //do NOT include these 3 dots in the file, this is just just to indicate there is likely lines between these options.\n    allow-query     { trusted; };\n    ...\n}\n")),Object(l.b)("h4",{id:"include-a-local-zones-file"},"Include a local zones file"),Object(l.b)("p",null,"Add the ",Object(l.b)("inlineCode",{parentName:"p"},"named.conf.local")," at the bottom of the ",Object(l.b)("inlineCode",{parentName:"p"},"named.conf")," file. This will be where zone files will be:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike",metastring:'title="/etc/named.conf"',title:'"/etc/named.conf"'}),'include "named.conf.local";\n')),Object(l.b)("p",null,"Note this is a relative path - so this will likely be in ",Object(l.b)("inlineCode",{parentName:"p"},"/var/named/"),"."),Object(l.b)("h3",{id:"create-local-named-file"},"Create local named file"),Object(l.b)("p",null,"This file will serve the local subnet the BIND server will be on. First zone statement will link the ",Object(l.b)("inlineCode",{parentName:"p"},"internal.virtnet")," domain file, second zone statement will create a reverse zone file. Both of these files will contain static information on the hosts we specify, specifically for the environments created within the how-to's series."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike",metastring:'title="/var/named/named.conf.local"',title:'"/var/named/named.conf.local"'}),'# This file should be empty when first created\nzone "internal.virtnet" {\n    type master;\n    file "zones/internal.virtnet"; //relative zone file path\n};\n\nzone "86.168.192.in-addr.arpa" {\n    type master;\n    file "zones/86.168.192.rev";  //relative reverse zone file path for 192.168.86.0/24 subnet\n};\n')),Object(l.b)("h3",{id:"forward-lookup-zone"},"Forward lookup zone"),Object(l.b)("h4",{id:"create-zone-directory"},"Create zone directory"),Object(l.b)("p",null,"There is not /var/named/zones by default, so it must be created:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo mkdir /var/named/zones\n")),Object(l.b)("h4",{id:"create-forward-lookup-zone-file"},"Create forward lookup zone file"),Object(l.b)("p",null,"For the serial number, a common practice is to use the current date. For example, the serial number below means the file was last edited 2020, September 10th at 00 hours.\nThis has the added benefit fin that someone reading the config file will know right away when the last change was."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike",metastring:'title="/var/named/zones/internal.virtnet"',title:'"/var/named/zones/internal.virtnet"'}),"$TTL    604800\n@       IN      SOA     dns-dhcp.internal.virtnet. admin.internal.virtnet. (\n            2020091000  ; Serial\n            604800      ; Refresh\n            86400       ; Retry\n            2419200     ; Expire\n            604800 )    ; Negative Cache TTL\n; name servers - NS records\n    IN      NS      dns-dhcp.internal.virtnet.\n; name servers - A records\ndns-dhcp.internal.virtnet.      IN      A       172.16.0.8\n\n; 192.168.86.0/24 - A records\nforeman.internal.virtnet.       IN      A       192.168.86.10\n")),Object(l.b)("h3",{id:"reverse-zone-file"},"Reverse zone file"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike",metastring:'title="/var/named/zones/86.168.192.rev"',title:'"/var/named/zones/86.168.192.rev"'}),"$TTL    604800\n@       IN      SOA     internal.virtnet. admin.internal.virtnet. (\n                        2020091000  ; Serial\n                        604800      ; Refresh\n                        86400       ; Retry\n                        2419200     ; Expire\n                    604800 )        ; Negative Cache TTL\n; name servers\n        IN      NS      dns-dhcp.internal.virtnet.\n\n; PTR Records\n8       IN      PTR     dns-dhcp.internal.virtnet.      ; 172.16.0.8\n10      IN      PTR     foreman.internal.virtnet.       ; 192.168.86.10\n")),Object(l.b)("h3",{id:"check-bind-syntax"},"Check BIND syntax"),Object(l.b)("p",null,"Double-check for any errors in the configuration:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo named-checkconf\n")),Object(l.b)("p",null,"If there are errors, ",Object(l.b)("inlineCode",{parentName:"p"},"named-checkconf")," will show something similar to this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"/etc/named.conf:66: missing ';' before end of file\n")),Object(l.b)("p",null,"In this case, the ",Object(l.b)("inlineCode",{parentName:"p"},"/etc/named.conf")," only had 65 lines, so ",Object(l.b)("inlineCode",{parentName:"p"},"named-checkconf")," is actually specifying the linked file ",Object(l.b)("inlineCode",{parentName:"p"},"/var/named/named.conf.local"),". The file was missing a semicolon at the end."),Object(l.b)("p",null,"If ",Object(l.b)("inlineCode",{parentName:"p"},"named-checkconf")," has no response, then the configuration does not have any syntax errors."),Object(l.b)("h3",{id:"check-for-zone-errors"},"Check for zone errors"),Object(l.b)("p",null,"If the configuration syntax checks out, it's time to check for errors in the zone files."),Object(l.b)("p",null,"First check the forward lookup zone:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo named-checkzone internal.virtnet /var/named/zones/internal.virtnet\n")),Object(l.b)("p",null,"Example output:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"zone internal.virtnet/IN: loaded serial 3\nOK\n")),Object(l.b)("p",null,"Now check the reverse lookup zone:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo named-checkzone 86.168.192.in-addr.arpa /var/named/zones/86.168.192.rev\n")),Object(l.b)("p",null,"Example output:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"zone 86.168.192.in-addr.arpa/IN: loaded serial 3\nOK\n")),Object(l.b)("p",null,"If both commands reply ",Object(l.b)("inlineCode",{parentName:"p"},"OK"),", then it's time to start BIND."),Object(l.b)("h3",{id:"start-and-enable-bind"},"Start and Enable BIND"),Object(l.b)("p",null,"First enable the ",Object(l.b)("inlineCode",{parentName:"p"},"named")," service, then start the service so it's running."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo systemctl enable named\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo systemctl start named.\n")),Object(l.b)("h3",{id:"set-dns-to-resolve-to-self"},"Set DNS to resolve to self"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="/etc/sysconfig/network-scripts/ifcfg-eth0"',title:'"/etc/sysconfig/network-scripts/ifcfg-eth0"'}),"#Change DNS1 to localhost and optionally change DNS2 to secondary dns host\nDNS1=127.0.0.1 #Localhost\nDNS2=192.168.86.1 #local DNS server, eg. router\n")),Object(l.b)("p",null,"Once the changes are complete, restart the network:"),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Heads up!")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"If you are connected via ssh you will ",Object(l.b)("em",{parentName:"p"},"may")," loose your connection. Be sure there is a way to access the vm without ssh (eg. using the console on the hypervisor) incase of a malformed network config file."))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo systemctl restart network\n")),Object(l.b)("h3",{id:"allow-dns-in-firewall"},"Allow DNS in firewall"),Object(l.b)("p",null,"In order to respond to DNS requests, the final step is to add the dns service in the firewall:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo firewall-cmd --permanent --add-service=dns\n")),Object(l.b)("p",null,"Now restart the firewall so the changes take effect:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo firewall-cmd --reload\n")),Object(l.b)("h3",{id:"testing"},"Testing"),Object(l.b)("p",null,"Time to test that BIND can respond to requests externally and reverse-lookups work:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="external host"',title:'"external','host"':!0}),"nslookup foreman.internal.virtnet 172.16.0.8\n")),Object(l.b)("p",null,"A response should look something like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"Server:         172.16.0.8\nAddress:        172.16.0.8#53\n\nName:   foreman.internal.virtnet\nAddress: 192.168.86.10\n")),Object(l.b)("p",null,"Finally, test the reverse lookup zones are working properly:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"nslookup 192.168.86.10 172.16.0.8\n")),Object(l.b)("p",null,"Response should look similar to this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"10.86.168.192.in-addr.arpa      name = foreman.internal.virtnet.\n")),Object(l.b)("h3",{id:"source"},"Source"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.digitalocean.com/community/tutorials/how-to-configure-bind-as-a-private-network-dns-server-on-centos-7"}),"How to configure BIND"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Note the tutorial here is only for 1 DNS server, while on digital ocean is for 2.")))))}b.isMDXComponent=!0},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,m=d["".concat(i,".").concat(u)]||d[u]||p[u]||l;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);