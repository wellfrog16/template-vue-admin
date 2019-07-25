<template>
    <span :class="$style.main"></span>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
    data() {
        return {
            a: '',
        };
    },
    computed: {
        ...mapState(['message', 'notification']),
    },
    watch: {
        message(val) {
            val && this.showMessage(val);
        },

        notification(val) {
            val && this.showNotification(val);
        },
    },
    methods: {
        ...mapMutations(['clearMessage', 'clearNotification']),

        showMessage(options) {
            this.$message(options);
            this.clearErrorMessage();
        },

        showNotification(options) {
            this.$notify(options);
            this.clearNotification();
        },
    },
};
</script>

<style lang="less" module>
.main {
    display: none;
}
</style>
