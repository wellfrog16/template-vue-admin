<template>
    <iframe :src='url' frameborder="0" :class="$style.main"></iframe>
</template>

<script>
import { $ } from '@/utils/cdn';

export default {
    data() {
        return {
            url: '',
        };
    },
    beforeRouteEnter(to, from, next) {
        if (to.meta.type === 'iframe' && to.meta.url) {
            next((state) => {
                $(`${state.$style.main}`).show();
                state.url = to.meta.url;
            });
        }
        next();
    },
    beforeRouteLeave(to, from, next) {
        $(`.${this.$style.main}`).hide(() => {
            next();
        });
    },
};
</script>

<style lang="less" module>
.main {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
