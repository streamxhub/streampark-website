"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[8142],{47459:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=n(86070),i=n(76113);const s={slug:"streampark-usercase-haibo",title:"An All-in-One Computation Tool in Haibo Tech's Production Practice and facilitation in Smart City Construction",tags:["StreamPark","Production Practice","FlinkSQL"]},r=void 0,o={permalink:"/blog/streampark-usercase-haibo",editUrl:"https://github.com/apache/streampark-website/edit/dev/blog/7-streampark-usercase-haibo.md",source:"@site/blog/7-streampark-usercase-haibo.md",title:"An All-in-One Computation Tool in Haibo Tech's Production Practice and facilitation in Smart City Construction",description:"Summary An All-in-One Computation Tool in Haibo Tech's Production Practice and facilitation in Smart City Construction,\" is the Big Data Architect at Haibo Tech. The main topics covered include:",date:"2025-01-21T04:13:21.000Z",tags:[{inline:!0,label:"StreamPark",permalink:"/blog/tags/stream-park"},{inline:!0,label:"Production Practice",permalink:"/blog/tags/production-practice"},{inline:!0,label:"FlinkSQL",permalink:"/blog/tags/flink-sql"}],readingTime:4.435,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"streampark-usercase-haibo",title:"An All-in-One Computation Tool in Haibo Tech's Production Practice and facilitation in Smart City Construction",tags:["StreamPark","Production Practice","FlinkSQL"]},unlisted:!1,prevItem:{title:"Apache StreamPark\u2122's Production Practice in Joyme",permalink:"/blog/streampark-usercase-joyme"},nextItem:{title:"Ziroom's Real-Time Computing Platform Practice Based on Apache StreamPark\u2122",permalink:"/blog/streampark-usercase-ziru"}},l={authorsImageUrls:[]},c=[{value:"<strong>01. Choosing Apache StreamPark\u2122</strong>",id:"01-choosing-apache-streampark",level:2},{value:"<strong>02. Practical Implementation</strong>",id:"02-practical-implementation",level:2},{value:"<strong>1. Quick Start</strong>",id:"1-quick-start",level:3},{value:"<strong>2. Production Practice</strong>",id:"2-production-practice",level:3},{value:"<strong>03. Application Scenarios</strong>",id:"03-application-scenarios",level:2},{value:"<strong>1. Real-time IoT Sensing Data Aggregation</strong>",id:"1-real-time-iot-sensing-data-aggregation",level:4},{value:"<strong>2. Flink CDC Database Synchronization</strong>",id:"2-flink-cdc-database-synchronization",level:4},{value:"<strong>04. Feature Extension</strong>",id:"04-feature-extension",level:2},{value:"<strong>05. Future Expectations</strong>",id:"05-future-expectations",level:2}];function d(e){const a={h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Summary:"}),' The author of this article, "StreamPark: An All-in-One Computation Tool in Haibo Tech\'s Production Practice and facilitation in Smart City Construction," is the Big Data Architect at Haibo Tech. The main topics covered include:']}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:"Choosing StreamPark"}),"\n",(0,t.jsx)(a.li,{children:"Getting Started Quickly"}),"\n",(0,t.jsx)(a.li,{children:"Application Scenarios"}),"\n",(0,t.jsx)(a.li,{children:"Feature Extensions"}),"\n",(0,t.jsx)(a.li,{children:"Future Expectations"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Haibo Tech is an industry-leading company offering AI IoT products and solutions. Currently, they provide full-stack solutions, including algorithms, software, and hardware products, to clients nationwide in public safety, smart cities, and smart manufacturing domains."}),"\n",(0,t.jsx)(a.h2,{id:"01-choosing-apache-streampark",children:(0,t.jsx)(a.strong,{children:"01. Choosing Apache StreamPark\u2122"})}),"\n",(0,t.jsx)(a.p,{children:"Haibo Tech started using Flink SQL to aggregate and process various real-time IoT data since 2020. With the accelerated pace of smart city construction in various cities, the types and volume of IoT data to be aggregated are also increasing. This has resulted in an increasing number of Flink SQL tasks being maintained online, making a dedicated platform for managing numerous Flink SQL tasks an urgent need."}),"\n",(0,t.jsxs)(a.p,{children:["After evaluating Apache Zeppelin and StreamPark, we chose StreamPark as our real-time computing platform. Compared to Apache Zeppelin, StreamPark may not be as well-known. However, after experiencing the initial release of StreamPark and reading its design documentation, we recognized that its all-in-one design philosophy covers the entire lifecycle of Flink task development. This means that configuration, development, deployment, and operations can all be accomplished on a single platform. Our developers, operators, and testers can collaboratively work on StreamPark. The ",(0,t.jsx)(a.strong,{children:"low-code"})," + ",(0,t.jsx)(a.strong,{children:"all-in-one"})," design principles solidified our confidence in using StreamPark."]}),"\n",(0,t.jsx)(a.p,{children:"// Video link (streampark official video)"}),"\n",(0,t.jsx)(a.h2,{id:"02-practical-implementation",children:(0,t.jsx)(a.strong,{children:"02. Practical Implementation"})}),"\n",(0,t.jsx)(a.h3,{id:"1-quick-start",children:(0,t.jsx)(a.strong,{children:"1. Quick Start"})}),"\n",(0,t.jsx)(a.p,{children:"Using StreamPark to accomplish a real-time aggregation task is as simple as putting an elephant into a fridge, and it can be done in just three steps:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Edit SQL"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:n(21755).A+"",width:"1080",height:"578"})}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Upload dependency packages"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:n(16385).A+"",width:"1080",height:"449"})}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Deploy and run"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:n(15635).A+"",width:"1080",height:"538"})}),"\n",(0,t.jsx)(a.p,{children:"With just the above three steps, you can complete the aggregation task from Mysql to Elasticsearch, significantly improving data access efficiency."}),"\n",(0,t.jsx)(a.h3,{id:"2-production-practice",children:(0,t.jsx)(a.strong,{children:"2. Production Practice"})}),"\n",(0,t.jsx)(a.p,{children:"StreamPark is primarily used at Haibo for running real-time Flink SQL tasks: reading data from Kafka, processing it, and outputting to Clickhouse or Elasticsearch."}),"\n",(0,t.jsx)(a.p,{children:"Starting from October 2021, the company gradually migrated Flink SQL tasks to the StreamPark platform for centralized management. It supports the aggregation, computation, and alerting of our real-time IoT data."}),"\n",(0,t.jsx)(a.p,{children:"As of now, StreamPark has been deployed in various government and public security production environments, aggregating and processing real-time IoT data, as well as capturing data on people and vehicles. Below is a screenshot of the StreamPark platform deployed on a city's dedicated network:"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:n(17658).A+"",width:"1080",height:"613"})}),"\n",(0,t.jsx)(a.h2,{id:"03-application-scenarios",children:(0,t.jsx)(a.strong,{children:"03. Application Scenarios"})}),"\n",(0,t.jsx)(a.h4,{id:"1-real-time-iot-sensing-data-aggregation",children:(0,t.jsx)(a.strong,{children:"1. Real-time IoT Sensing Data Aggregation"})}),"\n",(0,t.jsx)(a.p,{children:"For aggregating real-time IoT sensing data, we directly use StreamPark to develop Flink SQL tasks. For methods not provided by Flink SQL, StreamPark also supports UDF-related functionalities. Users can upload UDF packages through StreamPark, and then call the relevant UDF in SQL to achieve more complex logical operations."}),"\n",(0,t.jsx)(a.p,{children:'The "SQL+UDF" approach meets most of our data aggregation scenarios. If business changes in the future, we only need to modify the SQL statement in StreamPark to complete business changes and deployment.'}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:n(91121).A+"",width:"1080",height:"607"})}),"\n",(0,t.jsx)(a.h4,{id:"2-flink-cdc-database-synchronization",children:(0,t.jsx)(a.strong,{children:"2. Flink CDC Database Synchronization"})}),"\n",(0,t.jsx)(a.p,{children:"To achieve synchronization between various databases and data warehouses, we use StreamPark to develop Flink CDC SQL tasks. With the capabilities of Flink CDC, we've implemented data synchronization between Oracle and Oracle, as well as synchronization between Mysql/Postgresql and Clickhouse."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:n(61339).A+"",width:"794",height:"232"})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"3. Data Analysis Model Management"})}),"\n",(0,t.jsx)(a.p,{children:"For tasks that can't use Flink SQL and need Flink code development, such as real-time control models and offline data analysis models, StreamPark offers a Custom code approach, allowing users to upload executable Flink Jar packages and run them."}),"\n",(0,t.jsx)(a.p,{children:"Currently, we have uploaded over 20 analysis models, such as personnel and vehicles, to StreamPark, which manages and operates them."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:n(91121).A+"",width:"1080",height:"607"})}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"In Summary:"})," Whether it's Flink SQL tasks or Custom code tasks, StreamPark provides excellent support to meet various business scenarios. However, StreamPark lacks task scheduling capabilities. If you need to schedule tasks regularly, StreamPark currently cannot meet this need. Community members are actively developing scheduling-related modules, and the soon-to-be-released version 1.2.3 will support task scheduling capabilities, so stay tuned."]}),"\n",(0,t.jsx)(a.h2,{id:"04-feature-extension",children:(0,t.jsx)(a.strong,{children:"04. Feature Extension"})}),"\n",(0,t.jsx)(a.p,{children:"Datahub is a metadata management platform developed by Linkedin, offering data source management, data lineage, data quality checks, and more. Haibo Tech has developed an extension based on StreamPark and Datahub, implementing table-level/field-level lineage features. With the data lineage feature, users can check the field lineage relationship of Flink SQL and save the lineage relationship to the Linkedin/Datahub metadata management platform."}),"\n",(0,t.jsx)(a.p,{children:"// Two video links (Data lineage feature developed based on streampark)"}),"\n",(0,t.jsx)(a.h2,{id:"05-future-expectations",children:(0,t.jsx)(a.strong,{children:"05. Future Expectations"})}),"\n",(0,t.jsx)(a.p,{children:"Currently, the StreamPark community's Roadmap indicates that StreamPark 1.3.0 will usher in a brand new Workbench experience, a unified resource management center (unified management of JAR/UDF/Connectors), batch task scheduling, and more. These are also some of the brand-new features we are eagerly anticipating."}),"\n",(0,t.jsx)(a.p,{children:"The Workbench will use a new workbench-style SQL development style. By selecting a data source, SQL can be generated automatically, further enhancing Flink task development efficiency. The unified UDF resource center will solve the current problem where each task has to upload its dependency package. The batch task scheduling feature will address StreamPark's current inability to schedule tasks."}),"\n",(0,t.jsx)(a.p,{children:"Below is a prototype designed by StreamPark developers, so please stay tuned."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:n(61128).A+"",width:"830",height:"518"})})]})}function h(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},17658:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/application-b12eb5d36d548a02e52ec12a28ddcec0.png"},91121:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/data_aggregation-e5caba8eee38a8444df6cb3382a1d978.png"},61128:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/data_source-5f9b710b4186a08571192ae81ab350d1.png"},16385:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/dependency-172169d43c50f455fb7e2c7e08de32a2.png"},15635:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/deploy-d486a5c0eb238a9f2a6ce5f2b3013500.png"},61339:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/flink_cdc-318444c917eb66f591a5c75db9662e78.png"},21755:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/flink_sql-a8811954a9f765640bb08ad9cd139a15.png"},76113:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>o});var t=n(30758);const i={},s=t.createContext(i);function r(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);