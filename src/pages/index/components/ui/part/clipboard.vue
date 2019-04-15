<template>
    <el-form inline>
        <el-form-item>
            <el-input v-model="content" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button
                type="primary"
                v-clipboard:success="handleClipboardSuccess"
                v-clipboard:copy="content"
            >复制文本框信息</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            content: '',
        };
    },
    methods: {
        handleClipboardSuccess(e) {
            this.$message.success('复制成功');
            e.clearSelection();
        },
    },
};
</script>
