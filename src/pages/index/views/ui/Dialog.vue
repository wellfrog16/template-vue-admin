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
import XCameraUpload from '#index/components/ui/dialog/camera-upload/index.vue';
import XMapPoint from '#index/components/ui/dialog/map-point/index.vue';

export default {
    components: {
        XCameraUpload,
        XMapPoint,
    },
};
</script>
