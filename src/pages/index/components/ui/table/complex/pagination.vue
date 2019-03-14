<template>
    <div class="pagination flex-row-center">
        <el-dropdown split-button type="primary" @click="handleClick" size="small">
            删除
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>通过审核</el-dropdown-item>
                <el-dropdown-item>标记已读</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <el-pagination
            background
            layout="total, prev, pager, next"
            :total="total"
            @current-change="handleCurrentChange"
        />
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapMutations } = createNamespacedHelpers('complexTable');

export default {
    computed: {
        ...mapState(['total']),
    },
    methods: {
        ...mapMutations(['setVal']),
        handleClick() {
            console.log(999);
        },
        handleCurrentChange(page) {
            this.setVal({ page });
        },
    },
};
</script>

<style lang="less" module>

</style>
