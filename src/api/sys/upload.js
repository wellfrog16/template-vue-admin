import instance from '@/helper/axios';
import { server } from '@/config';
import { UPLOAD_NAME } from '@/helper/constant';

// const axios = instance({ baseURL: config.server.upload });
const silence = instance({ baseURL: server.upload, notification: false });

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

    const site = window.vueIndex.$helper.site();
    const headers = { 'Content-Type': 'multipart/form-data', ...site.headers };
    const conf = { headers };

    return silence.post('', formData, conf).then((res) => res);
};


export default upload;
