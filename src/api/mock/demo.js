import instance from '@/helper/axios';

const axios = instance('http://localhost:8080');

const base = '/mock';

const list = params => axios.get(`${base}/list`, {params}).then(res => res.data);

export default {
    list
};
