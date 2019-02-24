const pages = env => {
    const page = {
        index: {
            entry: 'src/pages/index/main.js',
            template: 'template/index.html',
            filename: 'index.html',
            title: 'Index Page',
            chunks: ['chunk-vendors', 'chunk-common', 'index'],
            prod: true,
        },
        system: {
            entry: 'src/pages/index/main.js',
            template: 'template/index.html',
            filename: 'system.html',
            title: 'Index Page',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        demo: {
            entry: 'src/pages/demo/main.js',
            template: 'template/index.html',
            filename: 'demo.html',
            title: 'Demo Page',
            chunks: ['chunk-vendors', 'chunk-common', 'demo'],
            prod: true
        }
    };

    if (env === 'production') {
        for(const item in page) {
            !page[item].prod && delete page[item];
        }
    }

    return page;
}

module.exports = pages;
