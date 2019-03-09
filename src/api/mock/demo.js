import instance from '@/helper/axios';

const axios = instance('https://easy-mock.com/mock/5c7b997cd764b271d20acae8');

const base = '/admin';

const list = params => axios.get(`${base}/user`, { params }).then(res => res.data);

export default {
    list,
};
