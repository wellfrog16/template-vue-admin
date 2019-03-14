export default {
    namespaced: true,
    state: {
        list: [],
        fields: null,
        total: 0,
        loading: false,
    },
    mutations: {
        setVal(state, payload) {
            console.log(payload);
            Object.keys(payload).forEach((key) => {
                if (state[key] !== undefined) { state[key] = payload[key]; }
            });
        },
    },
    getters: {},
    actions: {},
};
