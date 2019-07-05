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
import XSearch from '#index/components/research/mixins/search.vue';
import XTable from '#index/components/research/mixins/table.vue';
import XPagination from '#index/components/research/mixins/pagination.vue';
import XCommand from '#index/components/research/mixins/command.vue';

const { mapState } = createNamespacedHelpers('mixins');

export default {
    components: {
        XSearch,
        XTable,
        XPagination,
        XCommand,
        XEdit: () => import('#index/components/research/mixins/edit.vue'),
    },
    computed: {
        ...mapState(['loading']),
    },
};
</script>
