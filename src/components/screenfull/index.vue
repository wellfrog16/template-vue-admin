<template>
    <i class="fas fa-lg fa-fw" @click="screenfull" :class="[$style.screenfull, clsScreenFull]"></i>
</template>

<script>
import { screenfull } from '@/utils/cdn';

export default {
    data() {
        return {
            isFullscreen: false,
        };
    },
    computed: {
        clsScreenFull() {
            return {
                'fa-expand-arrows-alt': !this.isFullscreen,
                'fa-compress-arrows-alt': this.isFullscreen,
            };
        },
    },
    mounted() {
        this.bindEvents();
    },
    methods: {
        bindEvents() {
            // 全屏变化改变状态
            if (screenfull.enabled) {
                screenfull.on('change', () => {
                    this.isFullscreen = screenfull.isFullscreen;
                });
            }
        },
        // 全屏
        screenfull() {
            if (screenfull.enabled) {
                screenfull.toggle();
            } else {
                this.$message.error('您的浏览器不支持全屏');
            }
        },
    },
};
</script>

<style lang="less" module>
.screenfull {
    cursor: pointer;
}
</style>
