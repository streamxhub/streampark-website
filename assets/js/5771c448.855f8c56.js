"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[5274],{85469:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var i=r(86070),a=r(76113);const s={id:"security",title:"Security",sidebar_position:4},n="Frequently Asked Questions",o={id:"security",title:"Security",description:"During a security analysis of StreamPark, I noticed that StreamPark allows for remote code execution, is this an issue?",source:"@site/community/security.md",sourceDirName:".",slug:"/security",permalink:"/community/security",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"security",title:"Security",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to Verify Release",permalink:"/community/release/how_to_verify_release"},next:{title:"Maturity",permalink:"/community/maturity"}},c={},u=[{value:"During a security analysis of StreamPark, I noticed that StreamPark allows for remote code execution, is this an issue?",id:"during-a-security-analysis-of-streampark-i-noticed-that-streampark-allows-for-remote-code-execution-is-this-an-issue",level:2}];function l(e){const t={a:"a",h1:"h1",h2:"h2",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),"\n",(0,i.jsx)(t.h2,{id:"during-a-security-analysis-of-streampark-i-noticed-that-streampark-allows-for-remote-code-execution-is-this-an-issue",children:"During a security analysis of StreamPark, I noticed that StreamPark allows for remote code execution, is this an issue?"}),"\n",(0,i.jsx)(t.p,{children:"Apache StreamPark is a stream processing development management framework that allows users to submit Flink/Spark jobs to remote clusters. which will be executed unconditionally, without any attempts to limit what code can run."}),"\n",(0,i.jsx)(t.p,{children:"Historically, we have received many reports of remote code execution vulnerabilities that we have had to reject because this is by design."}),"\n",(0,i.jsx)(t.p,{children:'We strongly discourage users from exposing Flink/Spark processes to the public Internet. In corporate networks or "cloud" accounts, we recommend appropriately restricting access to Flink and Spark clusters'}),"\n",(0,i.jsx)(t.h1,{id:"i-found-a-vulnerability-in-streampark-how-do-i-report-it",children:"I found a vulnerability in StreamPark, how do I report it?"}),"\n",(0,i.jsxs)(t.p,{children:["If you have any concerns regarding StreamPark's security, or you discover a vulnerability or potential threat, please do not hesitate to get in touch with the Apache Security Team by dropping an email at ",(0,i.jsx)(t.a,{href:"mailto:private@streampark.apache.org",children:"private@streampark.apache.org"}),"."]}),"\n",(0,i.jsx)(t.p,{children:'Please specify the project name as "StreamPark" in the email, and provide a description of the relevant problem or potential threat. You are also urged to recommend how to reproduce and replicate the issue.'}),"\n",(0,i.jsx)(t.p,{children:"The Apache Security Team and the StreamPark community will get back to you after assessing and analyzing the findings."}),"\n",(0,i.jsx)(t.p,{children:"Please note that the security issue should be reported on the security email first, before disclosing it on any public domain."})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},76113:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>o});var i=r(30758);const a={},s=i.createContext(a);function n(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);