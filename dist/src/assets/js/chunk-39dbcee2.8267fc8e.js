(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39dbcee2"],{"09f9":function(t,e,i){t.exports={dialog:"uploadImage_dialog_2r-5c"}},6722:function(t,e,i){},8312:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[i("el-tab-pane",{attrs:{label:"Mini配置",name:"tab1"}},[i("tinymce",{attrs:{height:300},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),i("el-tab-pane",{attrs:{label:"简单配置",name:"tab2"}},[i("tinymce",{attrs:{height:300,config:"simple"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),i("el-tab-pane",{attrs:{label:"标准配置",name:"tab3"}},[i("tinymce",{attrs:{height:300,config:"standard"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),i("el-tab-pane",{attrs:{label:"全部",name:"tab4"}},[i("tinymce",{attrs:{height:300,config:"full"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1)},a=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tinymce-container editor-container",class:{fullscreen:t.fullscreen}},[i("textarea",{staticClass:"tinymce-textarea",attrs:{id:t.tinymceId}}),i("uploadImage",{attrs:{visible:t.uploadImageVisible},on:{visible:t.handleUploadImage,"on-success":t.imageUploadSuccess}})],1)},l=[],s=(i("ac6a"),i("cebc")),c=(i("c5f6"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{staticClass:"or-dialog",attrs:{visible:t.dialogVisible,"before-close":t.handleClose,"custom-class":t.$style.dialog,top:"0vh"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-upload",{attrs:{multiple:!1,"file-list":t.fileList,"show-file-list":!0,"on-remove":t.handleRemove,"on-success":t.handleSuccess,"before-upload":t.beforeUpload,accept:".jpg,.png",action:"https://httpbin.org/post","list-type":"picture-card"}},[i("el-button",{attrs:{type:"primary"}},[t._v("点击上传")])],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.handleClose}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary",loading:t.uploading},on:{click:t.handleSubmit}},[t._v("确 定")])],1)],1)}),r=[],u=i("795b"),d=i.n(u),m=i("a4bb"),g=i.n(m),h={props:{visible:{type:Boolean,default:!1}},data:function(){return{dialogVisible:!1,fileList:[],imgList:{},uploading:!1,count:0}},computed:{allReady:function(){var t=this;return!g()(this.imgList).every(function(e){return t.imgList[e].isSuccess})}},watch:{visible:function(t){this.dialogVisible=t},count:function(){this.uploading=!this.checkAllSuccess()}},mounted:function(){window.aa=this},methods:{handleClose:function(){this.$emit("visible",!1)},checkAllSuccess:function(){var t=this;return g()(this.imgList).every(function(e){return t.imgList[e].isSuccess})},handleSubmit:function(){var t=this,e=g()(this.imgList).map(function(e){return t.imgList[e]});this.$emit("on-success",e),this.imgList={},this.fileList=[],this.count=0,this.handleClose()},beforeUpload:function(t){var e=this,i=window.URL||window.webkitURL,n=t.uid,a=t.size,o=t.type;return this.imgList[n]={},this.uploading=!0,new d.a(function(l){var s=new Image;s.src=i.createObjectURL(t),s.onload=function(){e.imgList[n]={isSuccess:!1,uid:n,size:a,type:o,width:this.width,height:this.height}},l(!0)})},handleSuccess:function(t,e){var i=this;g()(this.imgList).forEach(function(n){var a=i.imgList[n];a.uid===e.uid&&(a.url=t.files.file,a.isSuccess=!0,i.count+=1)})},handleRemove:function(t){var e=this;g()(this.imgList).forEach(function(i){e.imgList[i].uid===t.uid&&delete e.imgList[i],e.count-=1})}}},f=h,p=i("b1e7"),b=i("2877");function v(t){this["$style"]=p["default"].locals||p["default"]}var y=Object(b["a"])(f,c,r,!1,v,null,null),w=y.exports,k={toolbar:"bold | alignleft aligncenter alignright alignjustify | bullist numlist | forecolor",menubar:!1,plugins:"lists"},_={toolbar:"undo redo | formatselect | bold | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent | forecolor backcolor | removeformat | link image | uploadImage | preview",menubar:!1,plugins:"lists link image preview imagetools"},C={toolbar:"formatselect | bold | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent | forecolor backcolor | removeformat | link image | preview",menubar:!0,plugins:"lists link image preview table imagetools"},I={toolbar:"formatselect | code | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | addcomment",menubar:!0,plugins:"code print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern help",image_advtab:!0,image_caption:!0},L={mini:k,simple:_,standard:C,full:I},x={name:"Tinymce",components:{uploadImage:w},props:{id:{type:String,default:function(){return"vue-tinymce-".concat(+new Date).concat((1e3*Math.random()).toFixed(0))}},value:{type:String,default:""},config:{type:String,default:"mini"},height:{type:Number,required:!1,default:360}},data:function(){return{uploadImageVisible:!1,hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1,languageTypeList:{en:"en",zh:"zh_CN"}}},computed:{language:function(){return this.languageTypeList.zh}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick(function(){return window.tinymce.get(e.tinymceId).setContent(t||"")})},language:function(){var t=this;this.destroyTinymce(),this.$nextTick(function(){return t.initTinymce()})}},mounted:function(){this.initTinymce()},activated:function(){this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},methods:{handleUploadImage:function(t){this.uploadImageVisible=t},initTinymce:function(){var t=this,e=this;window.tinymce.init(Object(s["a"])({},L[this.config],{language:this.language,selector:"#".concat(this.tinymceId),height:this.height,width:"100%",object_resizing:"img",end_container_on_empty_block:!0,powerpaste_word_import:"clean",advlist_bullet_styles:"square",advlist_number_styles:"default",default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:function(i){e.value&&i.setContent(e.value),e.hasInit=!0,i.on("NodeChange Change KeyUp SetContent",function(){t.hasChange=!0,t.$emit("input",i.getContent())})},setup:function(t){t.ui.registry.addButton("uploadImage",{text:"上传图片",onAction:function(){e.uploadImageVisible=!0}})}}))},destroyTinymce:function(){var t=window.tinymce.get(this.tinymceId);this.fullscreen&&t.execCommand("mceFullScreen"),t&&t.destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageUploadSuccess:function(t){var e=this;t.forEach(function(t){window.tinymce.get(e.tinymceId).insertContent('<img src="'.concat(t.url,'" >'))})}}},S=x,T=(i("d572"),Object(b["a"])(S,o,l,!1,null,"58812e00",null)),j=T.exports,U={components:{Tinymce:j},data:function(){return{activeName:"tab2",content:""}}},$=U,V=Object(b["a"])($,n,a,!1,null,null,null);e["default"]=V.exports},b1e7:function(t,e,i){"use strict";var n=i("09f9"),a=i.n(n);e["default"]=a.a},d572:function(t,e,i){"use strict";var n=i("6722"),a=i.n(n);a.a}}]);