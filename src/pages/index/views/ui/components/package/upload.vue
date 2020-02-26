<template>
    <x-col
        title="上传"
        icon="fas fa-upload"
    >
        <el-alert title="上传图片，显示支持图片fit以及button。" type="info" :closable="false" />
        <el-divider><i class="fas fa-upload" /></el-divider>
        <el-row>
            <el-col :span="12">
                <x-upload-image
                    :http-request="httpRequest"
                    :imageOptions="{
                        width: '150px',
                        height: '100px',
                        src: imageSrc,
                        iconSize: 20,
                    }"
                />
            </el-col>
            <el-col :span="12">
                <x-upload-image
                    :http-request="httpRequest2"
                    type="button"
                    :buttonOptions="{
                        type: 'primary',
                    }"
                />
                <el-alert :title="result" type="info" :closable="false" />
            </el-col>
        </el-row>
    </x-col>
</template>

<script>
import XUploadImage from '@/components/upload-image/index.vue';
import XCol from '#index/components/col-card.vue';

export default {
    components: {
        XCol,
        XUploadImage,
    },
    data() {
        return {
            imageSrc: '',
            imageSrc2: '',
            result: '图片路径',
        };
    },
    methods: {
        httpRequest(file, done) {
            // offline
            this.imageSrc = window.URL.createObjectURL(file);
            done();

            // online
            // upload(file).then((res) => {
            //     this.imageSrc = `${this.$helper.config.server.image}/${res.file}`;
            //     done();
            // }).catch((err) => {
            //     console.log(err);
            //     done();
            // });
        },

        httpRequest2(file, done) {
            // offline
            this.result = window.URL.createObjectURL(file);
            done();

            // online
            // upload(file).then((res) => {
            //     this.imageSrc2 = `${this.$helper.config.server.image}/${res.file}`;
            //     done();
            // }).catch((err) => {
            //     console.log(err);
            //     done();
            // });
        },
    },
};
</script>
