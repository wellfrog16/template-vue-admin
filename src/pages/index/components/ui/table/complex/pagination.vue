<template>
    <div class="pagination flex-row-center">
        <el-dropdown split-button type="primary" @click="handleClick">
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
            :current-page.sync="p"
            @current-change="handleCurrentChange"
        />
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapMutations, mapGetters } = createNamespacedHelpers('complexTable');

export default {
    data() {
        return {
            p: +this.$route.query.p,
        };
    },
    computed: {
        ...mapState(['total']),
        ...mapGetters(['queryPath']),
    },
    methods: {
        ...mapMutations(['setState']),
        handleClick() {
            console.log(999);
        },
        handleCurrentChange(p) {
            this.setState({ filters: { p } });
            this.$router.push(this.queryPath);
        },
    },
};
</script>

<style lang="less" module>

</style>
