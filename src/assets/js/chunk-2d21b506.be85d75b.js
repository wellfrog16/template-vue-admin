(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21b506"],{bef3:function(e,t,n){"use strict";n.r(t);var r,o,c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-card",{attrs:{shadow:"never"}},[n("el-row",[e._v("当前语言："+e._s(e.$t("title")))]),n("el-divider"),n("el-row",[n("el-dropdown",{on:{command:e.handleCommand}},[n("el-button",{attrs:{type:"primary"}},[e._v("\n                切换语言"),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"zh-CN"}},[e._v("中文")]),n("el-dropdown-item",{attrs:{command:"en-US"}},[e._v("English")])],1)],1)],1)],1)},l=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),i=n("2f62"),s=n("5e36"),d={watch:{lang:function(){this.refresh()}},methods:{refresh:function(){}}},u=d,p=n("2877"),f=Object(p["a"])(u,r,o,!1,null,null,null),w=f.exports;function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach(function(t){Object(a["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var h={mixins:[w],computed:m({},Object(i["d"])(["lang"])),methods:{refresh:function(){},handleCommand:function(e){Object(s["c"])(e).then(function(){})}}},O=h,j=Object(p["a"])(O,c,l,!1,null,null,null);t["default"]=j.exports}}]);