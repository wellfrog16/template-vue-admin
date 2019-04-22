<template>
    <el-tabs v-model="activeName">
        <el-tab-pane label="Mini配置" name="tab1">
        </el-tab-pane>
        <el-tab-pane label="简单配置" name="tab2">
        </el-tab-pane>
        <el-tab-pane label="标准配置" name="tab3">
        </el-tab-pane>
        <el-tab-pane label="全部" name="tab4">
        </el-tab-pane>
    </el-tabs>
</template>

<script>
export default {
    data() {
        return {
            activeName: 'tab2',
            content: '',
        };
    },
};
</script>
