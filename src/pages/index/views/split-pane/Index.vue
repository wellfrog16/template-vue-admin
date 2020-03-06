<template>
    <div :class="[$style.main, 'main-wrapper']">
        <div :class="$style.side">
            <el-card shadow="never">
                111111
            </el-card>
        </div>
        <div :class="$style.wrapper">
            <div :class="$style.header" v-resize:delay="200" v-resize="handleResize">
                <el-card shadow="never">
                    22222222
                </el-card>
            </div>
            <div :class="$style.content">
                <el-card shadow="never">
                    333333333
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$utils.loadCdn('split').then(Split => {
            Split([`.${this.$style.side}`, `.${this.$style.wrapper}`], {
                sizes: [25, 75],
                minSize: [250, 500],
                expandToMin: true,
            });
            Split([`.${this.$style.header}`, `.${this.$style.content}`], {
                sizes: [25, 75],
                minSize: [100, 300],
                // expandToMin: true,
                direction: 'vertical',
            });
        });
    },
    methods: {
        handleResize(a, b) {
            console.log(a, b);
        },
    },
};
</script>

<style lang="less" module>
@import '~@/assets/style/usr/index.config.less';

.main {
    // height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;

    :global(.el-card) {
        height: 100%;
        box-sizing: border-box;
    }

    :global(.el-card__body) {
        height: 100%;
        box-sizing: border-box;
    }
}

.side {
    background-color: @g-white;
}

.wrapper {
    line-height: 1;
}

.header, .content {
    background-color: @g-white;
}
</style>
