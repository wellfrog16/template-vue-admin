<template>
    <div class="container-complex-table" v-loading="loading">
        <!-- 搜索框 -->
        <x-search />

        <!-- 数据 -->
        <x-table />

        <!-- 分页 -->
        <x-pagination />
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import XSearch from '../../../components/ui/table/lazy/search.vue';

const { mapState, mapMutations } = createNamespacedHelpers('lazyTable');

export default {
    components: {
        // XSearch: () => import('../../../components/ui/table/lazy/search.vue'),
        XSearch, // 直接加载，提前进入watch
        XTable: () => import('../../../components/ui/table/lazy/table.vue'),
        XPagination: () => import('../../../components/ui/table/lazy/pagination.vue'),
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
        ...mapMutations(['setState']),
    },
};
</script>

<style lang="less" module>
</style>
