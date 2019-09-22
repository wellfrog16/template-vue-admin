<template>
    <el-dialog
        title="图片裁剪"
        :visible.sync="visible"
        :width="dialogWidth"
        class="or-dialog-wrapper"
        custom-class="or-dialog"
        append-to-body
        :close-on-click-modal="false"
        :before-close="handleBeforeClose"
        top='0'
    >
        <div :class="$style.container" v-loading="loading">
            <div ref="workbench" :class="$style.workbench" :style="containerStyle"></div>
        </div>
        <span slot="footer">
            <el-button :loading="loading" @click="handleCancle">取 消</el-button>
            <el-button :loading="loading" type="primary" @click="handleFinish">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { Cropper } from '@/utils/cdn';

export default {
    props: {
        visible: { type: Boolean, default: false },
        image: { type: HTMLImageElement, required: true },

        // 图片质量
        imageSmoothingQuality: { type: String, default: 'high' },

        // 裁剪容器大小
        containerWdith: { type: Number, default: 600 },
        containerHeight: { type: Number, default: 450 },

        // 裁剪框大小
        cropperWidth: { type: Number, default: 400 },
        cropperHeight: { type: Number, default: 300 },

        // 裁剪框坐标
        // cropperTop: { type: Number, default: 0 },
        // cropperLeft: { type: Number, default: 0 },
    },
    data() {
        return {
            cropper: null,
            loading: false,
        };
    },
    computed: {
        dialogWidth() {
            return `${this.containerWdith + 40}px`;
        },
        containerStyle() {
            return {
                width: `${this.containerWdith}px`,
                height: `${this.containerHeight}px`,
            };
        },
    },
    watch: {
        visible(val) {
            val && this.$nextTick(() => this.update());
        },
    },
    methods: {
        // 更新待裁剪图片
        update() {
            this.$refs.workbench.appendChild(this.image);
            const self = this;
            this.cropper = new Cropper(this.image, {
                viewMode: 1,
                aspectRatio: self.cropperWidth / self.cropperHeight,
                // cropBoxResizable: false, // 是否可以改变crop框大小
                toggleDragModeOnDblclick: false, // 双击切换拖动模式
                guides: true, // 网格
                minContainerHeight: parseInt(this.containerHeight, 0),
                ready() {
                    const { cropper } = this;
                    cropper.setDragMode('move'); // 拖动模式
                },
            });
        },

        // 完成裁剪
        handleFinish() {
            this.loading = true;
            this.cropper.getCroppedCanvas({
                width: this.cropperWidth,
                height: this.cropperHeight,
                imageSmoothingQuality: this.imageSmoothingQuality,
            }).toBlob((blob) => {
                this.$emit('on-finished', blob);
                this.loading = false;
                this.close();
            });
        },

        handleCancle() {
            this.close();
            this.$emit('on-cancel');
        },

        handleBeforeClose() {
            return !this.loading && this.handleCancle();
        },

        close() {
            this.$emit('update:visible', false);
            this.cropper.destroy();
            this.$refs.workbench.innerHTML = '';
        },
    },
};
</script>

<style lang="less" module>
.container {
    width: 100%;
}

.workbench {
    overflow: hidden;
}
</style>
