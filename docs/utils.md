# utils 工具函数

> 与项目无耦合性，纯粹用于处理数据的函数。<br>
> 文件路径：src/utils/index.js

### isEmpty(val)

* <b>参数</b>
    * {Any} `val`

* <b>返回值</b> `{Boolen}`

* <b>用法</b><br>
判断 `val` 是否为 `空/null/undefined` 中的一种

### getUrlParam(url)

* <b>参数</b>
    * {String} `url`

* <b>返回值</b> `{Json}`

* <b>用法</b><br>
浏览器query数据json化，未考虑带hash的情况。

### setRootSize(maxSize)

* <b>参数</b>
    * {Number} `maxSize` default: 75

* <b>用法</b><br>
设置浏览器html标签字体大小

### autoRootSize()

* <b>用法</b><br>
增加window onresize事件，执行[setRootSize()](/utils?id=setRootSize)，会立刻执行一次