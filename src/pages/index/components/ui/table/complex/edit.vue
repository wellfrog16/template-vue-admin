<template>
    <el-dialog
        :title="title"
        :visible.sync="editVisiable"
        :before-close="handleClose"
        class="or-dialog"
        width="700px"
        top="-5vh"
    >
        <el-form ref="form" :model="form.fields" label-width="80px" size="small">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="姓名">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12"></el-col>
            </el-row>
        </el-form>
        <span slot="footer">
            <el-button size="small" @click="handleClose">取消</el-button>
            <el-button type="primary" size="small" @click="handleClose">保存</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapMutations, mapGetters } = createNamespacedHelpers('complexTable');

export default {
    data() {
        return {
            form: {
                fields: {
                    a: 1,
                },
                rules: {},
            },
        };
    },
    computed: {
        ...mapState(['editVisiable']),
        ...mapGetters(['activeRow']),
        title() {
            return `${this.activeRow.name} 个人信息`;
        },
    },
    methods: {
        ...mapMutations(['setState']),
        handleClose() {
            this.setState({ editVisiable: false });
        },
    },
};
</script>
