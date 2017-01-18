'use strict'
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {Provider} from 'react-redux';
import {getArticles} from './actions/articleActions';
import configureStore from './store/configureStore';

const store = configureStore();

store.dispatch(getArticles());

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes}/>
	</Provider>, document.getElementById('app')
);
