<template>
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
        <video id="video" width="400" height="300"></video>
        <canvas id="canvas" width="400" height="300"></canvas>
        <span slot="footer">
            <el-button @click="handleClose">取消</el-button>
            <el-button type="primary" @click="handleSave">拍照</el-button>
        </span>
    </el-dialog>
</template>

<script>
// import { $ } from '@/utils/cdn';
import api from '@/api/sys/upload';

export default {
    props: {
        visible: { type: Boolean, default: false },
        title: { type: String, default: '拍照上传' },
    },
    data() {
        return {
            q: '',
            url: '',
        };
    },
    watch: {
        visible(val) {
            val && this.$nextTick(() => this.init());
        },
    },
    methods: {
        init() {
            const video = document.querySelector('#video');
            console.log(video);
            console.log(document.querySelector('#video'));

            // 访问用户媒体设备的兼容方法
            function getUserMedia(constraints, successCallback, err) {
                if (navigator.mediaDevices.getUserMedia) {
                    // 最新的标准API
                    navigator.mediaDevices.getUserMedia(constraints).then(successCallback).catch(err);
                } else if (navigator.webkitGetUserMedia) {
                    // webkit核心浏览器
                    navigator.webkitGetUserMedia(constraints, successCallback, err);
                } else if (navigator.mozGetUserMedia) {
                    // firfox浏览器
                    navigator.mozGetUserMedia(constraints, successCallback, err);
                } else if (navigator.getUserMedia) {
                    // 旧版API
                    navigator.getUserMedia(constraints, successCallback, err);
                }
            }

            function success(stream) {
                // 兼容webkit核心浏览器
                // let CompatibleURL = window.URL || window.webkitURL;
                // 将视频流设置为video元素的源
                console.log(stream);
                console.log(video);

                // video.src = CompatibleURL.createObjectURL(stream);
                video.srcObject = stream;
                video.play();
            }

            function error(err) {
                console.log(`访问用户媒体设备失败${err.name}, ${err.message}`);
            }

            if (navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia) {
                // 调用用户媒体设备, 访问摄像头
                getUserMedia({ video: { width: 400, height: 300 } }, success, error);
            } else {
                console.log('不支持访问用户媒体');
            }
        },

        handleClose(done) {
            const video = document.querySelector('#video');
            video.pause();
            // video.srcObject.stop();
            video.srcObject.getVideoTracks()[0].stop();
            video.srcObject = null;
            done();
        },

        handleSave() {
            const canvas = document.getElementById('canvas');
            const context = canvas.getContext('2d');
            const video = document.querySelector('#video');
            context.drawImage(video, 0, 0, 400, 300);
            // const img = canvas.toDataURL();
            // console.log(img);

            canvas.toBlob((blobObj) => {
                api.upload(blobObj);
                // console.log(blobObj);

                // const fd = new FormData();
                // fd.append('avatar', blobObj);

                // $.ajax({
                //     type: 'POST',
                //     url: 'http://127.0.0.1:8001/service/file/upload',
                //     // data: { name: 'avatar', file: img.substr(img.indexOf(',') + 1) }, // 视情况将base64的前面字符串data:image/png;base64,删除
                //     // data: { name: 'avatar', file: blobObj }, // 视情况将base64的前面字符串data:image/png;base64,删除
                //     data: fd,
                //     cache: false,
                //     processData: false,
                //     contentType: false,
                //     success() {
                //         console.log('ok');
                //     },
                // });
            });
        },

        handleOpenCamera() {
            console.log('11');
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
