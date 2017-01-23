'use strict';
let postController = require('../controllers/posts');

module.exports = function(app) {

    app.get('/posts', postController.getAllPosts);
    app.get('/post/:id', postController.getPost);
	app.post('/new-post', postController.createPost);
    app.put('/update-post/:id', postController.updatePost);
    app.delete('/remove-post/:id', postController.removePost);

}
