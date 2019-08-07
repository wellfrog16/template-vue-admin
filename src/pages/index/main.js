import Vue from 'vue';
import store from './store';
import router from './helper/router';
import App from './App.vue';
import { helper } from '@/helper/lakes';
import { utils } from '@/utils/rivers';

// 过滤器
import '@/utils/filters';

// 自定义指令
import '@/directive';

// 插件
import '@/plugins';

Vue.config.productionTip = false;

Vue.prototype.$helper = helper;
Vue.prototype.$utils = utils;

window.vueIndex = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
