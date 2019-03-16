<template>
    <span :class="$style.main">
        <span :class="$style.label">{{ label }}： </span>
        <slot>{{ content }}</slot>
    </span>
</template>

<script>
export default {
    props: {
        label: { type: String, default: '' },
        content: { type: String, default: '' },
    },
};
</script>

<style lang="less" module>
.label {
    // color: rgba(0, 0, 0, 0.65);
    font-weight: bold;
}
</style>
