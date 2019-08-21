import Layout from '#index/views/layout/Index.vue';

const route = {
    path: '/log',
    component: Layout,
    redirect: { path: '/log/index' },
    meta: {
        title: '日志',
        icon: 'el-icon-notebook-1',
    },
    children: [
        {
            path: 'index',
            component: () => import('#index/views/log/Index.vue'),
            meta: {
                title: '日志',
                hidden: true,
            },
        },
    ],
};

export default route;
