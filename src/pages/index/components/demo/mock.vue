<template>
    <div>
        <el-table :data="tableData" stripe >
            <el-table-column prop="date" label="日期" width="180" align="center"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180" align="center"></el-table-column>
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column prop="status" label="状态" width="100" align="center"></el-table-column>
            <el-table-column label="金额" width="180" align="right">
                <template slot-scope="scope">
                    {{ scope.row.price | currency('￥') }}
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import api from '@/api/mock/table';

export default {
    data() {
        return {
            tableData: [],
            page: 1,
            pagesize: 20,
        };
    },
    mounted() {
        this.refresh();
    },
    methods: {
        async list() {
            const res = await api.list(this.listParams);

            if (res.err) {
                // console.log(res.err);
            } else {
                const { list, total } = res;

                this.total = total;
                this.tableData = list;
            }
        },
        refresh() {
            this.list();
        },
    },
    computed: {
        listParams() {
            const params = {
                page: this.page,
                pagesize: this.pagesize,
            };

            return params;
        },
    },
};
</script>

<style lang="less">
</style>
