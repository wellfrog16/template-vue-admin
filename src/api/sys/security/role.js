import instance from '@/helper/axios';
import { server } from '@/config';

const axios = instance({ baseURL: server.easyMock });

const base = '/role';

const list = (params) => axios.get(base, { params });

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
            permissions: [
                '/home',
                '/document',
                '/guide',
                '/icon/element-ui',
                '/icon/font-awesome',
                '/ui/element-ui',
                '/ui/table/complex',
                '/ui/table/lazy',
                '/ui/editor',
                '/ui/dialog',
                '/ui/package',
                '/ui/upload',
                '/ui/part',
                '/research/table-form',
                '/research/table-lazy',
                '/echarts/package',
                '/echarts/migration',
                '/security/account',
                '/security/directive',
                '/security/role',
                '/security/test',
                '/i18n',
                '/log',
                '/split-pane',
                '/link-to-template',
                '/iframe',
                '/test',
            ],
        },
        {
            id: 2,
            name: '网站编辑',
            code: 'editor',
            permissions: [
                '/home',
                '/document',
                '/guide',
                '/icon/element-ui',
                '/icon/font-awesome',
                '/ui/element-ui',
                '/ui/table/complex',
                '/ui/table/lazy',
                '/ui/editor',
                '/ui/part',
                '/i18n',
                '/split-pane',
                '/link-to-template',
                '/iframe',
                '/test',
            ],
        }],
    });
});

const detail = (params) => axios.get(base, { params });
const insert = (params) => axios.post(base, params);
const update = (params) => axios.put(base, params);
const remove = (params) => axios.delete(base, { params });

export default {
    list,
    listByRoles,
    detail,
    insert,
    update,
    remove,
};
