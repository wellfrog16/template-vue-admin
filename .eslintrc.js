module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    "globals": {
        "window": true,
        "document": true,
    },
    rules: {
        // 'comma-spacing': [2, {'before': false, 'after': true}], // 逗号后带空格
        indent: [2, 4], // 缩进风格
        'max-len': [2, { 'code': 130 }],
        'global-require': 0, // 关闭require必须在顶部（vue懒加载组件用）
        'import/no-dynamic-require': 0, //关闭require格式校验（vue懒加载组件用）
        'import/extensions': 0, // 关闭导入文件后缀校验（cdn引入用）
        'no-unused-expressions': [2, { 'allowShortCircuit': true, 'allowTernary': true }], // 允许 a && a()写法
        // 'linebreak-style': [2, 'windows'], // 换行风格
        // 'quotes': [2, 'single'], // 引号，单引号
        // 'no-extra-semi': 2, // 禁止不必要的分号
        // 'semi': [2, 'always'],
        // 'space-before-function-paren': [2, 'never'], // 禁止函数圆括号之前有一个空格
        // 'arrow-parens': [2, 'as-needed'],
        // 'quote-props': [2, 'consistent'],
        // 'comma-dangle': ['error', 'only-multiline'],
        // 'object-curly-spacing': ['error', 'never'],
        // 'no-param-reassign': 0, // 可以修改函数参数
        // 'no-restricted-globals': 0,
        // 'eol-last': 0, // 结尾换行
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: [],
        }],
        'vue/mustache-interpolation-spacing': [2, 'always' | 'never'],
        'vue/v-bind-style': [2, 'shorthand'],
        'vue/script-indent': ['error', 4],

        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
