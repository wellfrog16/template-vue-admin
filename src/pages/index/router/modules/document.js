import Layout from '#index/views/layout/Index.vue';
// import Root from '../../../components/Root.vue';

const route = {
    path: '/document',
    component: Layout,
    redirect: { path: '/document/index' },
    meta: {
        title: '说明文档',
        icon: 'el-icon-document',
    },
    children: [
        {
            path: 'index',
            component: () => import('#index/views/document/Index.vue'),
            meta: {
                title: '说明文档首页',
                hidden: true,
            },
        },
    ],
};

export default route;
