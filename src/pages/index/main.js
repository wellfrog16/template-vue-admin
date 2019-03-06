import Vue from 'vue';
import ElementUI from 'element-ui';
import InfiniteLoading from 'vue-infinite-loading'; // 滚动加载
// import filters from '@/utils/filters';
import store from '@/store';
import router from './router/router';
import App from './App.vue';

// 过滤器
import '@/utils/filters';

// 自定义指令
import '@/utils/directive';

Vue.config.productionTip = false;

// 插件
Vue.use(ElementUI);
Vue.use(InfiniteLoading);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
