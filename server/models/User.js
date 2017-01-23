'use strict';

let mongoose = require('mongoose'),
    passport = require('passport'),
    encryption = require('../utilities/encryption');

let userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: '{PATH} is required'
    },
    lastName: {
        type: String,
        required: '{PATH} is required'
    },
    userName: {
        type: String,
        required: '{PATH} is required',
        unique: true
    },
    salt: {
        type: String,
        required: '{PATH} is required'
    },
    hashed_pwd: {
        type: String,
        required: '{PATH} is required'
    }
});

userSchema.methods.verifyPassword = function(password) {
    return encryption.hashPwd(this.salt, password) === this.hashed_pwd;
}

userSchema.methods.getUsers = function(req, res) {
    this.model('User').find({}).exec((err, collection) => {
        res.send(collection);
    });
};

userSchema.methods.register = function(req, res) {
    let UserModel = mongoose.model('User'),
        userData = {},
        User;

    userData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName.toLowerCase()
    }

    userData.salt = encryption.createSalt();
    userData.hashed_pwd = encryption.hashPwd(userData.salt, req.body.password);

    User = new UserModel(userData);

    User.save((err, user) => {
        if (err) {
            res.status(400);
            res.send({
                reason: err.toString()
            });
        }
        req.logIn(user, (err) => {
            if (err) {
                res.status(401);
                res.send({
                    reason: err.toString()
                });
            }
            res.redirect('/');
        })
    });
};

userSchema.methods.updateUser = function(req, res) {
    var userUpdates = req.body;

    if (req.user._id != userUpdates._id) {
        res.status(403);
        return res.end();
    }

    req.user.firstName = userUpdates.firstName;
    req.user.lastName = userUpdates.lastName;
    req.user.userName = userUpdates.userName;

    if (userUpdates.password && userUpdates.password.length > 0) {
        req.user.sale = encryption.createSalt();
        req.user.hashed_pwd = encryption.hashPwd(req.user.sale, userUpdates.password);
    }

    req.user.save((err) => {
        if (err) {
            req.status(400);
            return res.send({
                reason: err.toString()
            });
        }

        res.send(req.user);
    })
}

userSchema.methods.logIn = function(req, res, next) {

    passport.authenticate('local', function(err, user) {

        if (err) {
			req.status(401);
            return res.send({
                reason: err.toString()
            });
        }

        if (!user) {
			req.status(401);
            return res.send({
                reason: 'user is not found'
            });
        }

        req.logIn(user, function(err) {
            if (err) {
                return next(err);
            }
            res.send(user);
        })

    })(req, res, next);
}

userSchema.methods.logOut = function(req, res) {
    req.logout();
    res.redirect('/');
}

mongoose.model('User', userSchema);
