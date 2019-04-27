<template>
    <div :class="$style.main">
        <el-card shadow="never">
            <el-form :key="key" label-width="170px" label-position="left">
                <el-form-item label="临时修改当前用户角色">
                    <switch-roles @change="handleRolesChange" />
                </el-form-item>
                <el-divider><i class="fas fa-users fa-lg" /></el-divider>
                <el-form-item label="仅admin可见" v-permission="['admin']">
                    <el-tag>admin</el-tag>
                    <el-tag type="info">v-permission="['admin']"</el-tag>
                </el-form-item>
                <el-form-item label="仅editor可见" v-permission="['editor']">
                    <el-tag>editor</el-tag>
                    <el-tag type="info">v-permission="['editor']"</el-tag>
                </el-form-item>
                <el-form-item label="仅guest可见" v-permission="['guest']">
                    <el-tag>guest</el-tag>
                    <el-tag type="info">v-permission="['guest']"</el-tag>
                </el-form-item>
                <el-form-item label="admin和editor可见" v-permission="['admin', 'editor']">
                    <el-tag>admin</el-tag>
                    <el-tag>editor</el-tag>
                    <el-tag type="info">v-permission="['admin', 'editor']"</el-tag>
                </el-form-item>
            </el-form>
        </el-card>

        <el-card shadow="never">
            <div slot="header">v-if例子</div>
            <el-tabs v-model="activeName">
                <el-tab-pane label="仅admin可见" name="first" v-if="checkPermission(['admin'])">
                    <el-tag type="info">v-if="checkPermission(['admin'])"</el-tag>
                </el-tab-pane>
                <el-tab-pane label="仅editor可见" name="second" v-if="checkPermission(['editor'])">
                    <el-tag type="info">v-if="checkPermission(['editor'])"</el-tag>
                </el-tab-pane>
                <el-tab-pane label="仅guest可见" name="third" v-if="checkPermission(['guest'])">
                    <el-tag type="info">v-if="checkPermission(['guest'])"</el-tag>
                </el-tab-pane>
                <el-tab-pane label="admin和editor可见" name="fourth" v-if="checkPermission(['admin', 'editor'])">
                    <el-tag type="info">v-if="checkPermission(['admin', 'editor'])"</el-tag>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>
import SwitchRoles from '#index/components/permission/switchRoles.vue';
import { checkPermission } from '@/helper/permission';

export default {
    components: {
        SwitchRoles,
    },
    data() {
        return {
            activeName: 'first',
            key: 1, // 为了能每次切换权限的时候重新初始化指令
        };
    },
    methods: {
        checkPermission(val) {
            return checkPermission(this.$store.getters.roles, val);
        },
        handleRolesChange() {
            this.key += 1;
        },
    },
};
</script>

<style lang="less" module>
.main {
    :global(.el-card) + :global(.el-card) {
        margin-top: 10px;
    }
}
</style>
