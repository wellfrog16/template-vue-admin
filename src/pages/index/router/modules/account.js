import Layout from '#index/views/layout/Index.vue';
// import Root from '../../../components/Root.vue';

const route = {
    path: '/account',
    component: Layout,
    redirect: { path: '/account/directive' },
    meta: {
        title: '账户管理',
        icon: 'menu-fix-icon fas fa-user-shield fa-lg fa-fw',
    },
    children: [
        {
            path: 'directive',
            component: () => import('#index/views/account/Directive.vue'),
            meta: {
                title: '权限控制',
                icon: 'menu-fix-icon fab fa-ethereum fa-lg fa-fw',
            },
        },
        {
            path: 'set',
            component: () => import('#index/views/account/Set.vue'),
            meta: {
                title: '权限设置',
                icon: 'menu-fix-icon fas fa-user-cog fa-lg fa-fw',
            },
        },
        // {
        //     name: 'admin可见',
        //     path: 'admin',
        //     component: resolve => require(['#index/views/demo/Index.vue'], resolve),
        //     meta: {
        //         icon: 'menu-fix-icon fas fa-user-circle fa-lg fa-fw',
        //         roles: ['admin'],
        //     },
        // },
        // {
        //     name: 'admin和edit可见',
        //     path: 'edit',
        //     component: resolve => require(['#index/views/demo/Index.vue'], resolve),
        //     meta: {
        //         icon: 'menu-fix-icon far fa-user-circle fa-lg fa-fw',
        //         roles: ['admin', 'editor'],
        //     },
        // },
    ],
};

export default [route];
