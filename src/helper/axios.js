import { axios } from '@/utils/cdn';
import { Loading, Notification } from 'element-ui';
import conf from '@/config';
import helper from '@/helper/helper';

function axiosInstance(url) {
    const instance = axios.create({
        baseURL: url || conf.server.api,
        // withCredentials: true,
        timeout: 5000,
        // paramsSerializer(params) {
        //     return Qs.stringFy(setParams(params), { arrayFormat: 'brackets' });
        // },
    });

    let loadingInstancce = null;

    // toto 根据项目实际调整
    instance.interceptors.request.use((require) => {
        const site = helper.site();
        const req = require;
        req.headers.username = site.username;

        // 全屏遮罩，带silence参数则静默处理
        if (!req.params || (req.params && req.params.silence !== 1)) {
            loadingInstancce = Loading.service({
                fullscreen: true,
                spinner: 'el-icon-loading',
                text: '加载中',
            });
        }
        return req;
    });

    // instance.interceptors.request.use(async require => require);

    instance.interceptors.response.use((response) => {
        loadingInstancce && loadingInstancce.close();
        const { data, config } = response;
        // console.log(response);
        if ((response.status === 200 || response.status === 201 || response.status === 204)
            && (config.method === 'post' || config.method === 'put' || config.method === 'delete')) {
            Notification.success({
                title: '操作成功',
            });
        } else if (response.status !== 200 && response.status !== 201 && response.status !== 204) {
            Notification.error({
                title: response.statusText,
            });
        }
        return data;
    }, (error) => {
        loadingInstancce && loadingInstancce.close();
        return error;
    });

    return instance;
}

/**
 * 传参时，把值为undefined的，换成空
 *
 * @param {*} params
 */
// function setParams(params) {
//     const p = params;
//     Object.keys(p).forEach((key) => {
//         if (typeof p[key] === 'object') { setParams(p[key]); }
//         if (typeof p[key] === 'undefined') { p[key] = ''; }
//     });
// }

export default axiosInstance;
