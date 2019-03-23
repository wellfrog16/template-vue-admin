import Vue from 'vue';
import Vuex from 'vuex';

// 站点模块
import complexTable from './modules/complexTable';
import lazyTable from './modules/lazyTable';
// import demo1 from '@/store/module/index/demo1';
// import hehe from '@/store/module/index/demo2/hehe';
// import haha from '@/store/module/index/demo2/haha';

Vue.use(Vuex);

const states = {
    count: 0,
};

const mutations = {
    plus(state, num) {
        state.count += num;
    },
};
const getters = {};
const actions = {};

// 返回 store 实例
export default new Vuex.Store({
    state: states,
    mutations,
    getters,
    actions,
    modules: {
        complexTable,
        lazyTable,
    },
});
