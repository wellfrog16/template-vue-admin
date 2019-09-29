<template>
    <el-card shadow="never">
        <el-row>当前语言：{{ $t('title') }}</el-row>
        <el-divider />
        <el-row>
            <el-dropdown @command="handleCommand">
                <el-button type="primary">
                    切换语言<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="zh-cn">中文</el-dropdown-item>
                    <el-dropdown-item command="en">English</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-row>
    </el-card>
</template>

<script>
// import { loadLanguageAsync } from '@/plugins/vue-i18n';
import qs from 'qs';

export default {
    methods: {
        handleCommand(command) {
            const {
                path,
                query,
            } = this.$route;

            if (query.lang !== command) {
                query.lang = command;
                const url = `/#${path}?${qs.stringify(query)}`;
                window.history.pushState(null, null, url);
                window.location.reload();
            }
            // window.location.href = url;
            // loadLanguageAsync(command).then(() => {
            //     console.log('切换完成');
            // });
        },
    },
};
</script>
