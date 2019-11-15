<template>
    <el-card shadow="never">
        文档
        <el-button @click="send">测试</el-button>
        <el-button @click="send2">测试2</el-button>
        <el-button @click="send3">测试2</el-button>
        <el-button @click="send4">检测图片宽高</el-button>
        <div>

            <el-button @click="send5">翻译</el-button>
        </div>
    </el-card>
</template>

<script>
import api from '@/api/sys/test';
// import loader from '@/utils/loader';
// import cdnPath from '@/utils/cdn';

export default {
    // mounted() {
    //     console.log(cdnPath);
    //     this.test();
    // },
    methods: {
        send() {
            const res = api.test();
            res.then((qq) => {
                console.log(111);
                console.log(qq);
            });
        },
        send2() {
            const message = { title: '错误', message: '测试', type: 'error' };
            this.$store.commit('setState', { message });
        },
        send3() {
            api.token();
        },
        // async test() {
        //     try {
        //         await loader.loadScript(['http://www.bb.com/jj.js', cdnPath.tinymce, cdnPath.jqueryTinymce]);
        //     } catch {
        //         console.log('error');
        //     }
        // },
        send4() {
            this.$utils.getImageSize('http://pic1.win4000.com/wallpaper/2019-01-16/5c3eff44cd5d5.jpg')
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        send5() {
            api.translate('dog');
        },
    },
};
</script>
