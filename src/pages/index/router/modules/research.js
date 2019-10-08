import Layout from '#index/views/layout/Index.vue';

const route = {
    path: '/research',
    component: Layout,
    redirect: { path: '/research/mixins' },
    meta: {
        title: '研究示例',
        icon: 'menu-fix-icon fas fa-democrat fa-lg fa-fw',
    },
    children: [
        {
            path: 'table-form',
            component: () => import('#index/views/research/TableForm.vue'),
            meta: {
                title: '基础表格和表单',
                icon: 'menu-fix-icon fab fa-wpforms fa-lg fa-fw',
            },
        },
        {
            path: 'table-lazy',
            component: () => import('#index/views/research/TableForm.vue'),
            meta: {
                title: '滚动加载',
                icon: 'el-icon-goods',
            },
        },
    ],
};

export default route;
