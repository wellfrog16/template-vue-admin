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
                <el-tab-pane label="省略号" name="tab-e">
                    <text-ellipsis />
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>
import Clipboard from './components/part/clipboard.vue';
import Touch from './components/part/touch.vue';
import Backtotop from './components/part/backtotop.vue';
import CountTo from './components/part/count-to.vue';
import TextEllipsis from './components/part/text-ellipsis.vue';

export default {
    components: {
        Clipboard,
        Touch,
        Backtotop,
        CountTo,
        TextEllipsis,
    },
    data() {
        return {
            activeName: 'tab-e',
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
