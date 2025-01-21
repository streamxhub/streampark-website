"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[9440],{97256:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var a=n(86070),s=n(76113);const t={slug:"streampark-usercase-haibo",title:"Apache StreamPark\u2122 \u4e00\u7ad9\u5f0f\u8ba1\u7b97\u5229\u5668\u5728\u6d77\u535a\u79d1\u6280\u7684\u751f\u4ea7\u5b9e\u8df5\uff0c\u52a9\u529b\u667a\u6167\u57ce\u5e02\u5efa\u8bbe",tags:["StreamPark","\u751f\u4ea7\u5b9e\u8df5","FlinkSQL"]},i=void 0,l={permalink:"/zh-CN/blog/streampark-usercase-haibo",editUrl:"https://github.com/apache/streampark-website/edit/dev/blog/7-streampark-usercase-haibo.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/7-streampark-usercase-haibo.md",title:"Apache StreamPark\u2122 \u4e00\u7ad9\u5f0f\u8ba1\u7b97\u5229\u5668\u5728\u6d77\u535a\u79d1\u6280\u7684\u751f\u4ea7\u5b9e\u8df5\uff0c\u52a9\u529b\u667a\u6167\u57ce\u5e02\u5efa\u8bbe",description:"\u6458\u8981\uff1a\u672c\u6587\u300c StreamPark \u4e00\u7ad9\u5f0f\u8ba1\u7b97\u5229\u5668\u5728\u6d77\u535a\u79d1\u6280\u7684\u751f\u4ea7\u5b9e\u8df5\uff0c\u52a9\u529b\u667a\u6167\u57ce\u5e02\u5efa\u8bbe \u300d\u4f5c\u8005\u662f\u6d77\u535a\u79d1\u6280\u5927\u6570\u636e\u67b6\u6784\u5e08\u738b\u5e86\u7115\uff0c\u4e3b\u8981\u5185\u5bb9\u4e3a\uff1a",date:"2025-01-21T04:13:21.000Z",tags:[{inline:!0,label:"StreamPark",permalink:"/zh-CN/blog/tags/stream-park"},{inline:!0,label:"\u751f\u4ea7\u5b9e\u8df5",permalink:"/zh-CN/blog/tags/\u751f\u4ea7\u5b9e\u8df5"},{inline:!0,label:"FlinkSQL",permalink:"/zh-CN/blog/tags/flink-sql"}],readingTime:6.89,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"streampark-usercase-haibo",title:"Apache StreamPark\u2122 \u4e00\u7ad9\u5f0f\u8ba1\u7b97\u5229\u5668\u5728\u6d77\u535a\u79d1\u6280\u7684\u751f\u4ea7\u5b9e\u8df5\uff0c\u52a9\u529b\u667a\u6167\u57ce\u5e02\u5efa\u8bbe",tags:["StreamPark","\u751f\u4ea7\u5b9e\u8df5","FlinkSQL"]},unlisted:!1,prevItem:{title:"Apache StreamPark\u2122 \u5728 Joyme \u7684\u751f\u4ea7\u5b9e\u8df5",permalink:"/zh-CN/blog/streampark-usercase-joyme"},nextItem:{title:"\u81ea\u5982\u57fa\u4e8eApache StreamPark\u2122 \u7684\u5b9e\u65f6\u8ba1\u7b97\u5e73\u53f0\u5b9e\u8df5",permalink:"/zh-CN/blog/streampark-usercase-ziru"}},c={authorsImageUrls:[]},h=[{value:"<strong>01. \u9009\u62e9 Apache StreamPark\u2122</strong>",id:"01-\u9009\u62e9-apache-streampark",level:2},{value:"<strong>02. \u843d\u5730\u5b9e\u8df5</strong>",id:"02-\u843d\u5730\u5b9e\u8df5",level:2},{value:"<strong>1. \u5feb\u901f\u4e0a\u624b</strong>",id:"1-\u5feb\u901f\u4e0a\u624b",level:3},{value:"<strong>2. \u751f\u4ea7\u5b9e\u8df5</strong>",id:"2-\u751f\u4ea7\u5b9e\u8df5",level:3},{value:"<strong>03. \u5e94\u7528\u573a\u666f</strong>",id:"03-\u5e94\u7528\u573a\u666f",level:2},{value:"<strong>1. \u5b9e\u65f6\u7269\u8054\u611f\u77e5\u6570\u636e\u6c47\u805a</strong>",id:"1-\u5b9e\u65f6\u7269\u8054\u611f\u77e5\u6570\u636e\u6c47\u805a",level:4},{value:"<strong>2. Flink CDC\u6570\u636e\u5e93\u540c\u6b65</strong>",id:"2-flink-cdc\u6570\u636e\u5e93\u540c\u6b65",level:4},{value:"<strong>04. \u529f\u80fd\u6269\u5c55</strong>",id:"04-\u529f\u80fd\u6269\u5c55",level:2},{value:"<strong>05. \u672a\u6765\u671f\u5f85</strong>",id:"05-\u672a\u6765\u671f\u5f85",level:2}];function d(e){const r={h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"**\u6458\u8981\uff1a**\u672c\u6587\u300c StreamPark \u4e00\u7ad9\u5f0f\u8ba1\u7b97\u5229\u5668\u5728\u6d77\u535a\u79d1\u6280\u7684\u751f\u4ea7\u5b9e\u8df5\uff0c\u52a9\u529b\u667a\u6167\u57ce\u5e02\u5efa\u8bbe \u300d\u4f5c\u8005\u662f\u6d77\u535a\u79d1\u6280\u5927\u6570\u636e\u67b6\u6784\u5e08\u738b\u5e86\u7115\uff0c\u4e3b\u8981\u5185\u5bb9\u4e3a\uff1a"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsx)(r.li,{children:"\u9009\u62e9 StreamPark"}),"\n",(0,a.jsx)(r.li,{children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,a.jsx)(r.li,{children:"\u5e94\u7528\u573a\u666f"}),"\n",(0,a.jsx)(r.li,{children:"\u529f\u80fd\u6269\u5c55"}),"\n",(0,a.jsx)(r.li,{children:"\u672a\u6765\u671f\u5f85"}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"\u6d77\u535a\u79d1\u6280\u662f\u4e00\u5bb6\u884c\u4e1a\u9886\u5148\u7684\u4eba\u5de5\u667a\u80fd\u7269\u8054\u7f51\u4ea7\u54c1\u548c\u89e3\u51b3\u65b9\u6848\u516c\u53f8\u3002\u76ee\u524d\u5728\u516c\u5171\u5b89\u5168\u3001\u667a\u6167\u57ce\u5e02\u3001\u667a\u6167\u5236\u9020\u9886\u57df\uff0c\u4e3a\u5168\u56fd\u5ba2\u6237\u63d0\u4f9b\u5305\u62ec\u7b97\u6cd5\u3001\u8f6f\u4ef6\u548c\u786c\u4ef6\u4ea7\u54c1\u5728\u5185\u7684\u5168\u6808\u5f0f\u6574\u4f53\u89e3\u51b3\u65b9\u6848\u3002"}),"\n",(0,a.jsx)(r.h2,{id:"01-\u9009\u62e9-apache-streampark",children:(0,a.jsx)(r.strong,{children:"01. \u9009\u62e9 Apache StreamPark\u2122"})}),"\n",(0,a.jsx)(r.p,{children:"\u6d77\u535a\u79d1\u6280\u81ea 2020 \u5e74\u5f00\u59cb\u4f7f\u7528 Flink SQL \u6c47\u805a\u3001\u5904\u7406\u5404\u7c7b\u5b9e\u65f6\u7269\u8054\u6570\u636e\u3002\u968f\u7740\u5404\u5730\u5e02\u667a\u6167\u57ce\u5e02\u5efa\u8bbe\u6b65\u4f10\u7684\u52a0\u5feb\uff0c\u9700\u8981\u6c47\u805a\u7684\u5404\u7c7b\u7269\u8054\u6570\u636e\u7684\u6570\u636e\u79cd\u7c7b\u3001\u6570\u636e\u91cf\u4e5f\u4e0d\u65ad\u589e\u52a0\uff0c\u5bfc\u81f4\u7ebf\u4e0a\u7ef4\u62a4\u7684 Flink SQL \u4efb\u52a1\u8d8a\u6765\u8d8a\u591a\uff0c\u4e00\u4e2a\u4e13\u95e8\u7684\u80fd\u591f\u7ba1\u7406\u4f17\u591a Flink SQL \u4efb\u52a1\u7684\u8ba1\u7b97\u5e73\u53f0\u6210\u4e3a\u4e86\u8feb\u5207\u7684\u9700\u6c42\u3002"}),"\n",(0,a.jsxs)(r.p,{children:["\u5728\u4f53\u9a8c\u5bf9\u6bd4\u4e86 Apache Zeppelin \u548c StreamPark \u4e4b\u540e\uff0c\u6211\u4eec\u9009\u62e9\u4e86 StreamPark \u4f5c\u4e3a\u516c\u53f8\u7684\u5b9e\u65f6\u8ba1\u7b97\u5e73\u53f0\u3002\u76f8\u6bd4 Apache Zeppelin\uff0c StreamPark \u5e76\u4e0d\u51fa\u540d\u3002\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u4f46\u662f\u5728\u4f53\u9a8c\u4e86 StreamPark \u53d1\u884c\u7684\u521d\u7248\uff0c\u9605\u8bfb\u5176\u8bbe\u8ba1\u6587\u6863\u540e\uff0c\u6211\u4eec\u53d1\u73b0\u5176\u57fa\u4e8e ",(0,a.jsx)(r.strong,{children:"\u4e00\u7ad9\u5f0f"})," \u8bbe\u8ba1\u7684\u601d\u60f3\uff0c\u80fd\u591f\u8986\u76d6 Flink \u4efb\u52a1\u5f00\u53d1\u7684\u5168\u751f\u547d\u5468\u671f\uff0c\u4f7f\u5f97\u914d\u7f6e\u3001\u5f00\u53d1\u3001\u90e8\u7f72\u3001\u8fd0\u7ef4\u5168\u90e8\u5728\u4e00\u4e2a\u5e73\u53f0\u5373\u53ef\u5b8c\u6210\u3002\u6211\u4eec\u7684\u5f00\u53d1\u3001\u8fd0\u7ef4\u3001\u6d4b\u8bd5\u7684\u540c\u5b66\u53ef\u4ee5\u4f7f\u7528 StreamPark \u534f\u540c\u5de5\u4f5c\uff0c",(0,a.jsx)(r.strong,{children:"\u4f4e\u4ee3\u7801"})," + ",(0,a.jsx)(r.strong,{children:"\u4e00\u7ad9\u5f0f"})," \u7684\u8bbe\u8ba1\u601d\u60f3\u575a\u5b9a\u4e86\u6211\u4eec\u4f7f\u7528 StreamPark \u7684\u4fe1\u5fc3\u3002"]}),"\n",(0,a.jsx)(r.p,{children:"//\u89c6\u9891\u94fe\u63a5\uff08 StreamX \u5b98\u65b9\u89c6\u9891\uff09"}),"\n",(0,a.jsx)(r.h2,{id:"02-\u843d\u5730\u5b9e\u8df5",children:(0,a.jsx)(r.strong,{children:"02. \u843d\u5730\u5b9e\u8df5"})}),"\n",(0,a.jsx)(r.h3,{id:"1-\u5feb\u901f\u4e0a\u624b",children:(0,a.jsx)(r.strong,{children:"1. \u5feb\u901f\u4e0a\u624b"})}),"\n",(0,a.jsx)(r.p,{children:"\u4f7f\u7528 StreamPark \u5b8c\u6210\u4e00\u4e2a\u5b9e\u65f6\u6c47\u805a\u4efb\u52a1\u5c31\u50cf\u628a\u5927\u8c61\u653e\u8fdb\u51b0\u7bb1\u4e00\u6837\u7b80\u5355\uff0c\u4ec5\u9700\u4e09\u6b65\u5373\u53ef\u5b8c\u6210:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"\u7f16\u8f91 SQL"}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{src:n(21755).A+"",width:"1080",height:"578"})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"\u4e0a\u4f20\u4f9d\u8d56\u5305"}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{src:n(16385).A+"",width:"1080",height:"449"})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"\u90e8\u7f72\u8fd0\u884c"}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{src:n(15635).A+"",width:"1080",height:"538"})}),"\n",(0,a.jsx)(r.p,{children:"\u4ec5\u9700\u4e0a\u8ff0\u4e09\u6b65\uff0c\u5373\u53ef\u5b8c\u6210 Mysql \u5230 Elasticsearch \u7684\u6c47\u805a\u4efb\u52a1\uff0c\u5927\u5927\u63d0\u5347\u6570\u636e\u63a5\u5165\u6548\u7387\u3002"}),"\n",(0,a.jsx)(r.h3,{id:"2-\u751f\u4ea7\u5b9e\u8df5",children:(0,a.jsx)(r.strong,{children:"2. \u751f\u4ea7\u5b9e\u8df5"})}),"\n",(0,a.jsx)(r.p,{children:"StreamPark \u5728\u6d77\u535a\u4e3b\u8981\u7528\u4e8e\u8fd0\u884c\u5b9e\u65f6 Flink SQL\u4efb\u52a1: \u8bfb\u53d6 Kafka \u4e0a\u7684\u6570\u636e\uff0c\u8fdb\u884c\u5904\u7406\u8f93\u51fa\u81f3 Clickhouse \u6216\u8005 Elasticsearch \u4e2d\u3002"}),"\n",(0,a.jsx)(r.p,{children:"\u4ece2021\u5e7410\u6708\u5f00\u59cb\uff0c\u516c\u53f8\u9010\u6e10\u5c06 Flink SQL \u4efb\u52a1\u8fc1\u79fb\u81f3 StreamPark \u5e73\u53f0\u6765\u96c6\u4e2d\u7ba1\u7406\uff0c\u627f\u8f7d\u6211\u53f8\u5b9e\u65f6\u7269\u8054\u6570\u636e\u7684\u6c47\u805a\u3001\u8ba1\u7b97\u3001\u9884\u8b66\u3002"}),"\n",(0,a.jsx)(r.p,{children:"\u622a\u81f3\u76ee\u524d\uff0cStreamPark \u5df2\u5728\u591a\u4e2a\u653f\u5e9c\u3001\u516c\u5b89\u751f\u4ea7\u73af\u5883\u8fdb\u884c\u90e8\u7f72\uff0c\u6c47\u805a\u5904\u7406\u57ce\u5e02\u5b9e\u65f6\u7269\u8054\u6570\u636e\u3001\u4eba\u8f66\u6293\u62cd\u6570\u636e\u3002\u4ee5\u4e0b\u662f\u5728\u67d0\u5e02\u4e13\u7f51\u90e8\u7f72\u7684 StreamPark \u5e73\u53f0\u622a\u56fe :"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{src:n(17658).A+"",width:"1080",height:"613"})}),"\n",(0,a.jsx)(r.h2,{id:"03-\u5e94\u7528\u573a\u666f",children:(0,a.jsx)(r.strong,{children:"03. \u5e94\u7528\u573a\u666f"})}),"\n",(0,a.jsx)(r.h4,{id:"1-\u5b9e\u65f6\u7269\u8054\u611f\u77e5\u6570\u636e\u6c47\u805a",children:(0,a.jsx)(r.strong,{children:"1. \u5b9e\u65f6\u7269\u8054\u611f\u77e5\u6570\u636e\u6c47\u805a"})}),"\n",(0,a.jsx)(r.p,{children:"\u6c47\u805a\u5b9e\u65f6\u7684\u7269\u8054\u611f\u77e5\u6570\u636e\uff0c\u6211\u4eec\u76f4\u63a5\u4f7f\u7528 StreamPark \u5f00\u53d1 Flink SQL \u4efb\u52a1\uff0c\u9488\u5bf9 Flink SQL \u672a\u63d0\u4f9b\u7684\u65b9\u6cd5\uff0cStreamPark \u4e5f\u652f\u6301 Udf \u76f8\u5173\u529f\u80fd\uff0c\u7528\u6237\u901a\u8fc7 StreamPark \u4e0a\u4f20 Udf \u5305\uff0c\u5373\u53ef\u5728 SQL \u4e2d\u8c03\u7528\u76f8\u5173 Udf\uff0c\u5b9e\u73b0\u66f4\u591a\u590d\u6742\u7684\u903b\u8f91\u64cd\u4f5c\u3002"}),"\n",(0,a.jsx)(r.p,{children:"\u201cSQL+UDF\u201d \u7684\u65b9\u5f0f\uff0c\u80fd\u591f\u6ee1\u8db3\u6211\u4eec\u7edd\u5927\u90e8\u5206\u7684\u6570\u636e\u6c47\u805a\u573a\u666f\uff0c\u5982\u679c\u540e\u671f\u4e1a\u52a1\u53d8\u52a8\uff0c\u4e5f\u53ea\u9700\u8981\u5728 StreamPark \u4e2d\u4fee\u6539 SQL \u8bed\u53e5\uff0c\u5373\u53ef\u5b8c\u6210\u4e1a\u52a1\u53d8\u66f4\u4e0e\u4e0a\u7ebf\u3002"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{src:n(91121).A+"",width:"1080",height:"607"})}),"\n",(0,a.jsx)(r.h4,{id:"2-flink-cdc\u6570\u636e\u5e93\u540c\u6b65",children:(0,a.jsx)(r.strong,{children:"2. Flink CDC\u6570\u636e\u5e93\u540c\u6b65"})}),"\n",(0,a.jsx)(r.p,{children:"\u4e3a\u4e86\u5b9e\u73b0\u5404\u7c7b\u6570\u636e\u5e93\u4e0e\u6570\u636e\u4ed3\u5e93\u4e4b\u524d\u7684\u540c\u6b65\uff0c\u6211\u4eec\u4f7f\u7528 StreamPark \u5f00\u53d1 Flink CDC SQL \u4efb\u52a1\u3002\u501f\u52a9\u4e8e Flink CDC \u7684\u80fd\u529b\uff0c\u5b9e\u73b0\u4e86 Oracle \u4e0e Oracle \u4e4b\u95f4\u7684\u6570\u636e\u540c\u6b65\uff0c Mysql/Postgresql \u4e0e Clickhouse \u4e4b\u95f4\u7684\u6570\u636e\u540c\u6b65\u3002"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{src:n(61339).A+"",width:"794",height:"232"})}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"3. \u6570\u636e\u5206\u6790\u6a21\u578b\u7ba1\u7406"})}),"\n",(0,a.jsx)(r.p,{children:"\u9488\u5bf9\u65e0\u6cd5\u4f7f\u7528 Flink SQL \u9700\u8981\u5f00\u53d1 Flink \u4ee3\u7801\u7684\u4efb\u52a1\uff0c\u4f8b\u5982: \u5b9e\u65f6\u5e03\u63a7\u6a21\u578b\u3001\u79bb\u7ebf\u6570\u636e\u5206\u6790\u6a21\u578b\uff0cStreamPark \u63d0\u4f9b\u4e86 Custom code \u7684\u65b9\u5f0f\uff0c\u5141\u8bb8\u7528\u6237\u4e0a\u4f20\u53ef\u6267\u884c\u7684 Flink Jar \u5305\u5e76\u8fd0\u884c\u3002"}),"\n",(0,a.jsx)(r.p,{children:"\u76ee\u524d\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u4eba\u5458\uff0c\u8f66\u8f86\u7b49 20 \u4f59\u7c7b\u5206\u6790\u6a21\u578b\u4e0a\u4f20\u81f3 StreamPark\uff0c\u4ea4\u7531 StreamPark \u7ba1\u7406\u8fd0\u884c\u3002"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{src:n(91121).A+"",width:"1080",height:"607"})}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"\u7efc\u4e0a:"})," \u65e0\u8bba\u662f Flink SQL \u4efb\u52a1\u8fd8\u662f Custome code \u4efb\u52a1\uff0cStreamPark \u5747\u63d0\u4f9b\u4e86\u5f88\u597d\u7684\u652f\u6301\uff0c\u6ee1\u8db3\u5404\u79cd\u4e0d\u540c\u7684\u4e1a\u52a1\u573a\u666f\u3002 \u4f46\u662f StreamPark \u7f3a\u5c11\u4efb\u52a1\u8c03\u5ea6\u7684\u80fd\u529b\uff0c\u5982\u679c\u4f60\u9700\u8981\u5b9a\u671f\u8c03\u5ea6\u4efb\u52a1\uff0c StreamPark \u76ee\u524d\u65e0\u6cd5\u6ee1\u8db3\u3002\u793e\u533a\u6210\u5458\u6b63\u5728\u52aa\u529b\u5f00\u53d1\u8c03\u5ea6\u76f8\u5173\u7684\u6a21\u5757\uff0c\u5728\u5373\u5c06\u53d1\u5e03\u7684 1.2.3 \u4e2d \u4f1a\u652f\u6301\u4efb\u52a1\u8c03\u5ea6\u529f\u80fd\uff0c\u656c\u8bf7\u671f\u5f85\u3002"]}),"\n",(0,a.jsx)(r.h2,{id:"04-\u529f\u80fd\u6269\u5c55",children:(0,a.jsx)(r.strong,{children:"04. \u529f\u80fd\u6269\u5c55"})}),"\n",(0,a.jsx)(r.p,{children:"Datahub \u662f Linkedin \u5f00\u53d1\u7684\u4e00\u4e2a\u5143\u6570\u636e\u7ba1\u7406\u5e73\u53f0\uff0c\u63d0\u4f9b\u4e86\u6570\u636e\u6e90\u7ba1\u7406\u3001\u6570\u636e\u8840\u7f18\u3001\u6570\u636e\u8d28\u91cf\u68c0\u67e5\u7b49\u529f\u80fd\u3002\u6d77\u535a\u79d1\u6280\u57fa\u4e8e StreamPark \u548c Datahub \u8fdb\u884c\u4e86\u4e8c\u6b21\u5f00\u53d1\uff0c\u5b9e\u73b0\u4e86\u6570\u636e\u8868\u7ea7/\u5b57\u6bb5\u7ea7\u7684\u8840\u7f18\u529f\u80fd\u3002\u901a\u8fc7\u6570\u636e\u8840\u7f18\u529f\u80fd\uff0c\u5e2e\u52a9\u7528\u6237\u68c0\u67e5 Flink SQL \u7684\u5b57\u6bb5\u8840\u7f18\u5173\u7cfb\u3002\u5e76\u5c06\u8840\u7f18\u5173\u7cfb\u4fdd\u5b58\u81f3Linkedin/Datahub \u5143\u6570\u636e\u7ba1\u7406\u5e73\u53f0\u3002"}),"\n",(0,a.jsx)(r.p,{children:"//\u4e24\u4e2a\u89c6\u9891\u94fe\u63a5\uff08\u57fa\u4e8e StreamX \u5f00\u53d1\u7684\u6570\u636e\u8840\u7f18\u529f\u80fd\uff09"}),"\n",(0,a.jsx)(r.h2,{id:"05-\u672a\u6765\u671f\u5f85",children:(0,a.jsx)(r.strong,{children:"05. \u672a\u6765\u671f\u5f85"})}),"\n",(0,a.jsx)(r.p,{children:"\u76ee\u524d\uff0cStreamPark \u793e\u533a\u7684 Roadmap \u663e\u793a StreamPark 1.3.0 \u5c06\u8fce\u6765\u5168\u65b0\u7684 Workbench \u4f53\u9a8c\u3001\u7edf\u4e00\u7684\u8d44\u6e90\u7ba1\u7406\u4e2d\u5fc3 (JAR/UDF/Connectors \u7edf\u4e00\u7ba1\u7406)\u3001\u6279\u91cf\u4efb\u52a1\u8c03\u5ea6\u7b49\u529f\u80fd\u3002\u8fd9\u4e5f\u662f\u6211\u4eec\u975e\u5e38\u671f\u5f85\u7684\u51e0\u4e2a\u5168\u65b0\u529f\u80fd\u3002"}),"\n",(0,a.jsx)(r.p,{children:"Workbench \u5c06\u4f7f\u7528\u5168\u65b0\u7684\u5de5\u4f5c\u53f0\u5f0f\u7684 SQL \u5f00\u53d1\u98ce\u683c\uff0c\u9009\u62e9\u6570\u636e\u6e90\u5373\u53ef\u751f\u6210 SQL\uff0c\u8fdb\u4e00\u6b65\u63d0\u5347 Flink \u4efb\u52a1\u5f00\u53d1\u6548\u7387\u3002\u7edf\u4e00\u7684 UDF \u8d44\u6e90\u4e2d\u5fc3\u5c06\u89e3\u51b3\u5f53\u524d\u6bcf\u4e2a\u4efb\u52a1\u90fd\u8981\u4e0a\u4f20\u4f9d\u8d56\u5305\u7684\u95ee\u9898\u3002\u6279\u91cf\u4efb\u52a1\u8c03\u5ea6\u529f\u80fd\u5c06\u89e3\u51b3\u5f53\u524d StreamPark \u65e0\u6cd5\u8c03\u5ea6\u4efb\u52a1\u7684\u9057\u61be\u3002"}),"\n",(0,a.jsx)(r.p,{children:"\u4e0b\u56fe\u662f StreamPark \u5f00\u53d1\u8005\u8bbe\u8ba1\u7684\u539f\u578b\u56fe\uff0c\u656c\u8bf7\u671f\u5f85\u3002"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{src:n(61128).A+"",width:"830",height:"518"})})]})}function o(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},17658:(e,r,n)=>{n.d(r,{A:()=>a});const a=n.p+"assets/images/application-b12eb5d36d548a02e52ec12a28ddcec0.png"},91121:(e,r,n)=>{n.d(r,{A:()=>a});const a=n.p+"assets/images/data_aggregation-e5caba8eee38a8444df6cb3382a1d978.png"},61128:(e,r,n)=>{n.d(r,{A:()=>a});const a=n.p+"assets/images/data_source-5f9b710b4186a08571192ae81ab350d1.png"},16385:(e,r,n)=>{n.d(r,{A:()=>a});const a=n.p+"assets/images/dependency-172169d43c50f455fb7e2c7e08de32a2.png"},15635:(e,r,n)=>{n.d(r,{A:()=>a});const a=n.p+"assets/images/deploy-d486a5c0eb238a9f2a6ce5f2b3013500.png"},61339:(e,r,n)=>{n.d(r,{A:()=>a});const a=n.p+"assets/images/flink_cdc-318444c917eb66f591a5c75db9662e78.png"},21755:(e,r,n)=>{n.d(r,{A:()=>a});const a=n.p+"assets/images/flink_sql-a8811954a9f765640bb08ad9cd139a15.png"},76113:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>l});var a=n(30758);const s={},t=a.createContext(s);function i(e){const r=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(t.Provider,{value:r},e.children)}}}]);