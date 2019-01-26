<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Echarts" name="tab-a">
                <echarts />
            </el-tab-pane>
            <el-tab-pane label="Mockjs" name="tab-b">
                <mock />
            </el-tab-pane>
            <el-tab-pane label="手势" name="tab-c">
                <touch />
            </el-tab-pane>
            <el-tab-pane label="角色管理" name="tab-d">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="tab-e">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import echarts from '../../components/demo/echarts.vue';
import mock from '../../components/demo/mock.vue';
import touch from '../../components/demo/touch.vue';

export default {
    components: { echarts, mock, touch },
    data() {
        return {
            activeName: 'tab-a',
        };
    },
    mounted() {
    },
    methods: {
        handleClick() {
        },
    },
};
</script>

<style lang="less">

</style>
