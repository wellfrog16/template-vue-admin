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
    Cropper,
} = window;

const baseCdn = '//cdn.jsdelivr.net/npm';

export default {
    jquerys: `${baseCdn}/jquery@3.3.1`,
    tinymce: `${baseCdn}/tinymce@5.0.5/tinymce.min.js`,
    jqueryTinymce: `${baseCdn}/tinymce@5.0.5/jquery.tinymce.min.js`,

    // 手势
    hammer: {
        objFun: () => window.Hammer,
        js: [
            `${baseCdn}/hammerjs@2.0.8`,
        ],
    },

    // 图片剪切
    cropper: {
        objFun: () => window.Cropper,
        js: [
            `${baseCdn}/cropperjs@1.5.5/dist/cropper.min.js`,
        ],
        css: [
            `${baseCdn}/cropperjs@1.5.5/dist/cropper.min.css`,
        ],
    },

    // 全屏插件
    screenfull: {
        objFun: () => window.screenfull,
        js: [
            `${baseCdn}/screenfull@4.0.1`,
        ],
    },

    // 提示帮助指引
    clipboard: {
        objFun: () => window.ClipboardJS,
        js: [
            `${baseCdn}/clipboard@2.0.4`,
        ],
    },

    // 提示帮助指引
    driver: {
        objFun: () => window.Driver,
        js: [
            `${baseCdn}/driver.js@0.9.7`,
        ],
        css: [
            `${baseCdn}/driver.js@0.9.7/dist/driver.min.css`,
        ],
    },

    // 分割布局
    split: {
        objFun: () => window.Split,
        js: [
            `${baseCdn}/split.js@1.5.11`,
        ],
    },
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
    Cropper, // 图片剪切
};
