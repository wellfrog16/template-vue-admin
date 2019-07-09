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

    // 过滤掉隐藏的路由
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

    // 转换成el-tree用的树
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

    // 检查是否有需要显示的子节点
    static isShowChildren(children) {
        return children.some(item => !(item.meta && item.meta.hidden));
    }
}

export default Permission;
