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

        <!-- 编辑 -->
        <x-edit />
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import XSearch from '#index/components/ui/table/complex/search.vue';
import XTable from '#index/components/ui/table/complex/table.vue';
import XPagination from '#index/components/ui/table/complex/pagination.vue';

const { mapState, mapMutations } = createNamespacedHelpers('complexTable');

export default {
    components: {
        XSearch,
        XTable,
        XPagination,
        XPreview: () => import('#index/components/ui/table/complex/preview.vue'),
        XEdit: () => import('#index/components/ui/table/complex/edit.vue'),
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
