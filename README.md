# template-vue-admin

<a href="https://996.icu"><img src="https://img.shields.io/badge/link-996.icu-red.svg"></a>

## 说明

* eslint airbnb校验
* stylelint standard校验
* 部分功能需要后端支持，可以直接查看源码里的使用方式（如拍照上传、图片裁剪等）
* babel-eslint 如果升级到9以上（包含9），会导致i18n里的语言懒加载报错，暂时保持在8的版本

## todo

* 注意el-image和el-table的fixed有bug
* 单页导航功能
* 飞行航线图整理
* 优化富文本编辑上传图片
* 视频拍照获取图片用videoHeight处理
* 补充echarts示例
* config配置html可以配置
* 增加拖拽上传组件
* 树形异步组件封装
* i18n升级插件后出错，待修复
* 去store化，只保留必要的store(vuex)。其余采用局部store来处理组件共享数据
* 新的loading解决方案（默认全局，可以局部修改自定义）
* 路由白名单功能

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run eslint
npm run stylelint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
