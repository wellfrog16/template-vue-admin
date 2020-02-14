import { utils } from '@/utils/rivers';
import createBaseStore from '#index/store/common/baseStore';

const store = createBaseStore();
const extraStore = {
    state: {
        multipleSelection: [], // 批量选中的行数据
    },
    getters: {
        // 选中行的uid
        multipleSelectionUid(state) {
            return state.multipleSelection.map((item) => item.id).join(',');
        },
    },
};

utils.deepMerge(store, extraStore);

export default store;
