<template>
    <div :class="$style.main">
        <div :class="$style.side">
            <el-card shadow="never">
                111111
            </el-card>
        </div>
        <div :class="$style.content">
            <el-card shadow="never">
                2222222
            </el-card>
        </div>
    </div>
</template>

<script>
import { Split } from '@/utils/cdn';

export default {
    mounted() {
        Split([`.${this.$style.side}`, `.${this.$style.content}`], {
            sizes: [25, 75],
            minSize: [250, 500],
            expandToMin: true,
        });
    },
};
</script>

<style lang="less" module>
.main {
    height: 100%;
    box-sizing: border-box;
    display: flex;

    > div > :global(.el-card) {
        height: 100%;
        box-sizing: border-box;
    }

    > :global(.gutter.gutter-horizontal) {
        cursor: col-resize;
        background-color: #f5f5f5;
        border-radius: 5px;

        &:hover {
            background-color: #ccc;
        }
    }
}

.side {
    background-color: #fff;
}

.content {
    background-color: #fff;
}
</style>
