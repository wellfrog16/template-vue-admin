<template>
    <div :class="$style.main">
        <i class="fas fa-server fa-lg fa-fw" />
        {{ serverName }}
    </div>
</template>

<script>
export default {
    data() {
        const site = this.$helper.site();

        return {
            serverName: site.server.name,
        };
    },
};
</script>

<style lang="less" module>
.main {
    line-height: 1;
    display: inline-block;
}
</style>
