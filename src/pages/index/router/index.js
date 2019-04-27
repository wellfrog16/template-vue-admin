import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../views/layout/Index.vue';
import Root from '../../../components/Root.vue';
import Login from '../views/login/Index.vue';

Vue.use(Router);

// 一个空模板，方便子节点使用
// const Root = Vue.component('root', {
//     template: '<router-view></router-view>',
// });

const icon = 'menu-fix-icon fas fa-pager fa-lg fa-fw';

// 静态路由，不参与权限验证
const staticRoutes = [
    {
        path: '',
        redirect: { name: '登入界面' },
        meta: {
            hidden: true,
        },
    },
    {
        path: '/login',
        name: '登入界面',
        component: Login,
        meta: {
            hidden: true,
        },
    },
    {
        path: '/401',
        name: '401',
        component: () => import('../views/error/401.vue'),
        meta: {
            hidden: true,
        },
    },
];

const asyncRoutes = [
    {
        path: '/home',
        name: '主页',
        component: Layout,
        redirect: { path: '/home/index' },
        meta: {
            icon: 'menu-fix-icon fas fa-home fa-lg fa-fw',
        },
        children: [
            {
                path: 'index',
                name: '主页详细',
                component: () => import('../views/home/Index.vue'),
                meta: {
                    hidden: true,
                },
            },
        ],
    },
    {
        path: '/document',
        name: '说明文档',
        component: Layout,
        redirect: { path: '/document/index' },
        meta: {
            icon: 'el-icon-document',
        },
        children: [
            {
                path: 'index',
                name: '说明文档首页',
                component: () => import('../views/document/Index.vue'),
                meta: {
                    hidden: true,
                },
            },
        ],
    },
    {
        path: '/guide',
        name: '引导页',
        component: Layout,
        redirect: { path: '/guide/index' },
        meta: {
            icon: 'menu-fix-icon fas fa-paper-plane fa-lg fa-fw',
        },
        children: [
            {
                path: 'index',
                name: '引导页首页',
                component: () => import('../views/guide/Index.vue'),
                meta: {
                    hidden: true,
                },
            },
        ],
    },
    // icon
    {
        path: '/icon',
        name: '图标',
        component: Layout,
        meta: {
            icon: 'menu-fix-icon fab fa-fonticons fa-lg fa-fw',
        },
        children: [
            {
                name: 'element-ui',
                path: 'element-ui',
                component: () => import('../views/icon/ElIcon.vue'),
                meta: {
                    icon: 'menu-fix-icon fab fa-fonticons-fi fa-lg fa-fw',
                },
            },
            {
                name: 'font-awesome',
                path: 'font-awesome',
                component: () => import('../views/icon/FontAwesome.vue'),
                meta: {
                    roles: ['editor'],
                    icon: 'menu-fix-icon fab fa-fonticons-fi fa-lg fa-fw',
                },
            },
        ],
    },
    {
        path: '/ui',
        name: '组件',
        component: Layout,
        meta: {
            icon: 'menu-fix-icon fas fa-puzzle-piece fa-lg fa-fw',
        },
        children: [
            {
                name: '组件合集',
                path: 'package',
                component: () => import('../views/ui/Package.vue'),
                meta: {
                    icon: 'el-icon-goods',
                },
            },
            {
                name: '表格',
                path: 'table',
                component: Root,
                meta: {
                    icon: 'menu-fix-icon fas fa-table fa-lg fa-fw',
                },
                children: [
                    {
                        name: '综合表格',
                        path: 'complex',
                        component: () => import('../views/ui/table/Complex.vue'),
                        meta: {
                            icon,
                        },
                    },
                    {
                        name: '滚动加载',
                        path: 'lazy',
                        component: () => import('../views/ui/table/Lazy.vue'),
                        meta: {
                            icon,
                        },
                    },
                ],
            },
            {
                name: '富文本框',
                path: 'editor',
                component: () => import('../views/ui/Editor.vue'),
                meta: {
                    icon: 'menu-fix-icon far fa-credit-card fa-lg fa-fw',
                },
            },
            {
                name: '小组件',
                path: 'part',
                component: () => import('../views/ui/Part.vue'),
                meta: {
                    icon: 'menu-fix-icon fas fa-puzzle-piece fa-lg fa-fw',
                },
            },
        ],
    },
    {
        path: '/charts',
        name: '图表',
        component: Layout,
        meta: {
            icon: 'menu-fix-icon far fa-chart-bar fa-lg fa-fw',
        },
        children: [
            {
                name: '图表合集',
                path: 'package',
                component: () => import('../views/charts/Package.vue'),
                meta: {
                    icon: 'el-icon-goods',
                },
            },
        ],
    },
    {
        path: '/permission',
        name: '权限',
        component: Layout,
        redirect: { name: 'Demo' },
        meta: {
            icon: 'menu-fix-icon fas fa-user-shield fa-lg fa-fw',
        },
        children: [
            {
                name: '权限控制',
                path: 'directive',
                component: () => import('../views/permission/Directive.vue'),
                meta: {
                    icon: 'menu-fix-icon fab fa-ethereum fa-lg fa-fw',
                },
            },
            // {
            //     name: 'admin可见',
            //     path: 'admin',
            //     component: resolve => require(['../views/demo/Index.vue'], resolve),
            //     meta: {
            //         icon: 'menu-fix-icon fas fa-user-circle fa-lg fa-fw',
            //         roles: ['admin'],
            //     },
            // },
            // {
            //     name: 'admin和edit可见',
            //     path: 'edit',
            //     component: resolve => require(['../views/demo/Index.vue'], resolve),
            //     meta: {
            //         icon: 'menu-fix-icon far fa-user-circle fa-lg fa-fw',
            //         roles: ['admin', 'editor'],
            //     },
            // },
        ],
    },
    {
        path: '/split-pane',
        name: '页面分割',
        component: Layout,
        redirect: { path: '/split-pane/index' },
        meta: {
            icon: 'menu-fix-icon fas fa-th-large fa-lg fa-fw',
        },
        children: [
            {
                path: 'index',
                name: '页面分割例子',
                component: () => import('../views/document/Index.vue'),
                meta: {
                    hidden: true,
                },
            },
        ],
    },
];

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
    // savedPosition is only available for popstate navigations.
        return savedPosition;
    }
    const position = {};
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
        position.selector = to.hash;
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => !m.meta.scrollToTop)) {
        // cords will be used if no selector is provided,
        // or if the selector didn't match any element.
        position.x = 0;
        position.y = 0;
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position;
};

// todo 按模块写入单独的文件引用
const router = new Router({
    // mode: 'history',
    scrollBehavior,
    routes: staticRoutes,
});

export {
    staticRoutes,
    asyncRoutes,
};

export default router;
