import { cstore } from '@/helper/lakes';

export default {
    namespaced: true,
    state: {
        routes: [],
    },
    mutations: {
        setState: (state, payload) => cstore.mutations.setState(state, payload),
    },
    getters: {
    },
    actions: {
    },
};
