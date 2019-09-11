<template>
    <el-upload
        :class="$style.uploader"
        action=""
        :show-file-list="false"
        :accept="accept"
        :http-request="handleHttpRequest"
        :before-upload="handleBeforeUpload"
        v-loading="loading"
    >
        <el-image v-if="hasImage" :src="imageSrc" fit="contain" :style="imageSizeStyle" :class="$style.photo">
            <div slot="placeholder">加载中... </div>
        </el-image>
        <i v-else :class="[$style.icon, 'el-icon-plus']" :style="iconSizeStyle" />
    </el-upload>
</template>

<script>
export default {
    props: {
        // 接受的文件格式
        accept: { type: String, default: '.jpg,.jpeg,.png' },

        // 图片地址
        imageSrc: { type: String, default: '' },

        // 图片大小限制，默认最大2M
        maxSize: { type: Number, default: 2 * 1024 * 1024 },

        // 组件宽
        width: { type: String, default: '200px' },

        // 组件高
        height: { type: String, default: '200px' },

        // icon的fontsize
        iconSize: { type: Number, default: 28 },

        // 自定义上传
        httpRequest: { type: Function },

        // 上传前回调，return false中止上传
        beforeUpload: { type: Function },
    },
    data() {
        return {
            loading: false,
        };
    },
    computed: {
        hasImage() {
            return !!this.imageSrc;
        },
        imageSizeStyle() {
            return {
                width: this.width,
                height: this.height,
                'line-height': this.height,
            };
        },
        iconSizeStyle() {
            return {
                width: this.width,
                height: this.height,
                'line-height': this.height,
                'font-size': `${this.iconSize}px`,
            };
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
@import '~@/assets/style/config.less';

.uploader {
    display: inline-block;
    line-height: 1;

    :global(.el-upload) {
        border: 1px dashed @g-color-border1;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;

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
