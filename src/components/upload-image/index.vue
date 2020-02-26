<template>
    <el-upload
        :class="[$style.uploader, `upload-type-${type}`]"
        action=""
        :show-file-list="false"
        :accept="accept"
        :http-request="handleHttpRequest"
        :before-upload="handleBeforeUpload"
        v-loading="loading"
    >
        <template v-if="isImageType">
            <el-image v-if="hasImage" :src="imgOptions.src" :fit="imgOptions.fit" :style="imageSizeStyle" :class="$style.photo">
                <div slot="placeholder">加载中... </div>
            </el-image>
            <i v-else :class="[$style.icon, imgOptions.icon]" :style="iconSizeStyle" />
        </template>
        <template v-if="isButtonType">
            <el-button :size="btnOptions.size" :type="btnOptions.type" :icon="btnOptions.icon">{{ btnOptions.text }}</el-button>
        </template>
    </el-upload>
</template>

<script>
import props, { imageOptions, buttonOptions } from './props'; // 方便复用

export default {
    props: {
        ...props,
    },
    data() {
        return {
            loading: false,
        };
    },
    computed: {
        imgOptions() {
            return { ...imageOptions, ...this.imageOptions };
        },
        btnOptions() {
            return { ...buttonOptions, ...this.buttonOptions };
        },
        hasImage() {
            return !!this.imgOptions.src;
        },
        imageSizeStyle() {
            const options = this.imgOptions;
            return {
                width: options.width,
                height: options.height,
                'line-height': options.height,
            };
        },
        iconSizeStyle() {
            const options = this.imgOptions;
            return {
                width: options.width,
                height: options.height,
                'line-height': options.height,
                'font-size': `${options.iconSize}px`,
            };
        },
        isImageType() {
            return this.type === 'image';
        },
        isButtonType() {
            return this.type === 'button';
        },
    },
    methods: {
        // 上传前回调
        handleBeforeUpload(file) {
            if (file.size > this.maxSize) {
                const notification = {
                    title: '错误',
                    message: `图片大小不能超过${this.maxSize / 1024 / 1024}M`,
                    type: 'error',
                };
                this.$store.commit('setState', { notification });
                return false;
            }

            if (this.beforeUpload) {
                if (this.beforeUpload(file)) {
                    this.loading = true;
                    return true;
                }
                return false;
            }

            this.loading = true;
            return true;
        },

        handleHttpRequest({ file }) {
            this.httpRequest(file, () => { this.loading = false; });
        },
    },
};
</script>

<style lang="less" module>
@import '~@/assets/style/usr/index.config.less';

.uploader {
    display: inline-block;
    line-height: 1;

    :global(.el-upload) {
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    &:global(.upload-type-image .el-upload) {
        border: 1px dashed @g-color-border1;
        border-radius: 6px;

        &:hover {
            border-color: @g-color-primary;
        }
    }
}

.icon {
    color: #8c939d;
    text-align: center;

    &:hover {
        color: @g-color-primary;
    }
}

.photo {
    display: block;

    img {
        border-radius: 6px;
    }
}
</style>
