"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[8209],{60485:(e,t,s)=>{s.d(t,{A:()=>n});s(30758);var a=s(13526),i=s(1296);const r={tag:"tag_PyY0",tagRegular:"tagRegular_Bb8z",tagWithCount:"tagWithCount_y0Xh"};var l=s(86070);function n(e){let{permalink:t,label:s,count:n,description:c}=e;return(0,l.jsxs)(i.A,{href:t,title:c,className:(0,a.A)(r.tag,n?r.tagWithCount:r.tagRegular),children:[s,n&&(0,l.jsx)("span",{children:n})]})}},4150:(e,t,s)=>{s.d(t,{A:()=>p});s(30758);var a=s(68835),i=s(71563),r=s(49021),l=s(1296),n=s(15942),c=s(25581);const o={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm",backButton:"backButton_MCHS"};var d=s(86070);function m(e){let{sidebar:t}=e;return(0,d.jsx)(c.P.aside,{className:"col col--2 overflow-hidden",initial:{opacity:0,x:-100},animate:{opacity:1,x:0},transition:{type:"spring",stiffness:400,damping:20,duration:.3},children:(0,d.jsxs)("nav",{className:(0,a.A)(o.sidebar,"thin-scrollbar"),"aria-label":(0,n.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,d.jsx)("div",{className:o.backButton,onClick:()=>{window.history.back()},children:(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",children:(0,d.jsx)("path",{fill:"currentColor",d:"M8 7v4L2 6l6-5v4h5a8 8 0 1 1 0 16H4v-2h9a6 6 0 0 0 0-12H8Z"})})}),(0,d.jsx)(l.A,{href:"/blog",className:(0,a.A)(o.sidebarItemTitle,"margin-bottom--sm"),children:t.title}),(0,d.jsx)("ul",{className:(0,a.A)(o.sidebarItemList,"clean-list"),children:t.items.map((e=>(0,d.jsx)("li",{className:o.sidebarItem,children:(0,d.jsx)(l.A,{isNavLink:!0,to:e.permalink,className:o.sidebarItemLink,activeClassName:o.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var h=s(93688);function b(e){let{sidebar:t}=e;return(0,d.jsx)("ul",{className:"menu__list",children:t.items.map((e=>(0,d.jsx)("li",{className:"menu__list-item",children:(0,d.jsx)(l.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function g(e){return(0,d.jsx)(h.GX,{component:b,props:e})}function u(e){let{sidebar:t}=e;const s=(0,r.l)();return t?.items.length?"mobile"===s?(0,d.jsx)(g,{sidebar:t}):(0,d.jsx)(m,{sidebar:t}):null}function p(e){const{sidebar:t,toc:s,children:r,...l}=e,n=t&&t.items.length>0;return(0,d.jsx)(i.A,{...l,children:(0,d.jsx)("div",{className:"container-wrapper blog-container",children:(0,d.jsx)("div",{className:"container margin-vert--lg",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)(u,{sidebar:t}),(0,d.jsx)("main",{className:(0,a.A)("col",{"col--8 overflow-hidden":n,"col--12":!n}),itemScope:!0,itemType:"http://schema.org/Blog",children:r}),s&&(0,d.jsx)("div",{className:"col col--2",children:s})]})})})})}},13898:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});s(30758);var a=s(68835),i=s(15942);const r=()=>(0,i.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var l=s(41781),n=s(48911),c=s(4150),o=s(60485),d=s(89115);const m={tag:"tag_fFYs"};var h=s(86070);function b(e){let{letterEntry:t}=e;return(0,h.jsxs)("article",{children:[(0,h.jsx)(d.A,{as:"h2",id:t.letter,children:t.letter}),(0,h.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,h.jsx)("li",{className:m.tag,children:(0,h.jsx)(o.A,{...e})},e.permalink)))}),(0,h.jsx)("hr",{})]})}function g(e){let{tags:t}=e;const s=function(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,h.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,h.jsx)(b,{letterEntry:e},e.letter)))})}var u=s(82064);function p(e){let{tags:t,sidebar:s}=e;const i=r();return(0,h.jsxs)(l.e3,{className:(0,a.A)(n.G.wrapper.blogPages,n.G.page.blogTagsListPage),children:[(0,h.jsx)(l.be,{title:i}),(0,h.jsx)(u.A,{tag:"blog_tags_list"}),(0,h.jsxs)(c.A,{sidebar:s,children:[(0,h.jsx)("h1",{children:i}),(0,h.jsx)(g,{tags:t})]})]})}}}]);