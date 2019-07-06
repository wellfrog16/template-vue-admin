// cdn 资源加载后导出，方便import时了解对应的资源
// 非必要的方式
// 目前发现某些情况下eslint会报错，如 import { $, echarts } from '@/utils/cdn'

const {
    $,
    echarts,
    moment,
    axios,
    Hammer,
    _,
    screenfull,
    ClipboardJS,
    NProgress,
    CryptoJS,
    Cookies,
    Driver,
    Split,
    BMap,
} = window;

const baseCdn = 'https://cdn.jsdelivr.net';

export default {
    jquerys: `${baseCdn}/npm/jquery@3.3.1`,
    tinymce: `${baseCdn}/npm/tinymce@5.0.5/tinymce.min.js`,
    jqueryTinymce: `${baseCdn}/npm/tinymce@5.0.5/jquery.tinymce.min.js`,
};

export {
    $, // jquery
    $ as jquery, // jquery
    echarts, // echarts图表
    moment, // moment日期
    axios, // http请求库
    Hammer, // 手势库
    _, // lodash函数库
    screenfull, // 全屏
    ClipboardJS, // 复制
    ClipboardJS as Clipboard, // 复制
    NProgress, // 进度条
    CryptoJS, // 加密
    Cookies, // cookie
    Driver, // 指引
    Split, // 分割布局
    BMap, // 百度地图
};
