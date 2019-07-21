import apiStore from '#index/store/common/apiStore';
import { utils } from '@/utils/rivers';
import api from '@/api/sys/security/role';
import { RES_LIST } from '@/helper/constant';

const store = apiStore(api);
const extraStore = {
    state: {
        accountRoleList: [], // 账户角色的角色信息（带权限）列表
    },
    getters: {
        permissions(state) {
            const arrRoles = state.accountRoleList.reduce((result, item) => result.concat(item.permissions), []);
            return [...new Set(arrRoles)];
        },
    },
    actions: {
        // 根据roles数组加载列表
        listByRoles({ commit }, { codes }) {
            return new Promise((resolve, reject) => {
                api.listByRoles({ codes })
                    .then((res) => {
                        commit('setState', { accountRoleList: res[RES_LIST] });
                        resolve(res[RES_LIST]);
                    })
                    .catch(err => reject(err));
            });
        },
    },
};

utils.deepMerge(store, extraStore);

export default store;
