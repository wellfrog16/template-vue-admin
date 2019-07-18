import instance from '@/helper/axios';
import config from '@/config';

const axios = instance({ url: config.server.easyMock });

const base = '/role';

const list = params => axios.get(base, { params });
const detail = params => axios.get(base, { params });
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
