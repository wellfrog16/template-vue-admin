(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c882322"],{"2b2b":function(e,a,l){"use strict";var t=l("4aea"),r=l.n(t);a["default"]=r.a},"3bfc":function(e,a,l){"use strict";var t=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("transition",{attrs:{name:"el-fade-in-linear"}},[l("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],class:[e.$style.main,"flex-center"],on:{click:e.backToTop}},[l("i",{staticClass:"el-icon-upload2"})])])},r=[],o=(l("c5f6"),l("2c38")),i={name:"BackToTop",props:{visibilityHeight:{type:Number,default:400},element:{type:String,default:"body"}},data:function(){return{visible:!1}},computed:{container:function(){return Object(o["a"])(this.element)}},mounted:function(){var e=this;this.container.on("scroll",function(){return e.handleScroll()})},beforeDestroy:function(){this.container.unbind()},methods:{handleScroll:function(){this.visible=this.container.scrollTop()>this.visibilityHeight},backToTop:function(){this.container.scrollTo(0,1e3)}}},n=i,s=l("dfaf"),c=l("2877");function u(e){this["$style"]=s["default"].locals||s["default"]}var d=Object(c["a"])(n,t,r,!1,u,null,null);a["a"]=d.exports},"4aea":function(e,a,l){e.exports={main:"button_main_1R1xM"}},"73a8":function(e,a,l){"use strict";var t=l("7eef"),r=l.n(t);a["default"]=r.a},"7eef":function(e,a,l){e.exports={"menu-card":"Package_menu-card_1d6r1",main:"Package_main_1z6zb",wrapper:"Package_wrapper_1J3Fn",nav:"Package_nav_2AjLi","sidebar-menu":"Package_sidebar-menu_1twcs"}},"8bff":function(e,a,l){e.exports={main:"index_main_1SxY1"}},d0f9:function(e,a,l){"use strict";l.r(a);var t=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{class:[e.$style.main,"main-wrapper"]},[l("div",{class:e.$style.wrapper},[l("el-alert",{staticStyle:{"margin-bottom":"8px"},attrs:{effect:"dark",title:"说明",type:"success"}},[e._v("\n            这里仅列出 Element-UI 的部分组件和功能以作右侧导航展示，更多组件及用法请参考"),l("a",{attrs:{href:"http://element.eleme.io",target:"_blank"}},[e._v("官网")])]),l("x-button",{attrs:{id:"pa-button"}}),l("x-radio",{attrs:{id:"pa-radio"}}),l("x-checkbox",{attrs:{id:"pa-checkbox"}}),l("x-input",{attrs:{id:"pa-input"}}),l("x-select",{attrs:{id:"pa-select"}}),l("x-cascader",{attrs:{id:"pa-cascader"}}),l("x-slider",{attrs:{id:"pa-slider"}}),l("x-transfer",{attrs:{id:"pa-transfer"}})],1),l("div",{class:e.$style.nav},[l("vue-scrollactive",{class:e.$style["sidebar-menu"],attrs:{"active-class":"active",offset:20,duration:800,"bezier-easing-value":".5,0,.35,1","scroll-container-selector":".el-main",modifyUrl:!1}},[l("el-card",{class:e.$style["menu-card"],attrs:{shadow:"never"}},[l("a",{staticClass:"scrollactive-item",attrs:{href:"#pa-button"}},[e._v("按钮")]),l("a",{staticClass:"scrollactive-item",attrs:{href:"#pa-radio"}},[e._v("单选框")]),l("a",{staticClass:"scrollactive-item",attrs:{href:"#pa-checkbox"}},[e._v("复选框")]),l("a",{staticClass:"scrollactive-item",attrs:{href:"#pa-input"}},[e._v("输入框")]),l("a",{staticClass:"scrollactive-item",attrs:{href:"#pa-select"}},[e._v("下拉框")]),l("a",{staticClass:"scrollactive-item",attrs:{href:"#pa-cascader"}},[e._v("级联选择器")]),l("a",{staticClass:"scrollactive-item",attrs:{href:"#pa-slider"}},[e._v("滑块")]),l("a",{staticClass:"scrollactive-item",attrs:{href:"#pa-transfer"}},[e._v("穿梭框")])])],1)],1),l("x-backtotop",{attrs:{element:"#elMain"}})],1)},r=[],o=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("el-card",{class:e.$style.main,attrs:{shadow:"never"}},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("i",{staticClass:"fab fa-hire-a-helper fa-lg"}),l("span",[e._v("按钮")])]),l("el-row",[l("el-button",[e._v("默认按钮")]),l("el-button",{attrs:{type:"primary"}},[e._v("主要按钮")]),l("el-button",{attrs:{type:"success"}},[e._v("成功按钮")]),l("el-button",{attrs:{type:"info"}},[e._v("信息按钮")]),l("el-button",{attrs:{type:"warning"}},[e._v("警告按钮")]),l("el-button",{attrs:{type:"danger"}},[e._v("危险按钮")])],1),l("el-row",[l("el-button",{attrs:{plain:""}},[e._v("朴素按钮")]),l("el-button",{attrs:{type:"primary",plain:""}},[e._v("主要按钮")]),l("el-button",{attrs:{type:"success",plain:""}},[e._v("成功按钮")]),l("el-button",{attrs:{type:"info",plain:""}},[e._v("信息按钮")]),l("el-button",{attrs:{type:"warning",plain:""}},[e._v("警告按钮")]),l("el-button",{attrs:{type:"danger",plain:""}},[e._v("危险按钮")])],1),l("el-row",[l("el-button",{attrs:{disabled:""}},[e._v("默认按钮")]),l("el-button",{attrs:{type:"primary",disabled:""}},[e._v("主要按钮")]),l("el-button",{attrs:{type:"success",disabled:""}},[e._v("成功按钮")]),l("el-button",{attrs:{type:"info",disabled:""}},[e._v("信息按钮")]),l("el-button",{attrs:{type:"warning",disabled:""}},[e._v("警告按钮")]),l("el-button",{attrs:{type:"danger",disabled:""}},[e._v("危险按钮")])],1),l("el-row",[l("el-button",{attrs:{plain:"",disabled:""}},[e._v("朴素按钮")]),l("el-button",{attrs:{type:"primary",plain:"",disabled:""}},[e._v("主要按钮")]),l("el-button",{attrs:{type:"success",plain:"",disabled:""}},[e._v("成功按钮")]),l("el-button",{attrs:{type:"info",plain:"",disabled:""}},[e._v("信息按钮")]),l("el-button",{attrs:{type:"warning",plain:"",disabled:""}},[e._v("警告按钮")]),l("el-button",{attrs:{type:"danger",plain:"",disabled:""}},[e._v("危险按钮")])],1),l("el-row",[l("el-button",{attrs:{round:""}},[e._v("圆角按钮")]),l("el-button",{attrs:{type:"primary",round:""}},[e._v("主要按钮")]),l("el-button",{attrs:{type:"success",round:""}},[e._v("成功按钮")]),l("el-button",{attrs:{type:"info",round:""}},[e._v("信息按钮")]),l("el-button",{attrs:{type:"warning",round:""}},[e._v("警告按钮")]),l("el-button",{attrs:{type:"danger",round:""}},[e._v("危险按钮")])],1),l("el-row",[l("el-button",{attrs:{icon:"el-icon-search",circle:""}}),l("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:""}}),l("el-button",{attrs:{type:"success",icon:"el-icon-check",circle:""}}),l("el-button",{attrs:{type:"info",icon:"el-icon-message",circle:""}}),l("el-button",{attrs:{type:"warning",icon:"el-icon-star-off",circle:""}}),l("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""}})],1),l("el-row",[l("el-button",{attrs:{type:"text"}},[e._v("文字按钮")]),l("el-button",{attrs:{type:"text",disabled:""}},[e._v("文字按钮")])],1),l("el-row",[l("el-button",{attrs:{type:"primary",icon:"el-icon-edit"}}),l("el-button",{attrs:{type:"primary",icon:"el-icon-share"}}),l("el-button",{attrs:{type:"primary",icon:"el-icon-delete"}}),l("el-button",{attrs:{type:"primary",icon:"el-icon-search"}},[e._v("搜索")]),l("el-button",{attrs:{type:"primary"}},[e._v("上传"),l("i",{staticClass:"el-icon-upload el-icon--right"})]),l("el-button",{attrs:{type:"primary",loading:!0}},[e._v("加载中")])],1),l("el-row",[l("el-button-group",[l("el-button",{attrs:{type:"primary",icon:"el-icon-arrow-left"}},[e._v("上一页")]),l("el-button",{attrs:{type:"primary"}},[e._v("下一页"),l("i",{staticClass:"el-icon-arrow-right el-icon--right"})])],1),l("el-button-group",[l("el-button",{attrs:{type:"primary",icon:"el-icon-edit"}}),l("el-button",{attrs:{type:"primary",icon:"el-icon-share"}}),l("el-button",{attrs:{type:"primary",icon:"el-icon-delete"}})],1)],1),l("el-row",[l("el-button",[e._v("默认按钮")]),l("el-button",{attrs:{size:"medium"}},[e._v("中等按钮")]),l("el-button",[e._v("小型按钮")]),l("el-button",{attrs:{size:"mini"}},[e._v("超小按钮")])],1),l("el-row",[l("el-button",{attrs:{round:""}},[e._v("默认按钮")]),l("el-button",{attrs:{size:"medium",round:""}},[e._v("中等按钮")]),l("el-button",{attrs:{round:""}},[e._v("小型按钮")]),l("el-button",{attrs:{size:"mini",round:""}},[e._v("超小按钮")])],1)],1)},i=[],n={},s=n,c=l("2b2b"),u=l("2877");function d(e){this["$style"]=c["default"].locals||c["default"]}var b=Object(u["a"])(s,o,i,!1,d,null,null),p=b.exports,v=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("el-card",{attrs:{shadow:"never"}},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("i",{staticClass:"fab fa-hire-a-helper fa-lg"}),e._v(" "),l("span",[e._v("单选框")])]),l("el-row",[l("el-radio",{attrs:{label:"1"},model:{value:e.radio1,callback:function(a){e.radio1=a},expression:"radio1"}},[e._v("备选项1")]),l("el-radio",{attrs:{label:"2"},model:{value:e.radio1,callback:function(a){e.radio1=a},expression:"radio1"}},[e._v("备选项2")]),l("el-radio",{attrs:{disabled:"",label:"3"},model:{value:e.radio1,callback:function(a){e.radio1=a},expression:"radio1"}},[e._v("禁用备选项3")]),l("el-radio",{attrs:{disabled:"",label:"4"},model:{value:e.radio1,callback:function(a){e.radio1=a},expression:"radio1"}},[e._v("禁用备选项4")])],1),l("el-row",[l("el-radio-group",{model:{value:e.radio2,callback:function(a){e.radio2=a},expression:"radio2"}},[l("el-radio",{attrs:{label:3}},[e._v("组选项3")]),l("el-radio",{attrs:{label:6}},[e._v("组选项6")]),l("el-radio",{attrs:{label:9}},[e._v("组选项9")])],1)],1),l("el-row",[l("el-radio-group",{model:{value:e.radio3,callback:function(a){e.radio3=a},expression:"radio3"}},[l("el-radio-button",{attrs:{label:"上海"}}),l("el-radio-button",{attrs:{label:"北京"}}),l("el-radio-button",{attrs:{label:"广州"}}),l("el-radio-button",{attrs:{label:"深圳"}})],1)],1),l("el-row",[l("el-radio-group",{attrs:{size:"medium"},model:{value:e.radio3,callback:function(a){e.radio3=a},expression:"radio3"}},[l("el-radio-button",{attrs:{label:"上海"}}),l("el-radio-button",{attrs:{label:"北京"}}),l("el-radio-button",{attrs:{label:"广州"}}),l("el-radio-button",{attrs:{label:"深圳"}})],1)],1),l("el-row",[l("el-radio-group",{model:{value:e.radio3,callback:function(a){e.radio3=a},expression:"radio3"}},[l("el-radio-button",{attrs:{label:"上海"}}),l("el-radio-button",{attrs:{label:"北京"}}),l("el-radio-button",{attrs:{label:"广州"}}),l("el-radio-button",{attrs:{label:"深圳"}})],1)],1),l("el-row",[l("el-radio-group",{attrs:{disabled:"",size:"mini"},model:{value:e.radio3,callback:function(a){e.radio3=a},expression:"radio3"}},[l("el-radio-button",{attrs:{label:"上海"}}),l("el-radio-button",{attrs:{label:"北京"}}),l("el-radio-button",{attrs:{label:"广州"}}),l("el-radio-button",{attrs:{label:"深圳"}})],1)],1),l("el-row",[l("el-radio",{attrs:{label:"1",border:""},model:{value:e.radio4,callback:function(a){e.radio4=a},expression:"radio4"}},[e._v("备选项1")]),l("el-radio",{attrs:{label:"2",border:""},model:{value:e.radio4,callback:function(a){e.radio4=a},expression:"radio4"}},[e._v("备选项2")])],1),l("el-row",[l("el-radio-group",{model:{value:e.radio4,callback:function(a){e.radio4=a},expression:"radio4"}},[l("el-radio",{attrs:{label:"1",border:""}},[e._v("备选项1")]),l("el-radio",{attrs:{label:"2",border:"",disabled:""}},[e._v("备选项2")])],1)],1)],1)},h=[],f={data:function(){return{radio1:"1",radio2:6,radio3:"上海",radio4:"1"}}},m=f,_=Object(u["a"])(m,v,h,!1,null,null,null),k=_.exports,x=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("el-card",{attrs:{shadow:"never"}},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("i",{staticClass:"fab fa-hire-a-helper fa-lg"}),e._v(" "),l("span",[e._v("复选框")])]),l("el-row",[l("el-checkbox",{model:{value:e.checked1,callback:function(a){e.checked1=a},expression:"checked1"}},[e._v("备选项")])],1),l("el-row",[l("el-checkbox",{attrs:{disabled:""},model:{value:e.checked2,callback:function(a){e.checked2=a},expression:"checked2"}},[e._v("备选项1")]),l("el-checkbox",{attrs:{disabled:""},model:{value:e.checked3,callback:function(a){e.checked3=a},expression:"checked3"}},[e._v("备选项")])],1),l("el-row",[l("el-checkbox-group",{model:{value:e.checkList,callback:function(a){e.checkList=a},expression:"checkList"}},[l("el-checkbox",{attrs:{label:"复选框 A"}}),l("el-checkbox",{attrs:{label:"复选框 B"}}),l("el-checkbox",{attrs:{label:"复选框 C"}}),l("el-checkbox",{attrs:{label:"禁用",disabled:""}}),l("el-checkbox",{attrs:{label:"选中且禁用",disabled:""}})],1)],1),l("el-row",{staticStyle:{"margin-top":"20px"}},[l("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(a){e.checkAll=a},expression:"checkAll"}},[e._v("全选")]),l("div",{staticStyle:{margin:"15px 0"}}),l("el-checkbox-group",{on:{change:e.handleCheckedCitiesChange},model:{value:e.checkedCities,callback:function(a){e.checkedCities=a},expression:"checkedCities"}},e._l(e.cities,function(a){return l("el-checkbox",{key:a,attrs:{label:a}},[e._v(e._s(a))])}),1)],1),l("el-row",[l("el-checkbox-group",{attrs:{size:"medium"},model:{value:e.checkboxGroup2,callback:function(a){e.checkboxGroup2=a},expression:"checkboxGroup2"}},e._l(e.cities,function(a){return l("el-checkbox-button",{key:a,attrs:{label:a}},[e._v(e._s(a))])}),1)],1),l("el-row",[l("el-checkbox-group",{model:{value:e.checkboxGroup3,callback:function(a){e.checkboxGroup3=a},expression:"checkboxGroup3"}},e._l(e.cities,function(a){return l("el-checkbox-button",{key:a,attrs:{label:a,disabled:"北京"===a}},[e._v(e._s(a))])}),1)],1)],1)},y=[],g=["上海","北京","广州","深圳"],w={data:function(){return{checked1:!1,checked2:!0,checked3:!1,checkList:["选中且禁用","复选框 A"],checkAll:!1,checkedCities:["上海","北京"],cities:g,isIndeterminate:!0,checkboxGroup2:["上海"],checkboxGroup3:["上海"]}},methods:{handleCheckAllChange:function(e){this.checkedCities=e?g:[],this.isIndeterminate=!1},handleCheckedCitiesChange:function(e){var a=e.length;this.checkAll=a===this.cities.length,this.isIndeterminate=a>0&&a<this.cities.length}}},C=w,T=Object(u["a"])(C,x,y,!1,null,null,null),$=T.exports,O=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("el-card",{attrs:{shadow:"never"}},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("i",{staticClass:"fab fa-hire-a-helper fa-lg"}),l("span",[e._v("输入框")])]),l("el-row",[l("el-input",{attrs:{placeholder:"请输入内容","prefix-icon":"el-icon-search"},model:{value:e.inputVal1,callback:function(a){e.inputVal1=a},expression:"inputVal1"}})],1),l("el-row",[l("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.inputVal2,callback:function(a){e.inputVal2=a},expression:"inputVal2"}},[l("template",{slot:"prepend"},[e._v("Http://")])],2)],1),l("el-row",[l("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.inputVal3,callback:function(a){e.inputVal3=a},expression:"inputVal3"}},[l("template",{slot:"append"},[e._v(".com")])],2)],1),l("el-row",[l("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容"},model:{value:e.inputVal4,callback:function(a){e.inputVal4=a},expression:"inputVal4"}},[l("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.select,callback:function(a){e.select=a},expression:"select"}},[l("el-option",{attrs:{label:"餐厅名",value:"1"}}),l("el-option",{attrs:{label:"订单号",value:"2"}}),l("el-option",{attrs:{label:"用户电话",value:"3"}})],1),l("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1)],1)},S=[],V={data:function(){return{inputVal1:"",inputVal2:"",inputVal3:"",inputVal4:"",select:""}}},j=V,z=Object(u["a"])(j,O,S,!1,null,null,null),A=z.exports,E=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("el-card",{attrs:{shadow:"never"}},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("i",{staticClass:"fab fa-hire-a-helper fa-lg"}),l("span",[e._v("下拉框")])]),l("el-row",[l("el-select",{attrs:{placeholder:"单选请选择"},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}},e._l(e.options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),l("el-select",{staticStyle:{"margin-left":"20px"},attrs:{multiple:"",placeholder:"复选请选择"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}},e._l(e.options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),l("el-select",{staticStyle:{"margin-left":"20px"},attrs:{multiple:"","collapse-tags":"",filterable:"",placeholder:"复选搜索请选择"},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}},e._l(e.options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1)},P=[],B={data:function(){return{options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value1:"",value2:"",value3:""}}},I=B,X=Object(u["a"])(I,E,P,!1,null,null,null),G=X.exports,L=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("el-card",{attrs:{shadow:"never"}},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("i",{staticClass:"fab fa-hire-a-helper fa-lg"}),l("span",[e._v("级联选择器")])]),l("el-row",[l("el-cascader",{attrs:{props:{expandTrigger:"hover"},options:e.options,filterable:""},model:{value:e.selectedOptions1,callback:function(a){e.selectedOptions1=a},expression:"selectedOptions1"}})],1)],1)},N=[],D={data:function(){return{selectedOptions1:[],options:[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"},{value:"xiaolv",label:"效率"},{value:"kekong",label:"可控"}]},{value:"daohang",label:"导航",children:[{value:"cexiangdaohang",label:"侧向导航"},{value:"dingbudaohang",label:"顶部导航"}]}]},{value:"zujian",label:"组件",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout 布局"},{value:"color",label:"Color 色彩"},{value:"typography",label:"Typography 字体"},{value:"icon",label:"Icon 图标"},{value:"button",label:"Button 按钮"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio 单选框"},{value:"checkbox",label:"Checkbox 多选框"},{value:"input",label:"Input 输入框"},{value:"input-number",label:"InputNumber 计数器"},{value:"select",label:"Select 选择器"},{value:"cascader",label:"Cascader 级联选择器"},{value:"switch",label:"Switch 开关"},{value:"slider",label:"Slider 滑块"},{value:"time-picker",label:"TimePicker 时间选择器"},{value:"date-picker",label:"DatePicker 日期选择器"},{value:"datetime-picker",label:"DateTimePicker 日期时间选择器"},{value:"upload",label:"Upload 上传"},{value:"rate",label:"Rate 评分"},{value:"form",label:"Form 表单"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table 表格"},{value:"tag",label:"Tag 标签"},{value:"progress",label:"Progress 进度条"},{value:"tree",label:"Tree 树形控件"},{value:"pagination",label:"Pagination 分页"},{value:"badge",label:"Badge 标记"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert 警告"},{value:"loading",label:"Loading 加载"},{value:"message",label:"Message 消息提示"},{value:"message-box",label:"MessageBox 弹框"},{value:"notification",label:"Notification 通知"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"NavMenu 导航菜单"},{value:"tabs",label:"Tabs 标签页"},{value:"breadcrumb",label:"Breadcrumb 面包屑"},{value:"dropdown",label:"Dropdown 下拉菜单"},{value:"steps",label:"Steps 步骤条"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog 对话框"},{value:"tooltip",label:"Tooltip 文字提示"},{value:"popover",label:"Popover 弹出框"},{value:"card",label:"Card 卡片"},{value:"carousel",label:"Carousel 走马灯"},{value:"collapse",label:"Collapse 折叠面板"}]}]},{value:"ziyuan",label:"资源",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"组件交互文档"}]}]}}},M=D,R=Object(u["a"])(M,L,N,!1,null,null,null),F=R.exports,H=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("el-card",{attrs:{shadow:"never"}},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("i",{staticClass:"fab fa-hire-a-helper fa-lg"}),l("span",[e._v("滑块")])]),l("el-row",[l("span",[e._v("默认")]),l("el-slider",{model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}})],1),l("el-row",[l("span",[e._v("自定义初始值")]),l("el-slider",{model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1),l("el-row",[l("span",[e._v("隐藏 Tooltip")]),l("el-slider",{attrs:{"show-tooltip":!1},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}})],1),l("el-row",[l("span",[e._v("格式化 Tooltip")]),l("el-slider",{attrs:{"format-tooltip":e.formatTooltip},model:{value:e.value4,callback:function(a){e.value4=a},expression:"value4"}})],1),l("el-row",[l("span",[e._v("禁用")]),l("el-slider",{attrs:{disabled:""},model:{value:e.value5,callback:function(a){e.value5=a},expression:"value5"}})],1),l("el-row",[l("span",[e._v("范围选择")]),l("el-slider",{attrs:{range:"","show-stops":"",max:10},model:{value:e.value6,callback:function(a){e.value6=a},expression:"value6"}})],1)],1)},J=[],U={data:function(){return{value1:0,value2:50,value3:36,value4:48,value5:42,value6:[4,8]}},methods:{formatTooltip:function(e){return e/100}}},Y=U,q=Object(u["a"])(Y,H,J,!1,null,null,null),K=q.exports,Q=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("el-card",{attrs:{shadow:"never"}},[l("div",{attrs:{slot:"header"},slot:"header"},[l("i",{staticClass:"fab fa-hire-a-helper fa-lg"}),l("span",[e._v("穿梭框")])]),l("el-row",[l("el-transfer",{attrs:{data:e.data},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}})],1)],1)},W=[],Z={data:function(){var e=function(){for(var e=[],a=1;a<=15;a+=1)e.push({key:a,label:"备选项 ".concat(a),disabled:a%4===0});return e};return{data:e(),value1:[1,4]}}},ee=Z,ae=Object(u["a"])(ee,Q,W,!1,null,null,null),le=ae.exports,te=l("3bfc"),re={components:{XButton:p,XRadio:k,XCheckbox:$,XInput:A,XSelect:G,XCascader:F,XSlider:K,XTransfer:le,XBacktotop:te["a"]}},oe=re,ie=l("73a8");function ne(e){this["$style"]=ie["default"].locals||ie["default"]}var se=Object(u["a"])(oe,t,r,!1,ne,null,null);a["default"]=se.exports},dfaf:function(e,a,l){"use strict";var t=l("8bff"),r=l.n(t);a["default"]=r.a}}]);