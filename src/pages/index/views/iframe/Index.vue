<template>
    <div :class="$style.main" v-loading="loading">
        <iframe :src='url' frameborder="0" :class="$style.iframe" @load="handleLoad"></iframe>
    </div>
</template>

<script>
// 容器
let container = null;

export default {
    data() {
        return {
            url: '',
            loading: true,
        };
    },
    mounted() {
        container = document.querySelector(`.${this.$style.main}`);
    },
    beforeRouteEnter(to, from, next) {
        if (to.meta.type === 'iframe' && to.meta.url) {
            next(vm => {
                vm.loading = true;
                vm.url = to.meta.url;
                container.classList.remove('hide');
            });
        }
        next();
    },
    beforeRouteLeave(to, from, next) {
        container.classList.add('hide');
        next();
    },
    methods: {
        handleLoad() {
            this.loading = false;
        },
    },
};
</script>

<style lang="less" module>
.main {
    position: relative;
    height: 100%;
}

.iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
