(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(n),p=a,m=b["".concat(o,".").concat(p)]||b[p]||u[p]||i;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),i=(n(0),n(108)),o={id:"setting-up-bind",title:"Setting up Bind",sidebar_label:"Setting up Bind"},l={unversionedId:"setting-up-bind",id:"setting-up-bind",isDocsHomePage:!1,title:"Setting up Bind",description:"This guide assumes you've already gone through the base vm server setup tutorial.",source:"@site/docs\\setting-up-bind.md",slug:"/setting-up-bind",permalink:"/docs/setting-up-bind",editUrl:"https://github.com/jeremyhager/yugawa-website/edit/master/docs/setting-up-bind.md",version:"current",sidebar_label:"Setting up Bind",sidebar:"docs",previous:{title:"Configuring Foreman in the terminal",permalink:"/docs/configuring-foreman-terminal"}},c=[{value:"Install BIND",id:"install-bind",children:[]},{value:"Configure named.conf",id:"configure-namedconf",children:[]},{value:"Create local named file",id:"create-local-named-file",children:[]},{value:"Forward lookup zone",id:"forward-lookup-zone",children:[]},{value:"Source",id:"source",children:[]}],s={rightToc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This guide assumes you've already gone through the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/base-vm-server-setup"}),"base vm server setup")," tutorial."))),Object(i.b)("h3",{id:"install-bind"},"Install BIND"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo yum install bind bind-utils\n")),Object(i.b)("p",null,"This will install bind on a machine and any dependences needed, as well as its accompanying utility package ",Object(i.b)("inlineCode",{parentName:"p"},"bind-utils"),"."),Object(i.b)("h3",{id:"configure-namedconf"},"Configure named.conf"),Object(i.b)("h4",{id:"add-an-acl"},"Add an ACL"),Object(i.b)("p",null,"Allows dns request from the local network the BIND server is on. If this is being set up on a home network, then any device on the home network will be able to query the server."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo vi /etc/named.conf\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike",metastring:'title="/etc/named.conf"',title:'"/etc/named.conf"'}),'acl "trusted" {\n    localnets\n};\n')),Object(i.b)("h4",{id:"configure-options-statement"},"Configure ",Object(i.b)("inlineCode",{parentName:"h4"},"options")," statement"),Object(i.b)("p",null,'Allow queries to be made on the local network interface and allow any queries from the "trusted" acl.'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike",metastring:'title="/etc/named.conf"',title:'"/etc/named.conf"'}),"options {\n    listen-on port 53 { 127.0.0.1; 192.168.86.8;}; #add the local network IP\n    ... #do NOT include these 3 dots in the file, this is just just to indicate there is likely lines between these options.\n    allow-query     { trusted; };\n    ...\n}\n")),Object(i.b)("h4",{id:"include-a-local-zones-file"},"Include a local zones file"),Object(i.b)("p",null,"Add the ",Object(i.b)("inlineCode",{parentName:"p"},"named.conf.local")," at the bottom of the ",Object(i.b)("inlineCode",{parentName:"p"},"named.conf")," file. This will be where zone files will be:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike",metastring:'title="/etc/named.conf"',title:'"/etc/named.conf"'}),'include "named.conf.local";\n')),Object(i.b)("p",null,"Note this is a relative path - so this will likely be in ",Object(i.b)("inlineCode",{parentName:"p"},"/var/named/"),"."),Object(i.b)("h3",{id:"create-local-named-file"},"Create local named file"),Object(i.b)("p",null,"This file will serve the local subnet the BIND server will be on. First zone statement will link the ",Object(i.b)("inlineCode",{parentName:"p"},"internal.virtnet")," domain file, second zone statement will create a reverse zone file. Both of these files will contain static information on the hosts we specify, specifically for the environments created within the how-to's series."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike",metastring:'title="/var/named/named.conf.local"',title:'"/var/named/named.conf.local"'}),'# This file should be empty when first created\nzone "internal.virtnet" {\n    type master;\n    file "zones/internal.virtnet"; #relative zone file path\n};\n\nzone "86.168.192.in-addr.arpa" {\n    type master;\n    file "zones/86.168.192.rev";  #relative reverse zone file path for 192.168.86.0/24 subnet\n}\n')),Object(i.b)("h3",{id:"forward-lookup-zone"},"Forward lookup zone"),Object(i.b)("h4",{id:"create-directory-and-zone-file"},"Create directory and zone file"),Object(i.b)("p",null,"There is not /var/named/zones by default, so it must be created:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo mkdir /var/named/zones\n")),Object(i.b)("h4",{id:"create-forward-lookup-zone-file"},"Create forward lookup zone file"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike",metastring:'title="/var/named/zones/internal.virtnet"',title:'"/var/named/zones/internal.virtnet"'}),"@       IN      SOA     dns-dhcp.internal.virtnet. admin.internal.virtnet. (\n                              3         ; Serial\n             604800     ; Refresh\n              86400     ; Retry\n            2419200     ; Expire\n             604800 )   ; Negative Cache TTL\n; name servers - NS records\n    IN      NS      dns-dhcp.internal.virtnet.\n; name servers - A records\ndns-dhcp.internal.virtnet.      IN      A       192.168.86.8\n\n; 192.168.86.0/24 - A records\nforeman.internal.virtnet.       IN      A       192.168.86.10\n")),Object(i.b)("h3",{id:"source"},"Source"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.digitalocean.com/community/tutorials/how-to-configure-bind-as-a-private-network-dns-server-on-centos-7"}),"How to configure BIND"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Note the tutorial here is only for 1 DNS server, while on digital ocean is for 2.")))))}d.isMDXComponent=!0}}]);