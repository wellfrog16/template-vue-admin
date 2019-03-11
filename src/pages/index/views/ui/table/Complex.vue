<template>
    <el-table
        :data="list"
        style="width: 100%;"
        height="250">
        <el-table-column fixed prop="name" label="姓名" width="120" />
        <el-table-column prop="gender" label="性别" width="50" />
        <el-table-column prop="birthday" label="日期" width="150" />
        <el-table-column prop="education" label="学历" width="150" />
        <el-table-column prop="county" label="区域" width="200" />
        <el-table-column prop="email" label="邮箱" width="200" />
        <el-table-column prop="zip" label="邮编" width="200" />
        <el-table-column prop="remark" label="备注" width="200" />
        <el-table-column prop="id" label="身份证" width="200" />
        <el-table-column prop="province" label="省份" width="120" />
        <el-table-column prop="city" label="市区" width="120" />
        <el-table-column prop="address" label="地址" width="300" />
        <el-table-column prop="zip" label="邮编" width="120" />
    </el-table>
</template>

<script>
import api from '@/api/mock/table';

export default {
    data() {
        return {
            list: [],
        };
    },
    mounted() {
        this.loadList();
    },
    methods: {
        async loadList() {
            const res = await api.list();
            // console.log(res.list);

            this.list = res.list;

            // if (res.success) {
            //     this.list = res.list;
            // } else {
            //     console.log(999);
            // }
        },
    },
};
</script>

<style lang="less" module>

</style>
