import { Loading } from 'element-ui';
import { axios } from '@/utils/cdn';
import { server } from '@/config';

const TITLE_SUCESS = '成功';
const TITLE_ERROR = '错误';

/**
 * 格式化返回，根据实际情况调整
 *
 * @param {*} param
 * @returns
 */
function formatResponse(params) {
    let { data } = params;

    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // 如果没有code，增加code属性
    if (!data.code) {
        data.code = data.success ? 200 : 500;
    }

    // 如果没有data，增加data属性
    if (!data.data) {
        data.data = data.resData || {};
    }

    params.data = data;

    console.log(params);

    return params;
}

/**
 * 格式化发送，根据实际情况调整
 *
 * @param {*} param
 * @returns
 */
function formatRequest(params) {
    return params;
}

function axiosInstance(args) {
    const defaultOptions = {
        // 自定义
        notification: true, // notification提示框
        loading: false, // 全局loading层（不推荐）
        retryMax: 1, // 自动重试次数
        retryDelay: 1000, // 重试延迟

        // 原生
        baseURL: server.api || '',
        timeout: 50000,
        // withCredentials: true,
        // paramsSerializer(params) {
        //     return Qs.stringFy(setParams(params), { arrayFormat: 'brackets' });
        // },
    };

    const options = { ...defaultOptions, ...args };
    const instance = axios.create({ ...options });

    let loadingInstancce = null;
    let myReq = null;

    instance.interceptors.request.use((request) => {
        const site = window.vueIndex.$helper.site();
        myReq = formatRequest(request);
        Object.assign(myReq.headers, site.headers); // todo深度合并防止bug

        // 全屏遮罩，loading参数为0则无loading
        if ((!myReq.params || (myReq.params && myReq.params.loading !== 0)) && options.loading) {
            loadingInstancce = Loading.service({
                fullscreen: true,
                spinner: 'el-icon-loading',
                text: '加载中',
            });
        }
        return myReq;
    }, (error) => Promise.reject(error));

    instance.interceptors.response.use((response) => {
        loadingInstancce && loadingInstancce.close();
        const { data, config } = formatResponse(response);

        const status = [200, 201, 204];
        const method = ['post', 'put', 'delete', 'patch'];

        const { $store } = window.vueIndex;

        // 操作完成提示是否显示
        // 仅控制响应返回成功和自定义错误
        // 非预期返回和服务错误，一定提示Notification
        let silence = !options.notification;
        if (myReq.params && myReq.params.silence !== undefined) {
            silence = !!myReq.params.silence;
        }

        if (status.includes(response.status) && method.includes(config.method)) { // 正常响应预设 status 状态
            if (data.code === 200) {
                const messages = {
                    post: '保存成功',
                    put: '修改成功',
                    delete: '删除成功',
                };
                const message = messages[config.method] || '';
                const notification = { title: TITLE_SUCESS, message, type: 'success' };
                !silence && $store.commit('setState', { notification });
            } else {
                let { message } = data;
                message = message || '服务器返回错误';

                const notification = { title: TITLE_ERROR, message, type: 'error' };
                !silence && $store.commit('setState', { notification });
                return Promise.reject(new Error(`${message} code ${data.code}`));
            }
        } else if (!status.includes(response.status)) { // 非预设 status 状态，需要看具体返回类型决定如果处理
            const message = response.statusText;
            const notification = { title: TITLE_ERROR, message, type: 'error' };
            $store.commit('setState', { notification });
            return Promise.reject(new Error(message));
        }
        return data.data;
    }, (error) => { // 5xx, 4xx
        const { config } = error;
        let { message } = error;
        const noReryCode = [401];

        config.retryCount = config.retryCount || 0;
        config.retryCount += 1;

        message.match(/.+code\s(\d{3})$/g);
        const code = +RegExp.$1;

        // 异常处理
        if (
            !config
            || !config.retryMax
            || config.retryCount >= config.retryMax
            || noReryCode.includes(code)
        ) {
            const { $router, $store } = window.vueIndex;

            // 无权限，refresh刷新code
            if (code === 401) {
                message = '登陆超时';
                setTimeout(() => $router.push({ path: '/login' }), 0);
            }

            loadingInstancce && loadingInstancce.close();
            const notification = { title: TITLE_ERROR, message, type: 'error' };
            $store.commit('setState', { notification });
            return Promise.reject(error);
        }

        const backoff = new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, config.retryDelay || 1);
        });

        return backoff.then(() => instance(config));
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
