import qs from 'qs';
import instance from '@/helper/axios';

const axios = instance();

const test = () => {
    const options = {
        transformResponse: [(data) => {
            console.log(5678);
            return data;
        }],
    };

    return axios.get('', '11', options);
};

const token = () => {
    const data = {
        client_id: '11',
        client_secret: '22',
        grant_type: 'password',
        username: 'admin',
        password: 'password2',
    };

    const site = window.vueIndex.$helper.site();
    const headers = Object.assign({
        'Content-Type': 'application/x-www-form-urlencoded',
    }, site.headers);
    const conf = { headers };

    return axios.post('/oauth/token', qs.stringify(data), conf);
};

export default {
    test,
    token,
};
