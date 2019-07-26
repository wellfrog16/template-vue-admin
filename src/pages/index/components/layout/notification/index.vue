<template>
    <span :class="$style.main"></span>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
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
            this.clearMessage();
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
