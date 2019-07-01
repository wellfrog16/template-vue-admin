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
        ...mapState(['editVisible', 'activeUid']),
        ...mapGetters(['activeRow']),
        title() {
            return `${this.form.fields.name} 个人信息`;
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
        async update() {
            if (this.activeUid) {
                // 这里实际开发需要去请求数据并更新，现在用行数据临时更新
                await api.detail();
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
        save() {
            console.warn('请实现save方法');
        },
    },
};
</script>
