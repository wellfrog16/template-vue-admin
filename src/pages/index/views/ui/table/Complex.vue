<template>
    <div class="container-complex-table" v-loading="loading">
        <!-- 搜索框 -->
        <x-search />

        <!-- 数据 -->
        <x-table />

        <!-- 分页 -->
        <x-pagination />

        <!-- 预览 -->
        <x-preview />
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapMutations } = createNamespacedHelpers('complexTable');

export default {
    components: {
        XSearch: () => import('../../../components/ui/table/complex/search.vue'),
        XTable: () => import('../../../components/ui/table/complex/table.vue'),
        XPagination: () => import('../../../components/ui/table/complex/pagination.vue'),
        XPreview: () => import('../../../components/ui/table/complex/preview.vue'),
    },
    data() {
        return {
        };
    },
    computed: {
        ...mapState(['loading']),
    },
    mounted() {
    },
    beforeRouteUpdate(to, from, next) {
        this.setState({ filters: to.query });
        next();
    },
    methods: {
        ...mapMutations(['setState', 'test']),
    },
};
</script>

<style lang="less" module>
</style>
