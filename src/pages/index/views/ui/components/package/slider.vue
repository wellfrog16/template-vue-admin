<template>
    <el-card shadow="never">
        <div slot="header" class="clearfix">
            <i class="fab fa-hire-a-helper fa-lg" /><span>滑块</span>
        </div>
        <el-row>
            <span>默认</span>
            <el-slider v-model="value1"></el-slider>
        </el-row>
        <el-row>
            <span>自定义初始值</span>
            <el-slider v-model="value2"></el-slider>
        </el-row>
        <el-row>
            <span>隐藏 Tooltip</span>
            <el-slider v-model="value3" :show-tooltip="false"></el-slider>
        </el-row>
        <el-row>
            <span>格式化 Tooltip</span>
            <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
        </el-row>
        <el-row>
            <span>禁用</span>
            <el-slider v-model="value5" disabled></el-slider>
        </el-row>
        <el-row>
            <span>范围选择</span>
            <el-slider
                v-model="value6"
                range
                show-stops
                :max="10"
            />
        </el-row>
    </el-card>
</template>

<script>
export default {
    data() {
        return {
            value1: 0,
            value2: 50,
            value3: 36,
            value4: 48,
            value5: 42,
            value6: [4, 8],
        };
    },
    methods: {
        formatTooltip(val) {
            return val / 100;
        },
    },
};
</script>
