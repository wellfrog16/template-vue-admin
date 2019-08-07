<template>
    <div class="main-wrapper">
        <el-row :gutter="20">
            <!-- 拍照上传 -->
            <x-camera-upload />

            <!-- 地图选点 -->
            <x-map-point />
        </el-row>
    </div>
</template>

<script>
import XCameraUpload from './components/dialog/camera-upload/index.vue';
import XMapPoint from './components/dialog/map-point/index.vue';

export default {
    components: {
        XCameraUpload,
        XMapPoint,
    },
};
</script>
