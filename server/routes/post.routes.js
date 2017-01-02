'use strict';
let postController = require('../controllers/posts');

module.exports = function(app) {

    app.get('/', postController.getAllPosts);
    app.get('/post/:id', postController.getPost);
	app.get('/new-post', function(req, res) { //will be changes after moving rendering on frontend side
		res.render('new-post');
	});
	app.post('/new-post', postController.createPost);
    app.put('/update-post/:id', postController.updatePost);
    app.delete('/remove-post/:id', postController.removePost);

}
