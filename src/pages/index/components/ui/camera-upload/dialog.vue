<template>
    <div>
        <el-button type="primary" @click="handleOpen">人像上传</el-button>

        <!-- 拍照上传 -->
        <camera-upload :visible.sync="cameraUploadVisible" />
    </div>
</template>

<script>
import CameraUpload from '@/components/camera-upload/index.vue';

export default {
    components: {
        CameraUpload,
    },
    data() {
        return {
            cameraUploadVisible: false,
        };
    },
    methods: {
        handleOpen() {
            this.cameraUploadVisible = true;
        },
    },
};
</script>
