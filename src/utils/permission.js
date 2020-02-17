import { _ } from '@/utils/cdn';

class Permission {
    constructor(routes) {
        this.routes = routes;
    }

    // 转换成el-tree用的数据，不包含hidden的路由
    treeData() {
        const menu = this.constructor.filterMenu(this.routes);
        return this.transformToTree(menu);
    }

    // 转换成el-tree用的数据，包含hidden的路由
    treeAllData() {
        return this.transformToTree(this.routes);
    }

    /**
     * 过滤掉隐藏的路由
     *
     * @static
     * @param {Array} routes 路由数组
     * @returns
     * @memberof Permission
     */
    static filterMenu(routes) {
        const res = [];
        routes.forEach((item) => {
            if (!(item.meta && item.meta.hidden)) {
                res.push(item);
            }

            if (item.children && item.children.length > 0 && this.isShowChildren(item.children)) {
                item.children = this.filterMenu(item.children);
            } else {
                delete item.children;
            }
        });
        return res;
    }

    /**
     * 转换成el-tree用的树
     *
     * @param {Array} routes 路由数组
     * @param {string} [bathPath=''] 路径拼接时，基础路径
     * @returns
     * @memberof Permission
     */
    transformToTree(routes, bathPath = '') {
        const res = routes.map((item) => {
            const data = {
                path: !bathPath ? item.path : `${bathPath}/${item.path}`,
                label: (item.meta && item.meta.title) || '未定义',
            };

            if (item.children && item.children.length > 0 && this.constructor.isShowChildren(item.children)) {
                data.children = this.transformToTree(item.children, data.path);
            }

            return data;
        });

        return res;
    }

    /**
     * 检查是否有需要显示的子节点
     *
     * @static
     * @param {Array} children 待检测的子节点数组
     * @returns
     * @memberof Permission
     */
    static isShowChildren(children) {
        return children.some((item) => !(item.meta && item.meta.hidden));
    }

    /**
     * 将拥有的角色注入到拥有权限的路由中
     *
     * @param {Array} permssions 拥有的权限
     * @param {Array} roles 拥有的角色
     * @returns
     * @memberof Permission
     */
    injectRoles(permssions, roles) {
        const routesCopy = _.cloneDeep(this.routes);
        const DEFAULT_PATH = 'index';

        function inject(route, pms, basePath = '') {
            route.forEach((item) => {
                const path = `${basePath + item.path}`;
                if (pms.includes(path) || item.path === DEFAULT_PATH) {
                    if (!item.meta) { item.meta = {}; }
                    item.meta.roles = roles;
                }

                if (item.children && item.children.length > 0) {
                    inject(item.children, pms, `${path}/`);
                }
            });
        }

        inject(routesCopy, this.constructor.expandPermission(permssions));
        return routesCopy;
    }

    /**
     * 展开权限数组
     * ['/ui/table/complex', '/home'] => ['/ui/table/complex', '/ui/table', '/ui', '/home']
     *
     * @static
     * @param {Array} pms
     * @memberof Permission
     */
    static expandPermission(pms) {
        const result = new Set();

        const normalPerssions = pms.filter((item) => !/^http/.test(item)); // 未来删除，可能已经不在使用（http）

        normalPerssions.forEach((item) => {
            const routeArray = item.match(/\/[a-zA-Z\d_-]+[a-zA-Z\d]/g);
            for (let i = 1; i <= routeArray.length; i += 1) {
                result.add(routeArray.slice(0, i).join(''));
            }
        });

        return [...result, ...pms.filter((item) => /^http/.test(item))];
    }

    /**
     * 指令v-permission的手动校验
     *
     * @param {Array} 一般获取自store里的用户角色信息
     * @param {Array} 需要校验的权限
     * @returns
     */
    static checkPermission(storeRoles, roles) {
        if (roles && roles instanceof Array && roles.length > 0) {
            return storeRoles.some((role) => roles.includes(role));
        }
        return false;
    }

    /**
     * 通过meta.roles判断是否与当前用户权限匹配
     *
     * @param {vue.$route} route
     * @param {Array} roles
     * @returns
     * @memberof Permission
     */
    static hasPermission(route, roles) {
        if (route.meta && route.meta.roles) {
            return roles.some((role) => route.meta.roles.includes(role));
        }
        // return true; // 无权限则默认可以访问
        return false; // 无权限则默认禁止访问
    }

    /**
     * 递归过滤异步路由表，返回符合用户角色权限的路由表
     *
     * @param {Array} routers asyncRoutes
     * @param {Array} roles
     * @returns
     */
    static filterAsyncRoutes(routers, roles) {
        const result = [];
        routers.forEach((item) => {
            // const routerCopy = _.cloneDeep(router);
            if (this.hasPermission(item, roles)) {
                if (item.children) {
                    item.children = this.filterAsyncRoutes(item.children, roles);
                }
                result.push(item);
            }
        });

        return result;
    }
}

export default Permission;
