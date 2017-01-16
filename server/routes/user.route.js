'use strict';
let userController = require('../controllers/users');

module.exports = function(app) {
	app.post('/register', userController.register);
	app.get('/users', userController.getUsers);
    app.post('/login', userController.logIn);
    app.get('/logout', userController.logOut);
};
