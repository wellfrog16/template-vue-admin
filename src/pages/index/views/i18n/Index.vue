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
                    <el-dropdown-item command="zh-CN">中文</el-dropdown-item>
                    <el-dropdown-item command="en-US">English</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-row>
    </el-card>
</template>

<script>
import { mapState } from 'vuex';
import { loadLanguageAsync } from '#index/locale';
import Lang from '#index/components/abstract/search/lang.vue';
// import qs from 'qs';

export default {
    mixins: [Lang],
    computed: {
        ...mapState(['lang']),
    },
    methods: {
        refresh() {
            console.log('语言变化了');
        },
        handleCommand(command) {
            // 路由切换
            // const {
            //     path,
            //     query,
            // } = this.$route;

            // if (query.lang !== command) {
            //     query.lang = command;
            //     const url = `/#${path}?${qs.stringify(query)}`;
            //     window.history.pushState(null, null, url);
            //     window.location.reload();
            // }
            // window.location.href = url;

            // 直接切换
            loadLanguageAsync(command).then(() => {
                console.log('切换完成');
            });
        },
    },
};
</script>
