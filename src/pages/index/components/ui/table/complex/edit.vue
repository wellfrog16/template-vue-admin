<template>
    <el-dialog
        :title="title"
        :visible.sync="editVisiable"
        :before-close="handleClose"
        class="or-dialog"
        width="700px"
        top="-5vh"
    >
        <el-form ref="form" :model="form.fields" :rules="form.rules" label-width="80px" size="small">
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="姓名">
                        <el-input v-model="form.fields.name">
                            <el-radio-group v-model="form.fields.gender" slot="append" size="mini">
                                <el-radio-button label="男"></el-radio-button>
                                <el-radio-button label="女"></el-radio-button>
                            </el-radio-group>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="活动区域">
                        <el-select v-model="form.fields.edu" clearable placeholder="选择学历">
                            <el-option
                                v-for="item in edus"
                                :key="item"
                                :label="item"
                                :value="item"
                            />
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="生日">
                        <el-date-picker
                            v-model="form.fields.birthday"
                            type="date"
                            placeholder="选择生日"
                            :clearable="false"
                        />
                    </el-form-item>
                </el-col>
                <el-col :span="11">
                    <el-form-item label="身份证">
                        <el-input v-model="form.fields.id" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="23">
                    <el-form-item label="区域">
                        <el-input v-model="form.fields.county" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="邮编">
                        <el-input v-model="form.fields.zip" />
                    </el-form-item>
                </el-col>
                <el-col :span="11">
                    <el-form-item label="Email">
                        <el-input v-model="form.fields.email" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="23">
                    <el-form-item label="收入">
                        <el-input v-model="form.fields.income" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="23">
                    <el-form-item label="备注">
                        <el-input v-model="form.fields.remark" />
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <span slot="footer">
            <el-button size="small" @click="handleClose">取消</el-button>
            <el-button type="primary" size="small" @click="handleSave">保存</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapMutations, mapGetters } = createNamespacedHelpers('complexTable');

export default {
    data() {
        return {
            edus: ['专科', '本科', '硕士研究生', '博士研究生', '其他'],
            form: {
                fields: {},
                rules: {},
            },
        };
    },
    watch: {
        editVisiable(val) {
            val && this.update();
        },
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

        // 打卡dialog时，更新数据
        update() {
            this.form.fields = { ...this.activeRow };
        },

        // 保存信息
        handleSave() {},
    },
};
</script>
