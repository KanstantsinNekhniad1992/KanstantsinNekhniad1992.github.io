/*jshint esversion: 6 */
'use strict';

let webpack = require('webpack'),
    path = require('path'),
    dirSource = path.resolve(__dirname, 'frontend'),
    dirBuild = path.resolve(__dirname, 'build');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: {
        main: dirSource + "/main.js"
    },
    output: {
        path: dirBuild,
        publicPath: '/build/',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            test: dirSource
        }, {
            test: /\.scss$/,
            exclude: ['/node_modules/'],
            loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
        }]
    },
    watch: NODE_ENV === 'development',
    plugins: [
         new webpack.optimize.UglifyJsPlugin({
             compress: NODE_ENV === 'production'
         }),
        new webpack.EnvironmentPlugin([
            "NODE_ENV"
        ]),
        new webpack.ProvidePlugin({
            Promise: 'imports?this=>global!exports?global.Promise!es6-promises',
            fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],
    devtool: NODE_ENV === 'production' ? null : 'inline-source-map',
    devServer: {
        host: 'localhost',
        port: '4000',
        hot: true,
        contentBase: "./"
    }
};
