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
        message(val1, val2) {
            this.isEqual(val1, val2) && this.showMessage(val1);
        },

        notification(val1, val2) {
            this.isEqual(val1, val2) && this.showNotification(val1);
        },
    },
    methods: {
        ...mapMutations(['clearMessage', 'clearNotification']),

        isEqual(val1, val2) {
            return val1
                && (!val2 || val1.type !== val2.type || val1.message !== val2.message);
        },

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
