import { storage } from '@/utils/rivers';

// vue实例
const vue = {};

/**
 * 存放header等信息
 *
 * @returns json
 */
function site() {
    return {
        username: storage.get('username'),
        destory() {
            storage.remove('username');
        },
    };
}

export default {
    vue,
    site,
};
