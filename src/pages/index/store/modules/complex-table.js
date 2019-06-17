import { createBaseStore } from '#index/helper/store';
import { UID, PAGE } from '@/helper/constant';
import { utils } from '@/utils/rivers';

const store = createBaseStore();
const extraStore = {
    state: {
        multipleSelection: [], // 批量选中的行数据
        components: {}, // 目前存放table对象，以便其他组件里操作el-table的方法（比如清除选中行，本地批量更新用）
        path: '/ui/table/complex', // 当前组件地址，用于地址栏（带查询参数）跳转
        previewVisible: false, // 预览组件显示控制
        colums: ['income', 'id'], // 活动列控制
    },
    mutations: {
        // 刚打开页面时，总数total为0，分页没有足够的数量，导致pagination组件中current.page只能为1
        // 因此在加载完数据后重新设置一次。
        // 先设置为1，再设置回去，是防止缓存无法触发set事件
        // 仅仅在查询条件保持在地址栏有这个问题
        fixPage(state) {
            const p = +state.filters[PAGE];
            state.filters[PAGE] = 1;
            setTimeout(() => {
                state.filters[PAGE] = p;
            }, 0);
        },

        // 本地列表更新
        listUpdate(state, payload) {
            const index = state.list.findIndex(item => item[UID] === payload.item[UID]);
            state.list.splice(index, 1, payload.item);
        },

        // 本地列表插入数据
        listInsert: (state, payload) => state.list.splice(0, 0, payload.item),

        // 本地删除
        listRemove(state, payload) {
            payload.multipleSelection.forEach((row) => {
                const index = state.list.findIndex(item => item[UID] === row.guid);
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

        // 选中行的guid
        multipleSelectionUid(state) {
            return state.multipleSelection.map(item => item[UID]).join(',');
        },
    },
};

utils.deepMerge(store, extraStore);

export default store;
