<template>
    <div>
        <el-card :class="$style.card" shadow="never">
            <div slot="header" class="clearfix">
                <span><i class="fab fa-cc-visa fa-lg"></i>原生Echarts图 + icon</span>
            </div>
            <div :class="$style['my-echarts1']"></div>
        </el-card>
        <el-card :class="$style.card" shadow="never">
            <div slot="header" class="clearfix">
                <span><i class="fas fa-sun fa-lg"></i>macarons主题Echarts图 + icon</span>
            </div>
            <div :class="$style['my-echarts2']"></div>
        </el-card>
    </div>
</template>

<script>
import echarts from 'echarts';
import $ from 'jquery';

export default {
    data() {
        return {
            option: {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data: ['销量']
                },
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            }
        };
    },
    mounted() {
        this.echarts1();
        this.echarts2();
    },
    methods: {
        echarts1() {
            const myChart = echarts.init($(`.${this.$style['my-echarts1']}`)[0]);
            myChart.setOption(this.option);
            $(window).on('resize', () => { myChart.resize(); });
        },
        echarts2() {
            const myChart = echarts.init($(`.${this.$style['my-echarts2']}`)[0], 'macarons');
            myChart.setOption(this.option);
            $(window).on('resize', () => { myChart.resize(); });
        }
    }
};
</script>

<style lang="less" module>
.my-echarts1, .my-echarts2 {
    width: 100%;
    height: 400px;
}

.card {
    margin-bottom: 20px;

    i {
        margin-right: 10px;
    }
}
</style>