<template>
    <i class="fas fa-lg fa-fw" @click="handleScreenfull" :class="[$style.screenfull, clsScreenFull]"></i>
</template>

<script>
export default {
    data() {
        return {
            isFullscreen: false,
            screenfull: null,
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
    // mounted() {
    //     this.$utils.loadCdn('screenfull').then(screenfull => {
    //         this.screenfull = screenfull;
    //         // this.bindEvents();
    //     });
    // },
    methods: {
        // bindEvents() {
        //     const { screenfull } = this;
        //     // 全屏变化改变状态
        //     if (screenfull.enabled) {
        //         screenfull.on('change', () => {
        //             this.isFullscreen = screenfull.isFullscreen;
        //         });
        //     }
        // },
        // 全屏
        async handleScreenfull() {
            const screenfull = await this.$utils.loadCdn('screenfull');

            // 首次加载增加change事件，单例
            if (!screenfull.isInit && screenfull.enabled) {
                screenfull.on('change', () => {
                    screenfull.isInit = true;
                    this.isFullscreen = screenfull.isFullscreen;
                });
            }

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
