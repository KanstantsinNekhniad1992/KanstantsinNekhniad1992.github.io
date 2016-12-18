'use strict';
let mongoose = require('mongoose');

module.exports = function(app) {
    require('../routes/post.routes.js')(app);
    require('../routes/user.route.js')(app);
};
