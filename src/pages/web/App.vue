<template>
    <div id="app">
        <router-view/>

        <!-- 通知系统 -->
        <notification />
    </div>
</template>

<script>
import Notification from './views/layout/components/notification/index.vue';

export default {
    components: {
        Notification,
    },
};
</script>

<style lang="less">
@import '../../assets/style/usr/web.less';
// @import '../../assets/style/usr/screen.less';
</style>
