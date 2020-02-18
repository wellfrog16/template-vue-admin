<template>
    <x-col
        title="拍照上传"
        icon="fas fa-camera fa-fw"
    >
        <el-alert title="用于拍照上传或者上传图片" type="info" :closable="false" />
        <el-divider><i class="fas fa-camera fa-fw" /></el-divider>
        <el-button type="primary" @click="handleOpen">人像上传</el-button>
        <el-button type="primary" @click="handleOpen2">人像上传</el-button>

        <!-- 拍照上传 -->
        <camera-upload
            :visible.sync="cameraUploadVisible"
            :onSubmit="handleSubmit"
            :http-request="httpRequest"
        />

        <!-- 拍照上传 -->
        <camera-upload
            :visible.sync="cameraUploadVisible2"
            :onSubmit="handleSubmit2"
            :http-request="httpRequest"
        />
    </x-col>
</template>

<script>
import upload from '@/api/sys/upload';
import CameraUpload from '@/components/camera-upload/index.vue';
import XCol from '#index/components/col-card.vue';

export default {
    components: {
        XCol,
        CameraUpload,
    },
    data() {
        return {
            httpRequest: upload,
            cameraUploadVisible: false,
            cameraUploadVisible2: false,
        };
    },
    methods: {
        handleOpen() {
            this.cameraUploadVisible = true;
        },
        handleSubmit(res, done) {
            console.log(res);
            const test = new FormData();
            upload(test).then(() => done()).catch(() => done());
        },
        handleOpen2() {
            this.cameraUploadVisible2 = true;
        },
        handleSubmit2(res, done) {
            console.log(res);
            const test = new FormData();
            upload(test).then(() => done()).catch(() => done());
        },
    },
};
</script>
