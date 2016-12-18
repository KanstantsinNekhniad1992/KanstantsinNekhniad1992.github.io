'use strict';
let express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    passport = require('passport');

module.exports = function(app, config) {
    app.set('views', config.rootPath + '/server/views');
    app.set('view engine', 'pug');
    app.use(cookieParser());
    app.use(session({
        secret: 'koS',
        resave: true,
        saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.static(config.rootPath + '/frontend'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
}
