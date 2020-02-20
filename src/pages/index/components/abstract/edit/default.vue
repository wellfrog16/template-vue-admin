<script>
export default {
    data() {
        const self = this;
        return {
            saveBusy: false,
            form: {
                fields: self.createFields(),
                rules: {},
            },
        };
    },
    computed: {
        editVisible() {
            console.warn('请实现editVisible计算属性');
            return true;
        },

        activeRow() {
            console.warn('请实现activeRow计算属性');
            return true;
        },

        activeUid() {
            console.warn('请实现activeUid计算属性');
            return true;
        },
    },
    watch: {
        editVisible(val) {
            val && this.update();
        },
    },
    methods: {
        setState() { console.warn('请实现setState方法'); },

        // 创建一个空的fileds副本
        createFields() {
            console.warn('请实现createFields方法');
            return {};
        },

        // 关闭，保存中禁止关闭
        handleClose() {
            !this.saveBusy && this.setState({ editVisible: false });
            return !this.saveBusy;
        },

        // 打卡dialog时，更新数据
        update() {
            if (this.activeUid) {
                this.form.fields = { ...this.activeRow };
            } else {
                this.form.fields = this.createFields();
            }
            this.$nextTick(() => this.$refs.form.clearValidate());
        },

        // 保存信息
        handleSave() {
            this.$refs.form.validate(valid => {
                valid && this.runSave();
            });
        },

        // 保存动作
        runSave() {
            this.saveBusy = true;

            this.save({ vm: this, fields: this.form.fields })
                .then(() => {
                    this.$nextTick(() => {
                        this.saveBusy = false;
                        this.handleClose();
                    });
                }).catch(() => {
                    this.saveBusy = false;
                });
        },

        // 保存动作
        save() {
            console.warn('请实现save方法');
        },
    },
};
</script>
