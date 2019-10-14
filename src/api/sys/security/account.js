import instance from '@/helper/axios';
import config from '@/config';
import utils from '@/utils';

const axios = instance({ baseURL: config.server.easyMock });

const base = '/account';

// online
// const list = params => axios.get(base, { params });
// offline
const list = () => new Promise((resolve) => {
    const data = {
        list: [
            {
                id: 1,
                name: 'admin',
                roles: ['admin', 'editor'],
            },
            {
                id: 2,
                name: 'editor',
                roles: ['editor'],
            },
        ],
        total: 2,
    };

    utils.delay(500).then(() => resolve(data));
});

// online
// const detail = (params) => {
//     const { name } = params;
//     delete params.name;
//     return axios.get(`${base}/${name}`, { params });
// };
// offline
const detail = () => new Promise((resolve) => {
    resolve({
        accountId: 1,
        accountName: 'admin',
        roles: ['admin', 'editor'],
    });
});
const insert = params => axios.post(base, params);
const update = params => axios.put(base, params);
const remove = params => axios.delete(base, { params });

export default {
    list,
    detail,
    insert,
    update,
    remove,
};
