import instance from '@/helper/axios';

const axios = instance();

const base = '/oauth';

const list = params => axios.get(base, { params });
const detail = params => axios.get(base, { params });
const insert = params => axios.post(base, params);
const update = params => axios.put(base, params);
const remove = params => axios.delete(base, { params });

function login(params) {
    // 真实环境
    return axios.post(base, params);
}

export default {
    list,
    detail,
    insert,
    update,
    remove,
    login,
};
