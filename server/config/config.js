'use strict';
let path = require('path'),
	rootPath = path.normalize(__dirname + '../../../');

module.exports = {
    rootPath: rootPath,
    db: 'mongodb://kanstantsin_nekhniad:password1234@ds133378.mlab.com:33378/postsdb',
    port: process.env.PORT || 9100
};
