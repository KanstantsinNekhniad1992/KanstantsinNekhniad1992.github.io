/*jshint esversion: 6 */
'use strict';

let webpack = require('webpack'),
    path = require('path'),
    dirSource = path.resolve(__dirname, 'frontend'),
    dirBuild = path.resolve(__dirname, 'build');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: {
        main: dirSource + "/style.scss"
    },
    output: {
        path: dirBuild,
        publicPath: '/build/',
        filename: '[name].css'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            exclude: ['/node_modules/'],
            loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
        }]
    },
    watch: NODE_ENV !== 'production',
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};
