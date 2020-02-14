const pages = env => {
    const page = {
        index: {
            entry: 'src/pages/index/main.js',
            template: 'template/index.html',
            filename: 'index.html',
            title: '管理系统',
            chunks: ['chunk-vendors', 'chunk-common', 'index'],
            prod: true,
        },
    };

    if (env === 'production') {
        for(const item in page) {
            !page[item].prod && delete page[item];
        }
    }

    return page;
}

module.exports = pages;
