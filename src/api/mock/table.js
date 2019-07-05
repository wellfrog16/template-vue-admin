import instance from '@/helper/axios';

const axios = instance({ url: 'https://easy-mock.com/mock/5c7b997cd764b271d20acae8' });

const base = '/admin/user';

const list = params => axios.get(base, { params });
const detail = params => axios.get(base, { params });
const insert = params => axios.post(base, params);
const update = params => axios.put(base, params);
const updateStatus = params => axios.put(base, params);
const remove = params => axios.delete(base, { params });

export default {
    list,
    detail,
    insert,
    update,
    remove,
    updateStatus,
};
