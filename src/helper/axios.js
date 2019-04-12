import { axios } from '@/utils/cdn';
import { Loading, Notification } from 'element-ui';
import conf from '@/config';
// import helper from '@/helper/helper';

function axiosInstance(args) {
    const defaultOptions = { notification: true, loading: false };
    const options = Object.assign({}, defaultOptions, args);
    const instance = axios.create({
        baseURL: options.url || conf.server.api,
        // withCredentials: true,
        timeout: 50000,
        // paramsSerializer(params) {
        //     return Qs.stringFy(setParams(params), { arrayFormat: 'brackets' });
        // },
    });

    let loadingInstancce = null;

    // toto 根据项目实际调整
    instance.interceptors.request.use((require) => {
        // const site = helper.site();
        const req = require;
        // req.headers.username = site.username;

        // 全屏遮罩，带silence参数则静默处理
        if ((!req.params || (req.params && req.params.silence !== 1)) && options.loading) {
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

        const status = [200, 201, 204];
        const method = ['post', 'put', 'delete'];
        const result = data;

<<<<<<< HEAD
=======
        // console.log(response);
>>>>>>> 5520e98e97e91235d592ca2d343bd65f00937d5d
        if (status.includes(response.status) && method.includes(config.method)) {
            if (data.success) {
                options.notification && Notification.success({ title: '操作成功' });

                // 请求成功，如果无data数据，则添加一个空对象来避免undefined，从而来和500 error(data)的undefined区分
                if (!data.data) { result.data = {}; }
            } else {
                options.notification && Notification.error({ title: data.message });
            }
        } else if (!status.includes(response.status)) {
            options.notification && Notification.error({ title: response.statusText });
        }
        return result;
    }, (error) => {
        loadingInstancce && loadingInstancce.close();
        options.notification && Notification.error({ title: error });
        return error;
        // throw error;
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
