<template>
    <el-dropdown @command="handleCommand">
        <span :class="$style['dropdown-link']">
            <i class="fas fa-user fa-lg fa-fw"></i>
            <span v-text="username"></span>
            <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" :class="$style['dropdown-menu']">
            <el-dropdown-item><i class="fas fa-id-card fa-lg fa-fw"></i>个人中心</el-dropdown-item>
            <el-dropdown-item><i class="fas fa-cog fa-lg fa-fw"></i>设置</el-dropdown-item>
            <el-dropdown-item divided command="logout"><i class="fas fa-sign-out-alt fa-lg fa-fw"></i>注销</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
import { helper } from '@/helper/lakes';

export default {
    data() {
        return {
            username: '',
        };
    },
    mounted() {
        const site = helper.site();
        this.username = site.username || 'admin';
    },
    methods: {
        // 通知
        handleNotification() {
            this.$message.info('通知事件');
        },
        handleCommand(command) {
            const handle = {
                logout: this.logout,
            };

            handle[command]();
        },
        // 注销
        logout() {
            let loading = this.$loading({
                lock: true,
                text: '正在退出系统',
                spinner: 'el-icon-loading',
            });
            this.$store.dispatch('security/account/logout').then(() => {
                loading.close();
                loading = null;
                this.$router.push({ path: '/login' });
            }).catch(() => {
                loading.close();
                loading = null;
            });
        },
    },
};
</script>

<style lang="less" module>
.dropdown-link {
    cursor: default;
    user-select: none;
    display: inline-block;
    height: 100%;
}

.dropdown-menu {
    i {
        margin-right: 8px;
        position: relative;
        top: 1px;
    }
}
</style>
