const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const EslingPlugin = require('eslint-webpack-plugin');

const { NODE_ENV } = process.env;

module.exports = {
    entry: resolve(__dirname, './src/index.ts'),
    output: {
        filename: 'index.js',
        path: resolve(`${__dirname}/dist`),
        clean: true,
        environment: {
            arrowFunction: false,
        },
    },
    devtool: NODE_ENV === 'production' ? 'hidden-source-map' : 'eval-source-map',
    mode: NODE_ENV === 'production' ? 'production' : 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'ts-loader',
                },
            },
            {
                test: /.s?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|ico|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: './images/[contenthash][ext]',
                },
            },
            {
                test: /\.(mp3|wav)$/,
                type: 'asset/resource',
                generator: {
                    filename: './audio/[contenthash][ext]',
                },
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, './src/index.html'),
        }),
        new MiniCssExtractPlugin(),
        //  new CleanWebpackPlugin(),
        new EslingPlugin({ extensions: 'ts' }),
    ],
    optimization: {
        minimizer: ['...', new CssMinimizerPlugin()],
    },
    devServer: {
        compress: true,
        port: 9000,
        client: {
            logging: 'info',
        },
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
};
