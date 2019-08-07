import apiStore from '#index/store/common/apiStore';
import { utils, storage } from '@/utils/rivers';
import { helper } from '@/helper/lakes';
import oauthApi from '@/api/sys/security/oauth';
import accountApi from '@/api/sys/security/account';
import { _ } from '@/utils/cdn';
import { STORAGE_SITE } from '@/helper/constant';

const extraState = {
    accessToken: '',
    refreshToken: '',
    accountId: 0,
    accountName: '', // 账户名称
    roles: [], // 账户角色
    routes: [], // 账户路由
};
const store = apiStore(accountApi);
const extraStore = {
    state: {
        ...extraState,
    },
    actions: {
        // 登陆
        async login({ commit, dispatch }, account) {
            try {
                // 先清理数据残留
                dispatch('clear');

                // 获取token
                const oauthRes = await oauthApi.token(account);
                const token = {
                    accessToken: oauthRes.access_token,
                    refreshToken: oauthRes.refresh_token,
                };
                commit('setState', token);

                // 保存至localStorage
                let site = _.assign({}, token);
                storage.set(STORAGE_SITE, site, { encrypt: true });

                // 获取账户信息
                const accountRes = await accountApi.detail({ name: account.name, silence: 1 });
                const acc = {
                    accountId: accountRes.id,
                    accountName: accountRes.name,
                    roles: accountRes.roles,
                };
                commit('setState', acc);

                // 保存至localStorage
                site = _.assign(site, acc);
                storage.set(STORAGE_SITE, site, { encrypt: true });
                return true;
            } catch (err) {
                throw err;
            }
        },

        // 登出
        async logout({ state, dispatch }) {
            try {
                await oauthApi.destroy(state.accessToken);
                return true;
            } catch (err) {
                throw err;
            } finally {
                dispatch('clear');
            }
        },

        // 清除vuex和localStorage中的登录信息
        clear({ commit }) {
            helper.site().destroy();
            commit('setState', { ...extraState });
            commit('security/role/setState', { accountRoleList: [] }, { root: true });
        },
    },
};

utils.deepMerge(store, extraStore);

export default store;
