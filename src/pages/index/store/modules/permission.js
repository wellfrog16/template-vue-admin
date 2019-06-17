import { utils } from '@/utils/rivers';

export default {
    namespaced: true,
    state: {
        routes: [],
    },
    mutations: {
        setState: (state, payload) => utils.deepMerge(state, payload),
    },
    getters: {
    },
    actions: {
    },
};
