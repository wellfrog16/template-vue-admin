<template>
    <span :class="$style.main"></span>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
    data() {
        return {
            messageDuration: 3000,
            notificationDuration: 4500,
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

        showMessage(params) {
            const options = Object.assign({}, params);
            options.duration = options.duration || this.messageDuration;
            const { duration } = options;
            this.$message(options);
            setTimeout(() => this.clearMessage(), duration);
        },

        showNotification(params) {
            const options = Object.assign({}, params);
            options.duration = options.duration || this.notificationDuration;
            const { duration } = options;
            this.$notify(options);
            setTimeout(() => this.clearNotification(), duration);
        },
    },
};
</script>

<style lang="less" module>
.main {
    display: none;
}
</style>
