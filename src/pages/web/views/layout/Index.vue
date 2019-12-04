<template>
    <div>
        <x-header />
        <router-view />
        <x-footer />
    </div>
</template>

<script>
import XHeader from '#web/components/header/index.vue';
import XFooter from '#web/components/footer/index.vue';

export default {
    components: { XHeader, XFooter },
    data() {
        return {
        };
    },
};
</script>

<style lang="less" module>
</style>
