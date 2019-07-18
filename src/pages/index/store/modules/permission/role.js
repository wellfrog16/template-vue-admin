import apiStore from '#index/store/common/apiStore';
import { utils } from '@/utils/rivers';
import api from '@/api/sys/permission/role';

const store = apiStore(api);
const extraStore = {
    state: {
        accessToken: '',
        refreshToken: '',
        id: 0,
        name: '',
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
                    .catch(err => reject(err));
            });
        },
    },
};

utils.deepMerge(store, extraStore);

export default store;
