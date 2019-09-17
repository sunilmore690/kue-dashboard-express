webpackJsonp([1],{"/0qp":function(t,e){},"50P6":function(t,e){},"7vES":function(t,e){},E6qI:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("Xxa5"),o=a.n(s),r=a("exGp"),i=a.n(r),l=a("//Fk"),c=a.n(l),u=a("Dd8w"),d=a.n(u),p=a("mtWM"),v=a.n(p),f=window.env?window.env.apiUrl:"http://localhost:3000",b=function(t,e,a){var n={method:t,url:e,data:a};return"get"===t&&a&&(n=d()({},n,{params:a})),v()(n).then(function(t){return t.data}).catch(function(t){return c.a.reject(t)})},h={get:function(t,e){return b("get",f+t,e)},post:function(t,e){return b("post",f+t,e)},delete:function(t,e){return b("delete",f+t+"/"+e)},put:function(t,e,a){var n=f+t;return e&&(n+="/"+e),b("put",n,a)}},m=a("Gu7T"),g=a.n(m),_={props:["job","logsync","showstate","showtype","activeName"],data:function(){return{visible:!1,logs:[],delayedtime:"",loading:!1,states:[{name:"Queued",value:"inactive"},{name:"Active",value:"active"},{name:"Failed",value:"failed"},{name:"Delayed",value:"delayed"},{name:"Complete",value:"complete"}]}},watch:{activeName:function(t,e){}},beforeDestroy:function(){this.interval&&window.clearInterval(this.interval)},methods:{deleteJob:function(){var t=this;return i()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.delete("/job",t.job.id);case 2:t.$emit("destroyjob",t.job.id);case 3:case"end":return e.stop()}},e,t)}))()},changeState:function(t){},updateState:function(t){var e=this;return i()(o.a.mark(function a(){var n;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.job.id,a.next=3,h.put("/job/"+n+"/state/"+t);case 3:e.$emit("destroyjob",e.job.id);case 4:case"end":return a.stop()}},a,e)}))()},getTagType:function(t){return"complete"==t?"success":"failed"==t?"danger":"active"==t?"":"delayed"==t?"warning":"inactive"==t?"info":void 0},scrollToEnd:function(t){var e=this.$el.querySelector(t);e.scrollTop=e.scrollHeight},getLog:function(){var t=this;return i()(o.a.mark(function e(){var a,n,s,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.job.id,e.next=3,h.get("/job/"+n+"/log");case 3:s=e.sent,r=s.slice(t.logs.length),(a=t.logs).push.apply(a,g()(r)),t.scrollToEnd("#log"+n),t.logsync&&!t.interval&&(t.interval=setInterval(function(){t.getLog()},5e3));case 9:case"end":return e.stop()}},e,t)}))()}},created:function(){var t=this,e=this.job,a=e.delay,n=e.created_at;if("delayed"==e.state&&a){var s=new Date(parseInt(n));if(s.setMilliseconds(s.getMilliseconds()+parseInt(a)),s<new Date);else setInterval(function(){var e=new Date;if(s<e)return 0;var a=s-e;t.delayedtime=a},1e3)}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-collapse-item",{key:t.job.id,attrs:{name:t.job.id}},[a("template",{slot:"title"},[a("div",[a("el-tag",{attrs:{type:"info"}},[t._v(t._s(t.job.id))]),t._v(" \n      "),t.showtype?a("el-tag",[t._v(t._s(t.job.type))]):t._e(),t._v("  \n      "),a("span",{staticStyle:{"font-weight":"800","font-style":"initial","font-size":"medium"}},[t._v(t._s(t._f("trim")(t.job.data.title,70)))]),t._v(" "),a("span",{staticStyle:{position:"absolute",right:"5%",top:"6px",display:"flex"}},["active"==t.job.state?a("el-progress",{attrs:{width:40,"stroke-width":3,type:"circle",percentage:parseInt(t.job.progress+"")}}):t._e(),t._v(" "),"delayed"==t.job.state?a("span",[t._v(t._s(t._f("readableDuration")(t.delayedtime)))]):t._e(),t._v(" "),t.showstate?a("el-tag",{attrs:{type:t.getTagType(t.job.state)}},[t._v(t._s(t.job.state))]):t._e()],1)],1)]),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24,xs:24}},[a("b",[t._v("State:")]),t._v(" "),a("el-select",{attrs:{size:"mini",placeholder:"Select"},on:{change:t.updateState},model:{value:t.job.state,callback:function(e){t.$set(t.job,"state",e)},expression:"job.state"}},t._l(t.states,function(t){return a("el-option",{key:t.value,attrs:{label:t.name,value:t.value}})}),1),t._v(" "),a("div",[a("br"),t._v(" "),a("el-popover",{attrs:{placement:"top",width:"160"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[a("p",[t._v("Are you sure to delete this?")]),t._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"0"}},[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){t.visible=!1}}},[t._v("cancel")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){t.deleteJob(),t.visible=!1}}},[t._v("confirm")])],1),t._v(" "),a("el-button",{attrs:{slot:"reference",type:"danger",size:"mini"},slot:"reference"},[t._v("Delete")])],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:24,xs:24}},[a("div",{staticStyle:{"text-align":"left","font-size":"medium"}},["complete"==t.job.state?a("div",[a("span",[a("b",[t._v("Duration")])]),t._v("\n          : "+t._s(t._f("readableDuration")(t.job.duration))+"\n        ")]):t._e(),t._v(" "),a("div",[a("span",[a("b",[t._v("Created")])]),t._v("\n          : "+t._s(t._f("humenDate")(t.job.created_at))+"\n        ")]),t._v(" "),"complete"==t.job.state?a("div",[a("span",[a("b",[t._v("Completed")])]),t._v("\n          : "+t._s(t._f("humenDate")(t.job.updated_at))+"\n        ")]):t._e(),t._v(" "),a("div",{staticClass:"info"},t._l(t.job.data,function(e,n){return a("div",{key:n},[a("b",[t._v(t._s(n))]),t._v("\n            : "+t._s(e)+"\n          ")])}),0)])])],1),t._v(" "),"failed"==t.job.state&&t.job.error?a("div",[a("el-divider"),t._v(" "),a("h3",[t._v("Error")]),t._v(" "),a("span",{domProps:{innerHTML:t._s(t.job.error.split("\n").join("<br>")+"")}})],1):t._e(),t._v(" "),a("el-divider"),t._v(" "),a("el-button",{attrs:{type:"warning",size:"mini"},on:{click:t.getLog}},[t._v("See Log")]),t._v(" "),a("div",{staticStyle:{"overflow-y":"auto"},attrs:{id:"log"+t.job.id}},[a("div",{staticStyle:{"min-height":"50px","max-height":"500px","text-align":"left","font-size":"medium"}},[t.logs.length?t._l(t.logs,function(e,n){return a("div",{key:"log"+n},[t._v(t._s(e))])}):a("div",[t._v("Loading logs ...")])],2)])],2)},staticRenderFns:[]};var j={props:["jobs","status","jobtype"],data:function(){return{logs:[],loading:!1,activeName:"",showByIndex:null}},computed:{log:function(){return this.logs.join("/n")}},methods:{updateState:function(t,e){var a=this;return i()(o.a.mark(function n(){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.put("/job/"+t+"/state/"+e);case 2:a.jobs=a.jobs.fiter(function(e){return e.id!=t});case 3:case"end":return n.stop()}},n,a)}))()},loadLog:function(t){}},components:{Job:a("VU/8")(_,y,!1,function(t){a("Zqq1")},null,null).exports}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.jobs&&t.jobs.length?a("div",[a("el-collapse",{attrs:{accordion:""},on:{change:t.loadLog},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.jobs,function(e){return a("job",t._g({key:e.id,attrs:{job:e,logsync:"active"==t.status,showstate:"searchresults"==t.status,showtype:"all"==t.jobtype}},t.$listeners))}),1)],1):a("div",[t._v("No Jobs")])},staticRenderFns:[]};var x=a("VU/8")(j,w,!1,function(t){a("V92L")},null,null).exports,k={props:["status","count","jobtype"],data:function(){return{loading:!1,jobs:[],activeName:"",page:1,limit:10,sort:"desc"}},methods:{deleteJob:function(t){this.jobs=this.jobs.filter(function(e){return e.id!=t})},handlePageChange:function(t){this.page=t,this.fetchData()},fetchData:function(){var t=this;return i()(o.a.mark(function e(){var a,n,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return["active","inactive"].includes(t.status)||(t.loading=!0),a=t.page*t.limit-t.limit,n=t.page*t.limit,s="/jobs/"+t.status+"/"+a+".."+n+"/"+t.sort,"all"!==t.jobtype&&(s="/jobs/"+t.jobtype+"/"+t.status+"/"+a+".."+n+"/"+t.sort),e.prev=6,e.next=9,h.get(s);case 9:t.jobs=e.sent,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6);case 16:return e.prev=16,t.loading=!1,e.finish(16);case 19:case"end":return e.stop()}},e,t,[[6,13,16,19]])}))()}},watch:{jobtype:function(t,e){this.fetchData()}},created:function(){var t=this;"active"!=this.status&&"inactive"!=this.status||setInterval(function(){t.fetchData()},6e3),this.fetchData()},components:{List:x}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("el-radio",{attrs:{label:"desc"},on:{change:t.fetchData},model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}},[t._v("Sort By Latest Jobs")]),t._v(" "),a("el-radio",{attrs:{label:"asc"},on:{change:t.fetchData},model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}},[t._v("Sort by last Jobs")]),t._v(" "),a("el-button",{attrs:{type:"",circle:"",icon:"el-icon-refresh"},on:{click:t.fetchData}}),t._v(" "),a("el-col",{staticStyle:{"padding-top":"20px"},attrs:{sm:24}},[a("List",{attrs:{jobs:t.jobs,status:t.status,jobtype:t.jobtype},on:{destroyjob:t.deleteJob}}),t._v(" "),a("el-pagination",{attrs:{layout:"prev, pager, next",total:t.count,size:t.limit},on:{"current-change":t.handlePageChange}})],1)],1)},staticRenderFns:[]},D={data:function(){return{stats:{},search:"",results:[],activeTab:"active",loading:!1,jobtypes:[],jobtype:"all"}},components:{List:x,JobList:a("VU/8")(k,C,!1,null,null,null).exports},methods:{handleClick:function(t,e){this.jobtype=t.label,this.fetchData()},getTagType:function(t){return"complete"==t?"success":"failed"==t?"danger":"active"==t?"":"delayed"==t?"warning":"inactive"==t?"info":void 0},fetchData:function(){var t=this;return i()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("all"!=t.jobtype){e.next=7;break}return e.next=4,h.get("/stats");case 4:t.stats=e.sent,e.next=8;break;case 7:["inactive","active","failed","delayed","complete"].forEach(function(){var e=i()(o.a.mark(function e(a){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/jobs/"+t.jobtype+"/"+a+"/stats");case 2:n=e.sent,t.stats[a+"Count"]=n.count;case 4:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}());case 8:case"end":return e.stop()}},e,t)}))()},searchJob:function(){var t=this;return i()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.activeTab="searchresults",t.results=[],e.next=5,h.get("/job/search",{q:t.search});case 5:t.jobids=e.sent,t.results=[],t.jobids.forEach(function(){var e=i()(o.a.mark(function e(a){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.results,e.next=3,h.get("/job/"+a);case 3:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 5:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}()),t.loading=!1;case 9:case"end":return e.stop()}},e,t)}))()},deleteJob:function(t){this.results=this.results.filter(function(e){return e.id!=t})}},created:function(){var t=this;return i()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.fetchData(),setInterval(function(){t.fetchData()},3e3),e.next=4,h.get("/job/types/");case 4:t.jobtypes=e.sent;case 5:case"end":return e.stop()}},e,t)}))()}},S={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",[a("el-col",{attrs:{span:4,sm:4}},[a("el-tabs",{staticStyle:{height:"200px"},attrs:{"tab-position":"left",role:"tabs"},on:{"tab-click":t.handleClick}},[a("el-tab-pane",{attrs:{label:"all"}},[t._v("All")]),t._v(" "),t._l(t.jobtypes,function(t){return a("el-tab-pane",{key:t,attrs:{label:t}})})],2)],1),t._v(" "),a("el-col",{attrs:{span:19,sm:19}},[a("el-row",{staticStyle:{"padding-bottom":"10px"}},[a("el-col",{attrs:{offset:19,sm:5}},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"Please input"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchJob(e)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.searchJob},slot:"append"})],1)],1)],1),t._v(" "),a("el-tabs",{attrs:{type:"border-card"},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[a("el-tab-pane",{attrs:{name:"inactive"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("el-badge",{staticClass:"item",attrs:{value:t.stats.inactiveCount,type:"info"}},[t._v("Queued")])],1),t._v(" "),a("JobList",{attrs:{status:"inactive",count:t.stats.inactiveCount,jobtype:t.jobtype}})],1),t._v(" "),a("el-tab-pane",{attrs:{name:"active"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("el-badge",{staticClass:"item",attrs:{value:t.stats.activeCount,type:"primary"}},[t._v("Active")])],1),t._v(" "),a("JobList",{attrs:{status:"active",count:t.stats.activeCount,jobtype:t.jobtype}})],1),t._v(" "),a("el-tab-pane",{attrs:{name:"failed"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("el-badge",{staticClass:"item",attrs:{value:t.stats.failedCount,type:"danger"}},[t._v("Failed")])],1),t._v(" "),a("JobList",{attrs:{status:"failed",count:t.stats.failedCount,jobtype:t.jobtype}})],1),t._v(" "),a("el-tab-pane",{attrs:{name:"complete"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("el-badge",{staticClass:"item",attrs:{value:t.stats.completeCount,type:"success"}},[t._v("Complete")])],1),t._v(" "),a("JobList",{attrs:{status:"complete",count:t.stats.completeCount,jobtype:t.jobtype}})],1),t._v(" "),a("el-tab-pane",{attrs:{name:"delayed"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("el-badge",{staticClass:"item",attrs:{value:t.stats.delayedCount,type:"warning"}},[t._v("Delayed")])],1),t._v(" "),a("JobList",{attrs:{status:"delayed",count:t.stats.delayedCount,jobtype:t.jobtype}})],1),t._v(" "),a("el-tab-pane",{attrs:{name:"searchresults"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("el-badge",{staticClass:"item",attrs:{value:t.results.length,type:"primary"}},[t._v("Search Results")])],1),t._v(" "),a("List",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{jobs:t.results,status:"searchresults",jobtype:t.jobtype},on:{destroyjob:t.deleteJob}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:1,sm:1}})],1)],1)},staticRenderFns:[]};var L=a("VU/8")(D,S,!1,function(t){a("50P6")},null,null).exports,T={components:{Home:L}},J={render:function(){var t=this.$createElement;return(this._self._c||t)("Home")},staticRenderFns:[]};var E={components:{Home:L}},I={render:function(){var t=this.$createElement;return(this._self._c||t)("Home")},staticRenderFns:[]};var N={name:"App",props:["theme"],data:function(){return{mytheme:"light"}},watch:{theme:function(t,e){this.mythme=t}},methods:{handleChange:function(){window.sessionStorage.setItem("theme",this.mytheme),window.location.reload()}},components:{DarkTheme:a("VU/8")(T,J,!1,function(t){a("/0qp")},null,null).exports,LightTheme:a("VU/8")(E,I,!1,function(t){a("E6qI")},null,null).exports},created:function(){this.mytheme=this.theme}},$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("el-select",{on:{change:t.handleChange},model:{value:t.mytheme,callback:function(e){t.mytheme=e},expression:"mytheme"}},[a("el-option",{key:"light",attrs:{label:"Light Mode",value:"light"}}),t._v(" "),a("el-option",{key:"dark",attrs:{label:"Dark Mode",value:"dark"}})],1),t._v(" "),"dark"==t.theme?a("div",[a("DarkTheme",{attrs:{msg:"Hello Vue in CodeSandbox!"}})],1):a("div",[a("LightTheme",{attrs:{msg:"Hello Vue in CodeSandbox!"}})],1)],1)},staticRenderFns:[]};var q=a("VU/8")(N,$,!1,function(t){a("7vES")},null,null).exports,F=a("zL8q"),V=a.n(F);Array.prototype.diff=function(t){return this.filter(function(e){return t.indexOf(e)<0})},n.default.use(V.a),n.default.config.productionTip=!1,n.default.filter("trim",function(t,e){return t.length>e?t.substr(0,e)+"...":t}),n.default.filter("readableDuration",function(t){var e=(t/1e3).toFixed(0),a=Math.floor(e/60),n="";return a>59&&(a=(a-=60*(n=(n=Math.floor(a/60))>=10?n:"0"+n))>=10?a:"0"+a),e=(e=Math.floor(e%60))>=10?e:"0"+e,""!=n?n+" hours "+a+" minutes":0==a?e+" seconds":a+" minutes "+e+" seconds"}),n.default.filter("humenDate",function(t){return t?new Date(parseInt(t)).toUTCString():t}),new n.default({el:"#app",components:{App:q},data:{theme:window.sessionStorage.getItem("theme")||"light"},template:'<App :theme="theme"/>'})},V92L:function(t,e){},Zqq1:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2195335868d51f4f7fc5.js.map