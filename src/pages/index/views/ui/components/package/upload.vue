<template>
    <x-col
        title="上传"
        icon="fas fa-upload"
    >
        <el-alert title="上传图片，显示支持fit" type="info" :closable="false" />
        <el-divider><i class="fas fa-upload" /></el-divider>
        <el-row>
            <el-col :span="12">
                <x-upload-image
                    :http-request="httpRequest"
                    :icon-size="20"
                    :src="imageSrc"
                    width="200px"
                    height="100px"
                />
            </el-col>
            <el-col :span="12">
                <x-upload-image
                    :http-request="httpRequest2"
                    :icon-size="20"
                    :src="imageSrc2"
                    fit="cover"
                    width="100px"
                    height="100px"
                />
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
            this.imageSrc2 = window.URL.createObjectURL(file);
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
