/*jshint esversion: 6 */
'use strict';

import Dispatcher from '../FrontcampDispatcherInstance';
import config from '../config';

let ArticleActions = {
	//it's just common name, here can be add, delete, update article
	logArticle: function (title) {
		Dispatcher.dispatch({
			actionType: config.actions.LOG_ARTICLE,
			title: title
		});
	}
};

export default ArticleActions;
