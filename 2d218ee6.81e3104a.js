(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{122:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),p=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},O=function(e){var t=p(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),O=p(a),d=r,m=O["".concat(c,".").concat(d)]||O[d]||j[d]||b;return a?n.a.createElement(m,l(l({ref:t},i),{},{components:a})):n.a.createElement(m,l({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<b;i++)c[i]=a[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},71:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(6),b=(a(0),a(122)),c={id:"centos8-hypervisor",title:"Hypervisor Configuration",sidebar_label:"Hypervisor Configuration",image:"https://i.imgur.com/mErPwqL.png"},l={unversionedId:"centos8-hypervisor",id:"centos8-hypervisor",isDocsHomePage:!1,title:"Hypervisor Configuration",description:"Hardware Info",source:"@site/docs/centos8-hypervisor.md",slug:"/centos8-hypervisor",permalink:"/docs/centos8-hypervisor",editUrl:"https://github.com/jeremyhager/yugawa-website/edit/master/docs/centos8-hypervisor.md",version:"current",sidebar_label:"Hypervisor Configuration",sidebar:"docs",previous:{title:"Internal.Virtnet Overview",permalink:"/docs/"},next:{title:"Documentation Configuration",permalink:"/docs/documentation-server"}},o=[{value:"Hardware Info",id:"hardware-info",children:[]},{value:"OS Info",id:"os-info",children:[]},{value:"Package Info",id:"package-info",children:[]}],i={rightToc:o};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"hardware-info"},"Hardware Info"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Asset"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Capacity"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Product ID"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"CPU"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"6,12"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://ark.intel.com/content/www/us/en/ark/products/199271/intel-core-i5-10400-processor-12m-cache-up-to-4-30-ghz.html"}),"i5-10400"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"RAM"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"32GB"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.corsair.com/us/en/Categories/Products/Memory/Vengeance-PRO-RGB-Black/p/CMW32GX4M2C3200C16"}),"CMW32GX4M2C3200C16"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Motherboard"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"128GB RAM"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.asus.com/us/Motherboards/PRIME-Z490M-PLUS/"}),"PRIME-Z490M-PLUS"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"sda; ",Object(b.b)("inlineCode",{parentName:"td"},"/"),",",Object(b.b)("inlineCode",{parentName:"td"},"/boot"),",",Object(b.b)("inlineCode",{parentName:"td"},"/boot/efi"),",",Object(b.b)("inlineCode",{parentName:"td"},"[swap]")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"256GB"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"PDF! ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.adata.com/upload/downloadfile/Datasheet_SP900-EN-20150213.pdf"}),"ASP900S3-256GM-C"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"sdb; ",Object(b.b)("inlineCode",{parentName:"td"},"/home")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1TB"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.samsung.com/us/computing/memory-storage/solid-state-drives/ssd-850-evo-2-5-sata-iii-1tb-mz-75e1t0b-am/"}),"MZ-75E1T0B/AM"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"PCIe NIC"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"single-port 1GB"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://ark.intel.com/content/www/us/en/ark/products/68668/intel-ethernet-server-adapter-i210-t1.html"}),"I210T1"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"CPU Cooler"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Single Fan"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.coolermaster.com/catalog/coolers/cpu-air-coolers/hyper-212-black-edition/"}),"RR-212S-20PK-R1"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Case"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Micro ATX Mini Tower"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.fractal-design.com/products/cases/meshify/meshify-c-mini-dark-tempered-glass/black/"}),"FD-CA-MESH-C-MINI-BKO-TGD"))))),Object(b.b)("h2",{id:"os-info"},"OS Info"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Spec"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Hostname"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"centos8")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"IP address"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"DHCP")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Kernel"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"4.18.0-193.14.2.el8_2.x86_64")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Release"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"CentOS Linux release 8.2.2004 (Core)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Firewall services"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"cockpit dhcpv6-client ssh")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Interfaces"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"enp2s0, virbr0 (main)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Automatic updates"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"False")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Last updated"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2020-08-19")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Users"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"jeremy, root (disabled)")))),Object(b.b)("h2",{id:"package-info"},"Package Info"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Spec"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Libvirt"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"4.5.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"cockpit"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"211.3-1.el8")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"rsync"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"3.1.3-7.el8.x86_64")))))}p.isMDXComponent=!0}}]);