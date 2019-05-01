<template>
    <el-card shadow="never">
        <el-tabs v-model="activeName">
            <el-tab-pane label="基础图标" name="tab1">
                <basic />
            </el-tab-pane>
            <el-tab-pane label="进阶展示" name="tab2">
                <advanced />
            </el-tab-pane>
            <el-tab-pane label="高级效果" name="tab3">
                <senior />
            </el-tab-pane>
        </el-tabs>
    </el-card>
</template>

<script>
import Basic from '#index/components/echarts/package/basic.vue';
// import Advanced from '#index/components/echarts/advanced.vue';
// import Senior from '#index/components/echarts/senior.vue';

export default {
    components: {
        Basic,
        Advanced: () => import('#index/components/echarts/package/advanced.vue'),
        Senior: () => import('#index/components/echarts/package/senior.vue'),
    },
    data() {
        return {
            activeName: 'tab1',
            content: '',
        };
    },
};
</script>
