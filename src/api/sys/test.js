// import qs from 'qs';
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

const translate = w => axios.get('/service/translate', { params: { w } });

export default {
    test,
    translate,
};
