<template>
    <div class="container-complex-table">
        <!-- 搜索框 -->
        <x-search />

        <!-- 数据 -->
        <x-table />

        <!-- 分页 -->
        <x-pagination />
    </div>
</template>

<script>
export default {
    components: {
        XSearch: () => import('../../../components/ui/table/complex/search.vue'),
        XTable: () => import('../../../components/ui/table/complex/table.vue'),
        XPagination: () => import('../../../components/ui/table/complex/pagination.vue'),
    },
    data() {
        return {
        };
    },
    mounted() {
    },
    methods: {
    },
};
</script>

<style lang="less" module>
</style>
