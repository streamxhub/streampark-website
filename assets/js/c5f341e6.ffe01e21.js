"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[1278],{16263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var i=n(86070),r=n(76113),a=n(33764),s=n(65173);const o={id:"alert",title:"Alert Configuration",sidebar_position:1},l=void 0,c={id:"platform/alert",title:"Alert Configuration",description:"StreamPark supports a variety of alerts, mainly as follows\uff1a",source:"@site/docs/platform/1.alert.md",sourceDirName:"platform",slug:"/platform/alert",permalink:"/docs/platform/alert",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/streampark-website/edit/dev/docs/platform/1.alert.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"alert",title:"Alert Configuration",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"How to Use Platform",permalink:"/docs/get-started/how-to-use"},next:{title:"LDAP Integration",permalink:"/docs/platform/ldap"}},d={},h=[{value:"Added alert configuration",id:"added-alert-configuration",level:2},{value:"E-mail",id:"e-mail",level:3},{value:"DingTalk",id:"dingtalk",level:3},{value:"Wechat",id:"wechat",level:3},{value:"Lark",id:"lark",level:3},{value:"Alert Test",id:"alert-test",level:2},{value:"Modify alert configuration:",id:"modify-alert-configuration",level:2},{value:"Use alert configuration",id:"use-alert-configuration",level:2},{value:"Delete alert configuration:",id:"delete-alert-configuration",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"StreamPark"})," supports a variety of alerts, mainly as follows\uff1a"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"E-mail"}),": Mail notification"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"DingTalk"}),": DingTalk Custom Group Robot"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"WeChat"}),": Enterprise WeChat Custom Group Robot"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Lark"}),": Feishu Custom Group Robot"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"StreamPark support any combination of alerts"}),"\n",(0,i.jsx)(t.admonition,{title:"Future plan",type:"info",children:(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"SMS notification"})," and ",(0,i.jsx)(t.code,{children:"webhook callback"})," notification will be supported in the future\n1Test exception will be fed back to the front-end page"]}),"\n"]})}),"\n",(0,i.jsx)(t.h2,{id:"added-alert-configuration",children:"Added alert configuration"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Click StreamPark"})," -> Setting on the left, then click ",(0,i.jsx)(t.code,{children:"Alert Setting"})," to enter the alert configuration.\n",(0,i.jsx)(t.img,{alt:"alert_add_setting.png",src:n(337).A+"",width:"1529",height:"556"})]}),"\n",(0,i.jsxs)(t.p,{children:["Click ",(0,i.jsx)(t.code,{children:"Add New"})," to add alert configuration:"]}),"\n",(0,i.jsxs)(t.p,{children:["1.Name alert will be added\n2.Choose ",(0,i.jsx)(t.code,{children:"AlertType"}),", then configure the corresponding configuration item."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alert_add_example.png",src:n(94908).A+"",width:"1529",height:"1256"})}),"\n",(0,i.jsx)(t.p,{children:"The configuration content of different alert types is as follows:"}),"\n",(0,i.jsx)(t.h3,{id:"e-mail",children:"E-mail"}),"\n",(0,i.jsxs)(t.p,{children:["Firstly, choose ",(0,i.jsx)(t.code,{children:"E-mail"})," as the alert type.\nThen, enter ",(0,i.jsx)(t.code,{children:"Alert Email"})," and click ",(0,i.jsx)(t.code,{children:"Submit"}),".\n",(0,i.jsx)(t.img,{alt:"alert_add_dingtalk.png",src:n(97066).A+"",width:"1528",height:"619"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Configuration instructions\uff1a"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Alert Email"}),"\uff1a",(0,i.jsx)("font",{color:"red",children:(0,i.jsx)(t.code,{children:"Required"})}),", The email address of the email notification. Multiple email\naddresses need to separate by commas \u2019 ,\u2019."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["To use the email alarm notification method,please configure system mail sending\ninformation: ",(0,i.jsx)(t.code,{children:"Setting -> System Setting -> Sender Email Setting"}),"\n",(0,i.jsx)(t.img,{alt:"alert_conf_mail_sender.png",src:n(55256).A+"",width:"1514",height:"1076"}),"\nAbove is configured using 163 mailboxes.Please fill in the specific email address according to your actual situation."]})}),"\n",(0,i.jsx)(t.h3,{id:"dingtalk",children:"DingTalk"}),"\n",(0,i.jsxs)(t.p,{children:["Firstly, choose ",(0,i.jsx)(t.code,{children:"DingTalk"})," as the alert type."]}),"\n",(0,i.jsxs)(t.p,{children:["Then, Enter robot ",(0,i.jsx)(t.code,{children:"DingTalk Tokens"})," and other configurations, click ",(0,i.jsx)(t.code,{children:"Submit"}),".\n",(0,i.jsx)(t.img,{alt:"alert_add_ding_talk.png",src:n(6087).A+"",width:"1512",height:"908"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Configuration description\uff1a"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"DingTalk Url"}),"\uff1a",(0,i.jsx)(t.code,{children:"optional"})," .It is used to expose to a unified forwarding address within the company. By\ndefault, ",(0,i.jsx)(t.code,{children:"https://oapi.dingtalk.com/robot/send?access_token="})," is used, and then the ",(0,i.jsx)(t.code,{children:"Token"})," and the\ncorresponding ",(0,i.jsx)(t.code,{children:"Secret"})," are assembled for verification and sent."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"DingTalk Token"}),"\uff1a",(0,i.jsx)("font",{color:"red",children:(0,i.jsx)(t.code,{children:"Required"})}),".It is the default address of the group robot, and intercepts the\ncontent after ",(0,i.jsx)(t.code,{children:"access_token=."})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"DingTalk User"}),"\uff1a",(0,i.jsx)(t.code,{children:"optional"})," .Use the ",(0,i.jsx)(t.code,{children:"mobile phone number"})," to remind the corresponding users in the group. Multiple\nmobile phone numbers should be separated by commas \u2019 ,\u2019 ."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"At All User"}),"\uff1a",(0,i.jsx)(t.code,{children:"optional"})," .After it is turned on, the alarm message will be @ everyone in the group."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Secret Enable"}),"\uff1a",(0,i.jsx)(t.code,{children:"optional"})," .If ",(0,i.jsx)(t.code,{children:"encryption signature verification"})," is enabled, the ",(0,i.jsx)(t.code,{children:"Secret Token"})," signature\nverification key information needs to be configured."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{title:"DingTalk robot application",type:"info",children:(0,i.jsxs)(t.p,{children:["Please refer to ",(0,i.jsx)(t.a,{href:"https://open.dingtalk.com/document/group/custom-robot-access",children:"DingTalk official documentation"})," for robot application and configuration"]})}),"\n",(0,i.jsx)(t.h3,{id:"wechat",children:"Wechat"}),"\n",(0,i.jsxs)(t.p,{children:["Firstly, choose ",(0,i.jsx)(t.code,{children:"Wechat"})," as the alert type."]}),"\n",(0,i.jsxs)(t.p,{children:["Then, Enter robot ",(0,i.jsx)(t.code,{children:"WeChat token"}),", click ",(0,i.jsx)(t.code,{children:"Submit"}),".\n",(0,i.jsx)(t.img,{alt:"alert_add_wecom.png",src:n(48241).A+"",width:"1506",height:"660"}),"\n",(0,i.jsx)(t.strong,{children:"Configuration description\uff1a"})]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"WeChat token"}),"\uff1a",(0,i.jsx)("font",{color:"red",children:(0,i.jsx)(t.code,{children:"required"})}),".It is the default address of the group robot, and intercepts the content after ",(0,i.jsx)(t.code,{children:"key="})]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{title:"Wechat robot application",type:"info",children:(0,i.jsxs)(t.p,{children:["Please refer to the [WeChat official] (",(0,i.jsx)(t.a,{href:"https://developer.work.weixin.qq.com/document/path/91770",children:"https://developer.work.weixin.qq.com/document/path/91770"}),") for robot application and configuration"]})}),"\n",(0,i.jsx)(t.h3,{id:"lark",children:"Lark"}),"\n",(0,i.jsxs)(t.p,{children:["Firstly, choose ",(0,i.jsx)(t.code,{children:"Lark"})," as the alert type."]}),"\n",(0,i.jsxs)(t.p,{children:["Then, Enter robot ",(0,i.jsx)(t.code,{children:"Lark Tokens"})," and other configurations, click ",(0,i.jsx)(t.code,{children:"Submit"}),".\n",(0,i.jsx)(t.img,{alt:"alert_add_lark.png",src:n(41224).A+"",width:"1511",height:"781"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Configuration description\uff1a"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"streampark.proxy.lark-url"}),"\uff1aWe need to add the ",(0,i.jsx)(t.code,{children:"streampark.proxy.lark-url"})," property to the configuration file. Example: yaml file adds streampark.proxy.lark-url: ",(0,i.jsx)(t.a,{href:"https://open.feishu.cn",children:"https://open.feishu.cn"})," ."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Lark Token"}),"\uff1a",(0,i.jsx)("font",{color:"red",children:(0,i.jsx)(t.code,{children:"Required"})}),".1. It is the default address of the group robot, intercept the content behind ",(0,i.jsx)(t.code,{children:"/hook/"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"At All User"}),"\uff1a",(0,i.jsx)(t.code,{children:"optional"})," .2.After it is turned on, the alarm message will be @ everyone in the group."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Secret Enable"}),"\uff1a",(0,i.jsx)(t.code,{children:"optional"})," .3.If ",(0,i.jsx)(t.code,{children:"encryption signature verification"})," is enabled, the ",(0,i.jsx)(t.code,{children:"Secret Token"})," signature verification key information needs to be configured."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{title:"Lark robot application",type:"info",children:(0,i.jsxs)(t.p,{children:["Please refer to the ",(0,i.jsx)(t.a,{href:"https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/bot-v3/bot-overview",children:"official Lark official"})," for robot application and configuration"]})}),"\n",(0,i.jsx)(t.h2,{id:"alert-test",children:"Alert Test"}),"\n",(0,i.jsxs)(t.p,{children:["To ensure that the alert configuration information takes effect, we encourage to perform a message notification test\u2014\u2014click the ",(0,i.jsx)(t.code,{children:"Lightning button"})," below the corresponding configuration information\n",(0,i.jsx)(t.img,{alt:"alert_send_test.png",src:n(97151).A+"",width:"1515",height:"640"})]}),"\n",(0,i.jsxs)(t.p,{children:["If the test is sent successfully, the return is as follows:\n",(0,i.jsx)(t.img,{alt:"alert_send_test_success.png",src:n(2103).A+"",width:"765",height:"386"})]}),"\n",(0,i.jsxs)(a.A,{children:[(0,i.jsx)(s.A,{value:"E-mail",label:"E-mail",default:!0,children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alert_test_email.png",src:n(26869).A+"",width:"630",height:"922"})})}),(0,i.jsx)(s.A,{value:"Ding Talk",label:"Ding Talk",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alert_test_ding_talk.png",src:n(17932).A+"",width:"430",height:"383"})})}),(0,i.jsx)(s.A,{value:"Wechat",label:"Wechat",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alert_test_wechat.png",src:n(70063).A+"",width:"411",height:"366"})})}),(0,i.jsx)(s.A,{value:"Lark",label:"Lark",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alert_test_lark.png",src:n(90477).A+"",width:"515",height:"405"})})})]}),"\n",(0,i.jsx)(t.h2,{id:"modify-alert-configuration",children:"Modify alert configuration:"}),"\n",(0,i.jsxs)(t.p,{children:["Click the ",(0,i.jsx)(t.code,{children:"edit button"})," below the corresponding alarm configuration information to modify the corresponding configuration information. click ",(0,i.jsx)(t.code,{children:"Submit"})," to save.\n",(0,i.jsx)(t.img,{alt:"alert_edit.png",src:n(28016).A+"",width:"1514",height:"616"})]}),"\n",(0,i.jsx)(t.h2,{id:"use-alert-configuration",children:"Use alert configuration"}),"\n",(0,i.jsxs)(t.p,{children:["When the ",(0,i.jsx)(t.code,{children:"application"})," task is created and modified, configured alert could be selected in the ",(0,i.jsx)(t.code,{children:"Fault Alert Template"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alert_application_example.png",src:n(2027).A+"",width:"918",height:"263"})}),"\n",(0,i.jsx)(t.h2,{id:"delete-alert-configuration",children:"Delete alert configuration:"}),"\n",(0,i.jsxs)(t.p,{children:["Click the ",(0,i.jsx)(t.code,{children:"trash can button"})," below the corresponding alarm configuration information to delete the corresponding configuration information\u3002\n",(0,i.jsx)(t.img,{alt:"alert_conf_delete.png",src:n(53386).A+"",width:"1515",height:"622"})]}),"\n",(0,i.jsxs)(t.p,{children:["This information will be shown after the deletion is successful:\n",(0,i.jsx)(t.img,{alt:"alert_delete_success.png",src:n(15677).A+"",width:"720",height:"395"})]}),"\n",(0,i.jsx)(t.admonition,{title:"warn",type:"danger",children:(0,i.jsx)(t.p,{children:"The alert configuration plans to delete  should be ensured that not used in any application configuration"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},65173:(e,t,n)=>{n.d(t,{A:()=>s});n(30758);var i=n(13526);const r={tabItem:"tabItem_t88E"};var a=n(86070);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,s),hidden:n,children:t})}},33764:(e,t,n)=>{n.d(t,{A:()=>v});var i=n(30758),r=n(13526),a=n(21176),s=n(25557),o=n(3195),l=n(62757),c=n(64474),d=n(37976);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:r}}=e;return{value:t,label:n,attributes:i,default:r}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=u(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:a}))),[c,h]=f({queryString:n,groupId:r}),[g,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,d.Dv)(n);return[r,(0,i.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),x=(()=>{const e=c??g;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,a]),tabValues:a}}var m=n(33689);const x={tabList:"tabList_rr1b",tabItem:"tabItem_bI3v"};var b=n(86070);function j(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==i&&(c(t),s(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...a,className:(0,r.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function _(e){const t=g(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...t,...e}),(0,b.jsx)(k,{...t,...e})]})}function v(e){const t=(0,m.A)();return(0,b.jsx)(_,{...e,children:h(e.children)},String(t))}},6087:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/alert_add_ding_talk-b3caec1ffb7d3d854b81ae1cb2b03240.png"},97066:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/alert_add_email-ce05ec3b962e3da8715421bd4ba067b6.png"},94908:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/alert_add_example-cff0970a99cd0619307c145f53b97489.png"},41224:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/alert_add_lark-d2ab4845e83ef632194e1f742891f5e9.png"},337:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/alert_add_setting-cf588ab5ece868ab22b6e1e6e4ba261f.png"},48241:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/alert_add_wecom-63b035f6ca0c4399c8e3546b8d87834d.png"},2027:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/alert_application_example-c31cb94e6de97e1a980100e28ef1dfb4.png"},53386:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/alert_conf_delete-4de431dcb0c2771fa0f982f9f5400303.png"},55256:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/alert_conf_mail_sender-817f2078cfe746f369903506b4e21c67.png"},15677:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/alert_delete_success-2bbd348dbe458d95b505211eedb1ef2e.png"},28016:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/alert_edit-9362d5ea6791b866c0fcdb106b04fda5.png"},97151:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/alert_send_test-7cd2e3cce6cfc5a7949bc382c82bddde.png"},2103:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/alert_send_test_success-3394a1b85454dd88f5504e2cb2e7772b.png"},17932:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/alert_test_ding_talk-00a51843a9faf5a5dc793a12580db8af.png"},26869:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/alert_test_email-2c342e2867b99c5bb4b60796aab9a203.png"},90477:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/alert_test_lark-8786b1c7559ecd42b93f95a74662b9af.png"},70063:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/alert_test_wechat-2cc8875b55d42a6ad43b5094c38394ac.png"},76113:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(30758);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);