"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[2346],{97359:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=r(86070),c=r(76113),t=r(33764),i=r(65173);const s={id:"jdbc",title:"JDBC Connector",sidebar_position:2},l=void 0,o={id:"framework/connector/jdbc",title:"JDBC Connector",description:"Apache Flink\xae \u5b98\u65b9\u63d0\u4f9b\u4e86JDBC\u7684\u8fde\u63a5\u5668\uff0c\u7528\u4e8e\u4ece JDBC \u4e2d\u8bfb\u53d6\u6216\u8005\u5411\u5176\u4e2d\u5199\u5165\u6570\u636e\uff0c\u53ef\u63d0\u4f9b\u81f3\u5c11\u4e00\u6b21\uff08AT_LEAST_ONCE\uff09\u7684\u5904\u7406\u8bed\u4e49\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/framework/connector/2.jdbc.md",sourceDirName:"framework/connector",slug:"/framework/connector/jdbc",permalink:"/zh-CN/docs/framework/connector/jdbc",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/framework/connector/2.jdbc.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"jdbc",title:"JDBC Connector",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Apache Kafka Connector",permalink:"/zh-CN/docs/framework/connector/kafka"},next:{title:"Clickhouse Connector",permalink:"/zh-CN/docs/framework/connector/clickhouse"}},d={},u=[{value:"JDBC \u4fe1\u606f\u914d\u7f6e",id:"jdbc-\u4fe1\u606f\u914d\u7f6e",level:2},{value:"semantic \u8bed\u4e49\u914d\u7f6e",id:"semantic-\u8bed\u4e49\u914d\u7f6e",level:3},{value:"EXACTLY_ONCE",id:"exactly_once",level:4},{value:"AT_LEAST_ONCE &amp;&amp; NONE",id:"at_least_once--none",level:4},{value:"\u5176\u4ed6\u914d\u7f6e",id:"\u5176\u4ed6\u914d\u7f6e",level:3},{value:"JDBC \u8bfb\u53d6\u6570\u636e",id:"jdbc-\u8bfb\u53d6\u6570\u636e",level:2},{value:"queryFunc\u83b7\u53d6\u4e00\u6761sql",id:"queryfunc\u83b7\u53d6\u4e00\u6761sql",level:3},{value:"resultFunc \u5904\u7406\u67e5\u8be2\u5230\u7684\u6570\u636e",id:"resultfunc-\u5904\u7406\u67e5\u8be2\u5230\u7684\u6570\u636e",level:3},{value:"JDBC \u8bfb\u53d6\u5199\u5165",id:"jdbc-\u8bfb\u53d6\u5199\u5165",level:2},{value:"\u6839\u636e\u6570\u636e\u6d41\u751f\u6210\u76ee\u6807SQL",id:"\u6839\u636e\u6570\u636e\u6d41\u751f\u6210\u76ee\u6807sql",level:3},{value:"\u8bbe\u7f6e\u5199\u5165\u6279\u6b21\u5927\u5c0f",id:"\u8bbe\u7f6e\u5199\u5165\u6279\u6b21\u5927\u5c0f",level:3},{value:"\u591a\u5b9e\u4f8b JDBC \u652f\u6301",id:"\u591a\u5b9e\u4f8b-jdbc-\u652f\u6301",level:2},{value:"\u624b\u52a8\u6307\u5b9a JDBC \u8fde\u63a5\u4fe1\u606f",id:"\u624b\u52a8\u6307\u5b9a-jdbc-\u8fde\u63a5\u4fe1\u606f",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Apache Flink\xae \u5b98\u65b9\u63d0\u4f9b\u4e86",(0,a.jsx)(n.a,{href:"https://ci.apache.org/projects/flink/flink-docs-release-1.12/dev/connectors/jdbc.html",children:"JDBC"}),"\u7684\u8fde\u63a5\u5668\uff0c\u7528\u4e8e\u4ece JDBC \u4e2d\u8bfb\u53d6\u6216\u8005\u5411\u5176\u4e2d\u5199\u5165\u6570\u636e\uff0c\u53ef\u63d0\u4f9b\u81f3\u5c11\u4e00\u6b21\uff08",(0,a.jsx)(n.strong,{children:"AT_LEAST_ONCE"}),"\uff09\u7684\u5904\u7406\u8bed\u4e49\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["Apache StreamPark \u4e2d\u57fa\u4e8e\u4e24\u9636\u6bb5\u63d0\u4ea4\u5b9e\u73b0\u4e86\u7cbe\u786e\u4e00\u6b21\uff08",(0,a.jsx)(n.strong,{children:"EXACTLY_ONCE"}),"\uff09\u8bed\u4e49\u7684 ",(0,a.jsx)(n.code,{children:"JdbcSink"})," \u7c7b\uff0c\u5e76\u4e14\u91c7\u7528 ",(0,a.jsx)(n.a,{href:"https://github.com/brettwooldridge/HikariCP",children:(0,a.jsx)(n.code,{children:"HikariCP"})})," \u4e3a\u8fde\u63a5\u6c60,\u8ba9\u6570\u636e\u7684\u8bfb\u53d6\u548c\u5199\u5165\u66f4\u7b80\u5355\u66f4\u51c6\u786e\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"jdbc-\u4fe1\u606f\u914d\u7f6e",children:"JDBC \u4fe1\u606f\u914d\u7f6e"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728 Apache StreamPark \u4e2d\uff0cJDBC Connector \u7684\u5b9e\u73b0\u7528\u5230\u4e86 ",(0,a.jsx)(n.a,{href:"https://github.com/brettwooldridge/HikariCP",children:(0,a.jsx)(n.code,{children:"HikariCP"})})," \u8fde\u63a5\u6c60\uff0c\u76f8\u5173\u7684\u914d\u7f6e\u5728",(0,a.jsx)(n.code,{children:"jdbc"})," \u7684 namespace \u4e0b\uff0c\u7ea6\u5b9a\u7684\u914d\u7f6e\u5982\u4e0b\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"jdbc:\n  semantic: EXACTLY_ONCE # EXACTLY_ONCE|AT_LEAST_ONCE|NONE\n  username: root\n  password: 123456\n  driverClassName: com.mysql.jdbc.Driver\n  connectionTimeout: 30000\n  idleTimeout: 30000\n  maxLifetime: 30000\n  maximumPoolSize: 6\n  jdbcUrl: jdbc:mysql://localhost:3306/test?useSSL=false&allowPublicKeyRetrieval=true\n"})}),"\n",(0,a.jsx)(n.h3,{id:"semantic-\u8bed\u4e49\u914d\u7f6e",children:"semantic \u8bed\u4e49\u914d\u7f6e"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"semantic"})," \u8fd9\u4e2a\u53c2\u6570\u662f\u5728 ",(0,a.jsx)(n.code,{children:"JdbcSink"}),"\u5199\u65f6\u5019\u7684\u8bed\u4e49,\u4ec5\u5bf9 ",(0,a.jsx)(n.strong,{children:"JdbcSink"})," \u6709\u6548,",(0,a.jsx)(n.code,{children:"JdbcSource"})," \u4f1a\u81ea\u52a8\u5c4f\u853d\u8be5\u53c2\u6570,\u6709\u4e09\u4e2a\u53ef\u9009\u9879"]}),"\n",(0,a.jsx)("div",{class:"counter",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"EXACTLY_ONCE"}),"\n",(0,a.jsx)(n.li,{children:"AT_LEAST_ONCE"}),"\n",(0,a.jsx)(n.li,{children:"NONE"}),"\n"]})}),"\n",(0,a.jsx)(n.h4,{id:"exactly_once",children:"EXACTLY_ONCE"}),"\n",(0,a.jsxs)(n.p,{children:["\u5982\u679c",(0,a.jsx)(n.code,{children:"JdbcSink"}),"\u914d\u7f6e\u4e86 ",(0,a.jsx)(n.code,{children:"EXACTLY_ONCE"}),"\u8bed\u4e49,\u5219\u5e95\u5c42\u91c7\u7528\u4e86\u4e24\u9636\u6bb5\u63d0\u4ea4\u7684\u5b9e\u73b0\u65b9\u5f0f\u6765\u5b8c\u6210\u5199\u5165,\u6b64\u65f6\u8981flink\u914d\u5408\u5f00\u542f",(0,a.jsx)(n.code,{children:"Checkpointing"}),"\u624d\u4f1a\u751f\u6548,\u5982\u4f55\u5f00\u542fcheckpoint\u8bf7\u53c2\u8003\u7b2c\u4e8c\u7ae0\u5173\u4e8e",(0,a.jsx)(n.a,{href:"/docs/model/conf",children:"checkpoint"}),"\u914d\u7f6e\u90e8\u5206"]}),"\n",(0,a.jsx)(n.h4,{id:"at_least_once--none",children:"AT_LEAST_ONCE && NONE"}),"\n",(0,a.jsxs)(n.p,{children:["\u9ed8\u8ba4\u4e0d\u6307\u5b9a\u4f1a\u91c7\u7528",(0,a.jsx)(n.code,{children:"NONE"}),"\u8bed\u4e49,\u8fd9\u4e24\u79cd\u914d\u7f6e\u6548\u679c\u4e00\u6837,\u90fd\u662f\u4fdd\u8bc1 ",(0,a.jsx)(n.strong,{children:"\u81f3\u5c11\u4e00\u6b21"})," \u8bed\u4e49"]}),"\n",(0,a.jsx)(n.admonition,{title:"\u63d0\u793a",type:"tip",children:(0,a.jsxs)(n.p,{children:["\u5f00\u542f",(0,a.jsx)(n.code,{children:"EXACTLY_ONCE"}),"\u7cbe\u786e\u4e00\u6b21\u7684\u597d\u5904\u662f\u663e\u800c\u6613\u89c1\u7684,\u4fdd\u8bc1\u4e86\u6570\u636e\u7684\u51c6\u786e\u6027,\u4f46\u6210\u672c\u4e5f\u662f\u9ad8\u6602\u7684,\u9700\u8981",(0,a.jsx)(n.code,{children:"checkpoint"}),"\u7684\u652f\u6301,\u5e95\u5c42\u6a21\u62df\u4e86\u4e8b\u52a1\u7684\u63d0\u4ea4\u8bfb,\u5bf9\u5b9e\u65f6\u6027\u6709\u4e00\u5b9a\u7684\u635f\u8017,\u5982\u679c\u4f60\u7684\u4e1a\u52a1\u5bf9\u6570\u636e\u7684\u51c6\u786e\u6027\u8981\u6c42\u4e0d\u662f\u90a3\u4e48\u9ad8,\u5219\u5efa\u8bae\u91c7\u7528",(0,a.jsx)(n.code,{children:"AT_LEAST_ONCE"}),"\u8bed\u4e49"]})}),"\n",(0,a.jsx)(n.h3,{id:"\u5176\u4ed6\u914d\u7f6e",children:"\u5176\u4ed6\u914d\u7f6e"}),"\n",(0,a.jsxs)(n.p,{children:["\u9664\u4e86\u7279\u6b8a\u7684",(0,a.jsx)(n.code,{children:"semantic"})," \u914d\u7f6e\u9879\u4e4b\u5916,\u5176\u4ed6\u7684\u6240\u6709\u7684\u914d\u7f6e\u90fd\u5fc5\u987b\u9075\u5b88 ** HikariCP** \u8fde\u63a5\u6c60\u7684\u914d\u7f6e,\u5177\u4f53\u53ef\u914d\u7f6e\u9879\u548c\u5404\u4e2a\u53c2\u6570\u7684\u4f5c\u7528\u8bf7\u53c2\u8003",(0,a.jsx)(n.code,{children:"\u5149 HikariCP"}),(0,a.jsx)(n.a,{href:"https://github.com/brettwooldridge/HikariCP#gear-configuration-knobs-baby",children:"\u5b98\u7f51\u6587\u6863"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"jdbc-\u8bfb\u53d6\u6570\u636e",children:"JDBC \u8bfb\u53d6\u6570\u636e"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728",(0,a.jsx)(n.code,{children:"StreamPark"}),"\u4e2d",(0,a.jsx)(n.code,{children:"JdbcSource"}),"\u7528\u6765\u8bfb\u53d6\u6570\u636e,\u5e76\u4e14\u6839\u636e\u6570\u636e\u7684",(0,a.jsx)(n.code,{children:"offset"}),"\u505a\u5230\u6570\u636e\u8bfb\u65f6\u53ef\u56de\u653e,\u6211\u4eec\u770b\u770b\u5177\u4f53\u5982\u4f55\u7528",(0,a.jsx)(n.code,{children:"JdbcSource"}),"\u8bfb\u53d6\u6570\u636e,\u5047\u5982\u9700\u6c42\u5982\u4e0b"]}),"\n",(0,a.jsx)("div",{class:"counter",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u4ece",(0,a.jsx)(n.code,{children:"t_order"}),"\u8868\u4e2d\u8bfb\u53d6\u6570\u636e,\u4ee5",(0,a.jsx)(n.code,{children:"timestamp"}),"\u5b57\u6bb5\u4e3a\u53c2\u7167,\u8d77\u59cb\u503c\u4e3a",(0,a.jsx)(n.code,{children:"2020-12-16 12:00:00"}),"\u5f80\u540e\u62bd\u53d6\u6570\u636e"]}),"\n",(0,a.jsxs)(n.li,{children:["\u5c06\u8bfb\u53d6\u5230\u7684\u6570\u636e\u6784\u9020\u6210",(0,a.jsx)(n.code,{children:"Order"}),"\u5bf9\u8c61\u8fd4\u56de"]}),"\n"]})}),"\n",(0,a.jsx)(n.p,{children:"jdbc\u914d\u7f6e\u548c\u8bfb\u53d6\u4ee3\u7801\u5982\u4e0b"}),"\n",(0,a.jsxs)(t.A,{children:[(0,a.jsx)(i.A,{value:"\u914d\u7f6e",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"jdbc:\n  driverClassName: com.mysql.jdbc.Driver\n  jdbcUrl: jdbc:mysql://localhost:3306/test?useSSL=false&allowPublicKeyRetrieval=true\n  username: root\n  password: 123456\n"})})}),(0,a.jsx)(i.A,{value:"Scala",label:"Scala",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:'import org.apache.streampark.flink.core.scala.FlinkStreaming\nimport org.apache.streampark.flink.core.scala.source.JdbcSource\nimport org.apache.flink.api.scala._\n\nobject MySQLSourceApp extends FlinkStreaming {\n\n  override def handle(): Unit = {\n\n    JdbcSource().getDataStream[Order](lastOne => {\n      //\u9632\u6b62\u62bd\u53d6\u8fc7\u4e8e\u5bc6\u96c6,\u95f4\u96945\u79d2\u62bd\u53d6\u4e00\u6b21\u6570\u636e\n      Thread.sleep(5000);\n      val laseOffset = if (lastOne == null) "2020-12-16 12:00:00" else lastOne.timestamp\n      s"select * from t_order where timestamp > \'$laseOffset\' order by timestamp asc "\n    },\n      _.map(x => new Order(x("market_id").toString, x("timestamp").toString))\n    ).print()\n\n  }\n\n}\n\nclass Order(val marketId: String, val timestamp: String) extends Serializable\n'})})}),(0,a.jsx)(i.A,{value:"Java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'import org.apache.streampark.flink.core.java.function.SQLQueryFunction;\nimport org.apache.streampark.flink.core.java.function.SQLResultFunction;\nimport org.apache.streampark.flink.core.java.function.StreamEnvConfigFunction;\nimport org.apache.streampark.flink.core.java.source.JdbcSource;\nimport org.apache.streampark.flink.core.scala.StreamingContext;\nimport org.apache.streampark.flink.core.scala.util.StreamEnvConfig;\nimport org.apache.flink.api.common.typeinfo.TypeInformation;\n\nimport java.io.Serializable;\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class MySQLJavaApp {\n\n    public static void main(String[] args) {\n        StreamEnvConfig envConfig = new StreamEnvConfig(args, null);\n        StreamingContext context = new StreamingContext(envConfig);\n        new JdbcSource<Order>(context)\n                .getDataStream(\n                        (SQLQueryFunction<Order>) lastOne -> {\n                            //\u9632\u6b62\u62bd\u53d6\u8fc7\u4e8e\u5bc6\u96c6,\u95f4\u96945\u79d2\u62bd\u53d6\u4e00\u6b21\u6570\u636e\n                            Thread.sleep(5000);\n\n                            Serializable lastOffset = lastOne == null\n                            ? "2020-12-16 12:00:00"\n                            : lastOne.timestamp;\n\n                            return String.format(\n                                "select * from t_order " +\n                                "where timestamp > \'%s\' " +\n                                "order by timestamp asc ",\n                                lastOffset\n                            );\n                        },\n                        (SQLResultFunction<Order>) iterable -> {\n                            List<Order> result = new ArrayList<>();\n                            iterable.forEach(item -> {\n                                Order Order = new Order();\n                                Order.marketId = item.get("market_id").toString();\n                                Order.timestamp = Long.parseLong(item.get("timestamp").toString());\n                                result.add(Order);\n                            });\n                            return result;\n                        })\n                .returns(TypeInformation.of(Order.class))\n                .print();\n\n        context.start();\n    }\n}\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["\u4ee5",(0,a.jsx)(n.code,{children:"java"})," api\u4e3a\u4f8b,\u8fd9\u91cc\u8981\u4f20\u5165\u4e24\u4e2a\u53c2\u6570"]}),"\n",(0,a.jsx)("div",{class:"counter",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"SQLQueryFunction<T> queryFunc"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"SQLResultFunction<T> resultFunc"})}),"\n"]})}),"\n",(0,a.jsx)(n.h3,{id:"queryfunc\u83b7\u53d6\u4e00\u6761sql",children:"queryFunc\u83b7\u53d6\u4e00\u6761sql"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"queryFunc"}),"\u662f\u8981\u4f20\u5165\u4e00\u4e2a",(0,a.jsx)(n.code,{children:"SQLQueryFunction"}),"\u7c7b\u578b\u7684",(0,a.jsx)(n.code,{children:"function"}),",\u8be5",(0,a.jsx)(n.code,{children:"function"}),"\u7528\u4e8e\u83b7\u53d6\u67e5\u8be2sql\u7684,\u4f1a\u5c06\u6700\u540e\u4e00\u6761\u8bb0\u5f55\u8fd4\u56de\u7ed9\u5f00\u53d1\u8005,\u7136\u540e\u9700\u8981\u5f00\u53d1\u8005\u6839\u636e\u6700\u540e\u4e00\u6761\u8bb0\u5f55\u8fd4\u56de\u4e00\u6761\u65b0\u7684\u67e5\u8be2",(0,a.jsx)(n.code,{children:"sql"}),",",(0,a.jsx)(n.code,{children:"queryFunc"}),"\u5b9a\u4e49\u5982\u4e0b:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"/**\n * @author benjobs\n */\n@FunctionalInterface\npublic interface SQLQueryFunction<T> extends Serializable {\n    /**\n     * \u83b7\u53d6\u8981\u67e5\u8be2\u7684SQL\n     *\n     * @return\n     * @throws Exception\n     */\n    String query(T last) throws Exception;\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u6240\u4ee5\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d,\u7b2c\u4e00\u6b21\u4e0a\u6765",(0,a.jsx)(n.code,{children:"lastOne"}),"(\u6700\u540e\u4e00\u6761\u8bb0\u5f55)\u4e3anull,\u4f1a\u5224\u65ad\u4e00\u4e0b,\u4e3anull\u5219\u53d6\u9700\u6c42\u91cc\u9ed8\u8ba4\u7684",(0,a.jsx)(n.code,{children:"offset"}),",\u67e5\u8be2\u7684sql\u91cc\u6839\u636e",(0,a.jsx)(n.code,{children:"timestamp"}),"\u5b57\u6bb5\u6b63\u5e8f\u6392,\u8fd9\u6837\u5728\u7b2c\u4e00\u6b21\u67e5\u8be2\u4e4b\u540e,\u4f1a\u8fd4\u56de\u6700\u540e\u7684\u90a3\u6761\u8bb0\u5f55,\u4e0b\u6b21\u76f4\u63a5\u53ef\u4ee5\u4f7f\u7528\u8fd9\u6761\u8bb0\u5f55\u4f5c\u4e3a\u4e0b\u4e00\u6b21\u67e5\u8be2\u7684\u6839\u636e"]}),"\n",(0,a.jsx)(n.admonition,{title:"\u6ce8\u610f\u4e8b\u9879",type:"info",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"JdbcSource"}),"\u5b9e\u73b0\u4e86",(0,a.jsx)(n.code,{children:"CheckpointedFunction"}),",\u5373\u5f53\u7a0b\u5e8f\u5f00\u542f ",(0,a.jsx)(n.strong,{children:"checkpoint"})," \u540e,\u4f1a\u5c06\u8fd9\u4e9b\u8bf8\u5982",(0,a.jsx)(n.code,{children:"laseOffset"}),"\u7684\u72b6\u6001\u6570\u636e\u4fdd\u5b58\u5230",(0,a.jsx)(n.code,{children:"state backend"}),",\u8fd9\u6837\u7a0b\u5e8f\u6302\u4e86,\u518d\u6b21\u542f\u52a8\u4f1a\u81ea\u52a8\u4ece",(0,a.jsx)(n.code,{children:"checkpoint"}),"\u4e2d\u6062\u590d",(0,a.jsx)(n.code,{children:"offset"}),",\u4f1a\u63a5\u7740\u4e0a\u6b21\u7684\u4f4d\u7f6e\u7ee7\u7eed\u8bfb\u53d6\u6570\u636e,\n\u4e00\u822c\u5728\u751f\u4ea7\u73af\u5883,\u66f4\u7075\u6d3b\u7684\u65b9\u5f0f\u662f\u5c06",(0,a.jsx)(n.code,{children:"lastOffset"}),"\u5199\u5165\u5982",(0,a.jsx)(n.code,{children:"redis"}),"\u7b49\u5b58\u50a8\u4e2d,\u6bcf\u6b21\u67e5\u8be2\u5b8c\u4e4b\u540e\u518d\u5c06\u6700\u540e\u7684\u8bb0\u5f55\u66f4\u65b0\u5230",(0,a.jsx)(n.code,{children:"redis"}),",\u8fd9\u6837\u5373\u4fbf\u7a0b\u5e8f\u610f\u5916\u6302\u4e86,\u518d\u6b21\u542f\u52a8,\u4e5f\u53ef\u4ee5\u4ece",(0,a.jsx)(n.code,{children:"redis"}),"\u4e2d\u83b7\u53d6\u5230\u6700\u540e\u7684",(0,a.jsx)(n.code,{children:"offset"}),"\u8fdb\u884c\u6570\u636e\u7684\u62bd\u53d6,\u4e5f\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u4eba\u4e3a\u7684\u4efb\u610f\u8c03\u6574\u8fd9\u4e2a",(0,a.jsx)(n.code,{children:"offset"}),"\u8fdb\u884c\u6570\u636e\u7684\u56de\u653e"]})}),"\n",(0,a.jsx)(n.h3,{id:"resultfunc-\u5904\u7406\u67e5\u8be2\u5230\u7684\u6570\u636e",children:"resultFunc \u5904\u7406\u67e5\u8be2\u5230\u7684\u6570\u636e"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"resultFunc"}),"\u7684\u53c2\u6570\u7c7b\u578b\u662f",(0,a.jsx)(n.code,{children:"SQLResultFunction<T>"}),",\u662f\u5c06\u4e00\u4e2a\u67e5\u8be2\u5230\u7684\u7ed3\u679c\u96c6\u653e\u5230",(0,a.jsx)(n.code,{children:"Iterable<Map<String, ?>>"}),"\u4e2d\u8fd4\u56de\u7ed9\u5f00\u53d1\u8005,\u53ef\u4ee5\u770b\u5230\u8fd4\u56de\u4e86\u4e00\u4e2a\u8fed\u4ee3\u5668",(0,a.jsx)(n.code,{children:"Iterable"}),",\u8fed\u4ee3\u5668\u6bcf\u6b21\u8fed\u4ee3\u8fd4\u56de\u4e00\u4e2a",(0,a.jsx)(n.code,{children:"Map"}),",\u8be5",(0,a.jsx)(n.code,{children:"Map"}),"\u91cc\u8bb0\u5f55\u4e86\u4e00\u884c\u5b8c\u6574\u7684\u8bb0\u5f55,",(0,a.jsx)(n.code,{children:"Map"}),"\u7684",(0,a.jsx)(n.code,{children:"key"}),"\u4e3a\u67e5\u8be2\u5b57\u6bb5,",(0,a.jsx)(n.code,{children:"value"}),"\u4e3a\u503c,",(0,a.jsx)(n.code,{children:"SQLResultFunction<T>"}),"\u5b9a\u4e49\u5982\u4e0b"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"/**\n * @author benjobs\n */\n@FunctionalInterface\npublic interface SQLResultFunction<T> extends Serializable {\n    /**\n     * \u5c06\u67e5\u4e0b\u7ed3\u679c\u4ee5Iterable<Map>\u7684\u65b9\u5f0f\u8fd4\u56de,\u5f00\u53d1\u8005\u53bb\u5b9e\u73b0\u8f6c\u6210\u5bf9\u8c61.\n     *\n     * @param map\n     * @return\n     */\n    Iterable<T> result(Iterable<Map<String, ?>> iterable);\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"jdbc-\u8bfb\u53d6\u5199\u5165",children:"JDBC \u8bfb\u53d6\u5199\u5165"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"StreamPark"}),"\u4e2d",(0,a.jsx)(n.code,{children:"JdbcSink"}),"\u662f\u7528\u6765\u5199\u5165\u6570\u636e,\u6211\u4eec\u770b\u770b\u5177\u4f53\u5982\u4f55\u7528",(0,a.jsx)(n.code,{children:"JdbcSink"}),"\u5199\u5165\u6570\u636e,\u5047\u5982\u9700\u6c42\u662f\u9700\u8981\u4ece",(0,a.jsx)(n.code,{children:"kakfa"}),"\u4e2d\u8bfb\u53d6\u6570\u636e,\u5199\u5165\u5230",(0,a.jsx)(n.code,{children:"mysql"})]}),"\n",(0,a.jsxs)(t.A,{children:[(0,a.jsxs)(i.A,{value:"\u914d\u7f6e",default:!0,children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"kafka.source:\n  bootstrap.servers: kfk1:9092,kfk2:9092,kfk3:9092\n  pattern: user\n  group.id: user_02\n  auto.offset.reset: earliest # (earliest | latest)\n  ...\n\njdbc:\n  semantic: EXACTLY_ONCE # EXACTLY_ONCE|AT_LEAST_ONCE|NONE\n  driverClassName: com.mysql.jdbc.Driver\n  jdbcUrl: jdbc:mysql://localhost:3306/test?useSSL=false&allowPublicKeyRetrieval=true\n  username: root\n  password: 123456\n"})}),(0,a.jsx)(n.admonition,{title:"\u6ce8\u610f\u4e8b\u9879",type:"danger",children:(0,a.jsxs)(n.p,{children:["\u914d\u7f6e\u91cc",(0,a.jsx)(n.code,{children:"jdbc"}),"\u4e0b\u7684 ",(0,a.jsx)(n.strong,{children:"semantic"})," \u662f\u5199\u5165\u7684\u8bed\u4e49,\u5728\u4e0a\u9762",(0,a.jsx)(n.a,{href:"#jdbc-%E4%BF%A1%E6%81%AF%E9%85%8D%E7%BD%AE",children:"Jdbc\u4fe1\u606f\u914d\u7f6e"}),"\u6709\u4ecb\u7ecd,\u8be5\u914d\u7f6e\u53ea\u4f1a\u5728",(0,a.jsx)(n.code,{children:"JdbcSink"}),"\u4e0b\u751f\u6548,",(0,a.jsx)(n.code,{children:"StreamPark"}),"\u4e2d\u57fa\u4e8e\u4e24\u9636\u6bb5\u63d0\u4ea4\u5b9e\u73b0\u4e86 ",(0,a.jsx)(n.strong,{children:"EXACTLY_ONCE"})," \u8bed\u4e49,\n\u8fd9\u672c\u8eab\u9700\u8981\u88ab\u64cd\u4f5c\u7684\u6570\u636e\u5e93(",(0,a.jsx)(n.code,{children:"mysql"}),",",(0,a.jsx)(n.code,{children:"oracle"}),",",(0,a.jsx)(n.code,{children:"MariaDB"}),",",(0,a.jsx)(n.code,{children:"MS SQL Server"}),")\u7b49\u652f\u6301\u4e8b\u52a1,\u7406\u8bba\u4e0a\u6240\u6709\u652f\u6301\u6807\u51c6Jdbc\u4e8b\u52a1\u7684\u6570\u636e\u5e93\u90fd\u53ef\u4ee5\u505a\u5230EXACTLY_ONCE(\u7cbe\u786e\u4e00\u6b21)\u7684\u5199\u5165"]})})]}),(0,a.jsx)(i.A,{value:"Scala",label:"Scala",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:'import org.apache.streampark.common.util.JsonUtils\nimport org.apache.streampark.flink.core.scala.FlinkStreaming\nimport org.apache.streampark.flink.core.scala.sink.JdbcSink\nimport org.apache.streampark.flink.core.scala.source.KafkaSource\nimport org.apache.flink.api.common.typeinfo.TypeInformation\nimport org.apache.flink.api.java.typeutils.TypeExtractor.getForClass\nimport org.apache.flink.api.scala._\nimport org.apache.flink.streaming.connectors.kafka.KafkaDeserializationSchema\n\nobject JdbcSinkApp extends FlinkStreaming {\n\n  override def handle(): Unit = {\n        val source = KafkaSource()\n          .getDataStream[String]()\n          .map(x => JsonUtils.read[User](x.value))\n\n        JdbcSink().sink[User](source)(user =>\n          s"""\n          |insert into t_user(`name`,`age`,`gender`,`address`)\n          |value(\'${user.name}\',${user.age},${user.gender},\'${user.address}\')\n          |""".stripMargin\n        )\n  }\n\n}\n\ncase class User(name:String,age:Int,gender:Int,address:String)\n\n'})})}),(0,a.jsx)(i.A,{value:"Java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"import com.fasterxml.jackson.databind.ObjectMapper;\nimport org.apache.streampark.flink.core.java.function.StreamEnvConfigFunction;\nimport org.apache.streampark.flink.core.java.source.KafkaSource;\nimport org.apache.streampark.flink.core.scala.StreamingContext;\nimport org.apache.streampark.flink.core.scala.source.KafkaRecord;\nimport org.apache.streampark.flink.core.scala.util.StreamEnvConfig;\nimport org.apache.flink.api.common.functions.MapFunction;\nimport org.apache.flink.api.common.typeinfo.TypeInformation;\nimport org.apache.flink.streaming.connectors.kafka.KafkaDeserializationSchema;\nimport org.apache.kafka.clients.consumer.ConsumerRecord;\n\nimport java.io.Serializable;\n\nimport static org.apache.flink.api.java.typeutils.TypeExtractor.getForClass;\n\npublic class JdbcSinkJavaApp {\n\n    public static void main(String[] args) {\n        StreamEnvConfig envConfig = new StreamEnvConfig(args, null);\n        StreamingContext context = new StreamingContext(envConfig);\n        ObjectMapper mapper = new ObjectMapper();\n\n        DataStream<JavaUser> source = new KafkaSource<String>(context)\n                .getDataStream()\n                .map((MapFunction<KafkaRecord<String>, JavaUser>) value ->\n                    mapper.readValue(value.value(), JavaUser.class));\n\n        new JdbcSink<JavaUser>(context)\n                .sql((SQLFromFunction<JavaUser>) JavaUser::toSql)\n                .sink(source);\n\n        context.start();\n    }\n\n}\n\nclass JavaUser implements Serializable {\n    String name;\n    Integer age;\n    Integer gender;\n    String address;\n    public String toSql() {\n        return String.format(\n                \"insert into t_user(`name`,`age`,`gender`,`address`) value('%s',%d,%d,'%s')\",\n                name,\n                age,\n                gender,\n                address);\n    }\n}\n\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u6839\u636e\u6570\u636e\u6d41\u751f\u6210\u76ee\u6807sql",children:"\u6839\u636e\u6570\u636e\u6d41\u751f\u6210\u76ee\u6807SQL"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u5199\u5165\u7684\u65f6\u5019,\u9700\u8981\u77e5\u9053\u5177\u4f53\u5199\u5165\u7684",(0,a.jsx)(n.code,{children:"sql"}),"\u8bed\u53e5,\u8be5",(0,a.jsx)(n.code,{children:"sql"}),"\u8bed\u53e5\u9700\u8981\u5f00\u53d1\u8005\u901a\u8fc7",(0,a.jsx)(n.code,{children:"function"}),"\u7684\u65b9\u5f0f\u63d0\u4f9b,\u5728",(0,a.jsx)(n.code,{children:"scala"})," api\u4e2d,\u76f4\u63a5\u5728",(0,a.jsx)(n.code,{children:"sink"}),"\u65b9\u6cd5\u540e\u8ddf\u4e0a",(0,a.jsx)(n.code,{children:"function"}),"\u5373\u53ef,",(0,a.jsx)(n.code,{children:"java"})," api \u5219\u662f\u901a\u8fc7",(0,a.jsx)(n.code,{children:"sql()"}),"\u65b9\u6cd5\u4f20\u5165\u4e00\u4e2a",(0,a.jsx)(n.code,{children:"SQLFromFunction"}),"\u7c7b\u578b\u7684",(0,a.jsx)(n.code,{children:"function"})]}),"\n",(0,a.jsxs)(n.p,{children:["\u4e0b\u9762\u4ee5",(0,a.jsx)(n.code,{children:"java"})," api\u4e3a\u4f8b\u8bf4\u660e,\u6211\u4eec\u6765\u770b\u770b",(0,a.jsx)(n.code,{children:"java"}),"api \u4e2d\u63d0\u4f9bsql\u7684",(0,a.jsx)(n.code,{children:"function"}),"\u65b9\u6cd5\u7684\u5b9a\u4e49"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"/**\n * @author benjobs\n */\n@FunctionalInterface\npublic interface SQLFromFunction<T> extends Serializable {\n    /**\n     * @param bean\n     * @return\n     */\n    String from(T bean);\n}\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"SQLFromFunction"}),"\u4e0a\u7684\u6cdb\u578b",(0,a.jsx)(n.code,{children:"<T>"}),"\u5373\u4e3a",(0,a.jsx)(n.code,{children:"DataStream"}),"\u91cc\u5b9e\u9645\u7684\u6570\u636e\u7c7b\u578b,\u8be5",(0,a.jsx)(n.code,{children:"function"}),"\u91cc\u6709\u4e00\u4e2a\u65b9\u6cd5",(0,a.jsx)(n.code,{children:"form(T bean)"}),",\u8fd9\u4e2a",(0,a.jsx)(n.code,{children:"bean"}),"\u5373\u4e3a\u5f53\u524d",(0,a.jsx)(n.code,{children:"DataStream"}),"\u4e2d\u7684\u4e00\u6761\u5177\u4f53\u6570\u636e,\u4f1a\u5c06\u8be5\u6570\u636e\u8fd4\u7ed9\u5f00\u53d1\u8005,\u5f00\u53d1\u8005\u6765\u51b3\u5b9a\u57fa\u4e8e\u8fd9\u6761\u6570\u636e,\u751f\u6210\u4e00\u6761\u5177\u4f53\u53ef\u4ee5\u5f80\u6570\u636e\u5e93\u4e2d\u63d2\u5165\u7684",(0,a.jsx)(n.code,{children:"sql"})]}),"\n",(0,a.jsx)(n.h3,{id:"\u8bbe\u7f6e\u5199\u5165\u6279\u6b21\u5927\u5c0f",children:"\u8bbe\u7f6e\u5199\u5165\u6279\u6b21\u5927\u5c0f"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728 \u975e ",(0,a.jsx)(n.code,{children:"EXACTLY_ONCE"}),"(\u7cbe\u786e\u4e00\u6b21\u7684\u8bed\u4e49\u4e0b)\u53ef\u4ee5\u9002\u5f53\u7684\u8bbe\u7f6e",(0,a.jsx)(n.code,{children:"batch.size"}),"\u6765\u63d0\u9ad8Jdbc\u5199\u5165\u7684\u6027\u80fd(\u524d\u63d0\u662f\u4e1a\u52a1\u5141\u8bb8\u7684\u60c5\u51b5\u4e0b),\u5177\u4f53\u914d\u7f6e\u5982\u4e0b"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"jdbc:\n  semantic: EXACTLY_ONCE # EXACTLY_ONCE|AT_LEAST_ONCE|NONE\n  driverClassName: com.mysql.jdbc.Driver\n  jdbcUrl: jdbc:mysql://localhost:3306/test?useSSL=false&allowPublicKeyRetrieval=true\n  username: root\n  password: 123456\n  batch.size: 1000\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u8fd9\u6837\u4e00\u6765\u5c31\u4e0d\u662f\u6765\u4e00\u6761\u6570\u636e\u5c31\u7acb\u5373\u5199\u5165,\u800c\u662f\u79ef\u6512\u4e00\u4e2a\u5339\u914d\u7136\u540e\u6267\u884c\u6279\u91cf\u63d2\u5165"}),"\n",(0,a.jsx)(n.admonition,{title:"\u6ce8\u610f\u4e8b\u9879",type:"danger",children:(0,a.jsxs)(n.p,{children:["\u8fd9\u4e2a\u8bbe\u7f6e\u4ec5\u5728\u975e",(0,a.jsx)(n.code,{children:"EXACTLY_ONCE"}),"\u8bed\u4e49\u4e0b\u751f\u6548,\u5e26\u6765\u7684\u597d\u5904\u662f\u53ef\u4ee5\u63d0\u9ad8Jdbc\u5199\u5165\u7684\u6027\u80fd,\u4e00\u6b21\u5927\u6279\u91cf\u7684\u63d2\u5165\u6570\u636e,\u7f3a\u70b9\u662f\u6570\u636e\u5199\u5165\u52bf\u5fc5\u4f1a\u6709\u5ef6\u8fdf,\u8bf7\u6839\u636e\u5b9e\u9645\u4f7f\u7528\u60c5\u51b5\u8c28\u614e\u4f7f\u7528"]})}),"\n",(0,a.jsx)(n.h2,{id:"\u591a\u5b9e\u4f8b-jdbc-\u652f\u6301",children:"\u591a\u5b9e\u4f8b JDBC \u652f\u6301"}),"\n",(0,a.jsx)(n.h2,{id:"\u624b\u52a8\u6307\u5b9a-jdbc-\u8fde\u63a5\u4fe1\u606f",children:"\u624b\u52a8\u6307\u5b9a JDBC \u8fde\u63a5\u4fe1\u606f"})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},65173:(e,n,r)=>{r.d(n,{A:()=>i});r(30758);var a=r(13526);const c={tabItem:"tabItem_t88E"};var t=r(86070);function i(e){let{children:n,hidden:r,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.A)(c.tabItem,i),hidden:r,children:n})}},33764:(e,n,r)=>{r.d(n,{A:()=>S});var a=r(30758),c=r(13526),t=r(21176),i=r(25557),s=r(3195),l=r(62757),o=r(64474),d=r(37976);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:c}}=e;return{value:n,label:r,attributes:a,default:c}}))}(r);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const c=(0,i.W6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(t),(0,a.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(c.location.search);n.set(t,e),c.replace({...c.location,search:n.toString()})}),[t,c])]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:c}=e,t=h(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:t}))),[o,u]=m({queryString:r,groupId:c}),[j,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[c,t]=(0,d.Dv)(r);return[c,(0,a.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:c}),f=(()=>{const e=o??j;return p({value:e,tabValues:t})?e:null})();(0,s.A)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,t]),tabValues:t}}var x=r(33689);const f={tabList:"tabList_rr1b",tabItem:"tabItem_bI3v"};var b=r(86070);function g(e){let{className:n,block:r,selectedValue:a,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.a_)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),c=s[r].value;c!==a&&(o(n),i(c))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.A)("tabs",{"tabs--block":r},n),children:s.map((e=>{let{value:n,label:r,attributes:t}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...t,className:(0,c.A)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:c}=e;const t=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===c));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==c})))})}function k(e){const n=j(e);return(0,b.jsxs)("div",{className:(0,c.A)("tabs-container",f.tabList),children:[(0,b.jsx)(g,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function S(e){const n=(0,x.A)();return(0,b.jsx)(k,{...e,children:u(e.children)},String(n))}},76113:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var a=r(30758);const c={},t=a.createContext(c);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);