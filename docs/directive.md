# directive

> 指令集

### clipboard
复制

* <b>依赖</b><br>
[ClipboardJS](https://github.com/zenorocha/clipboard.js)

* <b>参数</b>

|参数|说明|类型
|:-|:-|:-
|copy/cut|复制还是剪切|Variable
|success|成功的回调|Function
|error|失败的回调|Function

* <b>用法</b>

```html
<el-button
    v-clipboard:success="handleClipboardSuccess"
    v-clipboard:copy="content">
    复制文本框信息
</el-button>
```

```javascript
data() {
    return {
        content: '',
    };
},
methods: {
    handleClipboardSuccess(e) {
        this.$message.success('复制成功');
        e.clearSelection();
    },
},
```

### focus
设置焦点

* <b>用法</b>

```html
<el-input v-focus />
```

### outside-click
在目标外点击

* <b>用法</b>

```html
<div v-outside-click="outsideClick"></div>
```

```javascript
methods: {
    outsideClick(e) {
        // 目标外点击
    },
},
```

### permission
权限校验

* <b>依赖</b><br>
Store(vuex)存储的角色信息

* <b>参数</b>

|参数|说明|类型
|:-|:-|:-
|-|需要的角色数组|Array

* <b>用法</b>

```html
<div v-permission="['admin']">工资明细</div>
```

### resize
dom容器resize事件<br>
通常容器是百分比大小

* <b>参数</b>

|参数|说明|类型
|:-|:-|:-
|delay|延迟检测|Number
|-|resize回调事件|Function

* <b>用法</b>

```html
<div v-resize:delay="200" v-resize="handleResize">
```

```javascript
methods: {
    handleResize(old, current) {
        // { width, height }
        console.log(old);

        // { width, height }
        console.log(current);
    },
},
```

### touch
手势事件

* <b>依赖</b><br>
[hammerjs](https://github.com/hammerjs/hammer.js)

* <b>模式</b>

|指令|说明|类型
|:-|:-|:-
|tap|点击|Function
|pan|拖动|Function
|panstart|拖动开始|Function
|panend|拖动结束|Function
|panup|向上拖动|Function
|pandown|向下拖动|Function
|press|按住|Function
|pressup|按住释放|Function
|swipeleft|左滑|Function
|swiperight|右滑|Function
|swipeup|上滑|Function
|swipedown|下滑|Function

### trim
文本框失去焦点时过滤空格

* <b>用法</b>

```html
<el-input
    v-model="form.fields.name"
    v-trim="{ target: form.fields, key: 'name' }"
/>
```

```javascript
data() {
    return {
        form: {
            fields: {
                age: 18,
                name: '',
            },
        },
    };
},
```