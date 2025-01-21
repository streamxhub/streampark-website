"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[979],{62890:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=t(86070),i=t(76113);const o={slug:"streampark-usercase-changan",title:"Changan Automobile\u2019s upgrade practice from self-developed platform to Apache StreamPark\u2122",tags:["StreamPark","Production Practice"]},s=void 0,r={permalink:"/blog/streampark-usercase-changan",editUrl:"https://github.com/apache/streampark-website/edit/dev/blog/9-streampark-usercase-changan.md",source:"@site/blog/9-streampark-usercase-changan.md",title:"Changan Automobile\u2019s upgrade practice from self-developed platform to Apache StreamPark\u2122",description:"Introduction\uff1aChangan Automobile is one of the four major automobile cluster companies in China. With the advancement of business development and digital intelligence, the requirements for the effectiveness of data are getting higher and higher. There are more and more Flink operations. Changan Automobile originally developed a set of flow processes. The application platform is used to meet the basic needs of developers for Flink job management and operation and maintenance. However, it faces many challenges and dilemmas in actual use. In the end, Apache StreamPark was used as a one-stop real-time computing platform, which effectively solved the previous problems. Faced with many difficulties, the solution provided by StreamPark simplifies the entire development process, saves a lot of time in Flink job development and deployment, gets out of the quagmire of job operation and maintenance management, and significantly improves efficiency.",date:"2025-01-21T04:13:21.000Z",tags:[{inline:!0,label:"StreamPark",permalink:"/blog/tags/stream-park"},{inline:!0,label:"Production Practice",permalink:"/blog/tags/production-practice"}],readingTime:9.375,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"streampark-usercase-changan",title:"Changan Automobile\u2019s upgrade practice from self-developed platform to Apache StreamPark\u2122",tags:["StreamPark","Production Practice"]},unlisted:!1,prevItem:{title:"Ziroom's Real-Time Computing Platform Practice Based on Apache StreamPark\u2122",permalink:"/blog/streampark-usercase-ziru"}},l={authorsImageUrls:[]},c=[{value:"<strong>1.Challenges of real-time computing</strong>",id:"1challenges-of-real-time-computing",level:2},{value:"<strong>2.Why use StreamPark</strong>",id:"2why-use-streampark",level:2},{value:"<strong>Perfect basic management capabilities</strong>",id:"perfect-basic-management-capabilities",level:3},{value:"<strong>All-in-one streaming platform</strong>",id:"all-in-one-streaming-platform",level:3},{value:"<strong>Strong scalability</strong>",id:"strong-scalability",level:3},{value:"<strong>3.StreamPark implementation practice</strong>",id:"3streampark-implementation-practice",level:2},{value:"<strong>Adaptable retrofits</strong>",id:"adaptable-retrofits",level:3},{value:"<strong>Alarm information modification</strong>",id:"alarm-information-modification",level:4},{value:"<strong>Nocos configuration management support</strong>",id:"nocos-configuration-management-support",level:4},{value:"<strong>Problems encountered and solutions</strong>",id:"problems-encountered-and-solutions",level:3},{value:"<strong>1. Flink cluster cannot be accessed</strong>",id:"1-flink-cluster-cannot-be-accessed",level:4},{value:"<strong>2. Hadoop environment check failed</strong>",id:"2-hadoop-environment-check-failed",level:4},{value:"<strong>3. The lib directory is missing from the Flink path of HDFS</strong>",id:"3-the-lib-directory-is-missing-from-the-flink-path-of-hdfs",level:4},{value:"<strong>4. The job is automatically pulled up after it fails, causing the job to be repeated.</strong>",id:"4-the-job-is-automatically-pulled-up-after-it-fails-causing-the-job-to-be-repeated",level:4},{value:"<strong>4.Benefits</strong>",id:"4benefits",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(18440).A+"",width:"1080",height:"460"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Introduction"}),"\uff1aChangan Automobile is one of the four major automobile cluster companies in China. With the advancement of business development and digital intelligence, the requirements for the effectiveness of data are getting higher and higher. There are more and more Flink operations. Changan Automobile originally developed a set of flow processes. The application platform is used to meet the basic needs of developers for Flink job management and operation and maintenance. However, it faces many challenges and dilemmas in actual use. In the end, Apache StreamPark was used as a one-stop real-time computing platform, which effectively solved the previous problems. Faced with many difficulties, the solution provided by StreamPark simplifies the entire development process, saves a lot of time in Flink job development and deployment, gets out of the quagmire of job operation and maintenance management, and significantly improves efficiency."]}),"\n",(0,a.jsx)(n.p,{children:"Contributor | Changan Intelligent Research Institute Cloud Platform Development Institute"}),"\n",(0,a.jsx)(n.p,{children:"Editing and proofreading\uff5cPan Yuepeng"}),"\n",(0,a.jsx)(n.p,{children:'Chongqing Changan Automobile Co., Ltd. (referred to as "Changan Automobile") was established on October 31, 1996. It is an enterprise among the four major automobile groups in China and has a history of 161 years. It currently includes Changan Qiyuan, Deep Blue Automobile, Avita , Changan Gravity, Changan Kaicheng and other independent brands as well as Changan Ford, Changan Mazda and other joint venture brands.'}),"\n",(0,a.jsx)(n.p,{children:"In recent years, with the continuous increase in car sales and the continuous improvement of intelligence, vehicles will generate hundreds of billions of CAN data every day, and the cleaned and processed data is also at the level of 5 billion. Faced with such a huge and continuously expanding data scale, how to quickly extract and mine valuable information from massive data and provide data support for R&D, production, sales and other departments has become an urgent problem that needs to be solved."}),"\n",(0,a.jsx)(n.h2,{id:"1challenges-of-real-time-computing",children:(0,a.jsx)(n.strong,{children:"1.Challenges of real-time computing"})}),"\n",(0,a.jsxs)(n.p,{children:["The storage and analysis processing of Changan Automobile data mainly consists of two parts: the upper cloud and the lower cloud. The upper cloud refers to the big data cluster we deployed on Tencent Cloud Server, which is built by CDH and is used to store hot data; the lower cloud is deployed on the Tencent Cloud Server. The CDP cluster in the local computer room pulls synchronized data from the cloud for storage and analysis.",(0,a.jsx)(n.strong,{children:"Flink has always played an important role in Changan Automobile's real-time computing, and Changan Automobile has developed a streaming application platform to meet the basic needs of developers for Flink job management and O&M"}),"\u3002However, in actual use, the streaming application platform has the following four problems:"]}),"\n",(0,a.jsxs)(n.p,{children:["\u2460",(0,a.jsx)(n.strong,{children:"Single function"}),": It only provides deployment functions, without user rights management, team management, role management, and project management, which cannot meet the needs of project and team management."]}),"\n",(0,a.jsxs)(n.p,{children:["\u2461",(0,a.jsx)(n.strong,{children:"Lack of ease of use"}),": SQL writing is silent, log browsing is inconvenient, debugging is not supported, no error detection, no version management, no configuration center, etc."]}),"\n",(0,a.jsxs)(n.p,{children:["\u2462",(0,a.jsx)(n.strong,{children:"Poor scalability"}),": Online expansion of Flink clusters, new or replacement of Flink versions, and addition of Flink Connectors and CDC are not supported."]}),"\n",(0,a.jsxs)(n.p,{children:["\u2463",(0,a.jsx)(n.strong,{children:"Poor maintainability"}),": No log viewing, no version management, no configuration center, etc."]}),"\n",(0,a.jsx)(n.h2,{id:"2why-use-streampark",children:(0,a.jsx)(n.strong,{children:"2.Why use StreamPark"})}),"\n",(0,a.jsxs)(n.p,{children:["In view of the difficulties faced by Flink operations, we decided to seek solutions from the open source field first. Therefore, we comprehensively investigated open source projects such as Apache StreamPark, Dxxky, and strxxing-xx-web,",(0,a.jsx)(n.strong,{children:"from the core capabilities, stability, ease of use, scalability, maintainability, operation experience and other dimensions of a comprehensive evaluation and comparison, combined with our current streaming job development needs and our company's big data platform follow-up planning, we found that Apache StreamPark is the most in line with our current needs. That's why we adopted StreamPark as our streaming computing platform"}),"\uff0cStreamPark has the following advantages\uff1a"]}),"\n",(0,a.jsx)(n.h3,{id:"perfect-basic-management-capabilities",children:(0,a.jsx)(n.strong,{children:"Perfect basic management capabilities"})}),"\n",(0,a.jsx)(n.p,{children:"StreamPark solves the problems of our existing streaming application platform such as no user rights management, team management, role management, project management, team management, etc."}),"\n",(0,a.jsx)(n.p,{children:"\u2460 The StreamPark platform provides user rights management capabilities. These features ensure that users only have access to the data and resources they need, and limit their modification rights to the system or job. This management capability is necessary for enterprise-level users because it helps protect the organization's data, maintain system stability, and ensure the smooth running of jobs. By properly setting and managing user permissions, organizations have more control over data access and operations, reducing risk and increasing productivity."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(3843).A+"",width:"554",height:"370"})}),"\n",(0,a.jsx)(n.h3,{id:"all-in-one-streaming-platform",children:(0,a.jsx)(n.strong,{children:"All-in-one streaming platform"})}),"\n",(0,a.jsx)(n.p,{children:"StreamPark solves the problems of insufficient ease of use of the streaming application platform, such as no prompts for SQL writing, inconvenient log browsing, no error detection, no version management, and no configuration center."}),"\n",(0,a.jsxs)(n.p,{children:["\u2460 StreamPark has a complete SQL validation function, implements automatic build/push images, and uses custom classloaders\uff0c",(0,a.jsx)(n.strong,{children:"the Child-first loading mode solves the two running modes of YARN and K8s, and supports the free switching of Flink versions"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["\u2461 StreamPark provides job monitoring and log management.",(0,a.jsx)(n.strong,{children:"It can help users monitor the running status of jobs in real time, view job log information, and perform troubleshooting.\u3002This enables users to quickly find and resolve problems in job running"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"strong-scalability",children:(0,a.jsx)(n.strong,{children:"Strong scalability"})}),"\n",(0,a.jsx)(n.p,{children:"StreamPark solves problems such as poor scalability of the streaming application platform, inability to scale out Flink clusters online, add or replace Flink versions, and insufficient Flink connectors."}),"\n",(0,a.jsxs)(n.p,{children:["\u2460 StreamPark is designed to be scalable and flexible\uff0c",(0,a.jsx)(n.strong,{children:"can support large-scale Flink on Yarn job running, and can be seamlessly integrated with existing Yarn clusters"}),"\uff0cAnd can be customized and expanded as needed. In addition, StreamPark also provides a variety of configuration options and function extension points to meet the diverse needs of users."]}),"\n",(0,a.jsxs)(n.p,{children:["\u2461 ",(0,a.jsx)(n.strong,{children:"StreamPark has a complete set of tools for Flink job development"}),"\u3002In StreamPark, it provides a better solution for writing Flink jobs, standardizing program configurations, simplifying the programming model, and providing a series of connectors that significantly reduce the difficulty of DataStream development."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(54829).A+"",width:"554",height:"369"})}),"\n",(0,a.jsxs)(n.p,{children:["In addition to the above-mentioned advantages\uff0c",(0,a.jsx)(n.strong,{children:"StreamPark also manages the entire lifecycle of a job, including job development, deployment, operation, and problem diagnosis, so that developers can focus on the business itself without paying too much attention to the management and operation and maintenance of Flink jobs"}),"\u3002The job development management module of StreamPark can be roughly divided into three parts: basic job management functions, JAR job management, and FlinkSQL job management."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(23388).A+"",width:"1080",height:"542"})}),"\n",(0,a.jsx)(n.h2,{id:"3streampark-implementation-practice",children:(0,a.jsx)(n.strong,{children:"3.StreamPark implementation practice"})}),"\n",(0,a.jsx)(n.p,{children:"In order to make StreamPark more consistent with our needs in daily production practice, we have made certain adaptations to it:"}),"\n",(0,a.jsx)(n.h3,{id:"adaptable-retrofits",children:(0,a.jsx)(n.strong,{children:"Adaptable retrofits"})}),"\n",(0,a.jsx)(n.h4,{id:"alarm-information-modification",children:(0,a.jsx)(n.strong,{children:"Alarm information modification"})}),"\n",(0,a.jsx)(n.p,{children:"For example, the alarms for StreamPark not only support email, Feishu, DingTalk, and WeCom push, but also support the classification of alarm information according to its importance, and push it to different alarm groups and relevant individuals, so that relevant O&M personnel can capture important alarm information in a timely manner and respond quickly."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(72969).A+"",width:"497",height:"385"})}),"\n",(0,a.jsx)(n.h4,{id:"nocos-configuration-management-support",children:(0,a.jsx)(n.strong,{children:"Nocos configuration management support"})}),"\n",(0,a.jsx)(n.p,{children:"In order to solve the inconvenience caused by the configuration information of Flink applications being written in the JAR package, which brings the following advantages:"}),"\n",(0,a.jsx)(n.p,{children:"\u2460 Centralized configuration management: Through StreamPark, developers can centrally manage the configuration information of all Flink applications, realize centralized management and update of configurations, and avoid switching and duplicating operations between multiple platforms. At the same time, the security of configuration management is strengthened, and the permission control of access and modification of configuration is carried out to prevent unauthorized access and modification."}),"\n",(0,a.jsx)(n.p,{children:"\u2461 Dynamic configuration update: The integration of StreamPark and Nacos enables Flink applications to obtain the latest configuration information in a timely manner, realize dynamic configuration updates, avoid cumbersome processes such as recompiling, publishing, and restarting after modifying Flink configuration information, and improve the flexibility and response speed of the system. At the same time, StreamPark can use the configuration push function of Nacos to realize the automatic update of configuration information."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(28579).A+"",width:"682",height:"264"})}),"\n",(0,a.jsx)(n.h3,{id:"problems-encountered-and-solutions",children:(0,a.jsx)(n.strong,{children:"Problems encountered and solutions"})}),"\n",(0,a.jsx)(n.p,{children:"Our current private cloud analysis cluster uses Cloudera CDP, and the Flink version is Cloudera Version 1.14. The overall Flink installation directory and configuration file structure are quite different from the community version. Deploying directly according to the official StreamPark documentation will make it impossible to configure Flink Home and submit subsequent overall Flink tasks to the cluster. Therefore, targeted adaptation and integration are required to provide a complete StreamPark usage experience to meet usage requirements."}),"\n",(0,a.jsx)(n.h4,{id:"1-flink-cluster-cannot-be-accessed",children:(0,a.jsx)(n.strong,{children:"1. Flink cluster cannot be accessed"})}),"\n",(0,a.jsx)(n.p,{children:"\u2460 Problem description: The installation path of Cloudera Flink is inconsistent with the actual submission path, and the conf directory is missing in the actual submission path."}),"\n",(0,a.jsx)(n.p,{children:"\u2461 Solution: The actual flink submission path is in"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"/opt/cloudera/parcels/Flink-$ {version}/lib/flink/bin/flink\n"})}),"\n",(0,a.jsx)(n.p,{children:"Therefore the path"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"/opt/cloudera/parcels/Flink-$ {version}/1ib/flink\n"})}),"\n",(0,a.jsx)(n.p,{children:"It can be understood as the real Flink Home, check the content under this directory for details."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(5).A+"",width:"413",height:"140"})}),"\n",(0,a.jsx)(n.p,{children:"It was found that the conf directory is missing. If the directory is configured as Flink Home in StreamPark, the cluster will not be accessible. Therefore, you can soft-link the Flink configuration or edit the Flink configuration file in the cluster under this path."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(55483).A+"",width:"484",height:"167"})}),"\n",(0,a.jsx)(n.p,{children:"In summary, after the pre-configuration and packaging of the code (the code may involve optimization and modification for your own use), it can be deployed."}),"\n",(0,a.jsx)(n.p,{children:"Note that if the version 2.0 is packaged, you can directly execute the build.sh in the source code, select hybrid deployment, and the generated package is in the dist directory."}),"\n",(0,a.jsx)(n.h4,{id:"2-hadoop-environment-check-failed",children:(0,a.jsx)(n.strong,{children:"2. Hadoop environment check failed"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(30962).A+"",width:"554",height:"183"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"vi /etc/profile\n"})}),"\n",(0,a.jsx)(n.p,{children:"Solution: Add the hadoop environment to the node where StreamPark is deployed."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"export HADOOP_CONF_DIR=/etc/hadoop/conf\n"})}),"\n",(0,a.jsx)(n.p,{children:"source to make it work, just restart StreamPark."}),"\n",(0,a.jsx)(n.h4,{id:"3-the-lib-directory-is-missing-from-the-flink-path-of-hdfs",children:(0,a.jsx)(n.strong,{children:"3. The lib directory is missing from the Flink path of HDFS"})}),"\n",(0,a.jsx)(n.p,{children:"Solution: The lib directory in the working directory of StreamPark on HDFS after deployment is not uploaded normally. Find the initialized StremPark work path on HDFS and observe whether the lib directory under hdfs:///streampark/flink/.../ Complete, if not complete, manually put the lib in the local Flink Home directory."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(1128).A+"",width:"554",height:"214"})}),"\n",(0,a.jsx)(n.h4,{id:"4-the-job-is-automatically-pulled-up-after-it-fails-causing-the-job-to-be-repeated",children:(0,a.jsx)(n.strong,{children:"4. The job is automatically pulled up after it fails, causing the job to be repeated."})}),"\n",(0,a.jsx)(n.p,{children:"StreamPark itself has the ability to restart the pull after the job is used. When a job failure is detected, it will be restarted. However, in practice, it is found that the same failed job will be started multiple times on YARN. After communicating with the community, it has been It was determined to be a bug, and the bug was finally resolved in 2.1.3."}),"\n",(0,a.jsx)(n.h2,{id:"4benefits",children:(0,a.jsx)(n.strong,{children:"4.Benefits"})}),"\n",(0,a.jsx)(n.p,{children:"Currently, Changan Automobile has deployed StreamPark in cloud production/pre-production environment and local production/pre-production environment. As of press time, StreamPark manages a total of 150+ Flink jobs, including JAR and SQL jobs. It involves using technologies such as Flink and FlinkCDC to synchronize data from MySQL or Kafka to databases such as MySQL, Doris, HBase, and Hive. In the future, all Flink jobs in a total of 3,000+ environments will also be migrated to StreamPark in batches for centralized management."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"The most obvious benefit of Apache StreamPark is that it provides a one-stop service, where business development students can complete job development, compilation and release on StreamPark, without using multiple tools to complete a FlinkSQL job development, simplifying the entire development process"}),"\uff0cStreamPark saves us a lot of time in Flink job development and deployment, and significantly improves the efficiency of Flink application development."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(27756).A+"",width:"1080",height:"542"})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},72969:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/alarm_information-b67199a66276ada93c1dba47a7581dc9.png"},3843:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/capability-2f9e6fd6a844689944e87e108221d5d9.png"},55483:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/conf-42f135b00a0b3048efb6aa939efd30ac.png"},54829:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/connectors-399832ebea5ac259c19088bb4290efc2.png"},18440:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/cover-cfb54d18805b5d425d6bbd2659db2533.png"},5:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/flink_home-effa79b6d882bdee8a3963543b193a0b.png"},30962:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/hadoop-1c0b84f088853fdc601244e8fad4abdf.png"},27756:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/job-767d96706631b95dadf7638c142a0adc.png"},23388:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/job_management-ccb5b6adb51dd3dc263c4511360a4291.png"},1128:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/lib-681f949f839a87303f598e2e7b907e24.png"},28579:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/nocos-382ee7fe44f0199ec2209b703381d6cf.png"},76113:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var a=t(30758);const i={},o=a.createContext(i);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);