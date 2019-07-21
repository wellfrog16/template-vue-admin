import apiStore from '#index/store/common/apiStore';
import { utils, storage } from '@/utils/rivers';
import oauthApi from '@/api/sys/security/oauth';
import accountApi from '@/api/sys/security/account';
import { _ } from '@/utils/cdn';
import { STORAGE_SITE } from '@/helper/constant';

const store = apiStore(accountApi);
const extraStore = {
    state: {
        accessToken: '',
        refreshToken: '',
        id: 0,
        name: '', // 账户名称
        roles: [], // 账户角色
        routes: [], // 账户路由
    },
    actions: {
        // 登陆
        async login({ commit }, account) {
            try {
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
                    id: accountRes.id,
                    name: accountRes.name,
                    roles: accountRes.roles,
                };
                commit('setState', {
                    id: accountRes.id,
                    name: accountRes.name,
                    roles: accountRes.roles,
                });

                // 保存至localStorage
                site = _.assign(site, acc);
                storage.set(STORAGE_SITE, site, { encrypt: true });
                return true;
            } catch (err) {
                throw err;
            }
        },
    },
};

utils.deepMerge(store, extraStore);

export default store;
