const rules = {
    /**
     * 自带类型校验
     *
     * @param {String} key 校验的字段
     * @param {JSON} [options={}]
     * @returns
     */
    check(key, options = {}) {
        const params = { required: true, trigger: 'blur', ...options };
        const r = {};
        r[key] = [{ ...params }];
        return r;
    },

    /**
     * 校验字符串
     *
     * @param {*} key
     * @param {*} [options={}] { ?allowEmpty: 允许为空(false), ?allowSpecial: 允许特殊字符(true) }
     * @returns
     */
    checkString(key, options = {}) {
        const params = {
            name: '此项',
            allowEmpty: false,
            allowSpecial: true,
            trigger: 'change',
            ...options,
        };
        const { name, message, trigger } = params;
        const r = {};
        const rule = [];

        // 是否允许特殊字符，待扩展
        if (!params.allowSpecial) {
            rule.push({ pattern: /^[\u4e00-\u9fa5|a-z|A-Z]+$/, message: `${name}只可中文/英文/拼音，不可特殊符号，数字`, trigger });
        }

        // 是否允许为空
        if (!params.allowEmpty) {
            rule.push({ required: true, message: (message || `请输入${name}`), trigger });
        }

        r[key] = rule;
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
        const params = { allowEmpty: true, ...options };
        const r = {};
        const rule = [
            { pattern: /^1\d{10}$/, message: '请输入正确的手机号', trigger: 'change' },
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
