import { Loading, Notification } from 'element-ui';
import { axios } from '@/utils/cdn';
import conf from '@/config';
// import store from '#index/router';
import { helper } from '@/helper/lakes';

const TITLE_SUCESS = '成功';
const TITLE_ERROR = '错误';

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
    }, error => Promise.reject(error));

    // instance.interceptors.request.use(async require => require);

    instance.interceptors.response.use((response) => {
        loadingInstancce && loadingInstancce.close();
        const { data, config } = response;

        const status = [200, 201, 204];
        const method = ['post', 'put', 'delete', 'patch'];
        const result = data;

        if (status.includes(response.status) && method.includes(config.method)) { // 正常响应预设 status 状态
            if (data.success || data.code === 200) {
                const messages = {
                    post: '保存成功',
                    put: '修改成功',
                    delete: '删除成功',
                };
                const message = messages[config.method] || '';
                options.notification && Notification.success({ title: TITLE_SUCESS, message });

                // 请求成功，如果无data数据，则添加一个空对象来避免undefined，从而来和500 error(data)的undefined区分
                if (!data.data) { result.data = {}; }
            } else {
                let { message } = data;
                message = message || '服务器返回错误';
                Notification.error({ title: TITLE_ERROR, message });
                return Promise.reject(new Error(message));
            }
        } else if (!status.includes(response.status)) { // 非预设 status 状态，需要看具体返回类型决定如果处理
            const message = response.statusText;
            Notification.error({ title: TITLE_ERROR, message });
            return Promise.reject(new Error(message));
        }
        return result;
    }, (error) => { // 5xx, 4xx
        const { $router } = helper.vue;
        let { message } = error;
        message.match(/.+code\s(\d{3})$/g);
        const code = +RegExp.$1;

        // 无权限
        if (code === 401) {
            message = '登陆超时';
            $router.push({ path: '/login' });
        }

        loadingInstancce && loadingInstancce.close();
        Notification.error({ title: TITLE_ERROR, message });
        return Promise.reject(error);
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
