<template>
    <div class="main-wrapper">
        <el-row :gutter="20" :class="$style.row">
            <!-- 上传 -->
            <x-upload />

            <!-- 限制日期选择 -->
            <x-limit-picker />
        </el-row>
    </div>
</template>

<script>
import XUpload from './components/package/upload.vue';
import XLimitPicker from './components/package/limit-picker.vue';

export default {
    components: {
        XUpload,
        XLimitPicker,
    },
};
</script>

<style lang="less" module>
.row {
    :global(.el-col) {
        margin-bottom: 20px;
    }
}
</style>
