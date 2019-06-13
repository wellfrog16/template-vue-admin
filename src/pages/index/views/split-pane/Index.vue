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
import { Split } from '@/utils/cdn';

export default {
    mounted() {
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
    },
    methods: {
        handleResize(a, b) {
            console.log(a, b);
        },
    },
};
</script>

<style lang="less" module>
.main {
    height: 100%;
    box-sizing: border-box;
    display: flex;

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
    background-color: #fff;
}

.wrapper {
    line-height: 1;
}

.header, .content {
    background-color: #fff;
}
</style>
