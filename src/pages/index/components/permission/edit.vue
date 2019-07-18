<template>
    <el-card shadow="never">
        <div slot="header" :class="$style.header">
            <span>编辑角色</span>
            <el-button type="primary" size="mini" @click="handSave">保存权限</el-button>
        </div>
        <el-form v-model="form.fields" :rules="form.rules">
            <el-form-item label="角色名称">
                <el-input v-model="form.fields.name"></el-input>
            </el-form-item>
            <el-form-item label="权限分配">
                <el-col :span="24">
                    <el-tree
                        ref="tree"
                        :data="routes"
                        show-checkbox
                        node-key="path"
                        default-expand-all
                    />
                </el-col>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
// import { _ } from '@/utils/cdn';
import Permission from '@/utils/permission';
import { asyncRoutes } from '#index/router';

const permission = new Permission(asyncRoutes);

export default {
    data() {
        return {
            routes: permission.treeData(),
            form: {
                fields: {
                    name: '',
                    permissions: [],
                },
                rules: {},
            },
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.getRoutes();
        },

        // 这里应该异步获取对应角色权限路由数组
        getRoutes() {
            const routes = ['/icon/element-ui', '/ui/table/complex'];
            this.$refs.tree.setCheckedKeys(routes, true);
        },

        // 获取选择的权限，发送到后端保存
        // 后端存储方式 roleName: string, path: json/string
        handSave() {
            const routes = this.$refs.tree.getCheckedKeys(true);
            console.log(routes);
            this.$message.success('请查看console.log信息');
        },
    },
};
</script>

<style lang="less" module>
.header {
    display: flex;
    justify-content: space-between;
}
</style>
