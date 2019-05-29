<template>
    <el-dialog
        :title="title"
        :visible.sync="editVisible"
        :before-close="handleClose"
        :close-on-click-modal="false"
        class="or-dialog"
        width="700px"
        top="50px"
    >
        <el-form ref="form" :model="form.fields" :rules="form.rules" label-width="80px" v-loading="saveBusy">
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item prop="name" label="姓名">
                        <el-input v-model.trim="form.fields.name">
                            <el-radio-group v-model="form.fields.gender" slot="append" size="mini">
                                <el-radio-button label="男"></el-radio-button>
                                <el-radio-button label="女"></el-radio-button>
                            </el-radio-group>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item prop="education" label="学历">
                        <el-select v-model="form.fields.education" placeholder="选择学历">
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
                    <el-form-item prop="birthday" label="出生日期">
                        <el-date-picker
                            v-model="form.fields.birthday"
                            type="date"
                            placeholder="选择出生日期"
                            value-format="yyyy-MM-dd"
                            :clearable="false"
                        />
                    </el-form-item>
                </el-col>
                <el-col :span="11">
                    <el-form-item prop="id" label="身份证">
                        <span v-show="form.fields.guid">{{ form.fields.id }}</span>
                        <el-input v-model="form.fields.id" v-show="!form.fields.guid" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="23">
                    <el-form-item prop="county" label="区域">
                        <el-input v-model.trim="form.fields.county" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item prop="zip" label="邮编">
                        <el-input v-model.trim="form.fields.zip" />
                    </el-form-item>
                </el-col>
                <el-col :span="11">
                    <el-form-item prop="email" label="Email">
                        <el-input v-model.trim="form.fields.email" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item prop="income" label="收入">
                        <el-input v-model.number="form.fields.income" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item prop="status" label="状态">
                        <el-select v-model="form.fields.status" placeholder="状态">
                            <el-option
                                v-for="item in sts"
                                :key="item"
                                :label="item"
                                :value="item"
                            />
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="23">
                    <el-form-item prop="remark" label="备注">
                        <el-input v-model.trim="form.fields.remark" />
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <span slot="footer">
            <el-button @click="handleClose">取消</el-button>
            <el-button type="primary" @click="handleSave" :loading="saveBusy">保存</el-button>
        </span>
    </el-dialog>
</template>

<script>
import api from '@/api/mock/table';
import { rules } from '@/utils/rivers';
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapMutations, mapGetters } = createNamespacedHelpers('complexTable');

const fields = {
    guid: '',
    id: '',
    name: '',
    gender: '女',
    county: '',
    email: '',
    zip: '',
    income: 0,
    remark: '',
    education: '',
    status: '',
    birthday: '',
};

export default {
    data() {
        const self = this;
        return {
            saveBusy: false,
            edus: ['专科', '本科', '硕士研究生', '博士研究生', '其他'],
            sts: ['在职', '待业', '退休', '创业', '游学'],
            form: {
                fields: self.createFields(),
                rules: {
                    ...rules.check('name', {
                        message: '姓名为长度在2-10之间的非空字符', min: 2, max: 10,
                    }),
                    ...rules.noEmpty('education', { message: '请选择学历' }),
                    ...rules.noEmpty('status', { message: '请选择状态' }),
                    ...rules.noEmpty('birthday', { message: '请选择出生日期' }),
                    ...rules.check('email', { message: '请输入正确的email', type: 'email' }),
                    ...rules.check('zip', { message: '请输入正确的邮编', type: 'string', len: 6 }),
                },
            },
        };
    },
    watch: {
        editVisible(val) {
            val && this.update();
        },
    },
    computed: {
        ...mapState(['editVisible', 'activeIndex']),
        ...mapGetters(['activeRow']),
        title() {
            return `${this.form.fields.name} 个人信息`;
        },
    },
    methods: {
        ...mapMutations(['setState', 'listUpdate', 'listInsert']),

        // 创建一个空的fileds副本
        createFields() {
            return Object.assign({}, fields);
        },

        // 关闭，保存中禁止关闭
        handleClose() {
            !this.saveBusy && this.setState({ editVisible: false });
            return !this.saveBusy;
        },

        // 打卡dialog时，更新数据
        update() {
            if (this.activeRow.guid) {
                this.form.fields = { ...this.activeRow };
            } else {
                this.form.fields = this.createFields();
            }
            this.$nextTick(() => this.$refs.form.clearValidate());
        },

        // 保存信息
        handleSave() {
            this.$refs.form.validate((valid) => {
                valid && this.save();
            });
        },

        // 保存动作
        async save() {
            this.saveBusy = true;

            // 更新列表（非刷新获取，仅前端根据当前数据更新）
            if (this.form.fields.guid) {
                // 远程更新
                const res = await api.update(this.form.fields);

                // 本地更新
                res && this.listUpdate({ item: this.form.fields });
            } else {
                // 远程写入
                const res = await api.insert(this.form.fields);

                // 本地写入
                if (res) {
                    this.form.fields.guid = res.guid;
                    this.listInsert({ item: this.form.fields });
                }
            }

            this.$nextTick(() => {
                this.saveBusy = false;
                this.handleClose();
            });
        },
    },
};
</script>
