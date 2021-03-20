<template>
    <el-card shadow="never">
        测试
        <div :class="$style.test"></div>
        <el-button @click="mytest">测试</el-button>
    </el-card>
</template>

<script>
import api from '@/api/sys/test';
import api2 from '@/api/mock/echarts';

export default {
    mounted() {
        // console.log(File);
        // api();
        // api.test2({ code: '999' });
    },
    methods: {
        mytest() {
            api.testGet({ name: 'get' });
            api.testPost({ name: 'post' });
            api2.flights();
        },
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
