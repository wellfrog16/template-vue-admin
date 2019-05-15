import Vue from 'vue';
// import ElementUI from 'element-ui';
import InfiniteLoading from 'vue-infinite-loading'; // 滚动加载
// import VueScrollactive from 'vue-scrollactive'; // 单页定位
import VueScrollactive from './vue-scrollactive'; // 单页定位
import Affix from 'vue-affix'; // 固定元素

// 按需加载element-ui
import './element-ui';

// 插件
// Vue.use(ElementUI, { size: 'small', zIndex: 2000 });
Vue.use(InfiniteLoading);
Vue.use(Affix);
Vue.use(VueScrollactive);
