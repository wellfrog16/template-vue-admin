<template>
    <el-drawer
        :title="title"
        :visible.sync="editVisible"
        :before-close="handleClose"
        :close-on-click-modal="false"
        :modal-append-to-body="true"
        class="or-drawer-wrapper"
        custom-class="or-drawer"
    >
        <div class="container">
            <div class="drawer-body">
                <el-form ref="form" :model="form.fields" :rules="form.rules" label-width="50px">
                    <el-form-item prop="remark" label="备注">
                        <el-input v-model.trim="form.fields.remark" />
                    </el-form-item>
                </el-form>
            </div>
            <div class="drawer-footer">
                <el-button @click="handleClose">取消</el-button>
                <el-button type="primary" @click="handleSave" :loading="saveBusy">保存</el-button>
            </div>
        </div>
    </el-drawer>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
// import { rules } from '@/utils/rivers';
import AbsEdit from '#index/components/abstract/edit/default.vue';

const {
    mapState,
    mapMutations,
    mapGetters,
    mapActions,
} = createNamespacedHelpers('security/account');

export default {
    mixins: [AbsEdit],
    data() {
        return {
            saveBusy: false,
            form: {
                fields: this.createFields(),
                rules: {
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
            return { ...fields };
        },
    },
};
</script>
