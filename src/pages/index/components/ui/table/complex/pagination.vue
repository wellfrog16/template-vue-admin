<template>
    <div class="pagination flex-row-center">
        <el-dropdown split-button type="primary" @click="handleClick" size="small">
            删除
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>通过审核</el-dropdown-item>
                <el-dropdown-item>标记已读</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <el-pagination
            background
            layout="total, prev, pager, next"
            :total="total">
        </el-pagination>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState } = createNamespacedHelpers('complexTable');

export default {
    data() {
        return {
            form: {
                fields: {
                    keyword: '',
                    user: 1,
                    region: 1,
                },
            },
        };
    },
    computed: {
        ...mapState(['total']),
    },
    methods: {
        handleClick() {
            console.log(99);
        },
    },
};
</script>

<style lang="less" module>

</style>
