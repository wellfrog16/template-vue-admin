export default {
    namespaced: true,
    state: {
        list: [],
    },
    mutations: {
        setVal(state, payload) {
            console.log(99990);
            Object.keys(payload).forEach((key) => {
                if (state[key]) { state[key] = payload[key]; }
            });
        },
    },
    getters: {},
    actions: {},
};
