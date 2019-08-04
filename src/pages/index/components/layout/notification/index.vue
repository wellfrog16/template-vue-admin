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
            if (val1 && val2) {
                if (val1.type !== val2.type || val1.message !== val2.message) {
                    this.showMessage(val1);
                }
            }
        },

        notification(val) {
            val && this.showNotification(val);
        },

        // todo同样的消息同时只出现一次
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
