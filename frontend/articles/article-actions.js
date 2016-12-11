/*jshint esversion: 6 */
'use strict';

import Dispatcher from '../FrontcampDispatcherInstance';
import config from '../config';

let ArticleActions = {

	logArticle: function (title) {
		Dispatcher.dispatch({
			actionType: config.actions.LOG_ARTICLE,
			title: title
		});
	},

	getArticles: function () {
		Dispatcher.dispatch({
			actionType: config.actions.GET_ARTICLES
		});
	}
};

export default ArticleActions;
