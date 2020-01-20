<template>
    <div id="functions" :class="$style.main">
        <x-server />

        <!-- 路由搜索 -->
        <x-search />

        <!-- 全屏 -->
        <screenfull :effect="tooltip.effect" :placement="tooltip.placement" />

        <!-- 通知 -->
        <notification :effect="tooltip.effect" :placement="tooltip.placement" />

        <!-- 用户功能 -->
        <user />
    </div>
</template>

<script>
import XSearch from './search.vue';
import Screenfull from './screenfull.vue';
import Notification from './notification.vue';
import User from './user.vue';
import XServer from './server.vue';

export default {
    components: {
        XSearch,
        Screenfull,
        Notification,
        User,
        XServer,
    },
    data() {
        return {
            tooltip: {
                effect: 'dark',
                placement: 'bottom',
            },
        };
    },
};
</script>

<style lang="less" module>
.main {
    > * + * {
        margin-left: 30px;
    }
}
</style>
