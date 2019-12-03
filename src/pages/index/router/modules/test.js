import Layout from '#index/views/layout/Index.vue';

const route = {
    path: '/test',
    component: Layout,
    redirect: { path: '/test/index' },
    meta: {
        title: '测试',
        icon: 'menu-fix-icon fas fa-flask fa-lg fa-fw',
    },
    children: [
        {
            path: 'index',
            component: () => import(/* webpackChunkName: "combine" */'#index/views/test/Index.vue'),
            meta: {
                title: '测试',
                hidden: true,
            },
        },
    ],
};

export default route;
