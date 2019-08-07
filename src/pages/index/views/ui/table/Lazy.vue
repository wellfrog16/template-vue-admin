<template>
    <div class="container-complex-table main-wrapper" v-loading="loading">
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
import XSearch from '../components/table/lazy/search.vue';
import XTable from '../components/table/lazy/table.vue';
import XPagination from '../components/table/lazy/pagination.vue';

const { mapState, mapMutations } = createNamespacedHelpers('lazyTable');

export default {
    components: {
        XSearch,
        XTable,
        XPagination,
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
