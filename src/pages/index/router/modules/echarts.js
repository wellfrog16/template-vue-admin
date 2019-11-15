import Layout from '#index/views/layout/Index.vue';
// import Root from '../../../components/Root.vue';

const route = {
    path: '/echarts',
    component: Layout,
    redirect: { path: '/echarts/package' },
    meta: {
        title: '图表',
        icon: 'menu-fix-icon far fa-chart-bar fa-lg fa-fw',
    },
    children: [
        {
            path: 'package',
            component: () => import(/* webpackChunkName: "echarts" */'#index/views/echarts/Package.vue'),
            meta: {
                title: '图表合集',
                icon: 'el-icon-goods',
            },
        },
        // {
        //     name: '迁徙',
        //     path: 'migration',
        //     component: () => import('../views/echarts/Migration.vue'),
        //     meta: {
        //         icon: 'menu-fix-icon fas fa-dove fa-lg fa-fw',
        //     },
        // },
        {
            path: 'migration',
            component: () => import(/* webpackChunkName: "echarts" */'#index/views/echarts/Migration.vue'),
            meta: {
                title: '飞机航线图',
                icon: 'menu-fix-icon fas fa-dove fa-lg fa-fw',
            },
        },
    ],
};

export default route;
