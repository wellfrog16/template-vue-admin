import { config } from '@/helper/lakes';
import { utils } from '@/utils/rivers';
import { _ } from '@/utils/cdn';

// 产生基础state的副本
function myState() {
    return {
        list: [], // 数据列表
        filters: { // 查询条件
            ...config.page,
        },
        total: 0, // 数据总数
        loading: false, // loading层
        editVisible: false, // 编辑组件显示控制
        overdue: false, // 数据是否过期，是则立刻刷新重新拉取
        activeUid: 0, // 当前编辑行
    };
}

export default function baseStore(options) {
    // 接口必要的方法
    const api = Object.assign({
        list: () => { console.warn('请实现list接口方法'); },
        insert: () => { console.warn('请实现insert接口方法'); },
        update: () => { console.warn('请实现update接口方法'); },
        remove: () => { console.warn('请实现remove接口方法'); },
        detail: () => { console.warn('请实现detail接口方法'); },
    }, options);

    return {
        namespaced: true,
        state: myState(),
        mutations: {
            setState: (state, payload) => utils.deepMerge(state, payload),

            // 强制重置，去掉baseStore之外的所有属性
            reset: state => _.assign(state, myState()),
        },
        getters: {
            // 当前编辑行
            activeRow(state) {
                return state.list.find(item => item.id === state.activeUid);
            },
        },
        actions: {
            loadList() {
                console.log(api);
            },
        },
    };
}
