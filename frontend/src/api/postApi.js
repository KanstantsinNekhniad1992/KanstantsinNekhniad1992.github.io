'use strict';

class PostApi {

	constructor() {
		this.headers = {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	}

	static createPost(post) {

		let promise;

		promise = fetch('/new-post', {
			method: 'POST',
			headers: this.headers,
			body: JSON.stringify({post: post})
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
			headers: this.headers,
			body: JSON.stringify({post: post})
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