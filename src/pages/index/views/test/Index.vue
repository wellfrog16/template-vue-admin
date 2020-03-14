<template>
    <el-card shadow="never">
        测试
        <div :class="$style.test"></div>
    </el-card>
</template>

<script>
// import api from '@/api/sys/upload';

export default {
    mounted() {
        // console.log(File);
        // api();
        // api.test2({ code: '999' });
    },
};
</script>

<style lang="less" module>
@import '~@/assets/style/common/function.less';

.test {
    .triangle(right, 10px, red);

    line-height: 1;
}
</style>
