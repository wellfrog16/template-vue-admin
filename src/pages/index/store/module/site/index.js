export default {
    namespaced: true,
    state: {
        username: '',
    },
    mutations: {
        setVal(state, payload) {
            Object.keys(payload).forEach((key) => {
                if (state[key]) { state[key] = payload[key]; }
            });
        },
    },
    getters: {},
    actions: {},
};
