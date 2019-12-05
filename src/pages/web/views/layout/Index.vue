<template>
    <div :class="$style.main">
        <x-header />
        <x-breadcrumb />
        <router-view />
        <x-footer />
    </div>
</template>

<script>
import XHeader from './components/header/index.vue';
import XFooter from './components/footer/index.vue';
import XBreadcrumb from './components/breadcrumb/index.vue';

export default {
    components: { XHeader, XFooter, XBreadcrumb },
    data() {
        return {
        };
    },
};
</script>

<style lang="less" module>
.main {
    padding-top: 72px;
}
</style>
