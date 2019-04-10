import { cstore } from '@/helper/lakes';
import api from '@/api/mock/user';
// import { _ } from '@/utils/cdn';

export default {
    namespaced: true,
    state: {
        token: '',
    },
    mutations: {
        setState: (state, payload) => cstore.mutations.setState(state, payload),
    },
    getters: {
    },
    actions: {
        login({ commit }, userInfo) {
            return new Promise((resolve, reject) => {
                api.login(userInfo).then((response) => {
                    // const data = response.data
                    commit('setState', { token: response.token });
                    // setToken(response.data.token)
                    resolve();
                }).catch((error) => {
                    reject(error);
                });
            });
        },
    },
};
