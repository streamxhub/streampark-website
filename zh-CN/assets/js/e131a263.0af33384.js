"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[9301],{91886:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=s(86070),l=s(76113);const i={id:"version-upgrade",title:"\u7248\u672c\u5347\u7ea7\u6307\u5357",sidebar_position:20},t=void 0,d={id:"platform/version-upgrade",title:"\u7248\u672c\u5347\u7ea7\u6307\u5357",description:"\u5347\u7ea7\u524d\u51c6\u5907",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/platform/20.version-upgrade.md",sourceDirName:"platform",slug:"/platform/version-upgrade",permalink:"/zh-CN/docs/platform/version-upgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/platform/20.version-upgrade.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"version-upgrade",title:"\u7248\u672c\u5347\u7ea7\u6307\u5357",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Flink on Kubernetes",permalink:"/zh-CN/docs/platform/k8s/flink-on-k8s"},next:{title:"\u7f16\u7a0b\u6a21\u578b",permalink:"/zh-CN/docs/framework/dev-model"}},o={},c=[{value:"\u5347\u7ea7\u524d\u51c6\u5907",id:"\u5347\u7ea7\u524d\u51c6\u5907",level:3},{value:"\u627e\u5230\u5347\u7ea7\u811a\u672c",id:"\u627e\u5230\u5347\u7ea7\u811a\u672c",level:3},{value:"\u6267\u884c\u5347\u7ea7\u811a\u672c",id:"\u6267\u884c\u5347\u7ea7\u811a\u672c",level:3},{value:"\u793a\u4f8b\uff1a\u4ece 2.0.0 \u5347\u7ea7\u5230 2.1.2",id:"\u793a\u4f8b\u4ece-200-\u5347\u7ea7\u5230-212",level:4},{value:"\u9a8c\u8bc1\u5347\u7ea7",id:"\u9a8c\u8bc1\u5347\u7ea7",level:3},{value:"\u9047\u5230\u95ee\u9898\u600e\u4e48\u529e",id:"\u9047\u5230\u95ee\u9898\u600e\u4e48\u529e",level:3},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:3}];function a(e){const n={code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"\u5347\u7ea7\u524d\u51c6\u5907",children:"\u5347\u7ea7\u524d\u51c6\u5907"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u5f00\u59cb\u5347\u7ea7\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u5df2\u5b8c\u6210\u4ee5\u4e0b\u51c6\u5907\u5de5\u4f5c\uff0c\u4ee5\u786e\u4fdd\u5347\u7ea7\u8fc7\u7a0b\u987a\u5229\u8fdb\u884c\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u5907\u4efd\u6570\u636e\u5e93"}),"\uff1a\u975e\u5e38\u91cd\u8981\u7684\u4e00\u6b65\uff0c\u786e\u4fdd\u6709\u5b8c\u6574\u7684\u6570\u636e\u5e93\u5907\u4efd\uff0c\u4ee5\u4fbf\u5728\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u9047\u5230\u95ee\u9898\u65f6\u53ef\u4ee5\u6062\u590d\u5230\u5347\u7ea7\u524d\u7684\u72b6\u6001\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u68c0\u67e5\u7248\u672c\u517c\u5bb9\u6027"}),"\uff1a\u786e\u8ba4\u5f53\u524d\u7684\u7248\u672c\u53f7\uff0c\u5e76\u786e\u4fdd\u5347\u7ea7\u8def\u5f84\u4e0e\u60a8\u7684\u7248\u672c\u517c\u5bb9\u3002\u672c\u6307\u5357\u9002\u7528\u4e8e\u4ece ",(0,r.jsx)(n.code,{children:"1.2.3"})," \u7248\u672c\u5f00\u59cb\u7684\u5347\u7ea7\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u786e\u8ba4\u73af\u5883\u8981\u6c42"}),"\uff1a\u786e\u4fdd\u60a8\u7684\u670d\u52a1\u5668\u6ee1\u8db3\u65b0\u7248\u672c\u7684\u7cfb\u7edf\u8981\u6c42\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u627e\u5230\u5347\u7ea7\u811a\u672c",children:"\u627e\u5230\u5347\u7ea7\u811a\u672c"}),"\n",(0,r.jsxs)(n.p,{children:["\u5347\u7ea7\u811a\u672c\u4f4d\u4e8e ",(0,r.jsx)(n.code,{children:"script/upgrade"})," \u76ee\u5f55\u3002\u60a8\u9700\u8981\u6839\u636e\u5f53\u524d\u7248\u672c\u548c\u76ee\u6807\u7248\u672c\u9009\u62e9\u6b63\u786e\u7684\u811a\u672c\u8fdb\u884c\u5347\u7ea7\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"script\n\u2514\u2500\u2500 upgrade\n      \u251c\u2500\u2500 mysql\n      |     \u251c\u2500\u2500 1.2.3.sql\n      |     \u251c\u2500\u2500 2.0.0.sql\n      |     \u251c\u2500\u2500 2.1.0.sql\n      |     \u2514\u2500\u2500 2.1.2.sql\n      \u2514\u2500\u2500 pgsql\n            \u251c\u2500\u2500 2.1.0.sql\n            \u251c\u2500\u2500 2.1.2.sql\n            \u2514\u2500\u2500 2.1.3.sql\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u6267\u884c\u5347\u7ea7\u811a\u672c",children:"\u6267\u884c\u5347\u7ea7\u811a\u672c"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u6570\u636e\u5e93\u7ba1\u7406\u5de5\u5177\uff08\u5982 MySQL Workbench\u3001pgAdmin\u3001JetBrains dataGrip\uff09\u8fde\u63a5\u5230\u6570\u636e\u5e93\uff0c\u5e76\u4f9d\u6b21\u6267\u884c\u5347\u7ea7\u811a\u672c\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"\u793a\u4f8b\u4ece-200-\u5347\u7ea7\u5230-212",children:"\u793a\u4f8b\uff1a\u4ece 2.0.0 \u5347\u7ea7\u5230 2.1.2"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u5347\u7ea7\u5230 2.1.0"}),"\uff1a"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u547d\u4ee4\u884c\u6216\u7528\u60a8\u7684\u6570\u636e\u5e93\u7ba1\u7406\u5de5\u5177\u6267\u884c 2.1.2.sql \u811a\u672c\nmysql -h 127.0.0.1 -P 3306 -u root --password=streampark streampark < ./script/upgrade/mysql/2.1.0.sql\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u5347\u7ea7\u5230 2.1.2"}),"\uff1a"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u63a5\u7740\uff0c\u6267\u884c 2.1.2.sql \u811a\u672c\u5b8c\u6210\u5347\u7ea7\nmysql -h 127.0.0.1 -P 3306 -u root --password=streampark streampark < ./script/upgrade/mysql/2.1.2.sql\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u9a8c\u8bc1\u5347\u7ea7",children:"\u9a8c\u8bc1\u5347\u7ea7"}),"\n",(0,r.jsx)(n.p,{children:"\u5347\u7ea7\u5b8c\u6210\u540e\uff0c\u767b\u5f55\u5230\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u5e76\u68c0\u67e5\u662f\u5426\u4e00\u5207\u6b63\u5e38\u8fd0\u884c\u3002\u60a8\u53ef\u4ee5\u67e5\u770b\u5e94\u7528\u65e5\u5fd7\u6216\u68c0\u67e5\u65b0\u7248\u672c\u7684\u529f\u80fd\u662f\u5426\u6309\u9884\u671f\u5de5\u4f5c\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u9047\u5230\u95ee\u9898\u600e\u4e48\u529e",children:"\u9047\u5230\u95ee\u9898\u600e\u4e48\u529e"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u5728\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u9047\u5230\u4efb\u4f55\u95ee\u9898\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u53c2\u8003\u5b98\u65b9\u6587\u6863"}),"\uff1a\u67e5\u627e\u53ef\u80fd\u7684\u9519\u8bef\u6d88\u606f\u548c\u89e3\u51b3\u65b9\u6848\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u6062\u590d\u5907\u4efd"}),"\uff1a\u5982\u679c\u5347\u7ea7\u5931\u8d25\uff0c\u4f7f\u7528\u4e4b\u524d\u5907\u4efd\u7684\u6570\u636e\u5e93\u6062\u590d\u5230\u5347\u7ea7\u524d\u7684\u72b6\u6001\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u5bfb\u6c42\u5e2e\u52a9"}),"\uff1a\u5982\u679c\u95ee\u9898\u4ecd\u7136\u65e0\u6cd5\u89e3\u51b3\uff0c\u60a8\u53ef\u4ee5\u5728 Apache StreamPark \u7684\u5b98\u65b9\u8bba\u575b\u6216\u793e\u533a\u6c42\u52a9\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u4e0b\u4e00\u6b65",children:"\u4e0b\u4e00\u6b65"}),"\n",(0,r.jsx)(n.p,{children:"\u5347\u7ea7\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u6839\u636e\u65b0\u7248\u672c\u7684\u7279\u6027\u548c\u6539\u8fdb\uff0c\u8c03\u6574\u548c\u4f18\u5316\u60a8\u7684\u5e94\u7528\u914d\u7f6e\u548c\u6027\u80fd\u8bbe\u7f6e\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},76113:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>d});var r=s(30758);const l={},i=r.createContext(l);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);