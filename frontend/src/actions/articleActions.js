'use strict';

import * as types from './actionTypes';
import postApi from '../api/postApi';

export const getArticlesSuccess = function (articles) {
	return {
		type: types.GET_ARTICLES_SUCCESS,
		articles
	}
};

export const getArticleSuccess = function (id) {
	return {
		type: types.GET_ARTICLE_SUCCESS,
		id
	}
};

export const createArticleSuccess = function (article) {
	return {
		type: types.CREATE_ARTICLE_SUCCESS,
		article
	}
};

export const editArticleSuccess = function (article) {
	return {
		type: types.EDIT_ARTICLE_SUCCESS,
		article
	}
};

export const removeArticleSuccess = function (message) {
	return {
		type: types.REMOVE_ARTICLE_SUCCESS,
		message
	};
};

export const getArticles = function () {

	return function (dispatch) {
		return postApi.getPosts().then((articles) => {
			dispatch(getArticlesSuccess(articles));
		}).catch(function (error) {
			console.log('get articles thrown with error: ' + error.message);
		});
	}

};

export const getArticle = function (id) {

	return function (dispatch) {
		return dispatch(getArticleSuccess(id));
	}

};

export const createArticle = function (post) {

	return function (dispatch) {
		return postApi.createPost(post).then((article) => {
			dispatch(createArticleSuccess(article));
		}).catch(function (error) {
			console.log('create article thrown with error: ' + error.message);
		});
	}

};

export const editArticle = function (post) {

	return function (dispatch) {
		return postApi.updatePost(post).then((article) => {
			dispatch(editArticleSuccess(article));
		}).catch(function (error) {
			console.log('edit article thrown with error: ' + error.message);
		});
	}
};

export const removeArticle = function (id) {

	return function (dispatch) {
		return postApi.removePost(id).then((message) => {
			dispatch(removeArticleSuccess(message))
		}).catch(function (error) {
			console.log('remove article thrown with error: ' + error.message);
		});
	}
};
