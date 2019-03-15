import { $ } from '@/utils/cdn';

const mutations = {
    setState(state, payload) {
        $.extend(state, payload);
    },
};

export default {
    mutations,
};
