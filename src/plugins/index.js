import Vue from 'vue';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import InfiniteLoading from 'vue-infinite-loading'; // 滚动加载
// import VueScrollactive from 'vue-scrollactive'; // 单页定位
import VueScrollactive from './vue-scrollactive'; // 单页定位
import Affix from 'vue-affix'; // 固定元素
import CountTo from './vue-count-to/index'; // 数字动画
import TextEllipsis from './vue-text-ellipsis'; // 省略号
import './vue-i18n'; // 多语言

// 2019-6-13 关闭按需加载，保留对应的npm引用和文件
// 对应tag v0.9
// 按需加载在组件内样式覆盖需要important，相当麻烦
// 按需加载element-ui
// import './element-ui';

// 插件
Vue.use(ElementUI, { size: 'small', zIndex: 2000 });
Vue.use(InfiniteLoading);
Vue.use(Affix);
Vue.use(VueScrollactive);
Vue.use(CountTo);
Vue.use(TextEllipsis);
