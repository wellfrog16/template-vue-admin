<template>
    <x-col
        title="图片裁剪"
        icon="fas fa-crop fa-fw"
    >
        <el-alert title="用于图片上传前裁剪图片" type="info" :closable="false" />
        <el-divider><i class="fas fa-crop fa-fw" /></el-divider>

        <x-cropper
            :http-request="httpRequest"
            :imageOptions="{
                width: '200px',
                height: '100px',
                src: imageSrc,
                iconSize: 30,
            }"
            :cropperWidth="400"
            :cropperHeight="200"
        />
    </x-col>
</template>

<script>
import XCropper from '@/components/cropper/index.vue';
import XCol from '#index/components/col-card.vue';
// import upload from '@/api/sys/upload';

export default {
    components: {
        XCol,
        XCropper,
    },
    data() {
        return {
            imageSrc: '',
        };
    },
    methods: {
        httpRequest(file, done) {
            // offline
            this.imageSrc = window.URL.createObjectURL(file);
            console.log(this.imageSrc);
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
    },
};
</script>

<style lang="less" module>
.location {
    line-height: 1.4em;
}
</style>
