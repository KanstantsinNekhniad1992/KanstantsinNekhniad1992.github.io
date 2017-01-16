'use strict';

import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './app';
import HomePage from './components/home/HomePage';
import ArticleDetailsPage from './components/articleDetails/ArticleDetailsPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage}/>
		<Route path="/post/:id" component={ArticleDetailsPage}/>
	</Route>
);
