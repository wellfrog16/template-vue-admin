import Vue from 'vue';
import store from './store';
import router from './helper/router';
import App from './App.vue';
import { helper } from '@/helper/lakes';
import { utils } from '@/utils/rivers';
import cdn from '@/utils/cdn';

// 过滤器
import '@/utils/filters';

// 自定义指令
import '@/directive';

// 插件
import '@/plugins';

Vue.config.productionTip = false;

window.vueIndex = new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        this.$helper = helper;
        this.$utils = utils;
        this.$cdn = cdn;
    },
}).$mount('#app');
