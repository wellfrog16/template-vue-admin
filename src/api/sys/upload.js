import instance from '@/helper/axios';
import { UPLOAD_NAME } from '@/helper/constant';

const axios = instance({ baseURL: 'http://127.0.0.1:8001/service/file/upload' });

/**
 * 上传图片或者blob
 *
 * @param {*} param param可以是FormData | blob | file
 * @returns
 */
const upload = (param) => {
    let formData = param;

    if (!(param instanceof FormData)) {
        formData = new FormData();
        formData.append(UPLOAD_NAME, param);
    }

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };

    return axios.post('', formData, config).then(res => res.data);
};


export default upload;
