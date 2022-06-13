const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@assets':      path.resolve(__dirname, 'src/Assets'),
            '@components':  path.resolve(__dirname, 'src/components'),
            '@container':   path.resolve(__dirname, 'src/containers'),
            '@pages':       path.resolve(__dirname, 'src/pages'),
            '@styles':      path.resolve(__dirname, 'src/styles'),
        }
    },
    mode: 'development',
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|jpeg|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[hash][ext][query]',
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        historyApiFallback: true,
        port: 3006,
        open: true
    },
}