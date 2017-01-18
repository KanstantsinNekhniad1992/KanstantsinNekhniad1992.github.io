'use strict';

import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';

export default function articleReducer(state = initialState, action) {
	switch (action.type) {
		case types.GET_ARTICLES_SUCCESS:
			return Object.assign({}, state, {
				articles: action.articles
			});
		case types.GET_ARTICLE_SUCCESS:
			let article;
			state.articles.forEach(function (item) {
				if (item._id === action.id) {
					article = item;
				}
			});
			return Object.assign({}, {
				article: article || {}
			});
		case types.EDIT_ARTICLE_SUCCESS:
			return state;
		case types.REMOVE_ARTICLE_SUCCESS:
			return action.message;
		default:
			return state;
	}

}
