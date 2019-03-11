<template>
    <div>
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
            :total="1000">
        </el-pagination>
    </div>
</template>

<script>
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
    methods: {
        handleClick() {
            console.log(99);
        },
    },
};
</script>

<style lang="less" module>

</style>
