# components

> vue 组件<br>
> 代码文件夹路径：src/components

### backtotop
回到顶部

* <b>Attribute</b>

|参数|说明|类型|默认值
|:-|:-|:-|:-
|visibility-height|显示组件时的滚动条高度|Number|400
|element|容器|String|CssSelector

* <b>用法</b>

```html
<!-- 示例代码地址 -->
<!-- src\pages\index\views\ui\components\part\backtotop.vue -->
<backtotop element="#elMain" />
```

### camera-upload
拍照上传

* <b>Attribute</b>

|参数|说明|类型|默认值
|:-----------------|:-|:-|:-
|visible|组件对话框显示，支持sync|Boolean|false
|title|对话框标题|String|拍照上传
|type|功能类型，包含上传和拍照|Array|['camera', 'upload']
|width|对话框宽|Number|480
|height|对话框高|Number|320
|auto-upload|保存时是否调用el-upload上传图片<br>(不包含拍照)|Boolean|false
|on-success|上传成功的钩子|Function(res, file)|-
|on-error|上传失败的钩子|Function(error, file)|-
|on-submit|保存时不自动上传，则执行submit<br>done关闭loading|Function(file, done)|-
|submit-text|保存按钮的文本|String|保存
|src|默认显示的图片地址|String|-
|http-request|上传接口，传入file，返回Promise对象|Function|-
|before-upload|上传前回调，返回false则中止上传|Function(file)|-

* <b>用法</b>

```html
<!-- 示例代码地址 -->
<!-- src\pages\index\views\ui\components\dialog\camera-upload\index.vue -->
<camera-upload
    :visible.sync="cameraUploadVisible"
    :onSubmit="handleSubmit"
    :http-request="httpRequest"
/>
```

### cropper
图片裁剪 & 上传

* <b>Attribute</b>

|参数|说明|类型|默认值
|:-|:-|:-|:-
|accept|上传的文件类型|String|.jpg,.jpeg,.png
|src|默认的图片地址|String|-
|maxSize|图片的大小限制(bit)|Number|2 * 1024 * 1024
|width|组件宽|String|200px
|height|组件高|String|200px
|icon-size|icon大小|Number|28
|http-request|上传接口，传入file，返回Promise对象|Function|-
|before-upload|上传前回调，返回false则中止上传|Function(file)|-
|image-smoothing-quality|处理后的图片质量|String|`low`\|`medium`\|`high`(default)
|cropper-width|裁剪框宽（输出宽）|Number|-
|cropper-height|裁剪框高（输出高）|Number|-

* <b>用法</b>

```html
<!-- 示例代码地址 -->
<!-- src\pages\index\views\ui\components\dialog\cropper\index.vue -->
<x-cropper
    :http-request="httpRequest"
    :icon-size="30"
    :image-src="imageSrc"
    width="280px"
    height="100px"
    :cropperWidth="400"
    :cropperHeight="200"
/>
```

### map-point
地图选择经纬度

* <b>Attribute</b>

|参数|说明|类型|默认值
|:-|:-|:-|:-
|value|坐标值|Object|{ lng: null, lat: null }
|city|默认城市|String|上海
|visible|组件对话框显示，支持sync|Boolean|false

* <b>Event</b>

|名称|说明|类型|参数
|:-|:-|:-|:-
|on-close|关闭时|Function|-

* <b>用法</b>

```html
<!-- 示例代码地址 -->
<!-- src\pages\index\views\ui\components\dialog\map-point\index.vue -->
<map-point :visible.sync="visible" v-model="myPoint" />
```

### menu
菜单

* <b>Attribute</b>

|参数|说明|类型|默认值
|:-|:-|:-|:-
|data|菜单数据|Array|-
|collapse|菜单折叠/展开|Boolean|false
|default-openeds|[el]当前打开的 sub-menu 的 index 的数组|Array|-
|default-active|[el]当前激活菜单的 index|String|-
|background-color|[el]菜单的背景色（仅支持 hex 格式）|String|#fff
|text-color|菜单的文字颜色（仅支持 hex 格式）|String|#303133
|active-text-color|当前激活菜单的文字颜色（仅支持 hex 格式）|String|#409EFF
|popper-class|弹出菜单的自定义类名|String|-

* data

|参数|说明|类型|默认值
|:-|:-|:-|:-
|children|字节点|Array[data]|-
|path|路由|跳转的路由|-
|meta|额外信息|Json|-
|meta.title|菜单标题|String|-
|meta.icon|菜单icon的class|String|-
|meta.hidden|隐藏当前菜单(不可权限配置)|Boolean|false
|meta.visible|隐藏当前菜单(可权限配置)|Boolean|false
|meta.type|路由类型|String|`link`\|`iframe`
|meta.url|路由类型未iframe的链接地址|String|

* <b>用法</b>

```html
<!-- 示例代码地址 -->
<!-- src\pages\index\views\layout\Index.vue -->
<aside-menu
    class="aside-menu"
    :data="menuData"
    :collapse="collapse"
    background-color="#316cb1"
    text-color="#d0ddec"
    active-text-color="#deff00"
    :default-active="defaultActive"
    :popper-class="$style['my-popper']"
/>
```

### screenfull
全屏

* <b>用法</b>

```html
<!-- 示例代码地址 -->
<!-- src\pages\index\views\layout\components\functions\screenfull.vue -->
<screenfull />
```

### tinymce
富文本编辑器

* <b>Attribute</b>

|参数|说明|类型|默认值
|:-|:-|:-|:-
|id|唯一标识|String|系统自动
|value|坐标值|String|-
|config|编辑器配置|String|`mini`(default)\|`simple`\|`standard`\|`full`
|height|编辑器高|Number|360

* <b>用法</b>

```html
<!-- 示例代码地址 -->
<!-- src\pages\index\views\ui\Editor.vue -->
<tinymce v-model="content" :height="300" config="simple" />
```

### upload-image
上传图片

* <b>Attribute</b>

|参数|说明|类型|默认值
|:-----------------|:-|:-|:-
|accept|上传的文件类型|String|.jpg,.jpeg,.png
|src|默认的图片地址|String|-
|maxSize|图片的大小限制(bit)|Number|2 * 1024 * 1024
|width|组件宽|String|200px
|height|组件高|String|200px
|icon-size|icon大小|Number|28
|http-request|上传接口，传入file，返回Promise对象|Function|-
|before-upload|上传前回调，返回false则中止上传|Function(file)|-

* <b>用法</b>

```html
<!-- 示例代码地址 -->
<!-- src\pages\index\views\ui\Upload.vue -->
<x-upload-image
    :http-request="httpRequest"
    :icon-size="60"
    :src="imageSrc"
    width="400px"
    height="300px"
/>
```