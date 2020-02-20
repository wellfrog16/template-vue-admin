import Vue from 'vue';
import Router from 'vue-router';
import Login from '#index/views/login/Index.vue';

// 路由模块
import routeResearch from './modules/research';
import routeEcharts from './modules/echarts';
import routeIcon from './modules/icon';
import routeSecurity from './modules/security';
import routeUI from './modules/ui';
import routeSplitPane from './modules/split-pane';
import routeIframe from './modules/iframe';
import routeGuide from './modules/guide';
import routeDocument from './modules/document';
import routeHome from './modules/home';
import routeLog from './modules/log';
import routeI18n from './modules/i18n';
import routeTest from './modules/test';

Vue.use(Router);

// meta: {
//     title: string 标题
//     icon: string 路由显示的icon
//     type: 'iframe' || 'link' || undefind,
//     url: stirng, 如果type是ifreme，需要设置url
//     belong: stirng, 当前的路由在左侧菜单高亮时，归属于的另外一个路由
//     hidden: boolen | undefind 即不在菜单中显示，也不在权限分配中显示
//     visible: boolen 不在菜单中显示，但是在权限分配中显示
// }

// 静态路由，不参与权限验证
const staticRoutes = [
    {
        path: '/',
        redirect: { path: '/login' },
        meta: {
            hidden: true,
        },
    },
    {
        path: '/login',
        component: Login,
        meta: {
            title: '登入界面',
            hidden: true,
        },
    },
    {
        path: '/401',
        component: () => import('#index/views/error/401.vue'),
        meta: {
            title: '401',
            hidden: true,
        },
    },
];

const asyncRoutes = [
    routeHome,
    routeDocument,
    routeGuide,
    routeIcon,
    routeUI,
    routeResearch,
    routeEcharts,
    routeSecurity,
    routeI18n,
    routeLog,
    routeSplitPane,
    {
        path: '/link-to-template',
        meta: {
            title: '外链',
            type: 'link',
            icon: 'el-icon-link',
            url: 'https://github.com/wellfrog16/template-vue-admin',
        },
    },
    routeIframe,
    routeTest,
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
const createRouter = () => new Router({
    // mode: 'history',
    scrollBehavior,
    routes: staticRoutes,
});

export {
    staticRoutes,
    asyncRoutes,
};

export default createRouter;
