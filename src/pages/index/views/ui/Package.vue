<template>
    <div class="main-wrapper">
        <el-row :gutter="20" :class="$style.row">
            <!-- 上传 -->
            <x-upload />
        </el-row>
    </div>
</template>

<script>
import XUpload from './components/package/upload.vue';

export default {
    components: {
        XUpload,
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
