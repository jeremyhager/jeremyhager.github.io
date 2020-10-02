(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{120:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,h=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return n?r.a.createElement(h,s(s({ref:t},l),{},{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),o=(n(0),n(120)),i={id:"setting-up-dhcp",title:"Setting up dhcp",sidebar_label:"Setting up dhcp"},s={unversionedId:"setting-up-dhcp",id:"setting-up-dhcp",isDocsHomePage:!1,title:"Setting up dhcp",description:"This guide assumes you've already gone through the Setting up Bind tutorial.",source:"@site/docs\\settting-up-dhcp.md",slug:"/setting-up-dhcp",permalink:"/docs/setting-up-dhcp",editUrl:"https://github.com/jeremyhager/yugawa-website/edit/master/docs/settting-up-dhcp.md",version:"current",sidebar_label:"Setting up dhcp",sidebar:"docs",previous:{title:"Maintaining DNS",permalink:"/docs/maintaining-dns"}},c=[{value:"Install DHCP",id:"install-dhcp",children:[{value:"Configure DHCP",id:"configure-dhcp",children:[]},{value:"Start and enable DHCP",id:"start-and-enable-dhcp",children:[]}]}],l={rightToc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This guide assumes you've already gone through the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setting-up-bind"}),"Setting up Bind")," tutorial."))),Object(o.b)("h2",{id:"install-dhcp"},"Install DHCP"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo yum install dhcp\n")),Object(o.b)("h3",{id:"configure-dhcp"},"Configure DHCP"),Object(o.b)("p",null,"The configuration for DHCP will include a few global defaults as well as allow bootp/pxe. Since this machine resides on the same network as a home network, we don't want this dhcp server interfering with the exiting dhcp server. Additionally, to keep things easy to understand, the range will be kept separate from the home network which is 192.168.86.100-250. In order to do this we match the first half of the MAC address and create a group called \"kvmGuests' and only allow requests to be answered from that group on the DHCP server."),Object(o.b)("p",null,"Finally there are a few statements about bootp and pxeclients. These statements will point any network-boot clients to the pxe server (which is Foreman.internal.virtnet) and to have the pxe client ask for a file called 'pxelinux.0'."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike",metastring:'title="/etc/dhcp/dhcpd.conf"',title:'"/etc/dhcp/dhcpd.conf"'}),'option domain-name "internal.virtnet"; //default domain\noption domain-name-servers 192.168.86.8; //dns server(s)\noption subnet-mask 255.255.255.0; //subnet mask for the subnet\ndefault-lease-time 14400; //lease of 14400 seconds, or 4 hours\nmax-lease-time 28800; //max lease of 8 hours\nallow bootp; //allow clients to run a pxe boot\n\n//the kvmGuests class will only be composed of clients who are created in the vm environment\nclass "kvmGuests" {\n    match if substring (hardware, 1,3) = 52:54:00;\n}\n//if the client is PXE, sent it to the .10 server and ask for the "pxelinux.0" file\nclass "pxeClients" {\n    match if substring(option vendor-class-identifier, 0,9) = "PXEClient";\n    next-server 192.168.86.10;\n    filename "pxelinux.0";\n}\n\n//subnet for the 192.168.86.0/24 network\nsubnet 192.168.86.0 netmask 255.255.255.0 {\n    pool {\n        range 192.168.86.17 192.168.86.99; //dhcp lease range\n        option broadcast-address 192.168.86.255; //network broadcast address\n        option routers 192.168.86.1; //router or gateway configuration\n        option dynamic-bootp 192.168.86.17 192.168.86.24;\n        //bootp or pxe clients will use the addresses .17 to .24\n        deny unknown-clients; //do not allow unknown clients\n        allow members of "kvmGuests" //only allow clients of the from the vm environment\n    }\n}\n')),Object(o.b)("h3",{id:"start-and-enable-dhcp"},"Start and enable DHCP"),Object(o.b)("p",null,"Now that the configurations are complete, start and enable dhcpd:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo systemctl start dhcpd\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo systemctl enable dhcpd\n")))}d.isMDXComponent=!0}}]);