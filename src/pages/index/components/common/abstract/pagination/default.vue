<template>
    <div>
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
import { PAGE } from '@/helper/constant';

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
        setState() { console.warn('请实现setState方法'); },

        // 翻页时执行
        handleCurrentChange(p) {
            const filters = { [PAGE]: p };
            this.setState({ filters, overdue: true });
        },
    },
};
</script>
