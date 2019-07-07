<template>
    <el-card shadow="never">
        文档
        <el-button @click="send">测试</el-button>
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
