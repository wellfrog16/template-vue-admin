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
        <el-image v-if="hasImage" :src="src" fit="contain" :style="imageSizeStyle" :class="$style.photo">
            <div slot="placeholder">加载中... </div>
        </el-image>
        <i v-else :class="[$style.icon, 'el-icon-plus']" :style="iconSizeStyle" />
    </el-upload>
</template>

<script>
import props from './props'; // 方便复用

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
        hasImage() {
            return !!this.src;
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
