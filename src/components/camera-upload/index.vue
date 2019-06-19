<template>
    <div>
        <el-dialog
            :title="title"
            :visible.sync="visible"
            :before-close="handleClose"
            :close-on-click-modal="false"
            class="or-dialog-wrapper"
            custom-class="or-dialog"
            width="440px"
            top="0"
        >
            <el-image :src="url" fit="cover" :class="$style.image"></el-image>
            <div>
                <el-button @click="handleOpenCamera">打开摄像头</el-button>
            </div>
            <span slot="footer">
                <el-button @click="handleClose">取消</el-button>
                <el-button type="primary" @click="handleSave">保存</el-button>
            </span>
        </el-dialog>

        <!-- 摄像头拍照 -->
        <camera :visible.sync="cameraVisible"  />
    </div>
</template>

<script>
import Camera from './camera.vue';

export default {
    components: {
        Camera,
    },
    props: {
        visible: { type: Boolean, default: false },
        title: { type: String, default: '拍照上传' },
    },
    data() {
        return {
            q: '',
            url: '',
            cameraVisible: false,
        };
    },
    methods: {
        handleClose(done) { done(); },

        handleSave() {
            console.log('save');
        },

        handleOpenCamera() {
            this.cameraVisible = true;
        },
    },
};
</script>

<style lang="less" module>
.image {
    width: 100%;
    height: 300px;
}
</style>
