var UserModel = require('mongoose').model('User'),
	User = new UserModel();

exports.register = function(req, res) {
	User.register(req, res);
};

exports.getUsers = function (req, res) {
	User.getUsers(req, res);
}

exports.updateUser = function(req, res) {
	User.updateUser(req, res);
};

exports.logIn = function (req, res) {
	User.logIn(req, res);
};

exports.logOut = function (req, res) {
	User.logOut(req, res);
}
