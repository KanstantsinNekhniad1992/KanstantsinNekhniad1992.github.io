'use strict';
import React from 'react';
import ArticlesList from '../articles/articlesList/ArticlesListComponent';

class HomePage extends React.Component {

	constructor() {
		super();
	}

	render () {

		return (
			<div className="wrapper">
				<ArticlesList/>
			</div>
		);

	}

}

export default HomePage;
