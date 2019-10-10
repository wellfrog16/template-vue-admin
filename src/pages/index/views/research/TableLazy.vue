<template>
    <div class="container-complex-table main-wrapper" v-loading="loading">
        <!-- 搜索框 -->
        <x-search class="search" />

        <!-- 数据 -->
        <x-table />

        <!-- 编辑 -->
        <x-edit />
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import XSearch from './components/table-lazy/search.vue';
import XTable from './components/table-lazy/table.vue';

const { mapState } = createNamespacedHelpers('research/tableLazy');

export default {
    components: {
        XSearch,
        XTable,
        XEdit: () => import('./components/table-lazy/edit.vue'),
    },
    computed: {
        ...mapState(['loading']),
    },
};
</script>
