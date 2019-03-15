import { config, cstore } from '@/helper/lakes';

export default {
    namespaced: true,
    state: {
        ...config.page,
        path: '/ui/table/complex',
        list: [],
        filters: null,
        total: 0,
        loading: false,
    },
    mutations: {
        setState: (state, payload) => cstore.mutations.setState(state, payload),
        setVal(state, payload) {
            // console.log(payload);
            Object.keys(payload).forEach((key) => {
                if (state[key] !== undefined) { state[key] = payload[key]; }
            });
        },
        setFilters(state, payload) {
            // console.log(payload);
            Object.keys(payload).forEach((key) => {
                if (state.filters[key] !== undefined) { state.filters[key] = payload[key]; }
            });
        },
    },
    getters: {
        queryParam(state) {
            const param = {
                ...state.fields,
                p: state.p,
                ps: state.ps,
            };

            return param;
        },
        queryPath(state, getters) {
            return {
                path: state.path,
                query: getters.queryParam,
            };
        },
    },
    actions: {
    },
};
