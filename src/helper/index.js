import { storage } from '@/utils/rivers';
import { STORAGE_SITE } from '@/helper/constant';

// vue实例
const vue = {};

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
            authorization: mySite.accessToken,
        },

        // 方法
        destory() {
            storage.remove(STORAGE_SITE);
        },
    };
}

export default {
    vue,
    site,
};
