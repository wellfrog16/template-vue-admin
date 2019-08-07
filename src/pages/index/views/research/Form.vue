<template>
    <div class="container-complex-table main-wrapper" v-loading="loading">
        <!-- 搜索框 -->
        <x-search class="search" />

        <!-- 数据 -->
        <x-table />

        <!-- 分页 -->
        <x-pagination class="pagination flex-row-center" />

        <!-- 编辑 -->
        <x-edit />
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import XSearch from './components/form/search.vue';
import XTable from './components/form/table.vue';
import XPagination from './components/form/pagination.vue';

const { mapState } = createNamespacedHelpers('baseForm');

export default {
    components: {
        XSearch,
        XTable,
        XPagination,
        XEdit: () => import('./components/form/edit.vue'),
    },
    computed: {
        ...mapState(['loading']),
    },
    mounted() {
        this.$alert('这个页面用来演示基础的增删改查<br>具体操作请查看代码', { dangerouslyUseHTMLString: true });
    },
};
</script>
