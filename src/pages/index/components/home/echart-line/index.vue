<template>
    <el-card shadow="never">
        <div :class="$style.main" :style="style"></div>
    </el-card>
</template>

<script>
import { $, echarts } from '@/utils/cdn';
import options from './options';

export default {
    props: {
        height: { type: Number, required: true },
    },
    data() {
        return {
            options,
        };
    },
    computed: {
        style() {
            return {
                height: `${this.height}px`,
            };
        },
    },
    mounted() {
        const myChart = echarts.init(document.querySelector(`.${this.$style.main}`));
        myChart.setOption(this.options);
        $(window).on('resize', () => { myChart.resize(); });
    },
};
</script>

<style lang="less" module>
.main {
    width: 100%;
}
</style>
