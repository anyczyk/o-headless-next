const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production', // lub 'development' w zależności od potrzeb
    entry: {
        main: [
            './src/assets/js/main.js',
            './src/assets/scss/main.scss',
            ...glob.sync('src/blocks/**/frontend.scss').map((file) => './' + file.replace(/\\/g, '/')),
            ...glob.sync('src/blocks/**/frontend.js').map((file) => './' + file.replace(/\\/g, '/')),
        ],
        editor: [
            './src/assets/scss/_root.scss',
            './src/assets/scss/backend.scss',
            ...glob.sync('src/blocks/**/editor.scss').map((file) => './' + file.replace(/\\/g, '/')),
        ],
    },
    output: {
        path: path.resolve(__dirname, 'build', 'assets'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    resolve: {
        fallback: {
            path: require.resolve('path-browserify'),
            module: false,
        },
    },
};
