<template>
    <x-col
        title="图片裁剪"
        icon="fas fa-crop fa-fw"
    >
        <el-alert title="用于图片上传前裁剪图片" type="info" :closable="false" />
        <el-divider><i class="fas fa-crop fa-fw" /></el-divider>
        <!-- <x-upload-image
            :http-request="httpRequest"
            :icon-size="30"
            :image-src="imageSrc"
            width="200px"
            height="100px"
        />

        <img src="@/assets/img/usr/logo.png" ref="myimg" alt="">
        <div ref="mywrapper"></div> -->

        <!-- 地图选点 -->
        <x-cropper
            :http-request="httpRequest"
            :icon-size="30"
            :image-src="imageSrc"
            width="200px"
            height="100px"
        />
    </x-col>
</template>

<script>
import XCol from '../col.vue';
import XCropper from '@/components/cropper/index.vue';
// import { Cropper } from '@/utils/cdn';
import upload from '@/api/sys/upload';

export default {
    components: {
        XCol,
        XCropper,
    },
    data() {
        return {
            // visible: false,
            imageSrc: '',
        };
    },
    methods: {
        handleOpen() {
            this.visible = true;
        },

        httpRequest(file, done) {
            // const img = new Image(122, 222);
            // const blob = window.URL.createObjectURL(file);
            // img.src = blob;
            // console.log(img);
            // this.$refs.mywrapper.appendChild(img);
            // const x = new Cropper(img);
            // console.log(x);
            // this.visible = true;
            // done();
            upload(file).then((res) => {
                this.imageSrc = `${this.$helper.config.server.image}/${res.file}`;
                console.log(res);
                done();
            }).catch((err) => {
                console.log(err);
                done();
            });
        },
    },
};
</script>

<style lang="less" module>
.location {
    line-height: 1.4em;
}
</style>
