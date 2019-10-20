import { storage } from '@/utils/rivers';
import { STORAGE_SITE } from '@/helper/constant';
import config from '@/config';

/**
 * 存放header等信息
 *
 * @returns json
 */
function site() {
    const mySite = storage.get(STORAGE_SITE, { encrypt: true }) || {};
    return {
        // 属性等
        ...mySite,
        headers: {
            Authorization: mySite.accessToken,
        },

        // 方法
        destroy() {
            storage.remove(STORAGE_SITE);
        },
    };
}

export default {
    site,
    config,
};
