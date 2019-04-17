import { cstore } from '@/helper/lakes';
import api from '@/api/mock/user';
// import { _ } from '@/utils/cdn';

export default {
    namespaced: true,
    state: {
        token: '',
        roles: [],
    },
    mutations: {
        setState: (state, payload) => cstore.mutations.setState(state, payload),
    },
    getters: {
    },
    actions: {
        login({ commit }, userInfo) {
            return new Promise((resolve, reject) => {
                api.login(userInfo).then((res) => {
                    const { data } = res;
                    if (res.success) {
                        commit('setState', { token: data.token, roles: data.roles });
                    }
                    resolve(res.success);
                }).catch((error) => {
                    reject(error);
                });
            });
        },
    },
};
