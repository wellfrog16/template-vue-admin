import instance from '@/helper/axios';
import config from '@/config';

const axios = instance({ baseURL: config.server.easyMock });

const base = '/account';

const list = params => axios.get(base, { params });
const detail = (params) => {
    const { name } = params;
    delete params.name;
    return axios.get(`${base}/${name}`, { params });
};
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
