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
            <el-tab-pane label="3D" name="tab4">
                <d3 />
            </el-tab-pane>
            <el-tab-pane label="模拟迁徙" name="tab5">
                <migration />
            </el-tab-pane>
        </el-tabs>
    </el-card>
</template>

<script>
import Basic from '#index/components/echarts/basic.vue';
// import Advanced from '#index/components/echarts/advanced.vue';
// import Senior from '#index/components/echarts/senior.vue';
// import D3 from '#index/components/echarts/d3.vue';
// import Migration from '#index/components/echarts/migration.vue';

export default {
    components: {
        Basic,
        Advanced: () => import('#index/components/echarts/advanced.vue'),
        Senior: () => import('#index/components/echarts/senior.vue'),
        D3: () => import('#index/components/echarts/d3.vue'),
        Migration: () => import('#index/components/echarts/migration.vue'),
    },
    data() {
        return {
            activeName: 'tab1',
            content: '',
        };
    },
};
</script>
