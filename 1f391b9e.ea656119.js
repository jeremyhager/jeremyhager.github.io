(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{103:function(e,t,n){"use strict";const r=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(l){}return n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus(),c};e.exports=r,e.exports.default=r},104:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],r=t[2],a=t[3];if(n&&a){var o=[],c=(n=parseInt(n))<(a=parseInt(a))?1:-1;"-"!=r&&".."!=r&&"\u2025"!=r||(a+=c);for(var l=n;l!=a;l+=c)o.push(l);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},106:function(e,t,n){"use strict";var r=n(2),a=n(0),o=n.n(a),c=n(98),l=n(99),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(20).a,theme:s};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var y=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},g=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=u({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=u({},n,{backgroundColor:null}),a};function h(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var f=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),p(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?g(e.theme,e.language):void 0;return t.themeDict=n})),p(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=u({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==a&&(o.style=void 0!==o.style?u({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),p(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var c=r?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(l))}})),p(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,c=u({},h(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(c.style=void 0!==c.style?u({},c.style,a):a),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,c=0,l=[],s=[l];c>-1;){for(;(o=r[c]++)<a[c];){var i=void 0,p=t[c],u=n[c][o];if("string"==typeof u?(p=c>0?p:["plain"],i=u):(p=m(p,u.type),u.alias&&(p=m(p,u.alias)),i=u.content),"string"==typeof i){var g=i.split(y),h=g.length;l.push({types:p,content:g[0]});for(var f=1;f<h;f++)d(l),s.push(l=[]),l.push({types:p,content:g[f]})}else c++,t.push(p),n.push(i),r.push(0),a.push(i.length)}c--,t.pop(),n.pop(),r.pop(),a.pop()}return d(l),s}(void 0!==c?t.tokenize(r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),b=n(103),v=n.n(b),j=n(104),k=n.n(j),O=n(97),E={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},x=n(102);var w=()=>{const{siteConfig:{themeConfig:{prism:e={}}}}=Object(O.a)(),{isDarkTheme:t}=Object(x.a)(),n=e.theme||E,r=e.darkTheme||n;return t?r:n},P=n(47),N=n.n(P);const T=/{([\d,-]+)}/,C=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map(e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`).join("|");return new RegExp(`^\\s*(?:${r})\\s*$`)},S=/title=".*"/;var D=({children:e,className:t,metastring:n})=>{const{siteConfig:{themeConfig:{prism:c={}}}}=Object(O.a)(),[s,p]=Object(a.useState)(!1),[u,y]=Object(a.useState)(!1);Object(a.useEffect)(()=>{y(!0)},[]);const d=Object(a.useRef)(null);let m=[],g="";const h=w();if(n&&T.test(n)){const e=n.match(T)[1];m=k.a.parse(e).filter(e=>e>0)}n&&S.test(n)&&(g=n.match(S)[0].split("title=")[1].replace(/"+/g,""));let b=t&&t.replace(/language-/,"");!b&&c.defaultLanguage&&(b=c.defaultLanguage);let j=e.replace(/\n$/,"");if(0===m.length&&void 0!==b){let t="";const n=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return C(["js","jsBlock"]);case"jsx":case"tsx":return C(["js","jsBlock","jsx"]);case"html":return C(["js","jsBlock","html"]);case"python":case"py":return C(["python"]);default:return C()}})(b),r=e.replace(/\n$/,"").split("\n");let a;for(let e=0;e<r.length;){const o=e+1,c=r[e].match(n);if(null!==c){switch(c.slice(1).reduce((e,t)=>e||t,void 0)){case"highlight-next-line":t+=o+",";break;case"highlight-start":a=o;break;case"highlight-end":t+=`${a}-${o-1},`}r.splice(e,1)}else e+=1}m=k.a.parse(t),j=r.join("\n")}const E=()=>{v()(j),p(!0),setTimeout(()=>p(!1),2e3)};return o.a.createElement(f,Object(r.a)({},i,{key:String(u),theme:h,code:j,language:b}),({className:e,style:t,tokens:n,getLineProps:a,getTokenProps:c})=>o.a.createElement(o.a.Fragment,null,g&&o.a.createElement("div",{style:t,className:N.a.codeBlockTitle},g),o.a.createElement("div",{className:N.a.codeBlockContent},o.a.createElement("button",{ref:d,type:"button","aria-label":"Copy code to clipboard",className:Object(l.a)(N.a.copyButton,{[N.a.copyButtonWithTitle]:g}),onClick:E},s?"Copied":"Copy"),o.a.createElement("div",{tabIndex:0,className:Object(l.a)(e,N.a.codeBlock,{[N.a.codeBlockWithTitle]:g})},o.a.createElement("div",{className:N.a.codeBlockLines,style:t},n.map((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=a({line:e,key:t});return m.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(r.a)({key:t},n),e.map((e,t)=>o.a.createElement("span",Object(r.a)({key:t},c({token:e,key:t})))))}))))))},B=(n(48),n(49)),A=n.n(B);var L=e=>function({id:t,...n}){const{siteConfig:{themeConfig:{navbar:{hideOnScroll:r=!1}={}}={}}={}}=Object(O.a)();return t?o.a.createElement(e,n,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(l.a)("anchor",{[A.a.enhancedAnchor]:!r}),id:t}),n.children,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+t,title:"Direct link to heading"},"#")):o.a.createElement(e,n)},$=n(50),I=n.n($);t.a={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?o.a.createElement(D,e):o.a.createElement("code",e):t},a:e=>o.a.createElement(c.a,e),pre:e=>o.a.createElement("div",Object(r.a)({className:I.a.mdxCodeBlock},e)),h1:L("h1"),h2:L("h2"),h3:L("h3"),h4:L("h4"),h5:L("h5"),h6:L("h6")}},61:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(100),c=n(96),l=n(106);t.default=function(e){const{content:t}=e,{frontMatter:n,metadata:r}=t,{title:s,description:i}=n,{permalink:p}=r;return a.a.createElement(o.a,{title:s,description:i,permalink:p},a.a.createElement("main",null,a.a.createElement("div",{className:"container margin-vert--lg padding-vert--lg"},a.a.createElement(c.a,{components:l.a},a.a.createElement(t,null)))))}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||y[d]||o;return n?a.a.createElement(m,l(l({ref:t},i),{},{components:n})):a.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);