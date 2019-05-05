import { config, cstore } from '@/helper/lakes';
// import { _ } from '@/utils/cdn';

export default {
    namespaced: true,
    state: {
        components: {}, // 目前存放table对象，以便其他组件里操作el-table的方法
        list: [], // 数据列表
        filters: { ...config.page }, // 查询条件
        total: 0, // 数据总数
        loading: false, // loading层
        activeIndex: -1, // 当前编辑的行
        previewVisible: false, // 预览组件显示控制
        editVisible: false, // 编辑组件显示控制
        multipleSelection: [], // 批量选中的行数据
        infiniteState: null, // 滚动加载的状态，具体参考组件的github
        isLoadMore: false, // 是否加载更多数据
    },
    mutations: {
        setState: (state, payload) => cstore.mutations.setState(state, payload),

        // 清空数据并返回原始状态
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
