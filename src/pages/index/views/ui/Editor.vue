<template>
    <div class="main-wrapper" :class="$style.main">
        <!-- 配置示例 -->
        <el-card shadow="never">
            <el-tabs v-model="activeName">
                <el-tab-pane label="Mini配置" name="tab1">
                    <tinymce v-model="content" :height="300" />
                </el-tab-pane>
                <el-tab-pane label="简单配置" name="tab2">
                    <tinymce v-model="content" :height="300" config="simple" />
                </el-tab-pane>
                <el-tab-pane label="标准配置" name="tab3">
                    <tinymce v-model="content" :height="300" config="standard" />
                </el-tab-pane>
                <el-tab-pane label="全部" name="tab4">
                    <tinymce v-model="content" :height="300" config="full" />
                </el-tab-pane>
            </el-tabs>
        </el-card>

        <!-- 对话框调用实例 -->
        <el-card shadow="never">
            <div slot="header">
                <span>对话框调用</span>
            </div>
            <div>
                <el-button @click="create">新建</el-button>
                <el-button type="primary" @click="edit">修改</el-button>
            </div>
        </el-card>

        <!-- 对话框 -->
        <el-dialog
            title="编辑"
            :visible.sync="dialogVisible"
            :close-on-click-modal="false"
            class="or-dialog-wrapper"
            custom-class="or-dialog"
            width="800px"
            top="0"
        >
            <tinymce v-model="myContent" ref="tinymce" :height="300" config="simple" />
            <span slot="footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import Tinymce from '@/components/tinymce/index.vue';

export default {
    components: {
        Tinymce,
    },
    data() {
        return {
            activeName: 'tab2',
            content: '',
            myContent: '',
            dialogVisible: false,
        };
    },
    methods: {
        create() {
            this.dialogVisible = true;
            this.$nextTick(() => {
                this.$refs.tinymce.setContent('');
            });
        },
        edit() {
            this.dialogVisible = true;
            this.$nextTick(() => {
                this.$refs.tinymce.setContent('修改信息');
            });
        },
    },
};
</script>

<style lang="less" module>
.main {
    :global(.el-card + .el-card) {
        margin-top: 20px;
    }
}
</style>
