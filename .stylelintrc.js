module.exports = {
    // 'processors': ['@mapbox/stylelint-processor-arbitrary-tags'],
    extends: 'stylelint-config-standard',
    rules: {
        indentation: 4, // 4个空格
        'no-empty-source': null,
        'no-eol-whitespace': [true, { ignore: ['empty-lines'] }],
        'selector-class-pattern': '^[a-z]+[a-z\\d-_]*[a-z\\d]$', // class名字规则
        'selector-id-pattern': '^[a-zA-Z\\d]+$', // id名字规则
        'max-nesting-depth': 3, // 最大嵌套深度
        'max-empty-lines': 1,
        'string-quotes': 'single', // 单引号
        'function-url-quotes': 'always', // 单引号
        'at-rule-semicolon-newline-after': null,
        'property-no-unknown': [true, { ignoreProperties: ['return'] }], // 自定义函数用，忽略return
        'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }],
        'selector-list-comma-newline-after': 'never-multi-line', // 不允许多行
    },
};
