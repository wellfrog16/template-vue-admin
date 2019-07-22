<script>
import { mapState, mapMutations } from 'vuex';

export default {
    computed: {
        ...mapState(['message', 'notification']),
    },
    watch: {
        // 全局自定义错误提示
        errorMessage(val) {
            val && this.showMessage(val);
        },
    },
    methods: {
        ...mapMutations(['clearMessage', 'clearNotification']),

        // 显示错误提示
        showMessage(message) {
            this.$message.error(message);
            this.clearErrorMessage();
        },
    },
};
</script>
