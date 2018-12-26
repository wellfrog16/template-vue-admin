module.exports = {
    'root': true,
    'env': {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    'rules': {
        'comma-spacing': [2, {'before': false, 'after': true}], // 逗号后带空格
        'indent': [2, 4], // 缩进风格
        'linebreak-style': [2, 'windows'], // 换行风格
        'quotes': [2, 'single'], // 引号，单引号
        'no-extra-semi': 2, // 禁止不必要的分号
        'semi': [2, 'always'],
        'space-before-function-paren': [2, 'never'], // 禁止函数圆括号之前有一个空格
        'arrow-parens': [2, 'as-needed'],
        'quote-props': [2, 'consistent'],
        'comma-dangle': ['error', 'only-multiline'],
        'object-curly-spacing': ['error', 'never'],
        'no-param-reassign': 0, // 可以修改函数参数
        'no-restricted-globals': 0,
        'eol-last': 0, // 结尾换行
        'vue/html-indent': ['error', 4, {
            'attribute': 1,
            'closeBracket': 0,
            'alignAttributesVertically': true,
            'ignores': []
        }],
        'vue/mustache-interpolation-spacing': [2, 'always' | 'never'],
        'vue/v-bind-style': [2, 'shorthand'],
        'vue/script-indent': ['error', 4],

        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    'parserOptions': {
        parser: 'babel-eslint'
    }
};
