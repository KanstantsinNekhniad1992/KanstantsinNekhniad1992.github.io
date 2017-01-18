'use strict';
import React from 'react';
import {connect} from 'react-redux';
import ArticlesList from '../articles/ArticlesListComponent';
import {getArticles} from '../../actions/articleActions';

class HomePage extends React.Component {

	constructor(props) {
		super(props);
		// if (!props.articles) {
		// 	props.actions.getArticles();
		// }
	}

	render () {
		let {articles} = this.props;

		return (
			<div className="wrapper">
				<ArticlesList articles={articles}/>
			</div>
		);

	}

}

function mapStateToProps (state, props) {
	return {
		articles: state.articles
	}
}



export default connect(mapStateToProps)(HomePage);
