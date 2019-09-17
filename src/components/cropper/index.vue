<template>
    <div :class="$style.main">
        <x-upload-image
            :accept="accept"
            :icon-size="iconSize"
            :image-src="imageSrc"
            :max-size="maxSize"
            :width="width"
            :height="height"
            :http-request="handleHttpRequest"
            :before-upload="beforeUpload"
        />

        <x-cropper-core
            :visible.sync="cropperVisible"
            :image="image"
            :image-smoothing-quality="imageSmoothingQuality"
            :cropWidth="parseInt(width, 0)"
            :cropHeight="parseInt(height, 0)"
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
    },
    data() {
        return {
            cropperVisible: false,
            image: new Image(),
            handleDone: null,
        };
    },
    computed: {
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
