(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[2846],{84832:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});n(30758);var s=n(15942),o=n(48911),c=n(1296),r=n(13526);const a={iconEdit:"iconEdit_VBMe"};var l=n(86070);function i(e){let{className:t,...n}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.A)(a.iconEdit,t),"aria-hidden":"true",...n,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function u(e){let{editUrl:t}=e;return(0,l.jsxs)(c.A,{to:t,className:o.G.common.editThisPage,children:[(0,l.jsx)(i,{}),(0,l.jsx)(s.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},91100:(e,t,n)=>{"use strict";n.d(t,{A:()=>K});var s=n(30758),o=n(76113),c=n(52382),r=n(33689),a=n(13526),l=n(137);const i={codeBlockContent:"codeBlockContent_ihow",codeBlockTitle:"codeBlockTitle_C4OC",codeBlock:"codeBlock_iz1S",codeBlockStandalone:"codeBlockStandalone_HS4u",codeBlockLines:"codeBlockLines_GbGI",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_PRZA",buttonGroup:"buttonGroup_lm1i"};var u=n(86070);function d(e){let{children:t,className:n}=e;return(0,u.jsx)(l.A,{as:"pre",tabIndex:0,className:(0,a.A)(i.codeBlockStandalone,"thin-scrollbar",n),children:(0,u.jsx)("code",{className:i.codeBlockLines,children:t})})}var m=n(34670),p=n(87221);var h=n(34809),f=n.n(h);const b=/title=(?<quote>["'])(?<title>.*?)\1/,g=/\{(?<range>[\d,-]+)\}/,x={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},j={...x,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},v=Object.keys(x);function k(e,t){const n=e.map((e=>{const{start:n,end:s}=j[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function y(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:o,metastring:c}=t;if(c&&g.test(c)){const e=c.match(g).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${c}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,s=f()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const r=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return k(["js","jsBlock"],t);case"jsx":case"tsx":return k(["js","jsBlock","jsx"],t);case"html":return k(["js","jsBlock","html"],t);case"python":case"py":case"bash":return k(["bash"],t);case"markdown":case"md":return k(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return k(["tex"],t);case"lua":case"haskell":case"sql":return k(["lua"],t);case"wasm":return k(["wasm"],t);case"vb":case"vba":case"visual-basic":return k(["vb","rem"],t);case"vbnet":return k(["vbnet","rem"],t);case"batch":return k(["rem"],t);case"basic":return k(["rem","f90"],t);case"fsharp":return k(["js","ml"],t);case"ocaml":case"sml":return k(["ml"],t);case"fortran":return k(["f90"],t);case"cobol":return k(["cobol"],t);default:return k(v,t)}}(s,o),a=n.split("\n"),l=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),d=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<a.length;){const e=a[p].match(r);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?l[i[t]].range+=`${p},`:u[t]?l[u[t]].start=p:d[t]&&(l[d[t]].range+=`${l[d[t]].start}-${p-1},`),a.splice(p,1)}n=a.join("\n");const m={};return Object.entries(l).forEach((e=>{let[t,{range:n}]=e;f()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}var B=n(4564);const N={attributes:!0,characterData:!0,childList:!0,subtree:!0};function C(e,t){const[n,o]=(0,s.useState)(),c=(0,s.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,s.useEffect)((()=>{c()}),[c]),function(e,t,n){void 0===n&&(n=N);const o=(0,B._q)(t),c=(0,B.Be)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,c),()=>t.disconnect()}),[e,o,c])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var w=n(63477);const A={codeLine:"codeLine_RI9G",codeLineNumber:"codeLineNumber_a3xJ",codeLineContent:"codeLineContent_hs9n"};function E(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:o,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const r=o({line:t,className:(0,a.A)(n,s&&A.codeLine)}),l=t.map(((e,t)=>(0,u.jsx)("span",{...c({token:e})},t)));return(0,u.jsxs)("span",{...r,children:[s?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{className:A.codeLineNumber}),(0,u.jsx)("span",{className:A.codeLineContent,children:l})]}):l,(0,u.jsx)("br",{})]})}var L=n(15942);function T(e){return(0,u.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,u.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function _(e){return(0,u.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,u.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const S={copyButtonCopied:"copyButtonCopied_n4sO",copyButtonIcons:"copyButtonIcons_JoRx",copyButtonIcon:"copyButtonIcon_ZTbR",copyButtonSuccessIcon:"copyButtonSuccessIcon_r18r"};function I(e){let{code:t,className:n}=e;const[o,c]=(0,s.useState)(!1),r=(0,s.useRef)(void 0),l=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),o=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const c=document.getSelection(),r=c.rangeCount>0&&c.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}s.remove(),r&&(c.removeAllRanges(),c.addRange(r)),o&&o.focus()}(t),c(!0),r.current=window.setTimeout((()=>{c(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(r.current)),[]),(0,u.jsx)("button",{type:"button","aria-label":o?(0,L.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,L.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,L.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.A)("clean-btn",n,S.copyButton,o&&S.copyButtonCopied),onClick:l,children:(0,u.jsxs)("span",{className:S.copyButtonIcons,"aria-hidden":"true",children:[(0,u.jsx)(T,{className:S.copyButtonIcon}),(0,u.jsx)(_,{className:S.copyButtonSuccessIcon})]})})}function R(e){return(0,u.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,u.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const M={wordWrapButtonIcon:"wordWrapButtonIcon_uhfW",wordWrapButtonEnabled:"wordWrapButtonEnabled_KRrm"};function W(e){let{className:t,onClick:n,isEnabled:s}=e;const o=(0,L.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,u.jsx)("button",{type:"button",onClick:n,className:(0,a.A)("clean-btn",t,s&&M.wordWrapButtonEnabled),"aria-label":o,title:o,children:(0,u.jsx)(R,{className:M.wordWrapButtonIcon,"aria-hidden":"true"})})}function $(e){let{children:t,className:n="",metastring:o,title:c,showLineNumbers:r,language:d}=e;const{prism:{defaultLanguage:h,magicComments:f}}=(0,m.p)(),g=function(e){return e?.toLowerCase()}(d??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??h),x=function(){const{prism:e}=(0,m.p)(),{colorMode:t}=(0,p.G)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}(),j=function(){const[e,t]=(0,s.useState)(!1),[n,o]=(0,s.useState)(!1),c=(0,s.useRef)(null),r=(0,s.useCallback)((()=>{const n=c.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[c,e]),a=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=c.current,n=e>t||c.current.querySelector("code").hasAttribute("style");o(n)}),[c]);return C(c,a),(0,s.useEffect)((()=>{a()}),[e,a]),(0,s.useEffect)((()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)})),[a]),{codeBlockRef:c,isEnabled:e,isCodeScrollable:n,toggle:r}}(),v=function(e){return e?.match(b)?.groups.title??""}(o)||c,{lineClassNames:k,code:B}=y(t,{metastring:o,language:g,magicComments:f}),N=r??function(e){return Boolean(e?.includes("showLineNumbers"))}(o);return(0,u.jsxs)(l.A,{as:"div",className:(0,a.A)(n,g&&!n.includes(`language-${g}`)&&`language-${g}`),children:[v&&(0,u.jsx)("div",{className:i.codeBlockTitle,children:v}),(0,u.jsxs)("div",{className:i.codeBlockContent,children:[(0,u.jsx)(w.f4,{theme:x,code:B,language:g??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:o,getTokenProps:c}=e;return(0,u.jsx)("pre",{tabIndex:0,ref:j.codeBlockRef,className:(0,a.A)(t,i.codeBlock,"thin-scrollbar"),style:n,children:(0,u.jsx)("code",{className:(0,a.A)(i.codeBlockLines,N&&i.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,u.jsx)(E,{line:e,getLineProps:o,getTokenProps:c,classNames:k[t],showLineNumbers:N},t)))})})}}),(0,u.jsxs)("div",{className:i.buttonGroup,children:[(j.isEnabled||j.isCodeScrollable)&&(0,u.jsx)(W,{className:i.codeButton,onClick:()=>j.toggle(),isEnabled:j.isEnabled}),(0,u.jsx)(I,{className:i.codeButton,code:B})]})]})]})}function H(e){let{children:t,...n}=e;const o=(0,r.A)(),c=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),a="string"==typeof c?$:d;return(0,u.jsx)(a,{...n,children:c},String(o))}function P(e){return(0,u.jsx)("code",{...e})}var z=n(1296);var V=n(73632);function O(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),o=(0,u.jsx)(u.Fragment,{children:t.filter((e=>e!==n))});return(0,u.jsx)(V.A,{...e,summary:n,children:o})}var D=n(89115);function G(e){return(0,u.jsx)(D.A,{...e})}const q={containsTaskList:"containsTaskList_EBce"};function F(e){if(void 0!==e)return(0,a.A)(e,e?.includes("contains-task-list")&&q.containsTaskList)}var Z=n(84663);const U={img:"img_iwx1"};var J=n(3545);const Y={Head:c.A,details:O,Details:O,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,u.jsx)(P,{...e}):(0,u.jsx)(H,{...e})},a:function(e){return(0,u.jsx)(z.A,{...e})},pre:function(e){return(0,u.jsx)(u.Fragment,{children:e.children})},ul:function(e){return(0,u.jsx)("ul",{...e,className:F(e.className)})},li:function(e){return(0,Z.A)().collectAnchor(e.id),(0,u.jsx)("li",{...e})},img:function(e){return(0,u.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,a.A)(t,U.img))});var t},h1:e=>(0,u.jsx)(G,{as:"h1",...e}),h2:e=>(0,u.jsx)(G,{as:"h2",...e}),h3:e=>(0,u.jsx)(G,{as:"h3",...e}),h4:e=>(0,u.jsx)(G,{as:"h4",...e}),h5:e=>(0,u.jsx)(G,{as:"h5",...e}),h6:e=>(0,u.jsx)(G,{as:"h6",...e}),admonition:J.A,mermaid:()=>null};function K(e){let{children:t}=e;return(0,u.jsx)(o.x,{components:Y,children:t})}},5104:(e,t,n)=>{"use strict";n.d(t,{B:()=>m});var s=n(30758),o=n(13526),c=n(84663),r=n(33689),a=n(92710);const l={details:"details_kU5D",isBrowser:"isBrowser_EbjX",collapsibleContent:"collapsibleContent_Ysd0"};var i=n(86070);function u(e){return!!e&&("SUMMARY"===e.tagName||u(e.parentElement))}function d(e,t){return!!e&&(e===t||d(e.parentElement,t))}function m(e){let{summary:t,children:n,...m}=e;(0,c.A)().collectAnchor(m.id);const p=(0,r.A)(),h=(0,s.useRef)(null),{collapsed:f,setCollapsed:b}=(0,a.u)({initialState:!m.open}),[g,x]=(0,s.useState)(m.open),j=s.isValidElement(t)?t:(0,i.jsx)("summary",{children:t??"Details"});return(0,i.jsxs)("details",{...m,ref:h,open:g,"data-collapsed":f,className:(0,o.A)(l.details,p&&l.isBrowser,m.className),onMouseDown:e=>{u(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;u(t)&&d(t,h.current)&&(e.preventDefault(),f?(b(!1),x(!0)):b(!0))},children:[j,(0,i.jsx)(a.N,{lazy:!1,collapsed:f,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{b(e),x(!e)},children:(0,i.jsx)("div",{className:l.collapsibleContent,children:n})})]})}},34809:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,o,c]=t;if(s&&c){s=parseInt(s),c=parseInt(c);const e=s<c?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(c+=e);for(let t=s;t!==c;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},76113:(e,t,n)=>{"use strict";n.d(t,{R:()=>r,x:()=>a});var s=n(30758);const o={},c=s.createContext(o);function r(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);