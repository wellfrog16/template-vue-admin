import helper from '@/helper/helper';
import { _ } from '@/utils/cdn';

function customizer(objValue, srcValue) {
    if (_.isPlainObject(srcValue)) {
        return _.mergeWith(objValue, srcValue, customizer);
    }
    return srcValue;
}

const mutations = {
    setData(state, payload) {
        helper.mergeParam(state, payload);
    },
    setState(state, payload) {
        _.mergeWith(state, payload, customizer);
    },
};

export default {
    mutations,
};
