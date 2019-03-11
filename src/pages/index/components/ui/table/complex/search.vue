<template>
    <div>
        <el-form :inline="true" :model="form.fields" size="small">
            <el-form-item>
                <el-input placeholder="请输入内容" v-model="form.fields.keyword">
                    <el-button slot="prepend" icon="el-icon-search"></el-button>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-search">查询</el-button>
            </el-form-item>
        </el-form>
        <div>
            <el-button type="primary" size="small" icon="el-icon-plus">新增</el-button>
            <el-button type="primary" size="small" icon="button-fix-icon fas fa-file-export fa-sm">导出</el-button>
        </div>
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
};
</script>

<style lang="less" module>

</style>
