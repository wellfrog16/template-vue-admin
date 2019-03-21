import { config, cstore } from '@/helper/lakes';
// import { _ } from '@/utils/cdn';

export default {
    namespaced: true,
    state: {
        path: '/ui/table/complex',
        list: [],
        filters: { ...config.page },
        total: 0,
        loading: false,
        activeIndex: -1,
        previewVisiable: false,
        editVisiable: false,
        colums: ['income', 'id'],
        multipleSelection: [],
    },
    mutations: {
        setState: (state, payload) => cstore.mutations.setState(state, payload),
        setFilters: (state, payload) => cstore.mutations.setData(state.filters, payload),
        listUpdate: (state, payload) => state.list.splice(state.activeIndex, 1, payload.item),
        listInsert: (state, payload) => state.list.splice(0, 0, payload.item),
        listRemove: state => state.list.splice(state.activeIndex, 1),
        listBatchRemove(state) {
            state.multipleSelection.forEach((row) => {
                const index = state.list.findIndex(item => item.guid === row.guid);
                state.list.splice(index, 1);
            });
        },
    },
    getters: {
        queryPath(state) {
            return {
                path: state.path,
                query: state.filters,
            };
        },
        activeRow: state => state.list[state.activeIndex] || {},
        multipleSelectionGuid(state) {
            const result = [];
            state.multipleSelection.forEach(item => result.push(item.guid));
            return result.join(',');
        },
    },
    actions: {
    },
};
