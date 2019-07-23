// import router, { staticRoutes, asyncRoutes } from '#index/router';
import router, { asyncRoutes } from '#index/router';
// import router from '#index/router';
import store from '#index/store';
// import filterAsyncRoutes, { hasPermission } from '@/helper/permission';
// import { hasPermission } from '@/helper/permission';
import { helper } from '@/helper/lakes';
import { NProgress } from '@/utils/cdn';
import { Permission } from '@/utils/rivers';

// function hasPermission(roles, permissionRoles) {
//     if (roles.includes('admin')) return true // admin permission passed directly
//     if (!permissionRoles) return true
//     return roles.some(role => permissionRoles.indexOf(role) >= 0)
// }

NProgress.configure({ showSpinner: false });

// todo
router.beforeEach((to, from, next) => {
    NProgress.start();

    // 白名单，不需要登陆的路由数组
    const whiteList = ['/login', '/401'];
    const site = helper.site();

    if (whiteList.includes(to.path)) { // 白名单直接放行
        next();
    } else if (site.accessToken) { // 有token，已经登陆
        let { permissions } = store.getters;

        if (permissions.length === 0) { // 没有角色列表信息（页面刷新vuex信息丢失）
            // storage信息回写，不解构避免写入其他site中的数据
            store.commit('security/account/setState', {
                accessToken: site.accessToken,
                refreshToken: site.refreshToken,
                accountId: site.accountId,
                accountName: site.accountName, // 账户名称
                roles: [...site.roles], // 账户角色
            });

            // 获取权限信息
            store.dispatch('security/role/listByRoles', { codes: site.roles }).then(() => {
                ({ permissions } = store.getters);
                // 将权限信息写入async router中
                const pms = new Permission(asyncRoutes);
                let routes = pms.injectRoles(permissions, site.roles);

                // 过滤出符合自己角色的路由
                routes = Permission.filterAsyncRoutes(routes, site.roles);

                // 保存自己的路由
                store.commit('security/account/setState', { routes });
                router.addRoutes(routes); // 动态添加可访问路由表
                next({ ...to });
            }).catch(() => {
                next({ path: '/login', query: { from: to.path } });
            });
        // } else if (Permission.hasPermission(to, site.roles)) {
        } else if (Permission.hasPermission(to, site.roles)) {
            next();
        } else {
            console.log('没有权限，带去没有权限的页面');
            next({ path: '/401' });
        }
    } else { // 无token，转到登陆页面
        next({ path: '/login', query: { from: to.path } });
    }
});

router.afterEach(() => {
    NProgress.done();
});
