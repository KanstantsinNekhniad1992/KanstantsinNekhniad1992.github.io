'use strict';
let mongoose = require('mongoose');

module.exports = function(app) {

	app.get('/', function (req, res) {
		res.render('index');
	});

    require('../routes/post.routes.js')(app);
    require('../routes/user.route.js')(app);
};
