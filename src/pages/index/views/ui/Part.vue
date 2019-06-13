<template>
    <div class="main-wrapper">
        <el-card shadow="never">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="复制" name="tab-a">
                    <clipboard />
                </el-tab-pane>
                <el-tab-pane label="手势" name="tab-b">
                    <touch />
                </el-tab-pane>
                <el-tab-pane label="返回顶部" name="tab-c">
                    <backtotop />
                </el-tab-pane>
                <el-tab-pane label="数字动画" name="tab-d">
                    <count-to />
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>
import Clipboard from '#index/components/ui/part/clipboard.vue';
import Touch from '#index/components/ui/part/touch.vue';
import Backtotop from '#index/components/ui/part/backtotop.vue';
import CountTo from '#index/components/ui/part/count-to.vue';

export default {
    components: {
        Clipboard,
        Touch,
        Backtotop,
        CountTo,
    },
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
