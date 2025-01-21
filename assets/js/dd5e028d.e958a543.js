"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[307],{23231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=n(86070),i=n(76113);const a={slug:"flink-development-framework-streampark",title:"Apache StreamPark\u2122 - Powerful Flink Development Framework",tags:["StreamPark","DataStream","FlinkSQL"]},r="1. Background",o={permalink:"/blog/flink-development-framework-streampark",editUrl:"https://github.com/apache/streampark-website/edit/dev/blog/1-flink-framework-streampark.md",source:"@site/blog/1-flink-framework-streampark.md",title:"Apache StreamPark\u2122 - Powerful Flink Development Framework",description:"Although the Hadoop system is widely used today, its architecture is complicated, it has a high maintenance complexity, version upgrades are challenging, and due to departmental reasons, data center scheduling is prolonged. We urgently need to explore agile data platform models. With the current popularization of cloud-native architecture and the integration between lake and warehous, we have decided to use Doris as an offline data warehouse and TiDB (which is already in production) as a real-time data platform. Furthermore, because Doris has ODBC capabilities on MySQL, it can integrate external database resources and uniformly output reports.",date:"2025-01-21T04:13:21.000Z",tags:[{inline:!0,label:"StreamPark",permalink:"/blog/tags/stream-park"},{inline:!0,label:"DataStream",permalink:"/blog/tags/data-stream"},{inline:!0,label:"FlinkSQL",permalink:"/blog/tags/flink-sql"}],readingTime:10.225,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"flink-development-framework-streampark",title:"Apache StreamPark\u2122 - Powerful Flink Development Framework",tags:["StreamPark","DataStream","FlinkSQL"]},unlisted:!1,prevItem:{title:"Apache StreamPark\u2122 Flink on Kubernetes practice",permalink:"/blog/streampark-flink-on-k8s"},nextItem:{title:"Ziroom implements the best practice of one-key data input into the lake based on Apache StreamPark\u2122 + Paimon",permalink:"/blog/streampark-flink-with-paimon-in-ziru"}},l={authorsImageUrls:[]},d=[{value:"Simplifying Image Building",id:"simplifying-image-building",level:2},{value:"Introducing Apache StreamPark\u2122",id:"introducing-apache-streampark",level:2},{value:"K8s Native Application Mode",id:"k8s-native-application-mode",level:3},{value:"K8s Native Session Mode",id:"k8s-native-session-mode",level:3},{value:"Custom Code Mode",id:"custom-code-mode",level:3},{value:"Suggestions for Improvement",id:"suggestions-for-improvement",level:2},{value:"Future Prospects",id:"future-prospects",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Although the Hadoop system is widely used today, its architecture is complicated, it has a high maintenance complexity, version upgrades are challenging, and due to departmental reasons, data center scheduling is prolonged. We urgently need to explore agile data platform models. With the current popularization of cloud-native architecture and the integration between lake and warehous, we have decided to use Doris as an offline data warehouse and TiDB (which is already in production) as a real-time data platform. Furthermore, because Doris has ODBC capabilities on MySQL, it can integrate external database resources and uniformly output reports."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(93404).A+"",width:"1200",height:"738"})}),"\n",(0,s.jsx)(t.p,{children:"Although the Hadoop system is widely used today, its architecture is complicated, it has a high maintenance complexity, version upgrades are challenging, and due to departmental reasons, data center scheduling is prolonged. We urgently need to explore agile data platform models. With the current popularization of cloud-native architecture and the integration between lake and warehous, we have decided to use Doris as an offline data warehouse and TiDB (which is already in production) as a real-time data platform. Furthermore, because Doris has ODBC capabilities on MySQL, it can integrate external database resources and uniformly output reports."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(93404).A+"",width:"1200",height:"738"})}),"\n",(0,s.jsx)("center",{style:{color:"gray"},children:"(Borrowing Doris's official architecture diagram here)"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h1,{id:"2-challenges-faced",children:"2. Challenges Faced"}),"\n",(0,s.jsx)(t.p,{children:"For the data engine, we settled on using Spark and Flink:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Use Spark on K8s client mode for offline data processing."}),"\n",(0,s.jsx)(t.li,{children:"Use Flink on K8s Native-Application/Session mode for real-time task stream management."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Here, there are some challenges we haven't fully resolved:"}),"\n",(0,s.jsx)(t.p,{children:"Those who have used the Native-Application mode know that each time a task is submitted, a new image must be packaged, pushed to a private repository, and then the Flink Run command is used to communicate with K8s to pull the image and run the Pod. After the task is submitted, you need to check the log on K8s, but:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"How is task runtime monitoring handled?"}),"\n",(0,s.jsx)(t.li,{children:"Do you use Cluster mode or expose ports using NodePort to access Web UI?"}),"\n",(0,s.jsx)(t.li,{children:"Can the task submission process be simplified to avoid image packaging?"}),"\n",(0,s.jsx)(t.li,{children:"How can we reduce the pressure on developers?"}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h1,{id:"3-solving-the-challenges",children:"3. Solving the Challenges"}),"\n",(0,s.jsx)(t.p,{children:"All of the above are challenges that need addressing. If we rely solely on the command line to submit each task, it becomes unrealistic. As the number of tasks increases, it becomes unmanageable. Addressing these challenges became inevitable."}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h2,{id:"simplifying-image-building",children:"Simplifying Image Building"}),"\n",(0,s.jsx)(t.p,{children:"Firstly, regarding the need for a secondary build of the native Flink image: we utilized MinIO as external storage and mounted it directly on each host node using s3-fuse via DaemonSet. The jar packages we need to submit can all be managed there. In this way, even if we scale the Flink nodes up or down, S3 mounts can automatically scale."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(12215).A+"",width:"1141",height:"582"})}),"\n",(0,s.jsxs)(t.p,{children:["From Flink version 1.13 onwards, Pod Template support has been added. We can use volume mounts in the Pod Template to mount host directories into each pod, allowing Flink programs to run directly on K8s without packaging them into images. As shown in the diagram above, we first mount S3 using the s3-fuse Pod to the ",(0,s.jsx)(t.code,{children:"/mnt/data-s3fs"})," directory on Node 1 and Node 2, and then mount ",(0,s.jsx)(t.code,{children:"/mnt/data-s3fs"})," into Pod A."]}),"\n",(0,s.jsx)(t.p,{children:"However, because object storage requires the entire object to be rewritten for random writes or file appends, this method is only suitable for frequent reads. This perfectly fits our current scenario."}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h2,{id:"introducing-apache-streampark",children:"Introducing Apache StreamPark\u2122"}),"\n",(0,s.jsx)(t.p,{children:"Previously, when we wrote Flink SQL, we generally used Java to wrap SQL, packed it into a jar package, and submitted it to the S3 platform through the command line. This approach has always been unfriendly; the process is cumbersome, and the costs for development and operations are too high. We hoped to further streamline the process by abstracting the Flink TableEnvironment, letting the platform handle initialization, packaging, and running Flink tasks, and automating the building, testing, and deployment of Flink applications."}),"\n",(0,s.jsx)(t.p,{children:"This is an era of open-source uprising. Naturally, we turned our attention to the open-source realm: among numerous open-source projects, after comparing various projects, we found that both Zeppelin and StreamPark provide substantial support for Flink and both claim to support Flink on K8s. Eventually, both were shortlisted for our selection. Here's a brief comparison of their support for K8s (if there have been updates since, please kindly correct)."}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Feature"}),(0,s.jsx)("td",{children:"Zeppelin"}),(0,s.jsx)("td",{children:"StreamPark"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Task Status Monitoring"}),(0,s.jsx)("td",{children:"Somewhat limited, not suitable as a task status monitoring tool."}),(0,s.jsx)("td",{children:"Highly capable"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Task Resource Management"}),(0,s.jsx)("td",{children:"None"}),(0,s.jsx)("td",{children:"Exists, but the current version is not very robust."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Local Deployment"}),(0,s.jsx)("td",{children:"On the lower side. In on K8s mode, you can only deploy Zeppelin in K8s. Otherwise, you need to connect the Pod and external network, which is rarely done in production."}),(0,s.jsx)("td",{children:"Can be deployed locally"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Multi-language Support"}),(0,s.jsx)("td",{children:"High - Supports multiple languages such as Python/Scala/Java."}),(0,s.jsx)("td",{children:"Average - Currently, K8s mode and YARN mode support FlinkSQL, and based on individual needs, you can use Java/Scala to develop DataStream."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Flink WebUI Proxy"}),(0,s.jsx)("td",{children:"Currently not very comprehensive. The main developer is considering integrating Ingress."}),(0,s.jsx)("td",{children:"Good - Currently supports ClusterIp/NodePort/LoadBalance modes."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Learning Curve"}),(0,s.jsx)("td",{children:"Low cost. Needs to learn additional parameters, which differ somewhat from native FlinkSQL."}),(0,s.jsx)("td",{children:"No cost. In K8s mode, FlinkSQL is supported in its native SQL format; also supports Custom-Code (user writes code for developing Datastream/FlinkSQL tasks)."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Support for Multiple Flink Versions"}),(0,s.jsx)("td",{children:"Supported"}),(0,s.jsx)("td",{children:"Supported"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Intrusion into Native Flink Image"}),(0,s.jsx)("td",{children:"Invasive. You need to pre-deploy the jar package in the Flink image, which will start in the same Pod as JobManager and communicate with the zeppelin-server."}),(0,s.jsx)("td",{children:"Non-invasive, but it will generate many images that need to be cleaned up regularly."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Multi-version Code Management"}),(0,s.jsx)("td",{children:"Supported"}),(0,s.jsx)("td",{children:"Supported"})]})]})]}),"\n",(0,s.jsx)("center",{style:{color:"gray"},children:"(PS: This comparison is based on our perspective as evaluators. We hold the utmost respect for the developers of both platforms.)"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.p,{children:"During our research process, we communicated with the main developers of both tools multiple times. After our repeated studies and assessments, we eventually decided to adopt StreamPark as our primary Flink development tool for now."}),"\n",(0,s.jsx)("video",{src:"http://assets.streamxhub.com/streamx-video.mp4",controls:"controls",width:"100%",height:"100%"}),"\n",(0,s.jsx)("center",{style:{color:"gray"},children:"(StreamPark's official splash screen)"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.p,{children:"After extended development and testing by our team, StreamPark currently boasts:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Comprehensive ",(0,s.jsx)("span",{style:{color:"red"},children:"SQL validation capabilities"})]}),"\n",(0,s.jsxs)(t.li,{children:["It has achieved ",(0,s.jsx)("span",{style:{color:"red"},children:"automatic build/push for images"})]}),"\n",(0,s.jsxs)(t.li,{children:["Using a custom class loader and through the Child-first loading method, it ",(0,s.jsx)("span",{style:{color:"red"},children:"addresses both YARN and K8s operational modes"})," and ",(0,s.jsx)("span",{style:{color:"red"},children:"supports the seamless switch between multiple Flink versions"})]}),"\n",(0,s.jsxs)(t.li,{children:["It deeply integrates with Flink-Kubernetes, returning a WebUI after task submission, and via remote REST API + remote K8s, it can ",(0,s.jsx)("span",{style:{color:"red"},children:"track task execution status"})]}),"\n",(0,s.jsxs)(t.li,{children:["It supports versions like ",(0,s.jsx)("span",{style:{color:"red"},children:"Flink 1.12, 1.13, 1.14, and more"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This effectively addresses most of the challenges we currently face in development and operations."}),"\n",(0,s.jsx)("video",{src:"http://assets.streamxhub.com/streamx-1.2.0.mp4",controls:"controls",width:"100%",height:"100%"}),"\n",(0,s.jsx)("center",{style:{color:"gray"},children:"(Demo video showcasing StreamPark's support for multiple Flink versions)"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.p,{children:"In its latest release, version 1.2.0, StreamPark provides robust support for both K8s-Native-Application and K8s-Session-Application modes."}),"\n",(0,s.jsx)("video",{src:"http://assets.streamxhub.com/streamx-k8s.mp4",controls:"controls",width:"100%",height:"100%"}),"\n",(0,s.jsx)("center",{style:{color:"gray"},children:"(StreamPark's K8s deployment demo video)"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h3,{id:"k8s-native-application-mode",children:"K8s Native Application Mode"}),"\n",(0,s.jsx)(t.p,{children:"Within StreamPark, all we need to do is configure the relevant parameters, fill in the corresponding dependencies in the Maven POM, or upload the dependency jar files. Once we click on 'Apply', the specified dependencies will be generated. This implies that we can also compile all the UDFs we use into jar files, as well as various connector.jar files, and use them directly in SQL. As illustrated below:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(65660).A+"",width:"1080",height:"461"})}),"\n",(0,s.jsx)(t.p,{children:"The SQL validation capability is roughly equivalent to that of Zeppelin:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(72188).A+"",width:"1080",height:"619"})}),"\n",(0,s.jsx)(t.p,{children:"We can also specify resources, designate dynamic parameters within Flink Run as Dynamic Options, and even integrate these parameters with a Pod Template."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(26238).A+"",width:"1080",height:"574"})}),"\n",(0,s.jsx)(t.p,{children:"After saving the program, when clicking to run, we can also specify a savepoint. Once the task is successfully submitted, StreamPark will, based on the FlinkPod's network Exposed Type (be it loadBalancer, NodePort, or ClusterIp), return the corresponding WebURL, seamlessly enabling a WebUI redirect. However, as of now, due to security considerations within our online private K8s cluster, there hasn't been a connection established between the Pod and client node network (and there's currently no plan for this). Hence, we only employ NodePort. If the number of future tasks increases significantly, and there's a need for ClusterIP, we might consider deploying StreamPark in K8s or further integrate it with Ingress."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(19723).A+"",width:"1080",height:"522"})}),"\n",(0,s.jsx)(t.p,{children:"Note: If the K8s master uses a vip for load balancing, the Flink 1.13 version will return the vip's IP address. This issue has been rectified in the 1.14 version."}),"\n",(0,s.jsx)(t.p,{children:"Below is the specific submission process in the K8s Application mode:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(50615).A+"",width:"1080",height:"949"})}),"\n",(0,s.jsx)("center",{style:{color:"gray"},children:"(The above is a task submission flowchart, drawn based on personal understanding. If there are inaccuracies, your understanding is appreciated.)"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h3,{id:"k8s-native-session-mode",children:"K8s Native Session Mode"}),"\n",(0,s.jsxs)(t.p,{children:["StreamPark also offers robust support for the ",(0,s.jsx)("span",{style:{color:"red"},children:" K8s Native-Session mode"}),", which lays a solid technical foundation for our subsequent offline FlinkSQL development or for segmenting certain resources."]}),"\n",(0,s.jsx)(t.p,{children:"To use the Native-Session mode, one must first use the Flink command to create a Flink cluster that operates within K8s. For instance:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"./kubernetes-session.sh \\\n-Dkubernetes.cluster-id=flink-on-k8s-flinkSql-test \\\n-Dkubernetes.context=XXX \\\n-Dkubernetes.namespace=XXXX \\\n-Dkubernetes.service-account=XXXX \\\n-Dkubernetes.container.image=XXXX \\\n-Dkubernetes.container.image.pull-policy=Always \\\n-Dkubernetes.taskmanager.node-selector=XXXX \\\n-Dkubernetes.rest-service.exposed.type=Nodeport\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(89885).A+"",width:"1080",height:"664"})}),"\n",(0,s.jsx)(t.p,{children:"As shown in the image above, we use that ClusterId as the Kubernetes ClusterId task parameter for StreamPark. Once the task is saved and submitted, it quickly transitions to a 'Running' state:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(61916).A+"",width:"1080",height:"529"})}),"\n",(0,s.jsx)(t.p,{children:"Following the application info's WebUI link:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(37331).A+"",width:"1080",height:"520"})}),"\n",(0,s.jsx)(t.p,{children:"It becomes evident that StreamPark essentially uploads the jar package to the Flink cluster through REST API and then schedules the task for execution."}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h3,{id:"custom-code-mode",children:"Custom Code Mode"}),"\n",(0,s.jsx)(t.p,{children:"To our delight, StreamPark also provides support for coding DataStream/FlinkSQL tasks. For special requirements, we can achieve our implementations in Java/Scala. You can compose tasks following the scaffold method recommended by StreamPark or write a standard Flink task. By adopting this approach, we can delegate code management to git, utilizing the platform for automated compilation, packaging, and deployment. Naturally, if functionality can be achieved via SQL, we would prefer not to customize DataStream, thereby minimizing unnecessary operational complexities."}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h1,{id:"4-feedback-and-future-directions",children:"4. Feedback and Future Directions"}),"\n",(0,s.jsx)(t.h2,{id:"suggestions-for-improvement",children:"Suggestions for Improvement"}),"\n",(0,s.jsx)(t.p,{children:"StreamPark, similar to any other new tools, does have areas for further enhancement based on our current evaluations:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Strengthening Resource Management"}),": Features like multi-file system jar resources and robust task versioning are still awaiting additions."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Enriching Frontend Features"}),": For instance, once a task is added, functionalities like copying could be integrated."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Visualization of Task Submission Logs"}),": The process of task submission involves loading class files, jar packaging, building and submitting images, and more. A failure at any of these stages could halt the task. However, error logs are not always clear, or due to some anomaly, the exceptions aren't thrown as expected, leaving users puzzled about rectifications."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"It's a universal truth that innovations aren't perfect from the outset. Although minor issues exist and there are areas for improvement with StreamPark, its merits outweigh its limitations. As a result, we've chosen StreamPark as our Flink DevOps platform. We're also committed to collaborating with its main developers to refine StreamPark further. We wholeheartedly invite others to use it and contribute towards its advancement."}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h2,{id:"future-prospects",children:"Future Prospects"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"We'll keep our focus on Doris and plan to unify business data with log data in Doris, leveraging Flink to realize lakehouse capabilities."}),"\n",(0,s.jsx)(t.li,{children:"Our next step is to explore integrating StreamPark with DolphinScheduler 2.x. This would enhance DolphinScheduler's offline tasks, and gradually we aim to replace Spark with Flink for a unified batch-streaming solution."}),"\n",(0,s.jsx)(t.li,{children:"Drawing from our own experiments with S3, after building the fat-jar, we're considering bypassing image building. Instead, we'll mount PVC directly to the Flink Pod's directory using Pod Template, refining the code submission process even further."}),"\n",(0,s.jsx)(t.li,{children:"We plan to persistently implement StreamPark in our production environment. Collaborating with community developers, we aim to boost StreamPark's Flink stream development, deployment, and monitoring capabilities. Our collective vision is to evolve StreamPark into a holistic stream data DevOps platform."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Resources:"}),"\n",(0,s.jsxs)(t.p,{children:["StreamPark GitHub: ",(0,s.jsx)(t.a,{href:"https://github.com/apache/streampark",children:"https://github.com/apache/streampark"})," ",(0,s.jsx)("br",{}),"\nDoris GitHub: ",(0,s.jsx)(t.a,{href:"https://github.com/apache/doris",children:"https://github.com/apache/doris"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(33942).A+"",width:"900",height:"500"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},33942:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/author-c3dabbb31d7cea1b5164a75a94ca3008.png"},37331:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/dashboard-78745d8d3ebe422b166a17631bfbe622.png"},65660:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/dependency-a3b9ff29795acb8a1fd4ed6bb773d53e.png"},61916:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/detail-e9ee4c14e45068bea5e1edabec596bee.png"},93404:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/doris-4baaea78343b928b0a798ae9238c489f.png"},89885:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/flinksql-13b242feb3803b15e6698635a79065b4.png"},50615:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/flow-c2227ba0cc1f59f78e2164fdb3657223.png"},12215:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/k8s-9a28cd8f0e9c996501193f591ebe22b0.png"},26238:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/pod-d46370aaff2c34c4fe6a584c0524b28e.png"},72188:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/sqlverify-7e12cf343c9c81fcbc2e20f8d7588f1b.png"},19723:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/start-71fbb288851d022c450a6bd34e8b4dc2.png"},76113:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(30758);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);