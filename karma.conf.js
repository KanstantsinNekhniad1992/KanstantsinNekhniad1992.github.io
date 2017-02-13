module.exports = function (config) {

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: ['karma.webpack.context.js'],
    exclude: [],
    preprocessors: {
      'karma.webpack.context.js': ['webpack']
    },
    webpack: {
      devtool: 'eval',
      module: {
        loaders: [{
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        }, {
          test: /\.scss$/,
          exclude: ['/node_modules/'],
          loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
        }, {
          test: /\.js$/,
          exclude: /(\.test.js$|node_modules)/,
          loader: 'babel-loader'
        }]
      },
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
