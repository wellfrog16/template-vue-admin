<template>
    <div class="pagination flex-row-center">
        <el-dropdown split-button type="primary" @click="handleClick" @command="handleCommand">
            删除
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">转为退休</el-dropdown-item>
                <el-dropdown-item command="b">转为创业</el-dropdown-item>
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
            p: 1,
        };
    },
    computed: {
        ...mapState(['total']),
        ...mapGetters(['queryPath']),
        query: v => v.$route.query,
    },
    watch: {
        query(val) {
            this.p = +val.p;
        },
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
        handleCommand(command) {
            this.$message(command);
        },
    },
};
</script>

<style lang="less" module>

</style>
