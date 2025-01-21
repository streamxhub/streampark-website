"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[3966],{83441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=n(86070),s=n(76113);const r={id:"submit_code",title:"Submit Code",sidebar_position:2},o=void 0,c={id:"submit_guide/submit_code",title:"Submit Code",description:"\x3c!--",source:"@site/community/submit_guide/submit-code.md",sourceDirName:"submit_guide",slug:"/submit_guide/submit_code",permalink:"/community/submit_guide/submit_code",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"submit_code",title:"Submit Code",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Documentation Notice",permalink:"/community/submit_guide/document"},next:{title:"Code style and quality guide",permalink:"/community/submit_guide/code_style_and_quality_guide"}},l={},d=[];function a(e){const t={a:"a",blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["First, fork the upstream repository ",(0,i.jsx)(t.a,{href:"https://github.com/apache/streampark.git",children:"https://github.com/apache/streampark.git"})," into your own repository."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Clone your repository to your local:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"git clone https://github.com/<your-github-id>/incubator-streampark.git\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Add remote repository address, name it upstream:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"git remote add upstream https://github.com/apache/streampark.git\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"View repository:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"git remote -v\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["At this time, there will be two repositories: ",(0,i.jsx)(t.code,{children:"origin"})," (your own repository) and ",(0,i.jsx)(t.code,{children:"upstream"})," (remote repository)."]}),"\n"]}),"\n",(0,i.jsxs)(t.ol,{start:"5",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Get/Update remote repository code:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"git fetch upstream\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Synchronize remote repository code to local repository:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"git checkout origin/dev\ngit merge --no-ff upstream/dev\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["If remote branch has a new branch such as ",(0,i.jsx)(t.code,{children:"dev-1.0"}),", you need to synchronize this branch to the local repository:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"git checkout -b dev-1.0 upstream/dev-1.0\ngit push --set-upstream origin dev-1.0\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"After modifying the code locally, submit it to your own repository:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"git commit -m 'commit content'\ngit push\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Submit changes to the remote repository"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:'On the github page, click "New pull request".'}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:'Select the modified local branch and the branch you want to merge with the past, click "Create pull request".'}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Then the community Committers will do CodeReview, and then he will discuss some details (including design, implementation, performance, etc.) with you. When everyone on the team is satisfied with this modification, the commit will be merged into the dev branch"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Congratulations! You have become a contributor to Apache StreamPark!"}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},76113:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var i=n(30758);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);