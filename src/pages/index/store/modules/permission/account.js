import apiStore from '#index/store/common/apiStore';
import { utils } from '@/utils/rivers';
import oauthApi from '@/api/sys/permission/oauth';
import accountApi from '@/api/sys/permission/account';

const store = apiStore(accountApi);
const extraStore = {
    state: {
        accessToken: '',
        refreshToken: '',
        id: 0,
        name: '',
        roles: [],
    },
    actions: {
        // 登陆
        async login({ commit }, account) {
            try {
                // 获取token
                const oauthRes = await oauthApi.token(account);
                commit('setState', {
                    accessToken: oauthRes.access_token,
                    refreshToken: oauthRes.refresh_token,
                });

                // 获取账户信息
                const accountRes = await accountApi.detail({ name: account.name, silence: 1 });
                commit('setState', {
                    id: accountRes.id,
                    name: accountRes.name,
                    roles: accountRes.roles,
                });

                // todo
                // localStorage
                return true;
            } catch (err) {
                throw err;
            }
        },
    },
};

utils.deepMerge(store, extraStore);

export default store;
