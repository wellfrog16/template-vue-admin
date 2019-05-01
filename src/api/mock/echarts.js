import instance from '@/helper/axios';

const axios = instance({ url: 'https://easy-mock.com/mock/5c7b997cd764b271d20acae8' });

const base = '/admin';

const flights = () => axios.get(`${base}/flights`).then(res => res.data);

export default {
    flights,
};
