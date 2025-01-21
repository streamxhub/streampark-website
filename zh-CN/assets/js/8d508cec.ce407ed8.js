"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[8515],{33603:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=a(86070),n=a(76113),o=a(33764),s=a(65173);const i={id:"doris",title:"Apache Doris Connector",original:!0,sidebar_position:4},l=void 0,c={id:"framework/connector/doris",title:"Apache Doris Connector",description:"Apache Doris \u662f\u4e00\u6b3e\u57fa\u4e8e\u5927\u89c4\u6a21\u5e76\u884c\u5904\u7406\u6280\u672f\u7684\u5206\u5e03\u5f0f SQL \u6570\u636e\u5e93\uff0c\u4e3b\u8981\u9762\u5411 OLAP \u573a\u666f\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/framework/connector/4.doris.md",sourceDirName:"framework/connector",slug:"/framework/connector/doris",permalink:"/zh-CN/docs/framework/connector/doris",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/framework/connector/4.doris.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"doris",title:"Apache Doris Connector",original:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Clickhouse Connector",permalink:"/zh-CN/docs/framework/connector/clickhouse"},next:{title:"Elasticsearch Connector",permalink:"/zh-CN/docs/framework/connector/es"}},u={},d=[{value:"Apache StreamPark\u2122 \u65b9\u5f0f\u5199\u5165",id:"apache-streampark-\u65b9\u5f0f\u5199\u5165",level:3},{value:"\u914d\u7f6e\u4fe1\u606f",id:"\u914d\u7f6e\u4fe1\u606f",level:4},{value:"\u5199\u5165 Doris",id:"\u5199\u5165-doris",level:4}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://doris.apache.org/",children:"Apache Doris"})," \u662f\u4e00\u6b3e\u57fa\u4e8e\u5927\u89c4\u6a21\u5e76\u884c\u5904\u7406\u6280\u672f\u7684\u5206\u5e03\u5f0f SQL \u6570\u636e\u5e93\uff0c\u4e3b\u8981\u9762\u5411 OLAP \u573a\u666f\u3002\nApache StreamPark \u57fa\u4e8e Doris \u7684 ",(0,t.jsx)(r.a,{href:"https://doris.apache.org/administrator-guide/load-data/stream-load-manual.html",children:"stream load"})," \u5c01\u88c5\u4e86 DoirsSink \u7528\u4e8e\u5411 Doris \u5b9e\u65f6\u5199\u5165\u6570\u636e\u3002"]}),"\n",(0,t.jsx)(r.h3,{id:"apache-streampark-\u65b9\u5f0f\u5199\u5165",children:"Apache StreamPark\u2122 \u65b9\u5f0f\u5199\u5165"}),"\n",(0,t.jsxs)(r.p,{children:["\u76ee\u524d DorisSink \u53ea\u652f\u6301 JSON \u683c\u5f0f\uff08\u5355\u5c42\uff09\u5199\u5165\uff0c\u5982 ",(0,t.jsx)(r.code,{children:'{"id":1,"name":"streampark"}'}),"\u3002"]}),"\n",(0,t.jsx)(r.p,{children:"\u793a\u4f8b\u7a0b\u5e8f\u662f Java \u7a0b\u5e8f\uff0c\u5177\u4f53\u5982\u4e0b\u3002"}),"\n",(0,t.jsx)(r.h4,{id:"\u914d\u7f6e\u4fe1\u606f",children:"\u914d\u7f6e\u4fe1\u606f"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"doris.sink:\n  fenodes:  127.0.0.1:8030    # doris fe http \u8bf7\u6c42\u5730\u5740\n  database: test              # doris database\n  table: test_tbl             # doris table\n  user: root\n  password: 123456\n  batchSize: 100         # doris sink \u6bcf\u6b21 streamload \u7684\u6279\u6b21\u5927\u5c0f\n  intervalMs: 3000       # doris sink \u6bcf\u6b21 streamload \u7684\u65f6\u95f4\u95f4\u9694\n  maxRetries: 1          # stream load \u7684\u91cd\u8bd5\u6b21\u6570\n  streamLoad:            # doris streamload \u81ea\u8eab\u7684\u53c2\u6570\n    format: json\n    strip_outer_array: true\n    max_filter_ratio: 1\n"})}),"\n",(0,t.jsx)(r.h4,{id:"\u5199\u5165-doris",children:"\u5199\u5165 Doris"}),"\n",(0,t.jsx)(o.A,{children:(0,t.jsx)(s.A,{value:"Java",label:"Java",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:"package org.apache.streampark.test.flink.java.datastream;\n\nimport org.apache.streampark.flink.core.StreamEnvConfig;\nimport org.apache.streampark.flink.core.java.sink.doris.DorisSink;\nimport org.apache.streampark.flink.core.java.source.KafkaSource;\nimport org.apache.streampark.flink.core.scala.StreamingContext;\nimport org.apache.streampark.flink.core.scala.source.KafkaRecord;\nimport org.apache.flink.api.common.functions.MapFunction;\nimport org.apache.flink.streaming.api.datastream.DataStream;\n\npublic class DorisJavaApp {\n\n    public static void main(String[] args) {\n        StreamEnvConfig envConfig = new StreamEnvConfig(args, null);\n        StreamingContext context = new StreamingContext(envConfig);\n        DataStream<String> source = new KafkaSource<String>(context)\n            .getDataStream()\n            .map((MapFunction<KafkaRecord<String>, String>) KafkaRecord::value)\n            .returns(String.class);\n\n        new DorisSink<String>(context).sink(source);\n\n        context.start();\n    }\n}\n\n"})})})}),"\n",(0,t.jsx)(r.admonition,{title:"\u63d0\u793a",type:"tip",children:(0,t.jsxs)(r.p,{children:["\u5efa\u8bae\u8bbe\u7f6e batchSize \u6765\u6279\u91cf\u63d2\u5165\u6570\u636e\u63d0\u9ad8\u6027\u80fd,\u540c\u65f6\u4e3a\u4e86\u63d0\u9ad8\u5b9e\u65f6\u6027\uff0c\u652f\u6301\u95f4\u9694\u65f6\u95f4 intervalMs \u6765\u6279\u6b21\u5199\u5165",(0,t.jsx)("br",{}),"\n\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e maxRetries \u6765\u589e\u52a0streamload\u7684\u91cd\u8bd5\u6b21\u6570\u3002"]})})]})}function m(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},65173:(e,r,a)=>{a.d(r,{A:()=>s});a(30758);var t=a(13526);const n={tabItem:"tabItem_t88E"};var o=a(86070);function s(e){let{children:r,hidden:a,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(n.tabItem,s),hidden:a,children:r})}},33764:(e,r,a)=>{a.d(r,{A:()=>w});var t=a(30758),n=a(13526),o=a(21176),s=a(25557),i=a(3195),l=a(62757),c=a(64474),u=a(37976);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:a}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:a,attributes:t,default:n}}=e;return{value:r,label:a,attributes:t,default:n}}))}(a);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,a])}function m(e){let{value:r,tabValues:a}=e;return a.some((e=>e.value===r))}function h(e){let{queryString:r=!1,groupId:a}=e;const n=(0,s.W6)(),o=function(e){let{queryString:r=!1,groupId:a}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:r,groupId:a});return[(0,l.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(n.location.search);r.set(o,e),n.replace({...n.location,search:r.toString()})}),[o,n])]}function f(e){const{defaultValue:r,queryString:a=!1,groupId:n}=e,o=p(e),[s,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:o}))),[c,d]=h({queryString:a,groupId:n}),[f,b]=function(e){let{groupId:r}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,o]=(0,u.Dv)(a);return[n,(0,t.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),v=(()=>{const e=c??f;return m({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=a(33689);const v={tabList:"tabList_rr1b",tabItem:"tabItem_bI3v"};var g=a(86070);function k(e){let{className:r,block:a,selectedValue:t,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const r=e.currentTarget,a=l.indexOf(r),n=i[a].value;n!==t&&(c(r),s(n))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;r=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;r=l[a]??l[l.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},r),children:i.map((e=>{let{value:r,label:a,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,n.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":t===r}),children:a??r},r)}))})}function x(e){let{lazy:r,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function S(e){const r=f(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,g.jsx)(k,{...r,...e}),(0,g.jsx)(x,{...r,...e})]})}function w(e){const r=(0,b.A)();return(0,g.jsx)(S,{...e,children:d(e.children)},String(r))}},76113:(e,r,a)=>{a.d(r,{R:()=>s,x:()=>i});var t=a(30758);const n={},o=t.createContext(n);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);