<template>
    <el-badge :value="200" :max="99" :class="$style.notification">
        <el-tooltip :effect="effect" content="通知" :placement="placement">
            <i class="fas fa-bell fa-lg fa-fw" @click="handleNotification"></i>
        </el-tooltip>
    </el-badge>
</template>

<script>
export default {
    props: {
        effect: { type: String, default: 'light' },
        placement: { type: String, default: 'bottom' },
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
.notification {
    cursor: pointer;

    i {
        position: relative;
        top: -2px;
    }

    sup {
        top: 18px !important;
    }
}
</style>
