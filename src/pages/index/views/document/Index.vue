<template>
    <el-card shadow="never">
        文档
        <el-button @click="send">测试</el-button>
        <el-button @click="send2">测试2</el-button>
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
            const res = api();
            res.then((qq) => {
                console.log(111);
                console.log(qq);
            });
        },
        send2() {
            const message = { title: '错误', message: '测试', type: 'error' };
            this.$store.commit('setState', { message });
        },
        // async test() {
        //     try {
        //         await loader.loadScript(['http://www.bb.com/jj.js', cdnPath.tinymce, cdnPath.jqueryTinymce]);
        //     } catch {
        //         console.log('error');
        //     }
        // },
    },
};
</script>
