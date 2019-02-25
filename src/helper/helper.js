import utils from '@/utils/utils';

function site() {
    return {
        username: utils.localStorge.get('username'),
    };
}

export default {
    site,
};
