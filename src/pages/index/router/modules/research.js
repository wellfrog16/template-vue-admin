import Layout from '#index/views/layout/Index.vue';
// import Root from '../../../components/Root.vue';

const route = {
    path: '/research',
    component: Layout,
    redirect: { path: '/echarts/package' },
    meta: {
        title: '研究示例',
        icon: 'menu-fix-icon fas fa-democrat fa-lg fa-fw',
    },
    children: [
        {
            path: 'extend',
            component: () => import('#index/views/research/Index.vue'),
            meta: {
                title: '组件继承',
                icon: 'el-icon-goods',
            },
        },
    ],
};

export default [route];
