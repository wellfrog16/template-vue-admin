// import config from '@/config';
import { _ } from '@/utils/cdn';
// import { PAGE, PAGE_SIZE } from '@/helper/constant';

// function mergeParam(state, srcValue) {
//     Object.keys(state).forEach((key) => {
//         // 如果还是对象
//         if (_.isPlainObject(state[key]) && srcValue[key]) { mergeParam(state[key], srcValue[key]); }

//         state[key] = srcValue[key] || '';
//         if (key === PAGE) { state[key] = srcValue[key] || config.page[PAGE]; }
//         if (key === PAGE_SIZE) { state[key] = srcValue[key] || config.page[PAGE_SIZE]; }
//     });
// }

function customizer(objValue, srcValue) {
    if (_.isPlainObject(srcValue)) {
        return _.mergeWith(objValue, srcValue, customizer);
    }
    return srcValue;
}

const mutations = {
    // setFilters(state, payload) {
    //     mergeParam(state, payload);
    // },
    setState(state, payload) {
        _.mergeWith(state, payload, customizer);
    },
};

export default {
    mutations,
};
