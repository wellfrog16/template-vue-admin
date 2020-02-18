<template>
    <div :class="$style.main">
        <x-upload-image
            v-bind="$props"
            :http-request="handleHttpRequest"
        />

        <x-cropper-core
            :visible.sync="cropperVisible"
            :image="image"
            :image-smoothing-quality="imageSmoothingQuality"
            :cropperWidth="cropperWidth || parseInt(width, 0)"
            :cropperHeight="cropperHeight || parseInt(height, 0)"
            @on-finished="handleFinished"
            @on-cancel="cancel"
        />
    </div>
</template>

<script>
import uploadImageProps from '../upload-image/props';
import XUploadImage from '../upload-image/index.vue';
import XCropperCore from './core.vue';

export default {
    components: {
        XUploadImage,
        XCropperCore,
    },
    props: {
        ...uploadImageProps, // 图片上传的props

        // 图片质量
        imageSmoothingQuality: { type: String, default: 'high' },

        // 裁剪框大小
        cropperWidth: { type: Number },
        cropperHeight: { type: Number },
    },
    data() {
        return {
            cropperVisible: false,
            image: new Image(),
            handleDone: null,
        };
    },
    methods: {
        handleHttpRequest(file, done) {
            const img = new Image();
            const blob = window.URL.createObjectURL(file);
            img.src = blob;
            this.image = img;
            this.cropperVisible = true;
            this.handleDone = done;
        },
        handleFinished(blobFile) {
            this.httpRequest(blobFile, this.handleDone);
        },

        cancel() {
            this.handleDone();
        },
    },
};
</script>

<style lang="less" module>
.main {
    display: inline-block;
}
</style>
