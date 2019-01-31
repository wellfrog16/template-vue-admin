// cdn 资源加载后导出，方便import时了解对应的资源
// 非必要的方式
// 目前发现某些情况下eslint会报错，如 import { $, echarts } from '@/utils/cdn'

export {
    $, // jquery
    $ as jquery, // jquery
    echarts, // echarts图表
    moment, // moment日期
    axios, // http请求库
    Hammer, // 手势库
    _, // lodash函数库
};
