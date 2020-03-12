<script>
import { UID } from '@/helper/constant';

export default {
    methods: {
        setState() { console.warn('请实现setState方法'); },

        // 编辑
        showEdit(row) {
            this.setState({ activeUid: row[UID], editVisible: true });
        },

        // 删除确认
        handleRemove(row) {
            this.$confirm('确认要删除这条数据吗', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            }).then(() => {
                this.remove({ vm: this, row });
            }).catch(() => {});
        },

        // 删除
        remove() {
            console.warn('请实现remove方法');
        },
    },
};
</script>
