(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{125:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return m}));var n=a(2),r=a(6),o=(a(0),a(140)),i={id:"configuring-foreman-terminal",title:"Configuring Foreman in the terminal",sidebar_label:"Configuring Foreman in the terminal"},c={unversionedId:"configuring-foreman-terminal",id:"configuring-foreman-terminal",isDocsHomePage:!1,title:"Configuring Foreman in the terminal",description:"This is part of the Foreman tutorial series. Be sure to refer to the first tutorial if you have not already.",source:"@site/docs/configuring-foreman-terminal.md",slug:"/configuring-foreman-terminal",permalink:"/docs/configuring-foreman-terminal",editUrl:"https://github.com/jeremyhager/yugawa-website/edit/master/docs/configuring-foreman-terminal.md",version:"current",sidebar_label:"Configuring Foreman in the terminal",sidebar:"docs",previous:{title:"Installing Foreman with Katello",permalink:"/docs/installing-foreman-with-katello"},next:{title:"Content views, activation keys, and backing up Foreman",permalink:"/docs/foreman-content-keys-backup"}},l=[{value:"Set up hammer variables",id:"set-up-hammer-variables",children:[]},{value:"Setting up GPG keys",id:"setting-up-gpg-keys",children:[]},{value:"Create Repos",id:"create-repos",children:[]},{value:"Sync Repos",id:"sync-repos",children:[]},{value:"Sources",id:"sources",children:[]}],s={rightToc:l};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This is part of the Foreman tutorial series. Be sure to refer to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/installing-foreman-with-katello"}),"first tutorial")," if you have not already."))),Object(o.b)("h2",{id:"set-up-hammer-variables"},"Set up hammer variables"),Object(o.b)("h4",{id:"create-a-yml-file-for-to-save-credentials"},"Create a ",Object(o.b)("inlineCode",{parentName:"h4"},"*.yml")," file for to save credentials:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml",metastring:'title="~/.hammer/cli_config.yml"',title:'"~/.hammer/cli_config.yml"'}),":foreman:\n :host: 'https://foreman.internal.virtnet'\n :username: 'admin'\n :password: 'password'\n")),Object(o.b)("h4",{id:"protect-the-password"},"Protect the password:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"chmod 600 ~/.hammer/cli_config.yml\n")),Object(o.b)("h4",{id:"set-the-organization"},"Set the organization:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'hammer organization update --name "Default Organization" --new-name "internal.virtnet"\n')),Object(o.b)("h4",{id:"finally-set-hammer-variables"},"Finally set hammer variables:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'hammer defaults add --param-name organization --param-value "internal.virtnet"\n')),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This was done for ease-of-use. It is not necessary in order to use ",Object(o.b)("inlineCode",{parentName:"p"},"hammer"),". However proceeding commands will be omitting specifying the eg. organization."))),Object(o.b)("h2",{id:"setting-up-gpg-keys"},"Setting up GPG keys"),Object(o.b)("h4",{id:"create-a-product"},"Create a product:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'hammer product create --name "CentOS 7"\n')),Object(o.b)("h4",{id:"download-and-store-gpg-keys"},"Download and store GPG Keys"),Object(o.b)("p",null,"First, download the CentOS 7 GPG key:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"wget http://mirror.centos.org/centos/7/os/x86_64/RPM-GPG-KEY-CentOS-7\n")),Object(o.b)("p",null,"Then store via ",Object(o.b)("inlineCode",{parentName:"p"},"hammer content-credentials"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'hammer content-credentials create --content-type gpg_key --key "RPM-GPG-KEY-CentOS-7" --name "RPM-GPG-KEY-CentOS-7"\n')),Object(o.b)("p",null,"Now let's do the same for EPEL 7 GPG key:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"wget https://archive.fedoraproject.org/pub/epel/RPM-GPG-KEY-EPEL-7Server\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'hammer content-credentials create --content-type gpg_key --key "RPM-GPG-KEY-EPEL-7Server" --name "RPM-GPG-KEY-EPEL-7Server"\n')),Object(o.b)("h2",{id:"create-repos"},"Create Repos"),Object(o.b)("h4",{id:"centos-7-base-repo"},"CentOS 7 base repo:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'hammer repository create --product "CentOS 7" --name "x86_64" --content-type "yum" --download-policy "on_demand" --gpg-key "RPM-GPG-KEY-CentOS-7" --url "http://mirror.centos.org/centos/7/os/x86_64/" --mirror-on-sync "no"\n')),Object(o.b)("h4",{id:"centos-7-extras-repo"},"CentOS 7 extras repo:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'hammer repository create --product "CentOS 7" --name "x86_64_extras" --content-type "yum" --download-policy "on_demand" --gpg-key "RPM-GPG-KEY-CentOS-7" --url "http://mirror.centos.org/centos/7/extras/x86_64/" --mirror-on-sync "no"\n')),Object(o.b)("h4",{id:"centos-7-updates-repo"},"CentOS 7 updates repo:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'hammer repository create --product "CentOS 7" --name "x86_64_updates" --content-type "yum" --download-policy "on_demand" --gpg-key "RPM-GPG-KEY-CentOS-7" --url "http://mirror.centos.org/centos/7/updates/x86_64/" --mirror-on-sync "no"\n')),Object(o.b)("h4",{id:"epel-7-repo"},"EPEL 7 repo:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'hammer repository create --product "CentOS 7" --name "x86_64_epel" --content-type "yum" --download-policy "on_demand" --gpg-key "RPM-GPG-KEY-EPEL-7Server" --url "https://dl.fedoraproject.org/pub/epel/7Server/x86_64/" --mirror-on-sync "no"\n')),Object(o.b)("h2",{id:"sync-repos"},"Sync Repos"),Object(o.b)("p",null,"You can sync the repos using a small loop:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'for i in $(seq 1 4); do \\\n  hammer repository synchronize \\\n  --product "CentOS 7" \\\n  --id "$i"; \\\n  done\n')),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"These will take a while to sync."))),Object(o.b)("h2",{id:"sources"},"Sources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://access.redhat.com/documentation/en-us/red_hat_satellite/6.2/html/hammer_cli_guide/chap-cli_guide-introduction_to_hammer#sect-CLI_Guide-Authentication"}),"Set hammer authentication")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://access.redhat.com/documentation/en-us/red_hat_satellite/6.2/html-single/hammer_cli_guide/index#sect-CLI_Guide-Creating_and_Editing_ACME_Organization"}),"Set organization name")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.lisenet.com/2018/katello-create-products-repositories-content-views-lifecycle-environments-activation-keys/"}),"Katello guide"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"I've copied a lot here, but please give this a view as it helped me quite a bit."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://access.redhat.com/documentation/en-us/red_hat_satellite/6.4/html/administering_red_hat_satellite/chap-red_hat_satellite-administering_red_hat_satellite-backup_and_disaster_recovery/#proc-Red_Hat_Satellite-Administering_Red_Hat_Satellite-Backing_up_Satellite_Server_or_Capsule_Server-To_Perform_a_Full_Offline_Backup_of_Satellite_Server_or_Capsule_Server"}),"foreman-maintain backup"))))}m.isMDXComponent=!0},140:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=m(a),d=n,u=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return a?r.a.createElement(u,c(c({ref:t},s),{},{components:a})):r.a.createElement(u,c({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);