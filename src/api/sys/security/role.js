import instance from '@/helper/axios';
import config from '@/config';

const axios = instance({ baseURL: config.server.easyMock });

const base = '/role';

const list = params => axios.get(base, { params });

// online
// const listByRoles = (params) => {
//     params.codes = Array.isArray(params.codes) ? params.codes.join(',') : '';
//     return axios.get(base, { params });
// };

// offline
const listByRoles = () => new Promise((resolve) => {
    resolve({
        list: [{
            id: 1,
            name: '管理员',
            code: 'admin',
            // eslint-disable-next-line
            permissions: ["/home", "/document", "/guide", "/icon/element-ui", "/icon/font-awesome", "/ui/package", "/ui/table/complex", "/ui/table/lazy", "/ui/editor", "/ui/dialog", "/ui/upload", "/ui/part", "/research/mixins", "/research/form", "/echarts/package", "/echarts/migration", "/security/account", "/security/directive", "/security/role", "/security/test", "/log", "/split-pane", "https://github.com/wellfrog16/template-vue-admin", "/iframe"],
        },
        {
            id: 2,
            name: '网站编辑',
            code: 'editor',
            // eslint-disable-next-line
            permissions: ["/home", "/document", "/guide", "/icon/element-ui", "/icon/font-awesome", "/ui/package", "/ui/table/complex", "/ui/table/lazy", "/ui/editor", "/ui/part", "/split-pane", "https://github.com/wellfrog16/template-vue-admin", "/iframe"],
        }],
    });
});

const detail = params => axios.get(base, { params });
const insert = params => axios.post(base, params);
const update = params => axios.put(base, params);
const remove = params => axios.delete(base, { params });

export default {
    list,
    listByRoles,
    detail,
    insert,
    update,
    remove,
};
