<template>
    <div>
        <el-button type="primary" @click="handleOpen">人像上传</el-button>

        <!-- 拍照上传 -->
        <camera-upload
            :visible.sync="cameraUploadVisible"
            action="http://127.0.0.1:8001/service/file/upload"
            :onSubmit="handleSubmit"
        />
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
        handleSubmit(res) {
            console.log(res);
        },
    },
};
</script>
