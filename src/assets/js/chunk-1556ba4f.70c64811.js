(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1556ba4f"],{"0d30":function(e,t,n){"use strict";var r=n("30d3"),a=n.n(r);t["default"]=a.a},"26f7":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"container-complex-table main-wrapper"},[n("x-search"),n("x-table"),n("x-pagination"),n("x-preview"),n("x-edit")],1)},a=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),o=n("2f62"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search"},[n("el-form",{ref:"form",attrs:{inline:!0,model:e.form.fields,rules:e.form.rules},nativeOn:{submit:function(e){e.preventDefault()}}},[n("el-form-item",[n("el-input",{attrs:{placeholder:"请输入查询内容","prefix-icon":"el-icon-search",autocomplete:"on",maxlength:"20",clearable:""},on:{clear:e.handleSearch},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSearch(t)}},model:{value:e.form.fields.q,callback:function(t){e.$set(e.form.fields,"q",t)},expression:"form.fields.q"}})],1),n("el-form-item",[n("el-select",{staticStyle:{width:"120px"},attrs:{clearable:"",placeholder:"所有学历"},on:{clear:e.handleSearch},model:{value:e.form.fields.education,callback:function(t){e.$set(e.form.fields,"education",t)},expression:"form.fields.education"}},e._l(e.edus,function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})}),1)],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleSearch}},[e._v("查询")])],1),n("el-form-item",[n("el-checkbox-group",{class:e.$style.checkbox,model:{value:e.colums,callback:function(t){e.colums=t},expression:"colums"}},[n("el-checkbox",{attrs:{label:"income"}},[e._v("收入")]),n("el-checkbox",{attrs:{label:"id"}},[e._v("身份证")])],1)],1)],1),n("div",[n("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.handleCreate}},[e._v("新增")]),n("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:e.handleRefresh}},[e._v("刷新")]),n("el-button",{attrs:{type:"primary",icon:"button-fix-icon fas fa-file-export fa-sm"},on:{click:e.handleDownload}},[e._v("导出")])],1)],1)},l=[],s=(n("96cf"),n("3b8d")),u=n("62de"),f=n("0e9a"),p=n("2c38"),d=n("a97b");function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach(function(t){Object(i["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var b=Object(o["a"])("complexTable"),v=b.mapState,y=b.mapMutations,w=b.mapGetters,g={data:function(){return{edus:["专科","本科","硕士研究生","博士研究生","其他"],colums:["income","id"],form:{fields:{q:"",education:""},rules:{}}}},computed:m({},v(["list","filters"]),{},w(["queryPath"]),{query:function(e){return e.$route.query}}),watch:{query:{handler:function(e){this.saveQuery(e),this.loadList()},deep:!0},colums:function(e){this.setState({colums:e})}},mounted:function(){this.init()},methods:m({},y(["setState","fixPage","reset"]),{init:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$route.query,p["j"].isEmpty(t)?this.reset():this.saveQuery(t),e.next=4,this.loadList();case 4:this.fixPage();case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),saveQuery:function(e){var t=m({},e);this.setState({filters:t}),delete t[d["a"]],delete t[d["b"]],p["j"].merge(this.form.fields,t)},handleSearch:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.checkParams();case 2:if(!e.sent){e.next=4;break}this.$router.push(this.queryPath);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleRefresh:function(){this.loadList()},checkParams:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.form.validate();case 2:return t=e.sent,t&&this.setState({filters:m({},this.form.fields,Object(i["a"])({},d["a"],1))}),e.abrupt("return",t);case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loadList:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,u["a"].list(this.filters);case 3:t=e.sent,t&&this.setState({list:t.list,total:t.total}),this.$nextTick(function(){return n.setState({loading:!1})});case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleCreate:function(){this.setState({activeUid:0,editVisible:!0})},handleDownload:function(){f["a"].export2excel({data:this.list,headerProp:["id","name","gender","birthday","county","education","status","email","zip","income","remark"],headerName:["身份证","姓名","性别","出生年月","城市","学历","状态","电子邮件","邮编","收入","备注"],name:"导出.xlsx"})}})},O=g,x=n("0d30"),S=n("2877");function k(e){this["$style"]=x["default"].locals||x["default"]}var j=Object(S["a"])(O,c,l,!1,k,null,null),P=j.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",{ref:"table",staticClass:"table",attrs:{height:"500",border:"",stripe:"",data:e.list},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"60",align:"center"}}),n("el-table-column",{attrs:{fixed:"",prop:"name",label:"姓名",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.name))]),n("i",{staticClass:"fas fa-lg fa-fw",class:e._f("genderFilter")(t.row.gender)})]}}])}),n("el-table-column",{attrs:{prop:"birthday",label:"出生日期",width:"140",align:"center",sortable:""}}),e.colums.includes("income")?n("el-table-column",{attrs:{prop:"income",label:"收入",width:"150",align:"right",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(e._f("currency")(t.row.income,"￥",2))+"\n        ")]}}],null,!1,1631522679)}):e._e(),n("el-table-column",{attrs:{prop:"education",label:"学历",width:"150",align:"center"}}),n("el-table-column",{attrs:{prop:"status",label:"状态",width:"80",align:"center","filter-placement":"bottom-end",filters:e.statusData,"filter-method":e.filterStatus},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",{attrs:{type:e._f("statusFilter")(t.row.status)}},[e._v(e._s(t.row.status))])]}}])}),e.colums.includes("id")?n("el-table-column",{attrs:{prop:"id",label:"身份证",width:"200",align:"center"}}):e._e(),n("el-table-column",{attrs:{prop:"county",label:"区域","show-overflow-tooltip":"",width:"200"}}),n("el-table-column",{attrs:{prop:"email",label:"邮箱","show-overflow-tooltip":"",width:"250"}}),n("el-table-column",{attrs:{prop:"zip",label:"邮编",width:"100",align:"center"}}),n("el-table-column",{attrs:{prop:"remark",label:"备注","show-overflow-tooltip":"",width:"500"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"175"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-view"},on:{click:function(n){return e.handlePreview(t.row)}}}),n("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(n){return e.handleEdit(t.row)}}}),n("el-button",{attrs:{type:"warning",size:"mini",icon:"el-icon-delete"},on:{click:function(n){return e.handleDelete(t.row)}}})]}}])})],1)},D=[],R=(n("7514"),n("dbcd")),$=n.n(R);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach(function(t){Object(i["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var T=Object(o["a"])("complexTable"),q=T.mapState,U=T.mapMutations,B={filters:{statusFilter:function(e){var t=[{key:"在职",value:"info"},{key:"待业",value:"danger"},{key:"退休",value:""},{key:"创业",value:"success"},{key:"游学",value:"warning"}],n=t.find(function(t){return t.key===e});return n?n.value:""},genderFilter:function(e){return"男"===e?["fa-male",$.a["c-male"]]:["fa-female",$.a["c-female"]]}},data:function(){return{style:$.a,statusData:[{text:"在职",value:"在职"},{text:"待业",value:"待业"},{text:"退休",value:"退休"},{text:"创业",value:"创业"},{text:"游学",value:"游学"}]}},computed:E({},q(["list","colums"])),mounted:function(){this.setState({components:{table:this.$refs.table}})},methods:E({},U(["setState","listRemove"]),{handlePreview:function(e){this.setState({activeUid:e.id,previewVisible:!0})},handleEdit:function(e){this.setState({activeUid:e.id,editVisible:!0})},handleDelete:function(e){var t=this;this.$confirm("确认要删除这条数据吗","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.remove(e)}).catch(function(){})},remove:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.setState({id:t.id,loading:!0}),e.next=3,u["a"].remove({id:t.id});case 3:n=e.sent,n&&this.listRemove({multipleSelection:[t]}),this.$nextTick(function(){return r.setState({loading:!1})});case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),handleSelectionChange:function(e){this.setState({multipleSelection:e})},filterStatus:function(e,t){return t.status===e}})},X=B,z=Object(S["a"])(X,_,D,!1,null,null,null),F=z.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination flex-row-center"},[n("el-dropdown",{attrs:{"split-button":"",type:"primary",icon:"el-icon-delete"},on:{click:e.handleClick,command:e.handleCommand}},[n("i",{staticClass:"el-icon-delete"}),e._v(" 删除选中\n        "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"a"}},[e._v("转为退休")]),n("el-dropdown-item",{attrs:{command:"b"}},[e._v("转为创业")])],1)],1),n("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next",total:e.total,"current-page":e.p},on:{"update:currentPage":function(t){e.p=t},"update:current-page":function(t){e.p=t},"current-change":e.handleCurrentChange}})],1)},M=[];function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach(function(t){Object(i["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var V=Object(o["a"])("complexTable"),J=V.mapState,N=V.mapMutations,A=V.mapGetters,H={computed:Q({},J(["total","components","multipleSelection","filters"]),{},A(["queryPath","multipleSelectionUid"]),{p:{get:function(){return+this.filters[d["a"]]},set:function(e){this.setState({filters:Object(i["a"])({},d["a"],e)})}}}),methods:Q({},N(["setState","listRemove","listUpdateStatus"]),{handleCurrentChange:function(){this.$router.push(this.queryPath)},handleClick:function(){var e=this;this.multipleSelectionUid&&this.$confirm("确认要删除这些数据吗","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.batchRemove()}).catch(function(){})},batchRemove:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,u["a"].remove({id:this.multipleSelectionUid});case 3:t=e.sent,t&&this.listRemove({multipleSelection:this.multipleSelection}),this.$nextTick(function(){return n.setState({loading:!1})});case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleCommand:function(e){var t=this,n={a:function(){t.changeStatus("退休")},b:function(){t.changeStatus("创业")}};this.multipleSelectionUid&&this.$confirm("确认要批量修改这些数据吗","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n[e]()}).catch(function(){})},changeStatus:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,u["a"].updateStatus({status:t});case 3:n=e.sent,n&&this.listUpdateStatus({status:t}),this.components.table.clearSelection(),this.$nextTick(function(){return r.setState({loading:!1})});case 7:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()})},I=H,K=Object(S["a"])(I,L,M,!1,null,null,null),W=K.exports;function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(n,!0).forEach(function(t){Object(i["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ee=Object(o["a"])("complexTable"),te=ee.mapState,ne=ee.mapMutations,re={components:{XSearch:P,XTable:F,XPagination:W,XPreview:function(){return n.e("chunk-2a20456d").then(n.bind(null,"bdaa"))},XEdit:function(){return n.e("chunk-2d0c1b87").then(n.bind(null,"46f5"))}},computed:Z({},te(["loading"])),mounted:function(){},beforeRouteUpdate:function(e,t,n){this.setState({filters:e.query}),n()},methods:Z({},ne(["setState","test"]))},ae=re,ie=Object(S["a"])(ae,r,a,!1,null,null,null);t["default"]=ie.exports},"30d3":function(e,t,n){e.exports={checkbox:"search_checkbox_XB2G0"}}}]);