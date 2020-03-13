import { storage } from '@/utils/rivers';
import { STORAGE_SITE, STORAGE_SERVER } from '@/helper/constant';
import config from '@/config';

/**
 * 存放header等信息
 *
 * @returns json
 */
function site() {
    // 站点登陆信息，数据在登陆逻辑里
    const mySite = storage.get(STORAGE_SITE, { encrypt: true }) || {};

    // 站点服务器信息
    const serverId = storage.get(STORAGE_SERVER) || 1;
    const server = config.servers.find(s => s.id === serverId) || {};

    return {
        // 属性等
        ...mySite,
        server,
        headers: {
            Authorization: mySite.accessToken,
        },

        // 方法
        destroy() {
            storage.remove(STORAGE_SITE);
        },
    };
}

function restful(axios, base) {
    const insert = params => axios.post(base, params);
    const update = (id, params) => axios.put(`${base}/${id}`, params);
    const detail = id => axios.get(`${base}/${id}`);
    const remove = id => axios.delete(`${base}/${id}`);

    return {
        insert,
        update,
        detail,
        remove,
    };
}

/**
 * 把半路径的图片，拼接图片服务器地址成为全路径
 * 根据项目修改拼接方式
 *
 * @param {String} url
 * @returns
 */
function combineImageUrl(url) {
    // 站点服务器信息
    const serverId = storage.get(STORAGE_SERVER) || 1;
    const server = config.servers.find(s => s.id === serverId) || {};

    return server.image + url;
}

export default {
    site,
    restful,
    config,
    combineImageUrl,
};
