<template>
    <div class="main-wrapper">
        <el-row :gutter="20" :class="$style.row">
            <!-- 拍照上传 -->
            <x-camera-upload />

            <!-- 地图选点 -->
            <x-map-point />

            <!-- 图片裁剪 -->
            <x-cropper />
        </el-row>
    </div>
</template>

<script>
import XCameraUpload from './components/dialog/camera-upload/index.vue';
import XMapPoint from './components/dialog/map-point/index.vue';
import XCropper from './components/dialog/cropper/index.vue';

export default {
    components: {
        XCameraUpload,
        XMapPoint,
        XCropper,
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
