<template>
    <el-dialog
        :title="title"
        :visible.sync="editVisible"
        :before-close="handleClose"
        :close-on-click-modal="false"
        class="or-dialog-wrapper"
        custom-class="or-dialog"
        width="300px"
        top="50px"
    >
        <el-form ref="form" :model="form.fields" :rules="form.rules" label-width="50px" v-loading="saveBusy">
            <el-form-item prop="name" label="姓名">
                <el-input v-model.trim="form.fields.name">
                    <el-radio-group v-model="form.fields.gender" slot="append" size="mini">
                        <el-radio-button label="男"></el-radio-button>
                        <el-radio-button label="女"></el-radio-button>
                    </el-radio-group>
                </el-input>
            </el-form-item>
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
            <el-form-item prop="income" label="收入">
                <el-input v-model.number="form.fields.income" />
            </el-form-item>
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
            <el-form-item prop="remark" label="备注">
                <el-input v-model.trim="form.fields.remark" />
            </el-form-item>
        </el-form>
        <span slot="footer">
            <el-button @click="handleClose">取消</el-button>
            <el-button type="primary" @click="handleSave" :loading="saveBusy">保存</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { rules } from '@/utils/rivers';
import AbsEdit from '#index/components/abstract/edit/default.vue';

const {
    mapState,
    mapMutations,
    mapGetters,
    mapActions,
} = createNamespacedHelpers('mixins');

export default {
    mixins: [AbsEdit],
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
                    ...rules.checkString('education', { message: '请选择学历' }),
                    ...rules.checkString('status', { message: '请选择状态' }),
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
        ...mapState(['editVisible', 'activeUid']),
        ...mapGetters(['activeRow']),
        title() {
            return `${this.form.fields.name} 个人信息`;
        },
    },
    methods: {
        ...mapMutations(['setState']),
        ...mapActions(['save']),

        // 创建一个空的fileds副本
        createFields() {
            const fields = {
                guid: '',
                id: '',
                name: '',
                gender: '女',
                income: 0,
                remark: '',
                education: '',
                status: '',
            };
            return Object.assign({}, fields);
        },
    },
};
</script>
