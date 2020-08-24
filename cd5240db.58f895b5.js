(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||l[m]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(100)),i={id:"documentation-server",title:"Documentation Configuration",sidebar_label:"Documentation Configuration"},c={unversionedId:"documentation-server",id:"documentation-server",isDocsHomePage:!1,title:"Documentation Configuration",description:"Until CI/CD is in place, the latest documentation will be at https://github.com/jeremyhager/yugawa-website.",source:"@site/docs\\documentation-server.md",permalink:"/docs/documentation-server",editUrl:"https://github.com/jeremyhager/yugawa-website/edit/master/docs/documentation-server.md",sidebar_label:"Documentation Configuration",sidebar:"docs",previous:{title:"Hypervisor Configuration",permalink:"/docs/centos8-hypervisor"},next:{title:"Foreman Configuration",permalink:"/docs/foreman"}},u=[{value:"Public documentation",id:"public-documentation",children:[]},{value:"Main Setup",id:"main-setup",children:[]},{value:"Customizations",id:"customizations",children:[]},{value:"Further documentation servers",id:"further-documentation-servers",children:[]}],s={rightToc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Latest Documentation")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Until CI/CD is in place, the latest documentation will be at ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jeremyhager/yugawa-website"}),"https://github.com/jeremyhager/yugawa-website"),"."))),Object(o.b)("h3",{id:"public-documentation"},"Public documentation"),Object(o.b)("p",null,"Currently be found at: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://yugawa.xyz/docs"}),"https://yugawa.xyz/docs")),Object(o.b)("h3",{id:"main-setup"},"Main Setup"),Object(o.b)("p",null,"This website uses ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/docusaurus"}),"Docusaurus"),': a "project for building, deploying, and maintaining open source project websites easily". It is an open-source project built by Facebook.'),Object(o.b)("p",null,"If you'd like to fork this website and start working on your own version, feel free to fork ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jeremyhager/yugawa-website"}),"https://github.com/jeremyhager/yugawa-website"),".\nAfter that, check the Docusaurus github page for instructions."),Object(o.b)("h3",{id:"customizations"},"Customizations"),Object(o.b)("p",null,"There are no major customizations of Docusaurus on this site, I enjoy keeping it boring in that aspect. "),Object(o.b)("h3",{id:"further-documentation-servers"},"Further documentation servers"),Object(o.b)("p",null,"Eventually I will setup a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://jbosswiki.jboss.org/"}),"JBoss wiki"),", as per step 11 in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/nixadmin-guide"}),"Linux Sysadmin Guide")))}b.isMDXComponent=!0}}]);