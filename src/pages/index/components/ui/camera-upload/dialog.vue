<template>
    <div>
        <el-button type="primary" @click="handleOpen">人像上传</el-button>
        <el-button type="primary" @click="handleOpen2">人像上传</el-button>

        <!-- 拍照上传 -->
        <camera-upload
            :visible.sync="cameraUploadVisible"
            action="http://127.0.0.1:8001/service/file/upload"
            :onSubmit="handleSubmit"
        />

        <!-- 拍照上传 -->
        <camera-upload2
            :visible.sync="cameraUploadVisible2"
            action="http://127.0.0.1:8001/service/file/upload"
            :onSubmit="handleSubmit"
        />
    </div>
</template>

<script>
import CameraUpload from '@/components/camera-upload/index.vue';
import CameraUpload2 from '@/components/camera-upload/index2.vue';

export default {
    components: {
        CameraUpload,
        CameraUpload2,
    },
    data() {
        return {
            cameraUploadVisible: false,
            cameraUploadVisible2: false,
        };
    },
    methods: {
        handleOpen() {
            this.cameraUploadVisible = true;
        },
        handleOpen2() {
            this.cameraUploadVisible2 = true;
        },
        handleSubmit(res) {
            console.log(res);
        },
    },
};
</script>
