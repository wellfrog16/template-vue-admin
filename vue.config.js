const LessPluginFun = require('less-plugin-functions');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path');
const pages = require('./build/pages');

const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
    publicPath: './',
    assetsDir: 'src/assets',
    productionSourceMap: false, // 不生成map

    devServer: {
        host: '0.0.0.0',
        port: 8080,
        proxy: null,
    },

    pages: {
        ...pages(process.env.NODE_ENV),
    },

    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true; // eslint-disable-line
        } else {
            config.plugins.push( // eslint-disable-line
                new StyleLintPlugin({
                    context: 'src',
                    files: ['**/*.less', '**/*.s?(a|c)ss', '**/*.vue'],
                }),
            );
        }
        config.devtool = 'source-map'; // eslint-disable-line
    },

    // configureWebpack: {
    //     // externals: {
    //     //     jquery: 'jQuery',
    //     // },
    //     plugins: [
    //         new StyleLintPlugin({
    //             context: 'src',
    //             files: ['**/*.less', '**/*.s?(a|c)ss', '**/*.vue'],
    //         }),
    //     ],
    // },

    lintOnSave: true,

    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: process.env.NODE_ENV === 'production',
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            less: {
                plugins: [new LessPluginFun()],
            },
            // postcss: {
            //     plugins: [
            //         require('postcss-pxtorem') ({ // eslint-disable-line
            //             rootValue: 36, // 设计稿1rem = 36px
            //             minPixelValue: 4,
            //             selectorBlackList: ['px'], // 忽略转换正则匹配项
            //             propList: ['*'],
            //         }),
            //     ],
            // },
        },
        // 启用 CSS modules for all css / pre-processor files.
        requireModuleExtension: true,
    },

    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('#index', resolve('src/pages/index'))
            .set('#web', resolve('src/pages/web'));

        config.module
            .rule('eslint')
            .use('eslint-loader')
            .loader('eslint-loader')
            .tap((options) => {
                const option = options;
                option.emitError = true;
                // 修改它的选项...
                return option;
            });
    },
};
