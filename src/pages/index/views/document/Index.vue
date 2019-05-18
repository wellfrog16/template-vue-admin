<template>
    <el-card shadow="never">
        文档
    </el-card>
</template>

<script>
import cdnPath from '@/utils/cdn';

export default {
    mounted() {
        console.log(cdnPath);
    },
};
</script>
