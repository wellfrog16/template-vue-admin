import instance from '@/helper/axios';
import { server } from '@/config';

const axios = instance({ baseURL: server.easyMock });
// const silence = instance({ baseURL: config.server.easyMock, notification: false });

const base = '/oauth';

const list = (params) => axios.get(base, { params });
const detail = (params) => axios.get(base, { params });
const insert = (params) => axios.post(base, params);
const update = (params) => axios.put(base, params);
const remove = (params) => axios.delete(base, { params });

// online
// const token = params => silence.post(`${base}/token`, params);
// const destroy = accessToken => silence.delete(`${base}/token/${accessToken}`);

// offline
const token = () => new Promise((resolve) => {
    resolve({
        access_token: 'Bearer-123456',
        refresh_token: 'Bearer-987654',
    });
});

const destroy = () => new Promise((resolve) => {
    resolve({});
});

export default {
    list,
    detail,
    insert,
    update,
    remove,
    token,
    destroy,
};
