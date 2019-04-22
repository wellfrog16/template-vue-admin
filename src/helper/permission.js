
/**
 * 通过meta.roles判断是否与当前用户权限匹配
 *
 * @param {vue.$route} route
 * @param {Array} roles
 * @returns
 */
function hasPermission(route, roles) {
    if (route.meta && route.meta.roles) {
        return roles.some(role => route.meta.roles.includes(role));
    }
    return true;
}

/**
 * 指令v-permission的手动校验
 *
 * @param {Array} 一般获取自store里的用户角色信息
 * @param {Array} 需要校验的权限
 * @returns
 */
function checkPermission(storeRoles, roles) {
    if (roles && roles instanceof Array && roles.length > 0) {
        return storeRoles.some(role => roles.includes(role));
    }
    return false;
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 *
 * @param {Array} routers asyncRoutes
 * @param {Array} roles
 * @returns
 */
function filterAsyncRoutes(routers, roles) {
    const result = [];
    routers.forEach((router) => {
        const tmp = { ...router };
        if (hasPermission(tmp, roles)) {
            if (tmp.children) {
                tmp.children = filterAsyncRoutes(tmp.children, roles);
            }
            result.push(tmp);
        }
    });

    return result;
}

export { hasPermission, checkPermission };
export default filterAsyncRoutes;
