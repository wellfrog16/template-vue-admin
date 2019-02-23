module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    // cdn 引用作为的全局对象
    globals: {
        'window': true,
        '$': true,
        'echarts': true,
        'moment': true,
        'axios': true,
        'Hammer': true,
        '_': true,
    },
    rules: {
        indent: [2, 4], // 缩进风格
        'max-len': [2, { 'code': 150 }],
        'global-require': 0, // 关闭require必须在顶部（vue懒加载组件用）
        'import/no-dynamic-require': 0, //关闭require格式校验（vue懒加载组件用）
        'no-unused-expressions': [2, { 'allowShortCircuit': true, 'allowTernary': true }], // ? 允许 a && a()写法
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
