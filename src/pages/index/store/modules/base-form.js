import { createBaseStore } from '#index/helper/store';
import { utils } from '@/utils/rivers';

const store = createBaseStore();
const extraStore = {
    state: {
        multipleSelection: [], // 批量选中的行数据
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
