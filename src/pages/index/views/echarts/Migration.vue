<template>
    <el-card shadow="never" :class="$style.main">
        <!-- 飞行航线图 -->
        <migration />
    </el-card>
</template>

<script>
import Migration from '#index/components/echarts/migration/index.vue';

export default {
    components: {
        Migration,
    },
};
</script>

<style lang="less" module>
.main {
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    :global(.el-card__body) {
        flex-grow: 1;
    }
}
</style>
