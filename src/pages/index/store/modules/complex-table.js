import { config, cstore } from '@/helper/lakes';
// import { _ } from '@/utils/cdn';

export default {
    namespaced: true,
    state: {
        components: {}, // 目前存放table对象，以便其他组件里操作el-table的方法（比如清除选中行，本地批量更新用）
        path: '/ui/table/complex', // 当前组件地址，用于地址栏（带查询参数）跳转
        list: [], // 数据列表
        filters: { ...config.page }, // 查询条件
        total: 0, // 数据总数
        loading: false, // loading层
        activeIndex: -1, // 当前编辑的行
        previewVisible: false, // 预览组件显示控制
        editVisible: false, // 编辑组件显示控制
        colums: ['income', 'id'], // 活动列控制
        multipleSelection: [], // 数据是否过期，是则立刻刷新重新拉取
    },
    mutations: {
        setState: (state, payload) => cstore.mutations.setState(state, payload),

        // 浏览器地址带参数用
        setFilters: (state, payload) => cstore.mutations.setFilters(state.filters, payload),

        // 本地列表更新
        listUpdate: (state, payload) => state.list.splice(state.activeIndex, 1, payload.item),

        // 本地列表插入数据
        listInsert: (state, payload) => state.list.splice(0, 0, payload.item),

        // 本地删除
        listRemove(state, payload) {
            payload.multipleSelection.forEach((row) => {
                const index = state.list.findIndex(item => item.guid === row.guid);
                state.list.splice(index, 1);
            });
        },

        // 本地批量更新状态
        listUpdateStatus(state, payload) {
            state.multipleSelection.forEach((item) => {
                item.status = payload.status;
            });
            state.multipleSelection = [];
        },
    },
    getters: {
        // 查询地址带参数
        queryPath(state) {
            return {
                path: state.path,
                query: state.filters,
            };
        },

        // 当前编辑行
        activeRow: state => state.list[state.activeIndex] || {},

        // 选中行的guid
        multipleSelectionGuid(state) {
            return state.multipleSelection.map(item => item.guid).join(',');
        },
    },
    actions: {
    },
};
