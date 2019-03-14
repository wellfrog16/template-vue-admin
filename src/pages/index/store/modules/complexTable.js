import { config } from '@/helper/lakes';

export default {
    namespaced: true,
    state: {
        ...config.page,
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
    getters: {
        queryParam(state) {
            const param = {
                ...state.fields,
                page: state.page,
                pagesize: state.pagesize,
            };

            return param;
        },
    },
    actions: {
    },
};
