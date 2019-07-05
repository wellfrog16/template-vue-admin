<template>
    <div class="pagination flex-row-center">
        <el-button type="primary" :disabled="isDisabled" @click="handleRemove" icon="el-icon-delete">删除选中</el-button>
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
import { PAGE } from '@/helper/constant';
import api from '@/api/mock/table';
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapMutations, mapGetters } = createNamespacedHelpers('baseForm');

export default {
    data() {
        return {
            p: 1,
        };
    },
    computed: {
        ...mapState(['total', 'multipleSelection']),
        ...mapGetters(['multipleSelectionUid']),

        isDisabled() {
            return this.multipleSelection.length === 0;
        },
    },
    methods: {
        ...mapMutations(['setState']),

        // 翻页
        handleCurrentChange(p) {
            this.setState({ filters: { [PAGE]: p }, overdue: true });
        },

        // 确认批量删除
        handleRemove() {
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

            // 远程删除
            await api.remove({ id: this.multipleSelectionUid });

            this.$nextTick(() => this.setState({ loading: false, overdue: true }));
        },
    },
};
</script>
