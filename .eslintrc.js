module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    globals: {
        'window': true,
    },
    rules: {
        indent: [2, 4], // 缩进风格
        'max-len': [2, { 'code': 150 }],
        'no-underscore-dangle': [2, { 'allow': ['_id'] }], // nedb专用
        'no-unused-expressions': [2, { 'allowShortCircuit': true, 'allowTernary': true }], // ? 允许 a && a()写法
        'no-param-reassign': [2, { 'props': true, 'ignorePropertyModificationsFor': ['state', 'item', 'el'] }], // 允许vuex里的state，备用item, el
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: [],
        }],
        'vue/mustache-interpolation-spacing': [2, 'always' | 'never'],
        'vue/v-bind-style': [2, 'shorthand'],
        'vue/script-indent': ['error', 4],

        // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console': 'off',
        'no-debugger': 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
