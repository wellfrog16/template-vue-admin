import instance from '@/helper/axios';

const axios = instance({ url: 'http://127.0.0.1:8001/test' });

const test = () => axios.post('');

export default test;
