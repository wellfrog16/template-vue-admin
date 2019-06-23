import Layout from '#index/views/layout/Index.vue';
// import Root from '../../../components/Root.vue';

const route = {
    path: '/split-pane',
    component: Layout,
    redirect: { path: '/split-pane/index' },
    meta: {
        title: '页面分割',
        icon: 'menu-fix-icon fas fa-th-large fa-lg fa-fw',
    },
    children: [
        {
            path: 'index',
            component: () => import('#index/views/split-pane/Index.vue'),
            meta: {
                title: '页面分割例子',
                hidden: true,
            },
        },
    ],
};

export default [route];
