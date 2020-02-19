<template>
    <div class="container-complex-table main-wrapper" v-loading="loading">
        <!-- 搜索框 -->
        <x-search class="search" />

        <!-- 数据 -->
        <x-table class="table" />

        <!-- 分页 -->
        <x-pagination class="pagination flex-row-center" />

        <!-- 编辑 -->
        <x-edit />
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import XSearch from './components/account/search.vue';
import XTable from './components/account/table.vue';
import XPagination from './components/account/pagination.vue';

const { mapState } = createNamespacedHelpers('security/account');

export default {
    components: {
        XSearch,
        XTable,
        XPagination,
        XEdit: () => import('./components/account/edit.vue'),
    },
    computed: {
        ...mapState(['loading']),
    },
};
</script>
