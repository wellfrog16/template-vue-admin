import Vue from 'vue';
import { helper } from '@/helper/lakes';
import { utils } from '@/utils/rivers';
import store from './store';
import router from './helper/router';
import App from './App.vue';

// 过滤器
import '@/utils/filters';

// 自定义指令
import '@/directive';

// 插件
import '@/plugins';

// 多语言
import { i18n } from '#index/locale';

Vue.config.productionTip = false;

Vue.prototype.$helper = helper; // 辅助
Vue.prototype.$utils = utils; // 工具
Vue.prototype.$bus = new Vue(); // 事件总线

window.vueIndex = new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
}).$mount('#app');
