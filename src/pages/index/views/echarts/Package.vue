<template>
    <div class="main-wrapper">
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
    </div>
</template>

<script>
import Basic from './components/package/basic.vue';
// import Advanced from './components/advanced.vue';
// import Senior from './components/senior.vue';

export default {
    components: {
        Basic,
        Advanced: () => import('./components/package/advanced.vue'),
        Senior: () => import('./components/package/senior.vue'),
    },
    data() {
        return {
            activeName: 'tab1',
            content: '',
        };
    },
};
</script>
