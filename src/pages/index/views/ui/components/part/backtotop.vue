<template>
    <div>
        <div :class="$style.container"></div>
        <backtotop element="#elMain" />
    </div>
</template>

<script>
import Backtotop from '@/components/backtotop/index.vue';

export default {
    components: {
        Backtotop,
    },
};
</script>

<style lang="less" module>
.container {
    height: 2000px;
    background: linear-gradient(#fff, yellowgreen);
}
</style>
