'use strict';

class PostApi {

	constructor() {

	}

	static createPost(post) {

		let promise;

		promise = fetch('/new-post', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(post)
		}).then(function (response) {
			return response.json();
		});

		return promise;
	}

	static getPosts() {

		let promise;

		promise = fetch('/posts', {
			method: 'GET'
		}).then(function (response) {
			return response.json();
		});

		return promise;
	}

	static updatePost(post) {

		let promise;

		promise = fetch('/update-post/' + post._id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(post)
		}).then(function (response) {
			return response.json();
		});

		return promise;
	}

	static removePost(id) {

		let promise;

		promise = fetch('/remove-post' + id, {
			method: 'DELETE'
		}).then(function (response) {
			return response.json();
		});

		return promise;

	}
}

export default PostApi;
