// import qs from 'qs';
import instance from '@/helper/axios';

const axios = instance();

const test = () => {
    const options = {
        transformResponse: [data => {
            console.log(5678);
            return data;
        }],
    };

    return axios.get('', '11', options);
};

const test2 = params => axios.post('/mp-weixin/login', params);
const testGet = params => axios.get('https://jsonplaceholder.typicode.com/posts/1', { params });
const testPost = params => axios.post('https://jsonplaceholder.typicode.com/posts', params);


export default {
    test,
    test2,
    testGet,
    testPost,
};
