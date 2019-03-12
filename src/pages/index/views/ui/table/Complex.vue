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
import api from '@/api/mock/table';

export default {
    components: {
        XSearch: () => import('../../../components/ui/table/complex/search.vue'),
        XTable: () => import('../../../components/ui/table/complex/table.vue'),
        XPagination: () => import('../../../components/ui/table/complex/pagination.vue'),
    },
    data() {
        return {
            list: [],
        };
    },
    mounted() {
        this.loadList();
    },
    methods: {
        async loadList() {
            const res = await api.list();
            // console.log(res.list);

            this.list = res.list;

            // if (res.success) {
            //     this.list = res.list;
            // } else {
            //     console.log(999);
            // }
        },
        handleClick() {
            console.log(99);
        },
    },
};
</script>

<style lang="less" module>
</style>
