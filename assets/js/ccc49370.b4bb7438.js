"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[3249],{62377:(e,t,n)=>{n.d(t,{A:()=>p});var a=n(30758),i=n(34670);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):a.push(i)})),a}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function r(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>o(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:s,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let i=t;i<=n;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:s,maxHeadingLevel:l}),c=r(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var m=n(1296),u=n(86070);function h(e){let{toc:t,className:n,linkClassName:a,isChild:i}=e;return t.length?(0,u.jsx)("ul",{className:i?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const g=a.memo(h);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:m,...h}=e;const p=(0,i.p)(),x=c??p.tableOfContents.minHeadingLevel,v=m??p.tableOfContents.maxHeadingLevel,f=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,a.useMemo)((()=>l({toc:s(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:x,maxHeadingLevel:v});return d((0,a.useMemo)((()=>{if(o&&r)return{linkClassName:o,linkActiveClassName:r,minHeadingLevel:x,maxHeadingLevel:v}}),[o,r,x,v])),(0,u.jsx)(g,{toc:f,className:n,linkClassName:o,...h})}},60485:(e,t,n)=>{n.d(t,{A:()=>o});n(30758);var a=n(13526),i=n(1296);const s={tag:"tag_PyY0",tagRegular:"tagRegular_Bb8z",tagWithCount:"tagWithCount_y0Xh"};var l=n(86070);function o(e){let{permalink:t,label:n,count:o,description:r}=e;return(0,l.jsxs)(i.A,{href:t,title:r,className:(0,a.A)(s.tag,o?s.tagWithCount:s.tagRegular),children:[n,o&&(0,l.jsx)("span",{children:o})]})}},82571:(e,t,n)=>{n.d(t,{A:()=>r});n(30758);var a=n(13526),i=n(15942),s=n(60485);const l={tags:"tags_IVg2",tag:"tag_RHry"};var o=n(86070);function r(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(i.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,a.A)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,o.jsx)("li",{className:l.tag,children:(0,o.jsx)(s.A,{...e})},e.permalink)))})]})}},17411:(e,t,n)=>{n.d(t,{e:()=>r,i:()=>o});var a=n(30758),i=n(4564),s=n(86070);const l=a.createContext(null);function o(e){let{children:t,content:n,isBlogPostPage:i=!1}=e;const o=function(e){let{content:t,isBlogPostPage:n}=e;return(0,a.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:i});return(0,s.jsx)(l.Provider,{value:o,children:t})}function r(){const e=(0,a.useContext)(l);if(null===e)throw new i.dV("BlogPostProvider");return e}},34689:(e,t,n)=>{n.d(t,{W:()=>c});var a=n(30758),i=n(61976);const s=["zero","one","two","few","many","other"];function l(e){return s.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function r(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function c(){const e=r();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const i=n.select(t),s=n.pluralForms.indexOf(i);return a[Math.min(s,a.length-1)]}(n,t,e)}}},3545:(e,t,n)=>{n.d(t,{A:()=>m});var a=n(30758),i=n(68835),s=n(48911),l=n(15942),o=n(86070);const r={note:{infimaClassName:"secondary",iconComponent:function(){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})},label:(0,o.jsx)(l.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})},tip:{infimaClassName:"success",iconComponent:function(){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})},label:(0,o.jsx)(l.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})},danger:{infimaClassName:"danger",iconComponent:function(){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})},label:(0,o.jsx)(l.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})},info:{infimaClassName:"info",iconComponent:function(){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})},label:(0,o.jsx)(l.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})},caution:{infimaClassName:"warning",iconComponent:function(){return(0,o.jsx)("svg",{viewBox:"0 0 16 16",children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})},label:(0,o.jsx)(l.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})}},c={secondary:"note",important:"info",success:"tip",warning:"danger"};function d(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),i=(0,o.jsx)(o.Fragment,{children:t.filter((e=>e!==n))});return{mdxAdmonitionTitle:n,rest:i}}(e.children);return{...e,title:e.title??t,children:n}}function m(e){const{children:t,type:n,title:a,icon:l}=d(e),m=function(e){const t=c[e]??e,n=r[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),r.info)}(n),u=a??m.label,{iconComponent:h}=m,g=l??(0,o.jsx)(h,{});return(0,o.jsxs)("div",{className:(0,i.A)(s.G.common.admonition,s.G.common.admonitionType(e.type),"alert",`alert--${m.infimaClassName}`,"admonition"),children:[(0,o.jsx)("div",{className:(0,i.A)("alert-icon","admonition-icon"),children:g}),(0,o.jsxs)("div",{className:(0,i.A)("alert-content","admonition-content"),children:[(0,o.jsx)("div",{className:"admonition-heading",children:u}),t]})]})}},4150:(e,t,n)=>{n.d(t,{A:()=>x});n(30758);var a=n(68835),i=n(71563),s=n(49021),l=n(1296),o=n(15942),r=n(25581);const c={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm",backButton:"backButton_MCHS"};var d=n(86070);function m(e){let{sidebar:t}=e;return(0,d.jsx)(r.P.aside,{className:"col col--2 overflow-hidden",initial:{opacity:0,x:-100},animate:{opacity:1,x:0},transition:{type:"spring",stiffness:400,damping:20,duration:.3},children:(0,d.jsxs)("nav",{className:(0,a.A)(c.sidebar,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,d.jsx)("div",{className:c.backButton,onClick:()=>{window.history.back()},children:(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",children:(0,d.jsx)("path",{fill:"currentColor",d:"M8 7v4L2 6l6-5v4h5a8 8 0 1 1 0 16H4v-2h9a6 6 0 0 0 0-12H8Z"})})}),(0,d.jsx)(l.A,{href:"/blog",className:(0,a.A)(c.sidebarItemTitle,"margin-bottom--sm"),children:t.title}),(0,d.jsx)("ul",{className:(0,a.A)(c.sidebarItemList,"clean-list"),children:t.items.map((e=>(0,d.jsx)("li",{className:c.sidebarItem,children:(0,d.jsx)(l.A,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var u=n(93688);function h(e){let{sidebar:t}=e;return(0,d.jsx)("ul",{className:"menu__list",children:t.items.map((e=>(0,d.jsx)("li",{className:"menu__list-item",children:(0,d.jsx)(l.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function g(e){return(0,d.jsx)(u.GX,{component:h,props:e})}function p(e){let{sidebar:t}=e;const n=(0,s.l)();return t?.items.length?"mobile"===n?(0,d.jsx)(g,{sidebar:t}):(0,d.jsx)(m,{sidebar:t}):null}function x(e){const{sidebar:t,toc:n,children:s,...l}=e,o=t&&t.items.length>0;return(0,d.jsx)(i.A,{...l,children:(0,d.jsx)("div",{className:"container-wrapper blog-container",children:(0,d.jsx)("div",{className:"container margin-vert--lg",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)(p,{sidebar:t}),(0,d.jsx)("main",{className:(0,a.A)("col",{"col--8 overflow-hidden":o,"col--12":!o}),itemScope:!0,itemType:"http://schema.org/Blog",children:s}),n&&(0,d.jsx)("div",{className:"col col--2",children:n})]})})})})}},33498:(e,t,n)=>{n.d(t,{A:()=>R});n(30758);var a=n(68835),i=n(17411),s=n(5283),l=n(61976),o=n(86070);function r(e){let{children:t,className:n}=e;const{frontMatter:a,assets:r,metadata:{description:c,date:d},isBlogPostPage:m}=(0,i.e)(),{withBaseUrl:u}=(0,s.hH)(),h=r.image??a.image,g=a.keywords??[],p=new Date(d),{i18n:{currentLocale:x}}=(0,l.A)(),v=p.getFullYear();let f=`${p.getMonth()+1}`;const b=p.getDate();let j=`${v}\u5e74${f}\u6708`;return"en"===x&&(f=p.toLocaleString("default",{month:"long"}),j=`${f}, ${v}`),(0,o.jsx)("div",{className:""+(m?"":"blog-list--box"),children:(0,o.jsxs)("div",{className:"row "+(m?"":"blog-list--item"),style:{margin:0},children:[!m&&(0,o.jsxs)("div",{className:"post__date-container col col--3 padding-right--lg margin-bottom--lg",children:[(0,o.jsxs)("div",{className:"post__date",children:[(0,o.jsx)("div",{className:"post__day",children:b}),(0,o.jsx)("div",{className:"post__year_month",children:j})]}),(0,o.jsx)("div",{className:"line__decor"})]}),(0,o.jsx)("div",{className:"col "+(m?"col--12 article__details article-bg":"col--9"),children:(0,o.jsxs)("article",{className:n,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting",children:[c&&(0,o.jsx)("meta",{itemProp:"description",content:c}),h&&(0,o.jsx)("link",{itemProp:"image",href:u(h,{absolute:!0})}),g.length>0&&(0,o.jsx)("meta",{itemProp:"keywords",content:g.join(",")}),t]})})]})})}var c=n(1296);const d={blogPostTitle:"blogPostTitle_thoQ",blogPostTitleLink:"blogPostTitleLink_Mh8X",title:"title_xvU1"};function m(e){let{className:t}=e;const{metadata:n,isBlogPostPage:s}=(0,i.e)(),{permalink:l,title:r}=n,m=s?"h1":"h2";return(0,o.jsx)(m,{className:(0,a.A)(s?"margin-bottom--md":"margin-vert--md",d.blogPostTitle,s?"text--center":"",t,"post--titleLink"),itemProp:"headline",children:s?r:(0,o.jsx)("div",{className:d.blogPostTitleLink,children:(0,o.jsx)(c.A,{itemProp:"url",to:l,children:r})})})}var u=n(15942),h=n(34689);const g={"container-blog":"container-blog_SUY0"};function p(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,h.W)();return t=>{const n=Math.ceil(t);return e(n,(0,u.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,o.jsx)(o.Fragment,{children:n(t)})}function x(e){let{date:t,formattedDate:n}=e;return(0,o.jsx)("time",{dateTime:t,itemProp:"datePublished",children:n})}function v(){return(0,o.jsx)(o.Fragment,{children:" \xb7 "})}function f(e){let{className:t}=e;const{metadata:n,isBlogPostPage:s}=(0,i.e)(),{date:l,formattedDate:r,readingTime:c}=n;return s?(0,o.jsxs)("div",{className:(0,a.A)(g.container,"margin-vert--md",t),children:[(0,o.jsx)(x,{date:l,formattedDate:r}),void 0!==c&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{}),(0,o.jsx)(p,{readingTime:c})]})]}):null}function b(e){return e.href?(0,o.jsx)(c.A,{...e}):(0,o.jsx)(o.Fragment,{children:e.children})}function j(e){let{author:t,className:n}=e;const{name:i,title:s,url:l,imageURL:r,email:c}=t,d=l||c&&`mailto:${c}`||void 0;return(0,o.jsxs)("div",{className:(0,a.A)("avatar margin-bottom--sm",n),children:[r&&(0,o.jsx)(b,{href:d,className:"avatar__photo-link",children:(0,o.jsx)("img",{className:"avatar__photo",src:r,alt:i,itemProp:"image"})}),i&&(0,o.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,o.jsx)("div",{className:"avatar__name",children:(0,o.jsx)(b,{href:d,itemProp:"url",children:(0,o.jsx)("span",{itemProp:"name",children:i})})}),s&&(0,o.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:s})]})]})}const N={authorCol:"authorCol_q4o9",imageOnlyAuthorRow:"imageOnlyAuthorRow_lXe7",imageOnlyAuthorCol:"imageOnlyAuthorCol_cxD5"};function _(e){let{className:t}=e;const{metadata:{authors:n},assets:s}=(0,i.e)();if(0===n.length)return null;const l=n.every((e=>{let{name:t}=e;return!t}));return(0,o.jsx)("div",{className:(0,a.A)("margin-top--md margin-bottom--sm",l?N.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,o.jsx)("div",{className:(0,a.A)(!l&&"col col--6",l?N.imageOnlyAuthorCol:N.authorCol),children:(0,o.jsx)(j,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})},t)))})}function A(){const{metadata:e,isBlogPostPage:t}=(0,i.e)(),{tags:n,hasTruncateMarker:a}=e;return t||0===n.length?null:(n.length>0||a)&&(0,o.jsx)("div",{className:"post__tags-container margin-top--none margin-bottom--md",children:n.length>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"tags",className:"svg-inline--fa fa-tags margin-right--md",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",color:"#c4d3e0",children:(0,o.jsx)("path",{fill:"currentColor",d:"M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"})}),n.slice(0,4).map(((e,t)=>{let{label:n,permalink:a}=e;return(0,o.jsx)(c.A,{className:"post__tags "+(t>0?"margin-horiz--sm":"margin-right--sm"),to:a,style:{fontSize:"0.75em",fontWeight:500},children:n},a)}))]})})}function L(){return(0,o.jsxs)("header",{children:[(0,o.jsx)(m,{}),(0,o.jsx)(f,{}),(0,o.jsx)(_,{}),(0,o.jsx)(A,{})]})}var k=n(93242),C=n(91100);function P(e){let{children:t,className:n}=e;const{isBlogPostPage:s}=(0,i.e)();return(0,o.jsx)("div",{id:s?k.blogPostContainerID:void 0,className:(0,a.A)("markdown",n),itemProp:"articleBody",children:(0,o.jsx)(C.A,{children:t})})}var w=n(84832);const y={readMore:"readMore_YoYl"};function T(){return(0,o.jsx)("b",{className:y.readMore,children:(0,o.jsx)(u.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function H(e){const{blogPostTitle:t,...n}=e;return(0,o.jsx)(c.A,{"aria-label":(0,u.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,o.jsx)(T,{})})}var M=n(82571);const B={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y"};function I(){const{metadata:e,isBlogPostPage:t}=(0,i.e)(),{tags:n,title:s,editUrl:l,hasTruncateMarker:r}=e,c=!t&&r;if(!(c||l))return null;return(0,o.jsxs)("footer",{className:(0,a.A)("row docusaurus-mt-lg",t&&B.blogPostFooterDetailsFull),children:[(0,o.jsx)("div",{className:"post-footer",children:(()=>{if(!t)return null;const e=[];return n.length>0&&e.push((0,o.jsx)("div",{className:(0,a.A)("col",{"col--9":c}),children:(0,o.jsx)(M.A,{tags:n})},"tags")),l&&e.push((0,o.jsx)("div",{className:"col col-3 text--right",children:(0,o.jsx)(w.A,{editUrl:l})},"editUrl")),e})()}),c&&(0,o.jsx)("div",{className:(0,a.A)("col text--right"),children:(0,o.jsx)(H,{blogPostTitle:s,to:e.permalink})})]})}function R(e){let{children:t,className:n}=e;const s=function(){const{isBlogPostPage:e}=(0,i.e)();return e?void 0:"margin-bottom--xl"}();return(0,o.jsxs)(r,{className:(0,a.A)(s,n),children:[(0,o.jsx)(L,{}),(0,o.jsx)(P,{children:t}),(0,o.jsx)(I,{})]})}},13502:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});n(30758);var a=n(68835),i=n(41781),s=n(48911),l=n(17411),o=n(4150),r=n(33498),c=n(15942),d=n(79892),m=n(86070);function u(e){const{nextItem:t,prevItem:n}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,m.jsx)(d.A,{...n,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,m.jsx)(d.A,{...t,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function h(){const{assets:e,metadata:t}=(0,l.e)(),{title:n,description:a,date:s,tags:o,authors:r,frontMatter:c}=t,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(i.be,{title:n,description:a,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:s}),r.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:r.map((e=>e.url)).filter(Boolean).join(",")}),o.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:o.map((e=>e.label)).join(",")})]})}var g=n(84461);function p(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:i}=(0,l.e)(),{nextItem:s,prevItem:c,frontMatter:d}=a,{hide_table_of_contents:h,toc_min_heading_level:p,toc_max_heading_level:x}=d;return(0,m.jsxs)(o.A,{sidebar:t,toc:!h&&i.length>0?(0,m.jsx)(g.A,{toc:i,minHeadingLevel:p,maxHeadingLevel:x}):void 0,children:[(0,m.jsx)(r.A,{children:n}),(s||c)&&(0,m.jsx)(u,{nextItem:s,prevItem:c})]})}function x(e){const t=e.content;return(0,m.jsx)(l.i,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(i.e3,{className:(0,a.A)(s.G.wrapper.blogPages,s.G.page.blogPostPage),children:[(0,m.jsx)(h,{}),(0,m.jsx)(p,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}},137:(e,t,n)=>{n.d(t,{A:()=>o});n(30758);var a=n(68835),i=n(48911);const s={codeBlockContainer:"codeBlockContainer_APcc"};var l=n(86070);function o(e){let{as:t,...n}=e;return(0,l.jsx)(t,{...n,className:(0,a.A)(n.className,s.codeBlockContainer,i.G.common.codeBlock)})}},73632:(e,t,n)=>{n.d(t,{A:()=>r});n(30758);var a=n(68835),i=n(5104);const s={details:"details_r1OI"};var l=n(86070);const o="alert alert--info";function r(e){let{...t}=e;return(0,l.jsx)(i.B,{...t,className:(0,a.A)(o,s.details,t.className)})}},79892:(e,t,n)=>{n.d(t,{A:()=>o});n(30758);var a=n(68835),i=n(1296);const s={paginationNavLink:"paginationNavLink_UdUv","pagination-nav__link--next":"pagination-nav__link--next_UjCy",paginationNavLabel:"paginationNavLabel_YPzM",paginationNavContent:"paginationNavContent__3xr"};var l=n(86070);function o(e){const{permalink:t,title:n,subLabel:o,isNext:r}=e;return(0,l.jsxs)(i.A,{className:(0,a.A)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev",s.paginationNavLink),to:t,children:[!r&&(0,l.jsx)("svg",{width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M9.2751 19.175L10.3251 18.125L5.4501 13.25H21.6001V11.75H5.4501L10.3251 6.87501L9.2751 5.82501L2.5751 12.5L9.2751 19.175Z",fill:"currentColor"})}),(0,l.jsxs)("div",{className:s.paginationNavContent,children:[o&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:o}),(0,l.jsx)("div",{className:(0,a.A)(s.paginationNavLabel,"pagination-nav__label"),children:n})]}),r&&(0,l.jsx)("svg",{width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M14.7249 19.175L13.6749 18.125L18.5499 13.25H2.3999V11.75H18.5499L13.6749 6.87501L14.7249 5.82501L21.4249 12.5L14.7249 19.175Z",fill:"currentColor"})})]})}},84461:(e,t,n)=>{n.d(t,{A:()=>d});n(30758);var a=n(68835),i=n(62377);const s={tableOfContents:"tableOfContents_jeP5"};var l=n(25581),o=n(86070);const r="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function d(e){let{className:t,...n}=e;return(0,o.jsx)(l.P.div,{className:(0,a.A)(s.tableOfContents,"thin-scrollbar",t),initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{type:"spring",stiffness:400,damping:20,duration:.3},children:(0,o.jsx)(i.A,{...n,linkClassName:r,linkActiveClassName:c})})}}}]);