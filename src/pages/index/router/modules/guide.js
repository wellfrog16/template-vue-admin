import Layout from '#index/views/layout/Index.vue';
// import Root from '../../../components/Root.vue';

const route = {
    path: '/guide',
    component: Layout,
    redirect: { path: '/guide/index' },
    meta: {
        title: '引导页',
        icon: 'menu-fix-icon fas fa-paper-plane fa-lg fa-fw',
    },
    children: [
        {
            path: 'index',
            component: () => import(/* webpackChunkName: "combine" */'#index/views/guide/Index.vue'),
            meta: {
                title: '引导页首页',
                hidden: true,
            },
        },
    ],
};

export default route;
