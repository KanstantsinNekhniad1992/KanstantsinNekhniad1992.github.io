'use strict';
let mongoose = require('mongoose');

module.exports = function(config) {
    let db = mongoose.connection;

    db.once("open", function(ref) {
        console.log('postsdb connected');
    });

    db.on("error", function(err) {
        console.error('connection error...')
		console.log(err);
    });

	mongoose.Promise = global.Promise;
    mongoose.connect(config.db);
	require('../models/Post');
	require('../models/User');
};
