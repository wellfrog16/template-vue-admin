const rules = {
    // 非空
    noEmpty({ key, message }) {
        const r = {};
        r[key] = [
            { required: true, message, trigger: 'change' },
        ];
        return r;
    },

    // 自带类型校验
    check(args) {
        const params = Object.assign({ required: true, trigger: 'blur' }, args);
        const r = {};
        r[params.key] = [{ ...params }];
        return r;
    },
};

export default rules;
