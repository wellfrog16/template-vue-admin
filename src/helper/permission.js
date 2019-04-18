
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
        if (hasPermission(roles, tmp)) {
            if (tmp.children) {
                tmp.children = filterAsyncRoutes(tmp.children, roles);
            }
            result.push(tmp);
        }
    });

    return result;
}

export default filterAsyncRoutes;
