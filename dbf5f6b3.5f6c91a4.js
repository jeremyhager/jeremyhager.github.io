(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),i=n(6),o=(n(0),n(122)),a={title:"Getting a Windows VM to work with libvirt",author:"Jeremy Hager",author_url:"https://github.com/jeremyhager/",author_image_url:"https://avatars2.githubusercontent.com/u/47301461?s=460&u=05e044dcce4be18b670f9e2c9bda99c511cd4009&v=4",tags:["Website","Linux","Windows","Libvirt"],description:"Trying to get autounattend.xml to work with a Windows VM and testing out libvirt in general",image:"https://i.imgur.com/mErPwqL.png"},l={permalink:"/blog/2020/08/05/windows-vm-with-libvirt",editUrl:"https://github.com/jeremyhager/yugawa-website/edit/master/blog/2020-08-05-windows-vm-with-libvirt.md",source:"@site/blog\\2020-08-05-windows-vm-with-libvirt.md",description:"Trying to get autounattend.xml to work with a Windows VM and testing out libvirt in general",date:"2020-08-05T00:00:00.000Z",tags:[{label:"Website",permalink:"/blog/tags/website"},{label:"Linux",permalink:"/blog/tags/linux"},{label:"Windows",permalink:"/blog/tags/windows"},{label:"Libvirt",permalink:"/blog/tags/libvirt"}],title:"Getting a Windows VM to work with libvirt",readingTime:4.24,truncated:!0,prevItem:{title:'Installing a "headless" CentOS 7 VM',permalink:"/blog/2020/08/11/headless-centos7-vm"},nextItem:{title:"Lazy logging/blogging",permalink:"/blog/2020/08/03/lazy-logging-blogging"}},c=[],u={rightToc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("img",{src:"/img/its-working-its-working.jpg",width:"256"}),Object(o.b)("p",null,"So on my last entry I mentioned trying to get Windows Server 2016 to work on libvirt."))}s.isMDXComponent=!0},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=s(n),b=r,m=g["".concat(a,".").concat(b)]||g[b]||p[b]||o;return n?i.a.createElement(m,l(l({ref:t},u),{},{components:n})):i.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);