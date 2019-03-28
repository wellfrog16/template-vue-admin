<template>
    <el-dialog :visible.sync="dialogVisible" :before-close="handleClose">
        <el-upload
            :multiple="true"
            :file-list="fileList"
            :show-file-list="true"
            :on-remove="handleRemove"
            :on-success="handleSuccess"
            :before-upload="beforeUpload"
            class="editor-slide-upload"
            action="https://httpbin.org/post"
            list-type="picture-card"
        >
            <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </el-dialog>
</template>

<script>
export default {
    props: {
        visible: { type: Boolean, default: false },
    },
    data() {
        return {
            dialogVisible: false,
            fileList: [],
            listObj: {},
        };
    },
    watch: {
        visible(val) { this.dialogVisible = val; },
    },
    methods: {
        // 关闭组件
        handleClose() {
            this.$emit('visible', false);
        },
        checkAllSuccess() {
            return Object.keys(this.listObj).every(item => this.listObj[item].hasSuccess);
        },
        handleSubmit() {
            const arr = Object.keys(this.listObj).map(v => this.listObj[v]);
            if (!this.checkAllSuccess()) {
                this.$message('请等待所有图片上传成功 或 出现了网络问题，请刷新页面重新上传！');
                return;
            }
            this.$emit('successCBK', arr);
            this.listObj = {};
            this.fileList = [];
            this.dialogVisible = false;
        },
        handleSuccess(response, file) {
            console.log(1111111);
            console.log(response);
            console.log(file);
            const { uid } = file;
            const objKeyArr = Object.keys(this.listObj);
            for (let i = 0, len = objKeyArr.length; i < len; i += 1) {
                if (this.listObj[objKeyArr[i]].uid === uid) {
                    this.listObj[objKeyArr[i]].url = response.files.file;
                    this.listObj[objKeyArr[i]].hasSuccess = true;
                    return;
                }
            }
        },
        handleRemove(file) {
            const { uid } = file;
            const objKeyArr = Object.keys(this.listObj);
            for (let i = 0, len = objKeyArr.length; i < len; i += 1) {
                if (this.listObj[objKeyArr[i]].uid === uid) {
                    delete this.listObj[objKeyArr[i]];
                    return;
                }
            }
        },
        beforeUpload(file) {
            const self = this;
            const url = window.URL || window.webkitURL;
            const fileName = file.uid;
            this.listObj[fileName] = {};
            console.log(22222222);
            console.log(file);
            return new Promise((resolve) => {
                const img = new Image();
                img.src = url.createObjectURL(file);
                img.onload = function abc() {
                    self.listObj[fileName] = {
                        hasSuccess: false, uid: file.uid, width: this.width, height: this.height,
                    };
                };
                resolve(true);
            });
        },
    },
};
</script>
