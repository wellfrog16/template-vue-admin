import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(Router);

// 一个空模板，方便子节点使用
const Root = Vue.component('root', {
    template: '<router-view></router-view>'
});

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
    // savedPosition is only available for popstate navigations.
        return savedPosition;
    } else {
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
    }
};

// todo 按模块写入单独的文件引用
const router = new Router({
    // mode: 'history',
    scrollBehavior,
    routes: [
        {
            path: '',
            name: '一级菜单',
            component: Home,
            icon: 'el-icon-setting',
            children: [
                {path: 'demo', name: 'Demo', icon: 'el-icon-tickets', component: resolve => require(['../views/demo/Index.vue'], resolve)},
                {path: 'log', name: '二级菜单2', icon: 'el-icon-document', component: Root},
                {path: 'file', name: '二级菜单3', icon: 'menu-fix-icon fas fa-angry fa-lg', component: Root},
                {
                    path: 'config',
                    name: '二级菜单4',
                    component: Root,
                    icon: 'el-icon-setting',
                    children: [
                        {path: 'dictionary', name: '三级菜单1', icon: 'el-icon-document', component: Root},
                        {path: 'dictionary', name: '三级菜单2', icon: 'el-icon-document', component: Root}
                    ]
                }
            ]
        },
        {
            path: '',
            name: '系统',
            component: Home,
            icon: 'menu-fix-icon fas fa-sun fa-lg',
            children: [
                {path: 'database', name: '数据库', icon: 'el-icon-tickets', component: Root},
                {path: 'log1', name: '日志', icon: 'el-icon-document', component: Root},
                {path: 'file1', name: '文件管理', icon: 'fa-memus fas fa-sun fa-lg', component: Root},
                {
                    path: 'config1',
                    name: '设置',
                    component: Root,
                    icon: 'el-icon-setting',
                    children: [
                        {path: 'dictionary2', name: '常规', icon: 'el-icon-document', component: Root},
                        {path: 'dictionary3', name: '字典', icon: 'el-icon-document', component: Root}
                    ]
                }
            ]
        }
    ]
});

// todo
router.beforeEach((to, from, next) => {
    // todo权限校验等
    next();
});

export default router;