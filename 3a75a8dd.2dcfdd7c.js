(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,j=u["".concat(l,".").concat(d)]||u[d]||O[d]||b;return n?r.a.createElement(j,c(c({ref:t},i),{},{components:n})):r.a.createElement(j,c({ref:t},i))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,l=new Array(b);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<b;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),b=(n(0),n(122)),l={id:"pfsense-router",title:"PfSense Router",sidebar_label:"PfSense Router"},c={unversionedId:"pfsense-router",id:"pfsense-router",isDocsHomePage:!1,title:"PfSense Router",description:"Hardware Info",source:"@site/docs/pfsense-router.md",slug:"/pfsense-router",permalink:"/docs/pfsense-router",editUrl:"https://github.com/jeremyhager/yugawa-website/edit/master/docs/pfsense-router.md",version:"current",sidebar_label:"PfSense Router",sidebar:"docs",previous:{title:"dns-dhcp configuration",permalink:"/docs/dns-dhcp"},next:{title:"Linux Sysadmin Main Guide",permalink:"/docs/nixadmin-guide"}},o=[{value:"Hardware Info",id:"hardware-info",children:[]},{value:"OS Info",id:"os-info",children:[]},{value:"WAN Rules",id:"wan-rules",children:[]}],i={rightToc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"hardware-info"},"Hardware Info"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Asset"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Capacity"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"CPU"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"RAM"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"12288 (MiB)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"vda"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"32GB")))),Object(b.b)("h2",{id:"os-info"},"OS Info"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Spec"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Hostname"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"router.internal.virtnet")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"WAN IP (vnet0)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"192.168.86.4/24")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"LAN IP (vnet1)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"172.16.0.2")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Kernel"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"11.3-STABLE")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Interfaces"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"vnet0, vnet1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Automatic updates"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"False")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Last updated"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2020-10-8")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Users"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"admin")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Snapshot"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1602169002")))),Object(b.b)("h2",{id:"wan-rules"},"WAN Rules"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Rule"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Pass: TCP/443, 192.168.86.0/24 -> WAN interface"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Allow remote management from home LAN")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Pass: TCP/22, WAN net -> LAN net"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Allow ssh into LAN")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Pass: ICMP/Echo request, WAN net -> self"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Allow ping to firewall from LAN")))))}p.isMDXComponent=!0}}]);