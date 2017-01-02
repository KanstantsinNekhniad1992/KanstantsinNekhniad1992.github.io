'use strict';
let mongoose = require('mongoose'),
    ObjectId = require('mongodb').ObjectID;

let postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: '{PATH} is required'
    },
    description: {
        type: String,
        required: '{PATH} is required'
    },
    author: {
        type: String,
        required: '{PATH} is required'
    },
    date: {
        type: Date
    },
    tags: [{
        type: String
    }]
});

postSchema.methods.getAllPosts = function(req, res) {
    this.model('Post').find({}).exec((err, collection) => {
        if (err) {
            res.status(err.status).send(err.message);
        }
		if (req.isAuthenticated()) {
			res.render('index', { //will be changed when rendering move on frontend side
	            posts: collection,
				user: req.user
	        });
		} else {
			res.render('index', {
				posts: collection,
				user: null
			});
		}
    });
}

postSchema.methods.createPost = function(req, res) {
    let PostModel = this.model('Post'),
        Post;

    Post = new PostModel({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
        date: new Date(),
        tags: req.body.tags.split(', ')
    });

    Post.save((err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        res.redirect('/'); //will be changed when rendering move on frontend side
    });
}

postSchema.methods.getPost = function(req, res) {
    let _id = req.params.id;
    this.model('Post').findOne({
        _id: ObjectId(_id)
    }).exec((err, post) => {
        if (err) {
            res.status(500).send(err.message);
        }
        res.send(post);
    });
}

postSchema.methods.updatePost = function(req, res) {
    let _id = req.params.id;
    this.model('Post').update({
        _id: ObjectId(_id)
    }, {
        $set: updatedEvent,
        upset: true
    }).exec((err, post) => {
        if (err) {
            res.status(500).send(err.message);
        }
        res.send(post);
    });
}

postSchema.methods.removePost = function(req, res) {
    let _id = req.params.id;
    this.model('Post').remove({
        _id: ObjectId(_id)
    }).exec((err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        res.json('post was deleted successfully');
    });
}

mongoose.model('Post', postSchema);
