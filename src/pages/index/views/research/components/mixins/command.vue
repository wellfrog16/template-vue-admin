<template>
    <el-button type="primary" :disabled="isDisabled" @click="handleBatchRemove" icon="el-icon-delete">删除选中</el-button>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapMutations, mapActions } = createNamespacedHelpers('mixins');

export default {
    computed: {
        ...mapState(['multipleSelection']),

        isDisabled() {
            return this.multipleSelection.length === 0;
        },
    },
    methods: {
        ...mapMutations(['setState']),
        ...mapActions(['batchRemove']),

        handleBatchRemove() {
            this.$confirm('确认要删除这些数据吗', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            }).then(() => {
                this.batchRemove({ vm: this });
            }).catch(() => {});
        },
    },
};
</script>
