'use strict';
import express from 'express';
import webpack from 'webpack';
import webpackConfig from './webpack.config';
import expressConfig from './server/config/config';

const app = express();
const compiler = webpack(webpackConfig);

compiler.plugin('compile', function() {
    console.log('Bundling...');
});

compiler.plugin('done', function() {
    console.log('Bundled done');
});

app.use(require('webpack-dev-middleware')(compiler, {
	hot: true,
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    }
}));

require('./server/config/express.js')(app, expressConfig);
require('./server/config/mongoose.js')(expressConfig);
require('./server/config/routes.js')(app);
require('./server/config/passport')();

app.listen(expressConfig.port);
console.log('Server running on port ' + expressConfig.port);
