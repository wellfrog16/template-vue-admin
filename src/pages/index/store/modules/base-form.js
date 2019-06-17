import { createBaseStore } from '#index/helper/store';
import { UID } from '@/helper/constant';
import { utils } from '@/utils/rivers';

const store = createBaseStore();
const extraStore = {
    state: {
        multipleSelection: [], // 批量选中的行数据
    },
    getters: {
        // 选中行的uid
        multipleSelectionUid(state) {
            return state.multipleSelection.map(item => item[UID]).join(',');
        },
    },
};

utils.deepMerge(store, extraStore);

export default store;
