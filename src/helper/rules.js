// const reg = {
//     email: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
// };

function regex(rule, value, callback, params) {
    // todo 正则校验
    console.log(rule, value, callback, params);
}

const rules = {
    noEmpty({ key, msg: message }) {
        const r = {};
        r[key] = [
            { required: true, message, trigger: 'change' },
        ];
        return r;
    },
    regex(args) {
        const params = Object.assign({ allowEmpty: false }, args);
        const r = {};
        r[params.key] = [
            {
                required: !params.allowEmpty,
                validator: (rule, value, callback) => { regex(rule, value, callback, params); },
                trigger: 'change',
            },
        ];
        return r;
    },
};

export default rules;
