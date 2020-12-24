(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{134:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,b=u["".concat(a,".").concat(m)]||u[m]||d[m]||s;return r?o.a.createElement(b,i(i({ref:t},c),{},{components:r})):o.a.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),s=(r(0),r(134)),a={id:"postgres-setup",title:"Postgresql setup",sidebar_label:"Postgres setup"},i={unversionedId:"postgres-setup",id:"postgres-setup",isDocsHomePage:!1,title:"Postgresql setup",description:"Refresh build token",source:"@site/docs/postgres-setup.md",slug:"/postgres-setup",permalink:"/docs/postgres-setup",editUrl:"https://github.com/jeremyhager/yugawa-website/edit/master/docs/postgres-setup.md",version:"current",sidebar_label:"Postgres setup",sidebar:"docs",previous:{title:"Manual Enrollment",permalink:"/docs/manual-enrollment-ldap"},next:{title:"Linux Sysadmin Main Guide",permalink:"/docs/nixadmin-guide"}},l=[{value:"Refresh build token",id:"refresh-build-token",children:[]},{value:"Create postgresql VMs",id:"create-postgresql-vms",children:[]}],c={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"refresh-build-token"},"Refresh build token"),Object(s.b)("p",null,"On the foreman server run the following:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"hammer host update --build false --id 'postgresql1.internal.virtnet'\nhammer host update --build false --id 'postgresql2.internal.virtnet'\nhammer host update --build true --id 'postgresql1.internal.virtnet'\nhammer host update --build true --id 'postgresql2.internal.virtnet'\n")),Object(s.b)("h2",{id:"create-postgresql-vms"},"Create postgresql VMs"),Object(s.b)("p",null,"On the hypervisor, run the following commands:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="postgresql1"',title:'"postgresql1"'}),"sudo virt-install --connect qemu:///system \\\n    --network=bridge:VMnetwork,mac=52:54:00:00:00:13 \\\n    -n postgresql1 \\\n    -f /home/imgs/postgresql1.img \\\n    -r 2048 \\\n    -s 32 \\\n    --pxe \\\n    --noautoconsole \\\n    --os-type=centos7.0 \\\n    --accelerate --hvm --vnc\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="postgresql2"',title:'"postgresql2"'}),"sudo virt-install --connect qemu:///system \\\n    --network=bridge:VMnetwork,mac=52:54:00:00:00:14 \\\n    -n postgresql2 \\\n    -f /home/imgs/postgresql2.img \\\n    -r 2048 \\\n    -s 32 \\\n    --pxe \\\n    --noautoconsole \\\n    --os-type=centos7.0 \\\n    --accelerate --hvm --vnc\n")))}p.isMDXComponent=!0}}]);