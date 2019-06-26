import instance from '@/helper/axios';

const axios = instance({ url: 'http://127.0.0.1:8001/service/file/upload' });

const upload = (blob) => {
    const formData = new FormData();
    formData.append('avatar', blob);

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };

    return axios.post('', formData, config).then(res => res.data);
};


export default {
    upload,
};
