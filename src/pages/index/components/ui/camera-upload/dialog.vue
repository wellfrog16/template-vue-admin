<template>
    <div>
        <el-button type="primary" @click="handleOpen">人像上传</el-button>

        <!-- 拍照上传 -->
        <camera-upload
            :visible.sync="cameraUploadVisible"
            :onSubmit="handleSubmit"
            :upload="true"
            :http-request="api.upload"
        />
    </div>
</template>

<script>
import api from '@/api/sys/upload';
import CameraUpload from '@/components/camera-upload/index.vue';

export default {
    components: {
        CameraUpload,
    },
    data() {
        return {
            api,
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
