<template>
    <div>
        <!-- 全屏 -->
        <screenfull :effect="tooltip.effect" :placement="tooltip.placement" :class="$style.item" />

        <!-- 通知 -->
        <notification :effect="tooltip.effect" :placement="tooltip.placement" :class="$style.item" />

        <!-- 用户功能 -->
        <user />
    </div>
</template>

<script>
import Screenfull from './screenfull.vue';
import Notification from './notification.vue';
import User from './user.vue';

export default {
    components: { Screenfull, Notification, User },
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
.item {
    margin-right: 30px;
}
</style>
