import utils from '@/utils/utils';

/**
 * 存放header等信息
 *
 * @returns json
 */
function site() {
    return {
        username: utils.localStorage.get('username'),
        destory() {
            utils.localStorage.clear('username');
        },
        isActive() {
            return !utils.isEmpty(this.username);
        },
    };
}

export default {
    site,
};
