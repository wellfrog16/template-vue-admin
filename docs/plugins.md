# plugins

> 与项目无耦合性组件<br>
> 或者仅使用了element-ui<br>
> 文件路径：src/plugins

### vue-count-to
数字动画

* <b>参数</b>

|参数|说明|类型|默认值
|:-|:-|:-|:-
|startVal|初始值|Number|0
|endVal|结束值|Number|0
|duration|持续时间|Number|3000`毫秒`
|autoplay|自动播放|Boolean|true
|decimals|保留几位小数|Number|0
|decimal|小数点|String|.
|separator|千分位|String|,
|prefix|前缀|String|
|suffix|后缀|String|
|useEasing|使用easing动画|Boolean|false
|easingFn|easing函数|Function|`注释1`

`注释1`:
```javascript
// 默认值
default(t, b, c, d) {
    return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
}
```

* <b>用法</b>

```html
<vue-count-to :startVal="0" :endVal="1000" :duration="5000" />
```

### vue-scrollactive
使用时，需要先安装原项目依赖<br>
`npm install --save vue-scrollactive`

> 与原项目相比增加了hash参数<br>
> 默认禁止修改hash值，防止破坏vue的路由<br>
> 其他正常使用


[使用方法参看原项目](https://github.com/eddiemf/vue-scrollactive)

### vue-text-ellipsis
长文本省略号

* <b>参数</b>

|参数|说明|类型|默认值
|:-|:-|:-|:-
|effect|等同于el-tooltip的effect，颜色风格|String|dark
|type|单行/多行（多行未实现）|String|single|multiple
|placement|等同于el-tooltip的placement，tips位置|string|top
|content|长文本内容|String|
|popperOptions|popper.js 的参数|Json|`注释1`
|popperClass|popper样式|String|
|enterable|鼠标是否可进入到 tooltip 中|Boolen|true

`注释1`:
[参考popper.js](https://github.com/popperjs/popper.js)

```javascript
// 默认值
{ boundariesElement: 'body', gpuAcceleration: false }
```