const mock = require('./mock');
const LessPluginFun = require('less-plugin-functions');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    baseUrl: '/',
    assetsDir: 'src/assets',

    devServer: {
        host: '0.0.0.0',
        port: 8080,
        proxy: null,
        before(app) { mock(app); }
    },

    // todo 自动根据文件名处理多页，而不用单独一个个去写
    pages: {
        index: {
            entry: 'src/pages/index/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Index Page',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        demo: {
            entry: 'src/pages/demo/main.js',
            template: 'public/index.html',
            filename: 'demo.html',
            title: 'Demo Page',
            chunks: ['chunk-vendors', 'chunk-common', 'demo']
        }
    },

    configureWebpack: {
        externals: {
            jquery: 'jQuery',
            echarts: 'echarts',
            moment: 'moment',
            underscore: '_',
            axios: 'axios'
        },
        plugins: [
            new StyleLintPlugin({
                context: 'src',
                files: ['**/*.less', '**/*.s?(a|c)ss', '**/*.vue']
            })
        ]
    },

    lintOnSave: true,

    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: process.env.NODE_ENV === 'production',
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            less: {
                plugins: [ new LessPluginFun() ]
            },
        },
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },

    chainWebpack: config => {
        config.module
            .rule('eslint')
            .use('eslint-loader')
            .loader('eslint-loader')
            .tap(options => {
                options.emitError = true;
                // 修改它的选项...
                return options;
            });
    }
};
