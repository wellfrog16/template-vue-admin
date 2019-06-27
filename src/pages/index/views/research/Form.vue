<template>
    <div class="container-complex-table main-wrapper" v-loading="loading">
        <!-- 搜索框 -->
        <x-search />

        <!-- 数据 -->
        <x-table />

        <!-- 分页 -->
        <x-pagination />

        <!-- 编辑 -->
        <x-edit />
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import XSearch from '#index/components/ui/form/search.vue';
import XTable from '#index/components/ui/form/table.vue';
import XPagination from '#index/components/ui/form/pagination.vue';

const { mapState, mapMutations } = createNamespacedHelpers('baseForm');

export default {
    components: {
        XSearch,
        XTable,
        XPagination,
        XEdit: () => import('#index/components/ui/form/edit.vue'),
    },
    computed: {
        ...mapState(['loading']),
    },
    mounted() {
        this.$alert('这个页面用来演示基础的增删改查<br>具体操作请查看代码', { dangerouslyUseHTMLString: true });
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
