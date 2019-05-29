const rules = {
    /**
     * 非空校验
     *
     * @param {String} key 校验的字段
     * @param {JSON} [options={}] { message: 提示信息（不能为空） }
     * @returns
     */
    noEmpty(key, options = {}) {
        const { message } = Object.assign({ message: '不能为空' }, options);
        const r = {};
        r[key] = [
            { required: true, message, trigger: 'change' },
        ];
        return r;
    },

    /**
     * 自带类型校验
     *
     * @param {String} key 校验的字段
     * @param {JSON} [options={}]
     * @returns
     */
    check(key, options = {}) {
        const params = Object.assign({ required: true, trigger: 'blur' }, options);
        const r = {};
        r[key] = [{ ...params }];
        return r;
    },

    /**
     * 手机号校验
     *
     * @param {String} key 校验的字段
     * @param {JSON} [options={}] { ?allowEmpty: 允许为空(true) }
     * @returns
     */
    isPhoneNumber(key, options = {}) {
        const params = Object.assign({ allowEmpty: true }, options);
        const r = {};
        const rule = [
            { pattern: /^1\d{9}$/, message: '请输入正确的手机号', trigger: 'change' },
        ];

        // 是否允许为空
        if (!params.allowEmpty) {
            rule.push({ required: true, message: '请输入手机号', trigger: 'change' });
        }
        r[key] = rule;
        return r;
    },
};

export default rules;
