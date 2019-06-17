<template>
    <div class="main-wrapper">
        <el-card shadow="never">
            <el-tabs v-model="activeName">
                <el-tab-pane label="对话框调用" name="tab1">
                    <x-dialog />
                </el-tab-pane>
                <el-tab-pane label="直接调用" name="tab2">
                    <x-inset />
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>
import XDialog from '#index/components/ui/camera-upload/dialog.vue';

export default {
    components: {
        XDialog,
        XInset: () => import('#index/components/ui/camera-upload/inset.vue'),
    },
    data() {
        return {
            activeName: 'tab1',
        };
    },
};
</script>
