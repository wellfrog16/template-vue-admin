import { cstore } from '@/helper/lakes';
import { auth } from '@/utils/rivers';
import api from '@/api/mock/member';
// import { _ } from '@/utils/cdn';

export default {
    namespaced: true,
    state: {
        token: '',
        roles: [],
    },
    mutations: {
        setState: (state, payload) => cstore.mutations.setState(state, payload),
        logout() {
            this.commit('member/setState', { token: '', roles: [] });
        },
    },
    getters: {
    },
    actions: {
        login({ commit }, userInfo) {
            return new Promise((resolve, reject) => {
                api.login(userInfo).then((res) => {
                    const { data } = res;
                    if (res.success) {
                        commit('setState', { token: data.token });
                        auth.set(data.token);
                    }
                    resolve(res.success);
                }).catch((error) => {
                    reject(error);
                });
            });
        },
        info({ commit }) {
            return new Promise((resolve, reject) => {
                api.info().then((res) => {
                    if (res.roles && res.roles.length > 0) {
                        commit('setState', { roles: res.roles });
                        resolve(res);
                    } else {
                        reject(new Error('角色信息为空'));
                    }
                }).catch(err => reject(err));
            });
        },
    },
};
