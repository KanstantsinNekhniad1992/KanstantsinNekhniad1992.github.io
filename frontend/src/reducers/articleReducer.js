'use strict';

import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function articleReducer(state = initialState, action) {

	switch (action.type) {
		case types.GET_ARTICLES_SUCCESS:
			return Object.assign([], state, action.articles);
		// case types.GET_ARTICLE_SUCCESS:
		// 	return action.article;
		// case types.CREATE_ARTICLE_SUCCESS:
		// 	return action.article;
		// case types.EDIT_ARTICLE_SUCCESS:
		// 	return action.article;
		// case types.REMOVE_ARTICLE_SUCCESS:
		// 	return action.message;
		default:
			return state;
	}

}
