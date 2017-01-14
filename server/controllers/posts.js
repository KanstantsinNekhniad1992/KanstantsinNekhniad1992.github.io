'use strict';
let PostModel = require('mongoose').model('Post'),
    Post = new PostModel();

exports.getAllPosts = function(req, res) {
    Post.getAllPosts(req, res);
}

exports.getPost = function(req, res) {
    Post.getPost(req, res)
}

exports.createPost = function(req, res) {
    Post.createPost(req, res);
}

exports.updatePost = function(req, res) {
    Post.updatePost(req, res);
}

exports.removePost = function(req, res) {
    Post.removePost(req, res);
}
