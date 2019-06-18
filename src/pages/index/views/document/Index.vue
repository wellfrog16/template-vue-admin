<template>
    <el-card shadow="never">
        文档
    </el-card>
</template>

<script>
import loader from '@/utils/loader';
import cdnPath from '@/utils/cdn';

export default {
    mounted() {
        console.log(cdnPath);
        this.test();
    },
    methods: {
        async test() {
            try {
                await loader.loadScript(['http://www.bb.com/jj.js', cdnPath.tinymce, cdnPath.jqueryTinymce]);
            } catch {
                console.log('error');
            }
        },
    },
};
</script>
