import Vue from 'vue';
import Vuex from 'vuex';

// 站点模块
import baseForm from './modules/base-form';
import complexTable from './modules/complex-table';
import lazyTable from './modules/lazy-table';
import member from './modules/member';
import security from './modules/security';
import mixins from './modules/mixins';

Vue.use(Vuex);

// 返回 store 实例
export default new Vuex.Store({
    state: {
        errorMessage: '', // 全局错误检测
    },
    mutations: {
        setErrorMessage(state, message) {
            state.errorMessage = message;
        },
        clearErrorMessage(state) {
            state.errorMessage = '';
        },
    },
    getters: {
        // 账户拥有的路由权限
        permissions(state, getters, rootState, rootGetter) {
            return rootGetter['security/role/permissions'];
        },
        // 账户拥有的角色
        roles(state, getters, rootState) {
            return rootState.security.account.roles;
        },
        // 账户拥有的路由
        routes(state, getters, rootState) {
            return rootState.security.account.routes;
        },
    },
    modules: {
        baseForm,
        complexTable,
        lazyTable,
        member,
        security,
        mixins,
    },
});
