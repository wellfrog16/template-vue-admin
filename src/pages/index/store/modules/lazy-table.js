
import { utils } from '@/utils/rivers';
import createBaseStore from '#index/store/common/baseStore';

const store = createBaseStore();
const extraStore = {
    state: {
        components: {}, // 目前存放table对象，以便其他组件里操作el-table的方法
        infiniteState: null, // 滚动加载的状态，具体参考组件的github
        isLoadMore: false, // 是否加载更多数据
        multipleSelection: [], // 批量选中的行数据
    },
    mutations: {
        // // 清空数据并返回原始状态
        // reset(state) {
        //     state.list = [];
        //     state.filters = { ...config.page };
        // },

        listRemove(state, payload) {
            payload.multipleSelection.forEach(row => {
                const index = state.list.findIndex(item => item.id === row.id);
                state.list.splice(index, 1);
            });
        },
        listUpdateStatus(state, payload) {
            state.multipleSelection.forEach(item => {
                item.status = payload.status;
            });
            state.multipleSelection = [];
        },
    },
    getters: {
        // 选中行的uid
        multipleSelectionUid(state) {
            return state.multipleSelection.map(item => item.id).join(',');
        },
    },
};

utils.deepMerge(store, extraStore);

export default store;
