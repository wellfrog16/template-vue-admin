import { storage } from '@/utils/rivers';

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
    site,
};
