const merge = require('webpack-merge');
const common = require('./webpack.common.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
module.exports = merge(common, {
            devtool: 'inline-source-map',
            devServer: {
                contentBase: './public'
            },
            plugins: [
                new HtmlWebpackPlugin({title: 'Hot Module Replacement' }),
                new webpack.HotModuleReplacementPlugin()
            ]
});