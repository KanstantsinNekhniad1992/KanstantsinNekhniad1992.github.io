'use strict';

import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import HomePage from './components/home/HomePage';
import ArticlePage from './components/articles/ArticlePage';
import NewArticlePage from './components/articles/NewArticlePage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage}/>
		<Route path="/post/:id" component={ArticlePage}/>
		<Route path="/new-post" component={NewArticlePage}/>
	</Route>
);
