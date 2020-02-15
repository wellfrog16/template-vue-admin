import { config } from '@/helper/lakes';
import { utils } from '@/utils/rivers';
import { _ } from '@/utils/cdn';
import {
    RES_TOTAL,
    RES_LIST,
    PAGE,
    UID,
} from '@/helper/constant';

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

export default function (options) {
    // 接口必要的方法
    const api = {
        list: () => { console.warn('请实现list接口方法'); },
        insert: () => { console.warn('请实现insert接口方法'); },
        update: () => { console.warn('请实现update接口方法'); },
        remove: () => { console.warn('请实现remove接口方法'); },
        // detail: () => { console.warn('请实现detail接口方法'); },
        ...options,
    };

    return {
        namespaced: true,
        state: myState(),
        mutations: {
            setState: (state, payload) => utils.deepMerge(state, payload),

            // 本地删除list指定id的数据
            listRemove(state, payload) {
                const index = state.list.findIndex((item) => item[UID] === payload[UID]);
                index > 0 && state.list.splice(index, 1);
            },

            // 强制重置，去掉baseStore之外的所有属性
            reset: (state) => _.assign(state, myState()),
        },
        getters: {
            // 当前编辑行
            activeRow(state) {
                return state.list.find((item) => item[UID] === state.activeUid);
            },
        },
        actions: {
            // 加载列表
            loadList({ commit, state }, { vm }) {
                !state.lazy && commit('setState', { loading: true });

                return new Promise((resolve, reject) => {
                    api.list(state.filters)
                        .then((res) => {
                            let list = [...res[RES_LIST]];

                            // 如果是滚动加载，且有返回数据
                            if (state.lazy && res[RES_LIST].length > 0) {
                                list = [...state.list, ...res[RES_LIST]];
                                commit('setState', { filters: { [PAGE]: +state.filters[PAGE] + 1 } });
                            }
                            commit('setState', { list, total: res[RES_TOTAL] });
                            vm.$nextTick(() => {
                                commit('setState', { loading: false, overdue: false });

                                // 无限加载的infiniteState需要在“实例state”(modules)中提供infiniteState
                                state.lazy && (res[RES_LIST].length > 0 ? state.infiniteState.loaded() : state.infiniteState.complete());
                                resolve(res);
                            });
                        })
                        .catch((err) => {
                            commit('setState', { loading: false });
                            reject(err);
                        });
                });
            },

            // 删除
            remove({ commit, state }, { vm, row }) {
                commit('setState', { loading: true });

                return new Promise((resolve, reject) => {
                    // 远程删除
                    api.remove({ id: row[UID] })
                        .then((res) => {
                            vm.$nextTick(() => {
                                if (state.lazy) {
                                    commit('listRemove', { id: row[UID] });
                                    commit('setState', { loading: false });
                                } else {
                                    commit('setState', { loading: false, overdue: true });
                                }
                                resolve(res);
                            });
                        })
                        .catch((err) => {
                            commit('setState', { loading: false });
                            reject(err);
                        });
                });
            },

            // 保存
            save({ commit }, { vm, fields }) {
                return new Promise((resolve, reject) => {
                    const save = fields[UID] ? api.update : api.insert;

                    save({ ...fields })
                        .then((res) => {
                            vm.$nextTick(() => {
                                commit('setState', { overdue: true });
                                resolve(res);
                            });
                        })
                        .catch((err) => reject(err));
                });
            },
        },
    };
}
