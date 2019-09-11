<template>
    <div class="main-wrapper">
        <el-card shadow="never">
            <div slot="header">
                <span>图片上传</span>
            </div>
            <el-row>
                <el-col :span="12">
                    <x-upload-image
                        :http-request="httpRequest"
                        :icon-size="60"
                        :image-src="imageSrc"
                        width="400px"
                        height="300px"
                    />
                </el-col>
                <el-col :span="12">
                    <x-upload-image
                        :http-request="httpRequest2"
                        :icon-size="60"
                        :image-src="imageSrc2"
                        width="200px"
                        height="300px"
                    />
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
import XUploadImage from '@/components/upload-image/index.vue';
import upload from '@/api/sys/upload';

export default {
    components: {
        XUploadImage,
    },
    data() {
        return {
            imageSrc: '',
            imageSrc2: '',
        };
    },
    methods: {
        httpRequest(file, done) {
            upload(file).then((res) => {
                this.imageSrc = `${this.$helper.config.server.image}/${res.file}`;
                console.log(res);
                done();
            }).catch((err) => {
                console.log(err);
                done();
            });
        },

        httpRequest2(file, done) {
            upload(file).then((res) => {
                this.imageSrc2 = `${this.$helper.config.server.image}/${res.file}`;
                console.log(res);
                done();
            }).catch((err) => {
                console.log(err);
                done();
            });
        },
    },
};
</script>
