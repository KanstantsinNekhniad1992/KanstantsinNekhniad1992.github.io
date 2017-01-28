/*jshint esversion: 6 */
'use strict';

import ngAnnotatePlugin from 'ng-annotate-webpack-plugin';

let webpack = require('webpack'),
    path = require('path'),
    dirSource = path.resolve(__dirname, 'frontend'),
    dirBuild = path.resolve(__dirname, 'frontend/build');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: {
        main: dirSource + "/src/index.js"
    },
    output: {
        path: dirBuild,
        publicPath: '/build/',
        filename: 'index.js'
    },
	devtool: 'eval-source-map',
    module: {
        loaders: [{
			test: /\.css$/,
        	loaders: [ 'style-loader', 'css-loader']
		},{
            test: /\.scss$/,
            exclude: ['/node_modules/'],
            loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
        }, {
			test: /\.js$/,
			loader: 'babel-loader'
		}]
    },
    watch: NODE_ENV !== 'production',
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
		new webpack.SourceMapDevToolPlugin({
			include: ['frontend/*.js'],
			exclude: ['server/*.js']
		}),
		new ngAnnotatePlugin({
            add: true
        })
    ]
};
