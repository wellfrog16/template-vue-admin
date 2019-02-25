<template>
    <el-dropdown>
        <span class="el-dropdown-link" :class="$style['dropdown-link']">
            <i class="fas fa-user fa-lg fa-fw"></i>
            <span>用户名</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" :class="$style['dropdown-menu']">
            <el-dropdown-item><i class="fas fa-id-card fa-lg fa-fw"></i>个人中心</el-dropdown-item>
            <el-dropdown-item><i class="fas fa-cog fa-lg fa-fw"></i>设置</el-dropdown-item>
            <el-dropdown-item divided><i class="fas fa-sign-out-alt fa-lg fa-fw"></i>注销</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
// import { helper } from '@/helper/lakes';

export default {
    data() {
        return {
            username: '',
        };
    },
    methods: {
        // 通知
        handleNotification() {
            this.$message.info('通知事件');
        },
    },
};
</script>

<style lang="less" module>
.dropdown-link {
    cursor: default;
    user-select: none;
}

.dropdown-menu {
    i {
        margin-right: 8px;
        position: relative;
        top: 1px;
    }
}
</style>
