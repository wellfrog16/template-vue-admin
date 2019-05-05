import { config, cstore } from '@/helper/lakes';
// import { _ } from '@/utils/cdn';

export default {
    namespaced: true,
    state: {
        components: {}, // 目前存放table对象，以便其他组件里操作el-table的方法
        list: [],
        filters: { ...config.page },
        total: 0,
        loading: false,
        activeIndex: -1,
        previewVisible: false,
        editVisible: false,
        multipleSelection: [],
        infiniteState: null,
        isLoadMore: false,
    },
    mutations: {
        setState: (state, payload) => cstore.mutations.setState(state, payload),
        setFilters: (state, payload) => cstore.mutations.setData(state.filters, payload),
        clearList() {
            this.commit('lazyTable/setState', { list: [], filters: { p: config.page.p, ps: config.page.ps } });
        },
        listRemove(state, payload) {
            payload.multipleSelection.forEach((row) => {
                const index = state.list.findIndex(item => item.guid === row.guid);
                state.list.splice(index, 1);
            });
        },
        listUpdateStatus(state, payload) {
            state.multipleSelection.forEach((item) => {
                item.status = payload.status;
            });
            state.multipleSelection = [];
        },
    },
    getters: {
        multipleSelectionGuid(state) {
            const result = [];
            state.multipleSelection.forEach(item => result.push(item.guid));
            return result.join(',');
        },
    },
    actions: {
    },
};
