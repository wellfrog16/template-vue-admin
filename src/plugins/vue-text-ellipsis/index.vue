<template>
    <div :class="$style.main">
        <div :class="$style.ellipsis"><slot></slot></div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="less" module>
.main {
    width: 100%;
    display: inline-block;
}

.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
