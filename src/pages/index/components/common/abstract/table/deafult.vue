<script>
export default {
    methods: {
        setState() { console.warn('请实现setState方法'); },

        // 编辑
        edit(row) {
            this.setState({ activeUid: row.id, editVisible: true });
        },

        // 删除确认
        handleRemove(row) {
            this.$confirm('确认要删除这条数据吗', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            }).then(() => {
                this.remove(row);
            }).catch(() => {});
        },

        // 删除
        remove(row) {
            console.warn('请实现remove方法');
        },
    },
};
</script>
