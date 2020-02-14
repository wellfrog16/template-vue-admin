import { utils } from '@/utils/rivers';
import api from '@/api/mock/person';
import apiStore from '#index/store/common/apiStore';

const store = apiStore(api);
const extraStore = {
    state: {
        multipleSelection: [], // 批量选中的行数据
        infiniteState: null,
        lazy: true, // 是否是滚动加载，如果是需要提供infiniteState
    },
    getters: {
        // 选中行的uid
        multipleSelectionUid(state) {
            return state.multipleSelection.map((item) => item.id).join(',');
        },
    },
    actions: {
        // 删除
        batchRemove({ commit, getters }, { vm }) {
            commit('setState', { loading: true });

            return new Promise((resolve, reject) => {
                // 远程删除
                api.remove({ id: getters.multipleSelectionUid })
                    .then((res) => {
                        vm.$nextTick(() => {
                            commit('setState', { loading: false, overdue: true });
                            resolve(res);
                        });
                    })
                    .catch((err) => reject(err));
            });
        },
    },
};

utils.deepMerge(store, extraStore);

export default store;
