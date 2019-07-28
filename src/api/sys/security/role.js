import instance from '@/helper/axios';
import config from '@/config';

const axios = instance({ baseURL: config.server.easyMock });

const base = '/role';

const list = params => axios.get(base, { params });
const listByRoles = (params) => {
    params.codes = Array.isArray(params.codes) ? params.codes.join(',') : '';
    return axios.get(base, { params });
};
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
