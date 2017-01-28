'use strict';
let postController = require('../controllers/posts');

module.exports = function(app) {

    app.get('/posts', postController.getAllPosts);
    app.get('/posts/:id', postController.getPost);
	app.post('/posts', postController.createPost);
    app.put('/posts/:id', postController.updatePost);
    app.delete('/posts/:id', postController.removePost);

}
