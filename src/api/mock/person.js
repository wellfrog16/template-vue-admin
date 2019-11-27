import Mock from 'mockjs';
import utils from '@/utils';
// import instance from '@/helper/axios';

// const axios = instance({ baseURL: 'https://easy-mock.com/mock/5c7b997cd764b271d20acae8' });

// const base = '/admin/user';

// online
// const list = params => axios.get(base, { params });
// const detail = params => axios.get(base, { params });
// const insert = params => axios.post(base, params);
// const update = params => axios.put(base, params);
// const updateStatus = params => axios.put(base, params);
// const remove = params => axios.delete(base, { params });

// ----------------------------------------------------------------
// offline
const list = (params) => new Promise((resolve) => {
    const { ps } = params;
    let { education, status } = params;

    const edus = ['博士研究生', '硕士研究生', '本科', '专科', '其他'];
    education = (edus.includes(education) ? education : '') || '@pick(' + edus + ')'; // eslint-disable-line

    const st = ['在职', '待业', '退休', '创业', '游学'];
    status = (st.includes(status) ? status : '') || '@pick(' + st + ')'; // eslint-disable-line

    const key = `list|${ps}`;
    const data = Mock.mock({
        total: '@natural(100, 1000)',
        [key]: [{
            guid: '@guid',
            id: '@id',
            name: '@cname',
            gender: '@pick(["男", "女"])',
            county: '@county(true)',
            email: '@email',
            zip: '@zip',
            income: '@float(100000, 10000000, 4, 4)',
            remark: '@ctitle(15, 30)',
            education,
            status,
            birthday: '@date',
        }],
    });

    utils.delay(500).then(() => resolve(data));
});

const detail = list;

const insert = () => new Promise((resolve) => {
    resolve(Mock.mock({
        guid: '@guid',
    }));
});

const update = () => new Promise((resolve) => {
    resolve(true);
});

const updateStatus = () => new Promise((resolve) => {
    resolve(true);
});

const remove = () => new Promise((resolve) => {
    resolve(true);
});

export default {
    detail,
    list,
    insert,
    update,
    remove,
    updateStatus,
};
