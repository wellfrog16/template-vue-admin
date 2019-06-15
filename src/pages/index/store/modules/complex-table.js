import { config, cstore } from '@/helper/lakes';
import { PAGE, UID } from '@/helper/constant';

export default {
    namespaced: true,
    state: {
        components: {}, // 目前存放table对象，以便其他组件里操作el-table的方法（比如清除选中行，本地批量更新用）
        path: '/ui/table/complex', // 当前组件地址，用于地址栏（带查询参数）跳转
        list: [], // 数据列表
        filters: { ...config.page }, // 查询条件
        total: 0, // 数据总数
        loading: false, // loading层
        activeUid: 0, // 当前编辑的行
        previewVisible: false, // 预览组件显示控制
        editVisible: false, // 编辑组件显示控制
        colums: ['income', 'id'], // 活动列控制
        multipleSelection: [], // 数据是否过期，是则立刻刷新重新拉取
    },
    mutations: {
        setState: (state, payload) => cstore.mutations.setState(state, payload),

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
        activeRow: state => state.list.find(item => item[UID] === state.activeUid),

        // 选中行的guid
        multipleSelectionUid(state) {
            return state.multipleSelection.map(item => item.guid).join(',');
        },
    },
    actions: {
    },
};
