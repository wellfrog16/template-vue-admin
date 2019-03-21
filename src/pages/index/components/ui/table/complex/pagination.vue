<template>
    <div class="pagination flex-row-center">
        <el-dropdown split-button type="primary" @click="handleClick" @command="handleCommand" icon="el-icon-circle-close-outline">
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
import api from '@/api/mock/table';
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
        ...mapGetters(['queryPath', 'multipleSelectionGuid']),
        query: v => v.$route.query,
    },
    watch: {
        query(val) {
            this.p = +val.p;
        },
    },
    methods: {
        ...mapMutations(['setState', 'listBatchRemove']),

        // 翻页
        handleCurrentChange(p) {
            this.setState({ filters: { p } });
            this.$router.push(this.queryPath);
        },

        // 确认批量删除
        handleClick() {
            if (!this.multipleSelectionGuid) { return; }

            this.$confirm('确认要删除这些数据吗', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            }).then(() => {
                this.batchRemove();
            }).catch(() => {});
        },

        // 批量删除
        async batchRemove() {
            this.setState({ loading: true });
            await api.remove({ guid: this.multipleSelectionGuid });
            this.listBatchRemove();

            this.$nextTick(() => {
                this.setState({ loading: false });
            });
        },

        // 更多菜单操作
        handleCommand(command) {
            const self = this;
            const map = {
                a: self.changeStatus,
                b: self.changeStatus,
            };
            map[command]();
        },

        // 批量改变状态
        changeStatus() {
            console.log(9999);
        },
    },
};
</script>

<style lang="less" module>

</style>
