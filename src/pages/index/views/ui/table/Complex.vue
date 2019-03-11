<template>
    <div class="container-complex-table">
        <search class="search" />
        <el-table
            class="table"
            height="500"
            border
            :data="list">
            <el-table-column type="selection" width="42" />
            <el-table-column fixed prop="name" label="姓名" width="120" align="center" />
            <el-table-column prop="gender" label="性别" width="50" align="center" />
            <el-table-column prop="birthday" label="日期" width="150" align="center" />
            <el-table-column prop="income" label="收入" width="150" align="right" />
            <el-table-column prop="education" label="学历" width="150" align="center" />
            <el-table-column prop="id" label="身份证" width="200" align="center" />
            <el-table-column prop="county" label="区域" width="350" />
            <el-table-column prop="email" label="邮箱" width="250" />
            <el-table-column prop="zip" label="邮编" width="100" align="center" />
            <el-table-column prop="remark" label="备注" width="500" />
            <el-table-column
                fixed="right"
                label="操作"
                width="150">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="success" size="mini">查看</el-button>
                    <el-button type="primary" size="mini">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <pagination class="pagination flex-row-center" />
    </div>
</template>

<script>
import api from '@/api/mock/table';

export default {
    components: {
        Search: () => import('../../../components/ui/table/complex/search.vue'),
        Pagination: () => import('../../../components/ui/table/complex/pagination.vue'),
    },
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
        handleClick() {
            console.log(99);
        },
    },
};
</script>

<style lang="less" module>
</style>
