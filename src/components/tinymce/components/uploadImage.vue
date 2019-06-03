<template>
    <el-dialog
        :visible.sync="dialogVisible"
        :before-close="handleClose"
        class="or-dialog"
        :custom-class="$style.dialog"
        top="0"
    >
        <el-upload
            name="avatar"
            :multiple="false"
            :file-list="fileList"
            :show-file-list="true"
            :on-remove="handleRemove"
            :on-success="handleSuccess"
            :before-upload="beforeUpload"
            accept=".jpg,.jpeg,.png"
            :action="action"
            list-type="picture-card"
        >
            <el-button type="primary">点击上传</el-button>
        </el-upload>
        <span slot="footer" class="dialog-footer">
            <el-button @click="handleClose">取 消</el-button>
            <el-button type="primary" @click="handleSubmit" :loading="uploading">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import config from '@/config';

export default {
    props: {
        visible: { type: Boolean, default: false },
    },
    data() {
        return {
            dialogVisible: false,
            fileList: [],
            imgList: {},
            uploading: false,
            count: 0, // 计数，方便watch，直接watch imgList deep无效，原因未知
        };
    },
    computed: {
        allReady() {
            return !Object.keys(this.imgList).every(item => this.imgList[item].isSuccess);
        },
        action() {
            return config.server.upload || 'https://httpbin.org/post';
        },
    },
    watch: {
        visible(val) { this.dialogVisible = val; },
        count() {
            this.uploading = !this.checkAllSuccess();
        },
    },
    mounted() {
        window.aa = this;
    },
    methods: {
        // 关闭组件
        handleClose() {
            this.$emit('visible', false);
        },

        // 检测是否所有图片都上传完成
        checkAllSuccess() {
            return Object.keys(this.imgList).every(item => this.imgList[item].isSuccess);
        },

        // 提交图片
        handleSubmit() {
            const arr = Object.keys(this.imgList).map(v => this.imgList[v]);
            this.$emit('on-success', arr);
            this.imgList = {};
            this.fileList = [];
            this.count = 0;
            this.handleClose();
        },

        // 上传前，保存上传文件的基本信息
        beforeUpload(file) {
            const self = this;
            const url = window.URL || window.webkitURL;
            const { uid, size, type } = file;
            this.imgList[uid] = {};
            this.uploading = true;

            return new Promise((resolve) => {
                const img = new Image();
                img.src = url.createObjectURL(file);
                img.onload = function onload() {
                    self.imgList[uid] = {
                        isSuccess: false, uid, size, type, width: this.width, height: this.height,
                    };
                };
                resolve(true);
            });
        },

        // 文件上传成功写入文件地址
        handleSuccess(response, file) {
            Object.keys(this.imgList).forEach((key) => {
                const item = this.imgList[key];
                if (item.uid === file.uid) {
                    // 根据上传服务器回传修改
                    item.url = (response.files && response.files.file)
                        || (`${config.server.image}/${response.data.file}`);
                    item.isSuccess = true;
                    this.count += 1;
                }
            });
        },

        // 移除图片
        handleRemove(file) {
            Object.keys(this.imgList).forEach((key) => {
                this.imgList[key].uid === file.uid && delete this.imgList[key];
                this.count -= 1;
            });
        },
    },
};
</script>

<style lang="less" module>
.dialog {
    width: 530px;

    :global(.el-dialog__body) {
        max-height: 400px;
        overflow-y: auto;
    }
}
</style>
