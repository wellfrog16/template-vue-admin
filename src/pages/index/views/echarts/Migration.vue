<template>
    <div :class="[$style.main, 'main-wrapper']">
        <el-card shadow="never" :class="$style.card">
            <!-- 飞行航线图 -->
            <migration />
        </el-card>
    </div>
</template>

<script>
import Migration from './components/migration/index.vue';

export default {
    components: {
        Migration,
    },
};
</script>

<style lang="less" module>
.main {
    height: 100%;
}

.card {
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    :global(.el-card__body) {
        flex-grow: 1;
    }
}
</style>
