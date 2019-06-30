<template>
    <div class="pagination flex-row-center">
        <slot><span></span></slot>
        <el-pagination
            :background="background"
            :layout="layout"
            :total="total"
            :current-page.sync="p"
            @current-change="handleCurrentChange"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            p: 1,
            background: true,
            layout: 'total, prev, pager, next',
            total: '',
        };
    },
    methods: {
        // 翻页时执行
        handleCurrentChange(p) {},
    },
};
</script>
