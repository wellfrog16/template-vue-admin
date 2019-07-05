import Vue from 'vue';
import Vuex from 'vuex';

// 站点模块
import baseForm from './modules/base-form';
import complexTable from './modules/complex-table';
import lazyTable from './modules/lazy-table';
import member from './modules/member';
import permission from './modules/permission';
import mixins from './modules/mixins';

Vue.use(Vuex);

const state = {};
const mutations = {};
const getters = {
    roles(statex, gettersx, root) {
        return root.member.roles;
    },
    routes(statex, gettersx, root) {
        return root.permission.routes;
    },
};
const actions = {};

// 返回 store 实例
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules: {
        baseForm,
        complexTable,
        lazyTable,
        member,
        permission,
        mixins,
    },
});
