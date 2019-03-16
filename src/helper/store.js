import { _ } from '@/utils/cdn';

function customizer(objValue, srcValue) {
    if (_.isPlainObject(srcValue)) {
        return _.merge(objValue, srcValue);
    }
    return srcValue;
}

const mutations = {
    setState(state, payload) {
        _.mergeWith(state, payload, customizer);
    },
};

export default {
    mutations,
};
