# utils 工具函数

> 与项目无耦合性，纯粹用于处理数据的函数。<br>
> 文件路径：src/utils/index.js

### isEmpty(val)
判断 `val` 是否为 `空/null/undefined` 中的一种

* <b>参数</b>
    * {Any} `val`

* <b>返回值</b> `{Boolen}`

### getUrlParam(url)
浏览器query数据json化，未考虑带hash的情况。

* <b>参数</b>
    * {String} `url`

* <b>返回值</b> `{Json}`

### setRootSize(maxSize)
设置浏览器html标签字体大小

* <b>参数</b>
    * {Number} `maxSize` default: 75

### autoRootSize()
增加window onresize事件，执行[setRootSize()](/utils?id=setRootSize)，并会立刻执行一次

### createCode(canvas)
生成4位数字的canvas到指定的dom节点

* <b>参数</b>
    * {HTMLDom} `canvas`

### currency(vals, units, decimals)

* <b>参数</b>
    * {Number} `vals`
    * {String} `units` default ''
    * {Number} `decimals`

* <b>返回值</b> `{String}`

* <b>用法</b><br>

```javascript
const a = 123456.789
console.log(currency(a, '￥'))
// ￥123,456.789

console.log(currency(a, '￥', 2))
// ￥123,456.78
```

### secretPhoneNum(num)
隐藏手机号当中四位

* <b>参数</b>
    * {String|Number} `num`

* <b>返回值</b> `{String}`

* <b>用法</b><br>

```javascript
const a = '13912345678'
console.log(secretPhoneNum(a))
// 139****5678
```

### delay(time)

* <b>参数</b>
    * {Number} `time`

* <b>返回值</b> `{Promise}`

* <b>用法</b><br>
延迟 `time` 毫秒执行

### getImageSize(url)
获取图片的宽高

* <b>参数</b>
    * {String} `url`

* <b>返回值</b> `{Json}` { width, height }


### deleteHtmlTag(str)
删除html标签之类

* <b>参数</b>
    * {String} `str`

* <b>返回值</b> `{String}`

### getRandomColor()
产生一个随机颜色

* <b>返回值</b> `{String}`

### deepMerge(target, obj)
深度合并

* <b>参数</b>
    * {Json} `target`
    * {Json} `obj`

* <b>返回值</b> `{Json}`