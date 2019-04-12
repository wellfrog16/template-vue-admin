import instance from '@/helper/axios';

const axios = instance({ url: 'https://easy-mock.com/mock/5c7b997cd764b271d20acae8' });

const base = '/admin';

const login = params => axios.post(`${base}/login`, params).then(res => res.data);

export default {
    login,
};
