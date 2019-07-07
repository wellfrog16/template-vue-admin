import Vue from 'vue';
import store from './store';
import router from './router';
import App from './App.vue';
import helper from '@/helper/helper';

// 路由权限
import './helper/router';

// 过滤器
import '@/utils/filters';

// 自定义指令
import '@/directive';

// 插件
import '@/plugins';

Vue.config.productionTip = false;

helper.vue = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
