<template>
    <el-card shadow="never">
        测试
    </el-card>
</template>

<script>
import api from '@/api/sys/upload';

export default {
    mounted() {
        console.log(File);
        api();
        // api.test2({ code: '999' });
    },
};
</script>
