import instance from '@/helper/axios';

const axios = instance('https://easy-mock.com/mock/5c7b997cd764b271d20acae8');

const base = '/admin/user';

const list = params => axios.get(base, { params }).then(res => res.data);
const insert = params => axios.post(base, params).then(res => res.data);
const update = params => axios.put(base, params).then(res => res.data);
const updateStatus = params => axios.put(base, params).then(res => res.data);
const remove = params => axios.delete(base, { params }).then(res => res.data);

export default {
    list,
    insert,
    update,
    remove,
    updateStatus,
};
