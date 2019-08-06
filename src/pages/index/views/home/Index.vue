<template>
    <div class="main-wrapper">
        <el-row :gutter="10">
            <el-col :span="6">
                <info-box icon="fas fa-dog fa-lg" title="新增数据量" :number="998" />
            </el-col>
            <el-col :span="6">
                <info-box icon="fas fa-dove fa-lg" title="日增长率" suffix="%" :decimals="2" :number="43.59"  />
            </el-col>
            <el-col :span="6">
                <info-box icon="fas fa-shopping-cart fa-lg" title="销售额" prefix="￥" :number="2800764" />
            </el-col>
            <el-col :span="6">
                <info-box icon="fas fa-users fa-lg" title="用户数" :number="89527" />
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="18">
                <echart-line height="300px" />
            </el-col>
            <el-col :span="6">
                <x-progress height="300px" />
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="12">
                <el-card shadow="never">11</el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="never">11</el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="never">11</el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import InfoBox from '#index/components/common/info-box/index.vue';
import EchartLine from './components/echart-line/index.vue';
import XProgress from './components/progress.vue';

export default {
    components: {
        InfoBox,
        EchartLine,
        XProgress,
    },
};
</script>

<style lang="less" module>
:global(.el-row) + :global(.el-row) {
    margin-top: 10px;
}
</style>
