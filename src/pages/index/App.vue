<template>
    <div id="app">
        <router-view/>

        <!-- 通知系统 -->
        <notification />
    </div>
</template>

<script>
import Notification from '#index/components/layout/notification/index.vue';

export default {
    components: {
        Notification,
    },
};
</script>

<style lang="less">
@import '../../assets/style/main.less';
@import '../../assets/style/usr/app.less';
</style>
