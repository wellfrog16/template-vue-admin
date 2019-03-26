<template>
    <el-tabs v-model="activeName">
        <el-tab-pane label="Mini配置" name="tab1">
            <tinymce v-model="content" :height="300" />
        </el-tab-pane>
        <el-tab-pane label="简单配置" name="tab2">
            <tinymce v-model="content" :height="300" config="simple" />
        </el-tab-pane>
        <el-tab-pane label="标准配置" name="tab3">
            <tinymce v-model="content" :height="300" config="standard" />
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import Tinymce from '@/components/tinymce/index.vue';

export default {
    components: {
        Tinymce,
    },
    data() {
        return {
            activeName: 'tab2',
            content: '',
        };
    },
};
</script>

<style lang="less" module>
</style>
