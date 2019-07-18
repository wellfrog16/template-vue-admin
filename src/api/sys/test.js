import instance from '@/helper/axios';

const axios = instance({ url: 'http://127.0.0.1:8001/test' });

const test = () => {
    const options = {
        transformResponse: [(data) => {
            console.log(5678);
            return data;
        }],
    };

    return axios.post('', '11', options);
};

export default test;
