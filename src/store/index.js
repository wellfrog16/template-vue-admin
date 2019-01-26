import Vue from 'vue';
import Vuex from 'vuex';

// 模块
import demo1 from '@/store/module/index/demo1';
import hehe from '@/store/module/index/demo2/hehe';
import haha from '@/store/module/index/demo2/haha';

Vue.use(Vuex);

const state = {
    count: 0,
};

const mutations = {};
const getters = {};
const actions = {};

// 返回 store 实例
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules: {
        demo1,
        hehe,
        haha,
    },
});
