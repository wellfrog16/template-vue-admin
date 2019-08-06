<template>
    <div class="container-complex-table main-wrapper" v-loading="loading">
        <!-- 搜索框 -->
        <x-search class="search" />

        <!-- 数据 -->
        <x-table />

        <!-- 分页 -->
        <x-pagination class="pagination flex-row-center">
            <!-- 左下角功能 -->
            <x-command />
        </x-pagination>

        <!-- 编辑 -->
        <x-edit />
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import XSearch from './components/mixins/search.vue';
import XTable from './components/mixins/table.vue';
import XPagination from './components/mixins/pagination.vue';
import XCommand from './components/mixins/command.vue';

const { mapState } = createNamespacedHelpers('mixins');

export default {
    components: {
        XSearch,
        XTable,
        XPagination,
        XCommand,
        XEdit: () => import('./components/mixins/edit.vue'),
    },
    computed: {
        ...mapState(['loading']),
    },
};
</script>
