(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[3553],{37981:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=t(86070),r=t(76113),s=t(98951);const o={id:"development",title:"\u5f00\u53d1\u6307\u5357",sidebar_position:3},i=void 0,c={id:"development/development",title:"\u5f00\u53d1\u6307\u5357",description:"\u73af\u5883\u8981\u6c42",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/1.development.md",sourceDirName:"development",slug:"/development/development",permalink:"/zh-CN/docs/development/development",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/1.development.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"development",title:"\u5f00\u53d1\u6307\u5357",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Redis Connector",permalink:"/zh-CN/docs/framework/connector/redis"}},l={},d=[{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",level:3},{value:"clone\u6e90\u7801",id:"clone\u6e90\u7801",level:3},{value:"\u6784\u5efa\u9879\u76ee",id:"\u6784\u5efa\u9879\u76ee",level:3},{value:"\u6253\u5f00\u9879\u76ee",id:"\u6253\u5f00\u9879\u76ee",level:3},{value:"\u89e3\u538b\u7f29\u5305",id:"\u89e3\u538b\u7f29\u5305",level:3},{value:"\u590d\u5236\u8def\u5f84",id:"\u590d\u5236\u8def\u5f84",level:3},{value:"\u542f\u52a8\u540e\u53f0\u670d\u52a1",id:"\u542f\u52a8\u540e\u53f0\u670d\u52a1",level:3},{value:"\u542f\u52a8\u524d\u7aef\u670d\u52a1",id:"\u542f\u52a8\u524d\u7aef\u670d\u52a1",level:3},{value:"\u6f14\u793a\u8c03\u8bd5\u4ee3\u7801",id:"\u6f14\u793a\u8c03\u8bd5\u4ee3\u7801",level:3}];function p(e){const n={code:"code",h3:"h3",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u73af\u5883\u8981\u6c42",children:"\u73af\u5883\u8981\u6c42"}),"\n","\n",(0,a.jsx)(s.Ys,{}),"\n",(0,a.jsx)(n.h3,{id:"clone\u6e90\u7801",children:"clone\u6e90\u7801"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/apache/streampark.git\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u6784\u5efa\u9879\u76ee",children:"\u6784\u5efa\u9879\u76ee"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd incubator-streampark/\n./build.sh\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u6253\u5f00\u9879\u76ee",children:"\u6253\u5f00\u9879\u76ee"}),"\n",(0,a.jsxs)(n.p,{children:["\u6b64\u5904\u4f7f\u7528",(0,a.jsx)(n.code,{children:"idea"}),"\u6253\u5f00\u9879\u76ee"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"open -a /Applications/IntelliJ\\ IDEA\\ CE.app/ ./\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u89e3\u538b\u7f29\u5305",children:"\u89e3\u538b\u7f29\u5305"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd ./dist\ntar -zxvf apache-streampark-2.2.0-incubating-bin.tar.gz\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u590d\u5236\u8def\u5f84",children:"\u590d\u5236\u8def\u5f84"}),"\n",(0,a.jsxs)(n.p,{children:["\u590d\u5236\u89e3\u538b\u540e\u7684\u76ee\u5f55\u8def\u5f84\uff0c\u4f8b\uff1a",(0,a.jsx)(n.code,{children:"${workspace}/incubator-streampark/dist/apache-streampark-2.2.0-incubating-bin"})]}),"\n",(0,a.jsx)(n.h3,{id:"\u542f\u52a8\u540e\u53f0\u670d\u52a1",children:"\u542f\u52a8\u540e\u53f0\u670d\u52a1"}),"\n",(0,a.jsxs)(n.p,{children:["\u627e\u5230 ",(0,a.jsx)(n.code,{children:"streampark-console/streampark-console-service/src/main/java/org/apache/streampark/console/StreamParkConsoleBootstrap.java"})]}),"\n",(0,a.jsx)(n.p,{children:"\u4fee\u6539\u542f\u52a8\u914d\u7f6e"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Streampark Modify Run Configuration",src:t(55466).A+"",width:"2054",height:"1285"})}),"\n",(0,a.jsxs)(n.p,{children:["\u52fe\u9009 ",(0,a.jsx)(n.code,{children:"Add VM options"})," \u548c ",(0,a.jsx)(n.code,{children:'Add dependencies with "provided" scope to classpath'}),"\uff0c\u586b\u5199\u53c2\u6570 ",(0,a.jsx)(n.code,{children:"-Dapp.home=$path"}),"\uff0c",(0,a.jsx)(n.code,{children:"$path"})," \u662f\u6211\u4eec\u521a\u521a\u590d\u5236\u7684\u8def\u5f84"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"-Dapp.home=${workspace}/incubator-streampark/dist/apache-streampark-2.2.0-incubating-bin\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Streampark Run Config",src:t(34162).A+"",width:"2094",height:"1380"})}),"\n",(0,a.jsx)(n.p,{children:"\u7136\u540e\u542f\u52a8\u540e\u53f0\u670d\u52a1\u5373\u53ef"}),"\n",(0,a.jsx)(n.h3,{id:"\u542f\u52a8\u524d\u7aef\u670d\u52a1",children:"\u542f\u52a8\u524d\u7aef\u670d\u52a1"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd ../streampark-console/streampark-console-webapp\npnpm serve\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Streampark Frontend Running",src:t(99625).A+"",width:"950",height:"198"})}),"\n",(0,a.jsxs)(n.p,{children:["\u8bbf\u95ee ",(0,a.jsx)(n.code,{children:"http://localhost:10001/"})," \uff0c\u8f93\u5165\u7528\u6237\u540d",(0,a.jsx)(n.code,{children:"admin"}),"\u5bc6\u7801",(0,a.jsx)(n.code,{children:"streampark"}),"\uff0c\u9009\u62e9\u4e00\u4e2a",(0,a.jsx)(n.code,{children:"team"}),"\u8fdb\u5165"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Streampark Select Team",src:t(64833).A+"",width:"1000",height:"575"})}),"\n",(0,a.jsx)(n.h3,{id:"\u6f14\u793a\u8c03\u8bd5\u4ee3\u7801",children:"\u6f14\u793a\u8c03\u8bd5\u4ee3\u7801"}),"\n",(0,a.jsx)(n.p,{children:"1.\u5728idea\u4ee5debug\u6a21\u5f0f\u542f\u52a8\u9879\u76ee"}),"\n",(0,a.jsx)(n.p,{children:"2.\u5728ApplicationController\u7684flink/app/list\u52a0\u5165\u65ad\u70b9"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Streampark Project Build",src:t(4801).A+"",width:"1083",height:"737"})}),"\n",(0,a.jsx)(n.p,{children:"3.\u8f93\u5165\u5e10\u53f7\u5bc6\u7801\u767b\u9646streampark,\u9009\u62e9team\u4e4b\u540e\u5c31\u4f1a\u89e6\u72af\u65ad\u70b9"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Streampark Project Build",src:t(93213).A+"",width:"1294",height:"623"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},98951:(e,n,t)=>{"use strict";t.d(n,{By:()=>u,dz:()=>p,zS:()=>m,R1:()=>j,d4:()=>h,gA:()=>x,Ys:()=>f});t(30758);const a={option:[{opt:"-t",longOpt:"target",desc:"\u90e8\u7f72\u65b9\u5f0f(\u76ee\u524d\u53ea\u652f\u6301yarn-per-job,application)",deprecated:!1,value:" yarn-per-job | application "},{opt:"-d",longOpt:"detached",desc:"\u662f\u5426\u4ee5detached\u6a21\u5f0f\u542f\u52a8",deprecated:!1,value:"true | false"},{opt:"-n",longOpt:"allowNonRestoredState",desc:"\u4ecesavePoint\u6062\u590d\u5931\u8d25\u65f6\u662f\u5426\u5141\u8bb8\u8df3\u8fc7\u8be5\u6b65\u9aa4",deprecated:!1,value:"true | false"},{opt:"-sae",longOpt:"shutdownOnAttachedExit",desc:"attached\u6a21\u5f0f\u4e0b\u4efb\u52a1\u505c\u6b62\u65f6\u662f\u5426\u5173\u95ed\u96c6\u7fa4",deprecated:!1,value:"true | false"},{opt:"-m",longOpt:"jobmanager",desc:"JobManager\u7684\u8fde\u63a5\u5730\u5740",deprecated:!1,value:"yarn-cluster | \u8fde\u63a5\u5730\u5740"},{opt:"-p",longOpt:"parallelism",desc:"\u7a0b\u5e8f\u5e76\u884c\u5ea6",deprecated:!0,value:"int"},{opt:"-c",longOpt:"class",desc:"\u7a0b\u5e8f\u7684main\u65b9\u6cd5\u7684\u5168\u540d\u79f0",deprecated:!0,value:"String"}],property:[{name:"$internal.application.main",desc:"\u7a0b\u5e8f\u7684\u4e3b\u7c7b(main)\u7684\u5b8c\u6574\u7c7b\u540d",required:!0},{name:"yarn.application.name",desc:"\u7a0b\u5e8f\u7684\u540d\u79f0(YARN\u4e2d\u663e\u793a\u7684\u4efb\u52a1\u540d\u79f0)",required:!0},{name:"yarn.application.queue",desc:"\u5728YARN\u4e2d\u8fd0\u884c\u7684\u961f\u5217\u540d\u79f0",required:!1},{name:"taskmanager.numberOfTaskSlots",desc:"taskmanager Slot\u7684\u6570\u91cf",required:!1},{name:"parallelism.default",desc:"\u7a0b\u5e8f\u7684\u5e76\u884c",required:!1}],memory:[{group:"JVM \u5806\u5185\u5b58",name:"jobmanager.memory.heap.size",desc:"JobManager \u7684 JVM \u5806\u5185\u5b58"},{group:"\u5806\u5916\u5185\u5b58",name:"jobmanager.memory.off-heap.size",desc:"JobManager \u7684\u5806\u5916\u5185\u5b58(\u76f4\u63a5\u5185\u5b58\u6216\u672c\u5730\u5185\u5b58)"},{group:"JVM Metaspace",name:"jobmanager.memory.jvm-metaspace.size",desc:"Flink JVM\u8fdb\u7a0b\u7684Metaspace"},{group:"JVM Metaspace",name:"jobmanager.memory.jvm-metaspace.size",desc:"Flink JVM\u8fdb\u7a0b\u7684Metaspace"},{group:"JVM Metaspace",name:"jobmanager.memory.jvm-overhead.min",desc:"Flink JVM\u8fdb\u7a0b\u7684Metaspace"},{group:"JVM \u5f00\u9500",name:"jobmanager.memory.jvm-metaspace.size",desc:"\u7528\u4e8e\u5176\u4ed6 JVM \u5f00\u9500\u7684\u672c\u5730\u5185\u5b58"},{group:"JVM \u5f00\u9500",name:"jobmanager.memory.jvm-overhead.max",desc:"\u7528\u4e8e\u5176\u4ed6 JVM \u5f00\u9500\u7684\u672c\u5730\u5185\u5b58"},{group:"JVM \u5f00\u9500",name:"jobmanager.memory.jvm-overhead.fraction",desc:"\u7528\u4e8e\u5176\u4ed6 JVM\u5f00\u9500\u7684\u672c\u5730\u5185\u5b58"},{group:"\u6846\u67b6\u5806\u5185\u5b58",name:"taskmanager.memory.framework.heap.size",desc:"\u7528\u4e8eFlink \u6846\u67b6\u7684JVM\u5806\u5185\u5b58(\u8fdb\u9636\u914d\u7f6e)"},{group:"\u4efb\u52a1\u5806\u5185\u5b58",name:"taskmanager.memory.task.heap.size",desc:"\u7531Flink\u7ba1\u7406\u7684\u7528\u4e8e\u6392\u5e8f,\u54c8\u5e0c\u8868,\u7f13\u5b58\u72b6\u6001\u540e\u7aef\u7684\u672c\u5730\u5185\u5b58"},{group:"\u6258\u7ba1\u5185\u5b58",name:"taskmanager.memory.managed.size",desc:"\u7528\u4e8e\u5176\u4ed6 JVM \u5f00\u9500\u7684\u672c\u5730\u5185\u5b58"},{group:"\u6258\u7ba1\u5185\u5b58",name:"taskmanager.memory.managed.fraction",desc:"\u7528\u4e8e\u5176\u4ed6 JVM \u5f00\u9500\u7684\u672c\u5730\u5185\u5b58"},{group:"\u6846\u67b6\u5806\u5916\u5185\u5b58",name:"taskmanager.memory.framework.off-heap.size",desc:"\u7528\u4e8eFlink\u6846\u67b6\u7684\u5806\u5916\u5185\u5b58(\u76f4\u63a5\u5185\u5b58\u6216\u672c\u5730\u5185\u5b58)\u8fdb\u9636\u914d\u7f6e"},{group:"\u4efb\u52a1\u5806\u5916\u5185\u5b58",name:"taskmanager.memory.task.off-heap.size",desc:"\u7528\u4e8eFlink\u5e94\u7528\u7684\u7b97\u5b50\u53ca\u7528\u6237\u4ee3\u7801\u7684\u5806\u5916\u5185\u5b58(\u76f4\u63a5\u5185\u5b58\u6216\u672c\u5730\u5185\u5b58)"},{group:"JVM Metaspace",name:"taskmanager.memory.jvm-metaspace.size",desc:"Flink JVM \u8fdb\u7a0b\u7684 Metaspace"}],totalMem:[{group:"Flink \u603b\u5185\u5b58 ",tm:"taskmanager.memory.flink.size",jm:"jobmanager.memory.flink.size"},{group:"\u8fdb\u7a0b\u603b\u5185\u5b58",tm:"taskmanager.memory.process.size",jm:"jobmanager.memory.process.size"}],checkpoints:[{name:"enable",desc:"\u662f\u5426\u5f00\u542fcheckpoint",value:"true | false"},{name:"interval",desc:"checkpoint\u7684\u95f4\u9694\u5468\u671f",value:"\u6beb\u79d2"},{name:"mode",desc:"\u8bed\u4e49",value:" EXACTLY_ONCE | AT_LEAST_ONCE "},{name:"timeout",desc:"\u8d85\u65f6\u65f6\u95f4",value:"\u6beb\u79d2"},{name:"unaligned",desc:"\u662f\u5426\u975e\u5bf9\u9f50",value:"true | false"}],backend:[{name:"value",desc:"backend\u5177\u4f53\u5b58\u50a8\u7684\u7c7b\u578b",value:"jobmanager | filesystem | rocksdb",mode:""},{name:"memory",desc:"\u9488\u5bf9jobmanager\u6709\u6548,\u6700\u5927\u5185\u5b58",value:"kb\u5982(5242880)",mode:"jobmanager"},{name:"async",desc:"\u662f\u5426\u5f00\u542f\u5f02\u6b65",value:" true | false",mode:"jobmanager | filesystem"},{name:"incremental",desc:"\u662f\u5426\u5f00\u542f\u589e\u91cf",value:" true | false",mode:"rocksdb"}],fixedDelay:[{name:"attempts",desc:"\u5728Job\u6700\u7ec8\u5ba3\u544a\u5931\u8d25\u4e4b\u524d,Flink\u5c1d\u8bd5\u91cd\u542f\u7684\u6b21\u6570",value:"3"},{name:"delay",desc:"\u4e00\u4e2a\u4efb\u52a1\u5931\u8d25\u4e4b\u540e\u4e0d\u4f1a\u7acb\u5373\u91cd\u542f,\u8fd9\u91cc\u6307\u5b9a\u95f4\u9694\u591a\u957f\u65f6\u95f4\u91cd\u542f",value:"\u65e0 | s | m | min | h | d"}],failureRate:[{name:"max-failures-per-interval",desc:"\u5728\u4e00\u4e2aJob\u8ba4\u5b9a\u4e3a\u5931\u8d25\u4e4b\u524d,\u6700\u5927\u7684\u91cd\u542f\u6b21\u6570",value:"3"},{name:"failure-rate-interval",desc:"\u8ba1\u7b97\u5931\u8d25\u7387\u7684\u65f6\u95f4\u95f4\u9694",value:"\u65e0 | s | m | min | h | d"},{name:"delay",desc:"\u4e24\u6b21\u8fde\u7eed\u91cd\u542f\u5c1d\u8bd5\u4e4b\u95f4\u7684\u65f6\u95f4\u95f4\u9694",value:"\u65e0 | s | m | min | h | d"}],tables:[{name:"planner",desc:"Table Planner",value:"blink | old | any"},{name:"mode",desc:"Table Mode",value:"streaming | batch"},{name:"catalog",desc:"\u6307\u5b9acatalog,\u5982\u6307\u5b9a\u521d\u59cb\u5316\u65f6\u4f1a\u4f7f\u7528\u5230",value:""},{name:"database",desc:"\u6307\u5b9adatabase,\u5982\u6307\u5b9a\u521d\u59cb\u5316\u65f6\u4f1a\u4f7f\u7528\u5230",value:""}],deploymentEnvs:[{name:"\u64cd\u4f5c\u7cfb\u7edf",version:"Linux",required:!0,other:"\u4e0d\u652f\u6301Window\u7cfb\u7edf"},{name:"JAVA",version:"1.8+",required:!0,other:null},{name:"MySQL",version:"5.6+",required:!0,other:"\u9ed8\u8ba4\u4f7f\u7528H2\u6570\u636e\u5e93,\u63a8\u8350\u4f7f\u7528 MySQL"},{name:"Flink",version:"1.12.0+",required:!0,other:"Flink version >= 1.12"},{name:"Hadoop",version:"2+",required:!1,other:"\u53ef\u9009,\u5982\u679c\u90e8\u7f72flink on yarn \u5219\u9700\u8981hadoop\u73af\u5883."}],developmentEnvs:[{name:"\u64cd\u4f5c\u7cfb\u7edf",version:"Linux",required:!1,other:"\u652f\u6301 Windows, \u63a8\u8350\u4f7f\u7528 Mac/Linux."},{name:"IDE",version:"Intellij IDEA",required:!1,other:"\u63a8\u8350\u4f7f\u7528 Intellij IDEA"},{name:"JAVA",version:"1.8 +",required:!0,other:null},{name:"Scala",version:"2.12.x",required:!0,other:"\u5982\u679c IDE \u662f Intellij IDEA \u76f4\u63a5\u5b89\u88c5Scala\u63d2\u4ef6\u5373\u53ef"},{name:"Nodejs",version:"16.14.x ~ 18",required:!0,other:"https://nodejs.org"},{name:"pnpm",version:"7.11.2",required:!0,other:"npm install -g pnpm"},{name:"Flink",version:"1.12.0 +",required:!0,other:"Flink >= 1.12, \u53ea\u9700\u8981\u4eceFlink\u5b98\u7f51\u4e0b\u8f7d\u89e3\u7ed1\u5373\u53ef"},{name:"MySQL",version:"5.6 +",required:!1,other:null},{name:"Hadoop",version:"2 +",required:!1,other:"\u53ef\u9009,\u5982\u679c\u90e8\u7f72flink on yarn \u9700\u8981\u914d\u7f6ehadoop\u73af\u5883\u53d8\u91cf."}]};let r=null,s=0;function o(e){r||(r=window.document.createElement("div"),r.setAttribute("class","cpt-toast-wrapper"),window.document.body.append(r));let n=""+Date.now()+s++,t=window.document.createElement("div");t.setAttribute("id",n),t.innerHTML=`<div class="cpt-toast"><span class="${e.icon}">${e.msg}</span></div>`,r.append(t),setTimeout((()=>{window.document.getElementById(n).remove()}),e.time||1e3)}const i={success(e,n){o({msg:e,time:n,icon:"success"})},error(e,n){o({msg:e,time:n,icon:"error"})},info(e,n){o({msg:e,time:n,icon:"info"})}};var c=t(69482),l=t(86070);const d=()=>{i.success("\u590d\u5236\u6210\u529f \ud83c\udf89")},p=()=>(0,l.jsx)("div",{children:(0,l.jsxs)("table",{className:"table-data",style:{width:"100%",display:"inline-table"},children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{style:{width:"80px"},children:"\u77ed\u53c2\u6570"}),(0,l.jsx)("td",{children:'\u5b8c\u6574\u53c2\u6570(\u524d\u7f00"--")'}),(0,l.jsx)("td",{style:{width:"60px"},children:"\u6709\u6548"}),(0,l.jsx)("td",{children:"\u53d6\u503c\u8303\u56f4\u503c\u6216\u7c7b\u578b"}),(0,l.jsx)("td",{children:"\u4f5c\u7528\u63cf\u8ff0"})]})}),(0,l.jsx)("tbody",{children:a.option.map(((e,n)=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:e.opt}),(0,l.jsx)("td",{children:e.longOpt}),(0,l.jsx)("td",{children:e.deprecated?(0,l.jsx)("span",{className:"icon-check"}):(0,l.jsx)("span",{className:"icon-times"})}),(0,l.jsx)("td",{children:e.value}),(0,l.jsx)("td",{children:e.desc})]},n)))})]})}),m=()=>(0,l.jsx)("div",{children:(0,l.jsxs)("table",{className:"table-data",style:{width:"100%",display:"inline-table"},children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"\u53c2\u6570\u540d\u79f0"}),(0,l.jsx)("td",{children:"\u4f5c\u7528\u63cf\u8ff0"}),(0,l.jsx)("td",{children:"\u662f\u5426\u5fc5\u987b"})]})}),(0,l.jsx)("tbody",{children:a.property.map(((e,n)=>(0,l.jsxs)("tr",{children:[(0,l.jsxs)("td",{children:[(0,l.jsx)("span",{className:"label-info",children:e.name}),(0,l.jsx)(c.CopyToClipboard,{text:e.name,onCopy:()=>d(),children:(0,l.jsx)("i",{className:"icon-copy"})})]}),(0,l.jsx)("td",{children:e.desc}),(0,l.jsx)("td",{children:e.required?(0,l.jsx)("span",{className:"icon-toggle-on",title:"\u5fc5\u987b"}):(0,l.jsx)("span",{className:"icon-toggle-off",title:"\u53ef\u9009"})})]},n)))})]})}),u=()=>(0,l.jsx)("div",{children:(0,l.jsxs)("table",{className:"table-data",style:{width:"100%",display:"inline-table"},children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{style:{width:"380px"},children:"\u53c2\u6570\u540d\u79f0"}),(0,l.jsx)("td",{children:"\u4f5c\u7528\u63cf\u8ff0"})]})}),(0,l.jsx)("tbody",{children:a.memory.map(((e,n)=>(0,l.jsxs)("tr",{children:[(0,l.jsxs)("td",{children:[(0,l.jsx)("span",{className:"label-info",children:e.name}),(0,l.jsx)(c.CopyToClipboard,{text:e.name,onCopy:()=>d(),children:(0,l.jsx)("i",{className:"icon-copy"})})]}),(0,l.jsx)("td",{children:e.desc})]},n)))})]})}),h=()=>(0,l.jsx)("div",{children:(0,l.jsxs)("table",{className:"table-data",style:{width:"100%",display:"inline-table"},children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"\u914d\u7f6e\u9879"}),(0,l.jsx)("td",{children:"TaskManager \u914d\u7f6e\u53c2\u6570"}),(0,l.jsx)("td",{children:"JobManager \u914d\u7f6e\u53c2\u6570"})]})}),(0,l.jsx)("tbody",{children:a.totalMem.map(((e,n)=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:e.group}),(0,l.jsxs)("td",{children:[(0,l.jsx)("span",{className:"label-info",children:e.tm}),(0,l.jsx)(c.CopyToClipboard,{text:e.tm,onCopy:()=>d(),children:(0,l.jsx)("i",{className:"icon-copy"})})]}),(0,l.jsxs)("td",{children:[(0,l.jsx)("span",{className:"label-info",children:e.jm}),(0,l.jsx)(c.CopyToClipboard,{text:e.jm,onCopy:()=>d(),children:(0,l.jsx)("i",{className:"icon-copy"})})]})]},n)))})]})}),j=()=>(0,l.jsx)("div",{children:(0,l.jsxs)("table",{className:"table-data",style:{width:"100%",display:"inline-table"},children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"\u914d\u7f6e\u9879"}),(0,l.jsx)("td",{children:"\u4f5c\u7528\u63cf\u8ff0"}),(0,l.jsx)("td",{children:"\u53c2\u6570\u503c"})]})}),(0,l.jsx)("tbody",{children:a.tables.map(((e,n)=>(0,l.jsxs)("tr",{children:[(0,l.jsxs)("td",{children:[(0,l.jsx)("span",{className:"label-info",children:e.name}),(0,l.jsx)(c.CopyToClipboard,{text:e.name,onCopy:()=>d(),children:(0,l.jsx)("i",{className:"icon-copy"})})]}),(0,l.jsx)("td",{children:e.desc}),(0,l.jsx)("td",{children:e.value})]},n)))})]})}),x=()=>(0,l.jsx)("div",{children:(0,l.jsxs)("table",{className:"table-data",style:{width:"100%",display:"inline-table"},children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"\u8981\u6c42"}),(0,l.jsx)("td",{children:"\u7248\u672c"}),(0,l.jsx)("td",{children:"\u662f\u5426\u5fc5\u987b"}),(0,l.jsx)("td",{children:"\u5176\u4ed6\u4e8b\u9879"})]})}),(0,l.jsx)("tbody",{children:a.deploymentEnvs.map(((e,n)=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"label-info",children:e.name})}),(0,l.jsx)("td",{children:e.version}),(0,l.jsx)("td",{children:e.required?(0,l.jsx)("span",{className:"icon-toggle-on",title:"\u5fc5\u987b"}):(0,l.jsx)("span",{className:"icon-toggle-off",title:"\u53ef\u9009"})}),(0,l.jsx)("td",{children:e.other})]},n)))})]})}),f=()=>(0,l.jsx)("div",{children:(0,l.jsxs)("table",{className:"table-data",style:{width:"100%",display:"inline-table"},children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"\u8981\u6c42"}),(0,l.jsx)("td",{children:"\u7248\u672c"}),(0,l.jsx)("td",{children:"\u662f\u5426\u5fc5\u987b"}),(0,l.jsx)("td",{children:"\u5176\u4ed6\u4e8b\u9879"})]})}),(0,l.jsx)("tbody",{children:a.developmentEnvs.map(((e,n)=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"label-info",children:e.name})}),(0,l.jsx)("td",{children:e.version}),(0,l.jsx)("td",{children:e.required?(0,l.jsx)("span",{className:"icon-toggle-on",title:"\u5fc5\u987b"}):(0,l.jsx)("span",{className:"icon-toggle-off",title:"\u53ef\u9009"})}),(0,l.jsx)("td",{children:e.other})]},n)))})]})})},83042:(e,n,t)=>{"use strict";var a=t(35664),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,n){var t,s,o,i,c,l,d=!1;n||(n={}),t=n.debug||!1;try{if(o=a(),i=document.createRange(),c=document.getSelection(),(l=document.createElement("span")).textContent=e,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(a){if(a.stopPropagation(),n.format)if(a.preventDefault(),void 0===a.clipboardData){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var s=r[n.format]||r.default;window.clipboardData.setData(s,e)}else a.clipboardData.clearData(),a.clipboardData.setData(n.format,e);n.onCopy&&(a.preventDefault(),n.onCopy(a.clipboardData))})),document.body.appendChild(l),i.selectNodeContents(l),c.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(p){t&&console.error("unable to copy using execCommand: ",p),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(n.format||"text",e),n.onCopy&&n.onCopy(window.clipboardData),d=!0}catch(p){t&&console.error("unable to copy using clipboardData: ",p),t&&console.error("falling back to prompt"),s=function(e){var n=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,n)}("message"in n?n.message:"Copy to clipboard: #{key}, Enter"),window.prompt(s,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(i):c.removeAllRanges()),l&&document.body.removeChild(l),o()}return d}},26561:(e,n,t)=>{"use strict";function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.CopyToClipboard=void 0;var r=i(t(30758)),s=i(t(83042)),o=["text","onCopy","options","children"];function i(e){return e&&e.__esModule?e:{default:e}}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){x(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function p(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,n){return m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},m(e,n)}function u(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=j(e);if(n){var s=j(this).constructor;t=Reflect.construct(r,arguments,s)}else t=r.apply(this,arguments);return function(e,n){if(n&&("object"===a(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}(this,t)}}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var f=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&m(e,n)}(c,e);var n,t,a,i=u(c);function c(){var e;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c);for(var n=arguments.length,t=new Array(n),a=0;a<n;a++)t[a]=arguments[a];return x(h(e=i.call.apply(i,[this].concat(t))),"onClick",(function(n){var t=e.props,a=t.text,o=t.onCopy,i=t.children,c=t.options,l=r.default.Children.only(i),d=(0,s.default)(a,c);o&&o(a,d),l&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(n)})),e}return n=c,(t=[{key:"render",value:function(){var e=this.props,n=(e.text,e.onCopy,e.options,e.children),t=d(e,o),a=r.default.Children.only(n);return r.default.cloneElement(a,l(l({},t),{},{onClick:this.onClick}))}}])&&p(n.prototype,t),a&&p(n,a),Object.defineProperty(n,"prototype",{writable:!1}),c}(r.default.PureComponent);n.CopyToClipboard=f,x(f,"defaultProps",{onCopy:void 0,options:void 0})},69482:(e,n,t)=>{"use strict";var a=t(26561).CopyToClipboard;a.CopyToClipboard=a,e.exports=a},35664:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var n=document.activeElement,t=[],a=0;a<e.rangeCount;a++)t.push(e.getRangeAt(a));switch(n.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":n.blur();break;default:n=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||t.forEach((function(n){e.addRange(n)})),n&&n.focus()}}},4801:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});const a=t.p+"assets/images/streampark_debug_build-06cd03c36e5fe03d771f69ebf0edb2fb.png"},93213:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});const a=t.p+"assets/images/streampark_debugging-8f400df7199ad25248a1268668f96a01.png"},99625:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});const a=t.p+"assets/images/streampark_frontend_running-2cdb3e36175fc1f655b9db0273e1aab2.png"},55466:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});const a=t.p+"assets/images/streampark_modify_run_configuration-176261306c7c0ef7ca0b8067967d6826.jpg"},34162:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});const a=t.p+"assets/images/streampark_run_config-d518cfc4f960434b126b8376571a04bb.jpeg"},64833:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});const a=t.p+"assets/images/streampark_select_team-a9cb67779e6ad36c3ccab02a3382acc2.jpg"},76113:(e,n,t)=>{"use strict";t.d(n,{R:()=>o,x:()=>i});var a=t(30758);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);