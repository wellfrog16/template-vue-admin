import Vue from 'vue';
import Vuex from 'vuex';
import { utils } from '@/utils/rivers';

// 站点模块
import baseForm from './modules/base-form';
import complexTable from './modules/complex-table';
import lazyTable from './modules/lazy-table';
import security from './modules/security';
import research from './modules/research';

Vue.use(Vuex);

// 返回 store 实例
export default new Vuex.Store({
    state: {
        message: null, // 全局错误检测
        notification: null,
        lang: '', // 语言
    },
    mutations: {
        setState: (state, payload) => utils.deepMerge(state, payload),
        clearMessage: state => { state.message = null; },
        clearNotification: state => { state.notification = null; },
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
        security,
        research,
    },
});
