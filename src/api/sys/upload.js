import instance from '@/helper/axios';

const axios = instance({ url: 'http://127.0.0.1:8001/service/file/upload' });

const upload = (blob) => {
    const fd = new FormData();
    fd.append('avatar', blob);

    const config = {
        // method: 'post',
        // data: fd,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };

    return axios.post('', fd, config).then(res => res.data);
};


export default {
    upload,
};
