<template>
    <div>
        <el-dialog
            :title="title"
            :visible.sync="visible"
            :before-close="handleClose"
            :close-on-click-modal="false"
            class="or-dialog-wrapper"
            custom-class="or-dialog"
            :width="dialogWidth"
            top="0"
        >
            <!-- 主窗口区域 -->
            <el-card :class="$style.windows" :style="windowStyle" v-loading="loading">
                <el-image v-show="imageVisible" :src="fixedImageUrl" fit="cover" />
                <video v-show="videoVisible" :width="width" :height="height" />
                <canvas v-show="canvasVisible" :width="width" :height="height" />
                <div v-show="alertVisible" :class="$style.alert">
                    <transition name="el-fade-in-linear">
                        <el-alert v-show="alertSuccessVisible" title="提示" type="success" center show-icon :closable="false" description="照片拍摄成功" />
                    </transition>
                    <transition name="el-fade-in-linear">
                        <el-alert v-show="alertErrorVisible" title="提示" type="error" center show-icon :closable="false" description="打开摄像头失败" />
                    </transition>
                </div>

                <!-- 拍照/上传操作选择区 -->
                <div v-show="placeholderVisible" :class="[{ [$style['placeholder-opacity']]: placeholderOpacity }, $style.placeholder]">
                    <div
                        class="flex-center"
                        v-loading="loading"
                        :disabled="loading"
                        v-show="cameraVisible"
                        @click="handleOpenCamera"
                    >
                        <i class="fas fa-camera fa-5x" />
                    </div>
                    <div class="flex-center" v-show="uploadVisible">
                        <el-upload
                            class="fullsize"
                            :class="$style.upload"
                            :name="name"
                            ref="upload"
                            :action="action"
                            :headers="headers"
                            :on-change="handleUploadChange"
                            :on-success="handleUploadSuccess"
                            :on-error="handleUploadError"
                            :file-list="fileList"
                            :show-file-list="false"
                            :auto-upload="false"
                            :http-request="test"
                        >
                            <div class="flex-center abs-fullsize" slot="trigger"><i class="fas fa-upload fa-5x" /></div>
                        </el-upload>
                    </div>
                </div>
            </el-card>

            <!-- 操作区 -->
            <span slot="footer">
                <el-button :loading="loading" :disabled="loading" v-show="cancelVisible" @click="handleClose">取消</el-button>
                <el-button :loading="loading" :disabled="loading" v-show="saveVisible" type="primary" @click="handleSave">{{ submitText }}</el-button>
                <el-button :loading="loading" :disabled="loading" v-show="backVisible" @click="handleBack">返回</el-button>
                <el-button :loading="loading" :disabled="loading" v-show="videoVisible" type="primary" @click="handleShot">拍摄</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
// 需要axios支持，可以考虑解耦
import { axios } from '@/utils/cdn';
import Camera from '@/utils/camera';

// 常量
const TYPE_UPLOAD = 'upload';
const TYPE_CAMERA = 'camera';
const WINDOW_IMAGE = 'image';
const WINDOW_VIDEO = 'vidoe';
const WINDOW_CANVAS = 'canvas';
const WINDOW_PLACEHOLDER = 'placeholder';

export default {
    props: {
        name: { type: String, default: 'avatar' }, // 上传的文件字段名
        action: { type: String }, // 上传地址
        headers: { type: Object }, // 设置上传的请求头部
        visible: { type: Boolean, default: false }, // 组件显示
        title: { type: String, default: '拍照上传' },
        type: { type: Array, default: () => [TYPE_UPLOAD, TYPE_CAMERA] }, // 功能默认包含 上传和拍照
        width: { type: Number, default: 480 },
        height: { type: Number, default: 320 },
        upload: { type: Boolean, default: true }, // 保存时是否上传图片
        onSuccess: { type: Function }, // 上传成功的钩子
        onError: { type: Function }, // 上传失败的钩子
        onSubmit: { type: Function }, // 保存时不上传，则执行submit
        submitText: { type: String, default: '保存' },
        src: { type: String },
        httpRequest: { type: Function }, // 上传用接口
    },
    data() {
        return {
            loading: false,
            currentWindow: '', // 当前window的显示状态
            lastWindow: WINDOW_PLACEHOLDER, // 返回时显示的窗口，默认cavas > image > placeholder
            imageUrl: '',
            fileList: [], // 上传的已选择的文件列表，只保留一个
            camera: null, // 摄像头初始化
            isShoted: false, // 是否拍摄过
            alertVisible: false, // 提示信息是否显示
            alertSuccessVisible: false, // 拍照成功信息
            alertErrorVisible: false, // 打开摄像头错误
            canvas: null, // 拍照canvas对象
        };
    },
    computed: {
        // 对话框宽度
        dialogWidth() {
            const paddingWidth = 40;
            const borderWidth = 2;
            return `${this.width + paddingWidth + borderWidth}px`;
        },

        // 窗口样式
        windowStyle() {
            return {
                width: `${this.width}px`,
                height: `${this.height}px`,
            };
        },

        // 开启摄像头可见
        cameraVisible() {
            return this.type.includes(TYPE_CAMERA);
        },

        // 上传按钮可见
        uploadVisible() {
            return this.type.includes(TYPE_UPLOAD);
        },

        // 图片窗口可见
        imageVisible() {
            return this.currentWindow === WINDOW_IMAGE;
        },

        // 拍摄窗口可见
        videoVisible() {
            return this.currentWindow === WINDOW_VIDEO;
        },

        // 拍摄结果窗口可见
        canvasVisible() {
            return this.currentWindow === WINDOW_CANVAS;
        },

        // 提示操作窗口透明的设置
        placeholderOpacity() {
            return this.currentWindow === WINDOW_PLACEHOLDER;
        },

        // 提示操作窗口可见
        placeholderVisible() {
            return this.currentWindow === WINDOW_PLACEHOLDER || this.imageVisible || this.canvasVisible;
        },

        // 返回按钮可见
        backVisible() {
            return this.videoVisible;
        },
        // 保存按钮可见
        saveVisible() {
            // 已经获得待上传图片或者拍摄过
            const haveSource = this.isImageSelected || this.isShoted;

            // 在资源窗口
            const myWindow = [WINDOW_CANVAS, WINDOW_IMAGE].includes(this.currentWindow);

            return haveSource && myWindow;
        },

        // 取消按钮可见
        cancelVisible() {
            return !this.videoVisible;
        },

        // 传入图片地址和上传图片地址选择
        fixedImageUrl() {
            return this.imageUrl || this.src;
        },

        // 是否已经选择待上传的图片
        isImageSelected() {
            return this.imageUrl !== '';
        },

        // 上传按钮是否可操作
        uploadDisabled() {
            return this.loading || this.currentWindow === WINDOW_VIDEO;
        },
    },
    watch: {
        visible(val) {
            val && this.initWindow();
        },
    },
    methods: {
        // 打开对话框时，更新需要显示的窗口，初始化数据
        initWindow() {
            this.currentWindow = '';
            this.isShoted = false;
            this.imageUrl = '';
            this.fileList = [];
            this.lastWindow = WINDOW_PLACEHOLDER;
            this.toggleWindow(WINDOW_PLACEHOLDER);

            if (this.src) {
                this.lastWindow = WINDOW_IMAGE;
                this.toggleWindow(WINDOW_IMAGE);
            }
        },

        // 关闭对话框
        handleClose() {
            if (!this.loading) {
                this.closeCamera();
                this.$emit('update:visible', false);
            }
        },

        handleSave() {
            // 图片
            if (this.isImageSelected && this.lastWindow === WINDOW_IMAGE) {
                this.upload && this.uploadImage();
                !this.upload && this.onSubmit(this.imageUrl);
            }

            // 拍照
            if (this.isShoted && this.lastWindow === WINDOW_CANVAS) {
                this.upload && this.canvas.toBlob(blob => this.uploadShot(blob));
                !this.upload && this.canvas.toBlob(blob => this.onSubmit(blob));
            }
        },

        // 打开摄像头
        handleOpenCamera() {
            if (this.videoVisible) { return; }
            this.loading = true;

            // 切换窗口
            this.toggleWindow(WINDOW_VIDEO);

            // 启动摄像头
            if (!this.camera) {
                const myWidow = document.querySelector(`.${this.$style.windows}`);
                const video = myWidow.querySelector('video');
                const canvas = myWidow.querySelector('canvas');
                this.canvas = canvas;
                const option = {
                    canvas,
                    width: this.width,
                    height: this.height,
                    successCallback: () => { this.loading = false; },
                };
                this.camera = new Camera(video, option);
            }

            try {
                this.camera.start();
            } catch {
                this.showAlert('Error');
            }
        },

        // 关闭摄像头
        closeCamera() {
            this.camera && this.camera.stop();
        },

        // 拍摄动作
        handleShot() {
            this.camera.shot();
            this.closeCamera();

            // 设置已拍摄
            this.isShoted = true;

            // 切换是拍摄结果窗口
            this.toggleWindow(WINDOW_CANVAS);
            this.lastWindow = WINDOW_CANVAS;

            // 提示
            this.showAlert('Success');
        },

        // 返回数据窗口>提示窗口
        handleBack() {
            this.closeCamera();
            this.showLastWindow();
            this.currentWindow === WINDOW_VIDEO && this.closeCamera();
        },

        // 上传文件
        submitUpload() {
            this.$refs.upload.submit();
        },

        // 根据数据显示默认的窗口，并配置相关数据
        showLastWindow() {
            this.toggleWindow(this.lastWindow);
        },

        // 切换窗口显示类型
        toggleWindow(type) {
            this.currentWindow = type;
        },

        // 上传文件变化时
        handleUploadChange(file, fileList) {
            // 进入这里说明选择了上传
            this.toggleWindow(WINDOW_IMAGE);
            this.lastWindow = WINDOW_IMAGE;

            // 未上传时，预览照片
            if (!file.response) {
                this.preview(file, fileList);
            }
        },

        // 上传预览
        preview(file, fileList) {
            // 只保留最后一个选择的文件
            fileList.length > 1 && fileList.splice(0, 1);

            const { event } = window;
            const currentFile = event.target.files[0];
            const reader = new FileReader();

            // 转base64
            reader.onload = (e) => {
                this.imageUrl = e.target.result;
            };
            reader.readAsDataURL(currentFile);
        },

        // 提示显示
        showAlert(type) {
            this.alertVisible = true;
            this[`alert${type}Visible`] = true;
            setTimeout(() => { this[`alert${type}Visible`] = false; }, 1500);
        },

        uploadImage() {
            this.loading = false;
            this.$refs.upload.submit();
        },

        // 用blob上传拍摄的照片
        uploadShot(blob) {
            this.loading = true;

            const formData = new FormData();
            formData.append(this.name, blob);

            axios({
                method: 'post',
                url: this.action,
                data: formData,
                headers: this.header,
            }).then((res) => {
                this.handleUploadSuccess(res, blob);
            }).catch((err) => {
                this.handleUploadError(err, blob);
            });
        },

        // blob上传或者el-upload上传成功时
        handleUploadSuccess(res, file) {
            this.loading = false;
            this.onSubmit && this.onSubmit(res, file);
            this.handleClose();
        },

        // blob上传或者el-upload上传失败时
        handleUploadError(err, file) {
            this.loading = false;
            this.onError && this.onError(err, file);
        },
    },
};
</script>

<style lang="less" module>
.windows {
    :global(.el-card__body) {
        padding: 0;
        height: 100%;
        position: relative;
    }

    :global(.el-card__body) > div, video, canvas {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    div.alert {
        position: absolute;
        z-index: 3;
        width: 200px;
        height: initial;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &:hover .placeholder {
        opacity: 1;
    }
}

// .placeholder {
//     display: flex;
//     justify-content: center;
// }

.upload {
    display: inline-block;
    margin-left: 8px;
}

.mask-transition() {
    transition: 0.3s all linear;
}

.placeholder {
    display: flex;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 10;
    opacity: 0;
    .mask-transition();

    > div {
        .mask-transition();

        position: relative;
        // flex-grow: 1;
        flex: 1 0 50%;
        color: rgba(0, 0, 0, 0.2);
        cursor: pointer;

        i {
            .mask-transition();

            font-size: 72px;
            color: rgba(255, 255, 255, 0.9);
        }

        &:hover {
            background-color: rgba(0, 0, 0, 0.4);

            i {
                transform: scale(1.2);
            }
        }
    }
}

.placeholder-opacity {
    opacity: 1;
}

.button-select {
    margin-top: 10px;
}
</style>
