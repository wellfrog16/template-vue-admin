<template>
    <el-card shadow="never">
        文档
    </el-card>
</template>

<script>
import cdnPath from '@/utils/cdn';
import { PAGE, PAGE_SIZE } from '@/helper/constant';

export default {
    mounted() {
        console.log(cdnPath);
        console.log(PAGE, PAGE_SIZE);
    },
};
</script>
