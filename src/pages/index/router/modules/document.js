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
            component: () => import(/* webpackChunkName: "combine" */'#index/views/iframe/Index.vue'),
            meta: {
                title: '帮助文档',
                type: 'iframe',
                // url: ' http://localhost:5000', // 本地，需要serve ./docs
                url: 'https://wellfrog16.github.io/template-vue-admin/docs', // 在线
                icon: 'el-icon-link',
                hidden: true,
            },
        },
    ],
};

export default route;
