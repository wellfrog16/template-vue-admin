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
            const username = userInfo.username.trim();
            return new Promise((resolve, reject) => {
                api.login(username, userInfo.password).then((response) => {
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
