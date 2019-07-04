<template>
    <div class="main-wrapper">
        <el-row :gutter="20">
            <x-camera-upload />
        </el-row>
    </div>
</template>

<script>
import XCameraUpload from '#index/components/ui/dialog/camera-upload/index.vue';

export default {
    components: {
        XCameraUpload,
    },
};
</script>
