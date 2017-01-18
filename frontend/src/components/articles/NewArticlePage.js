'use strict';

import React from 'react';
import {browserHistory} from 'react-router';
import ArticleForm from './ArticleForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/articleActions';

class NewArticlePage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		    article: {
		        title: '',
		        author: '',
		        tags: '',
		        description: '',
		        date: ''
		    }
		}

		this.updateArticleState = this.updateArticleState.bind(this);
		this.saveArticle = this.saveArticle.bind(this);
		this.backToArticlesList = this.backToArticlesList.bind(this);
	}

	saveArticle (event) {
		event.preventDefault();
		this.state.article.date = new Date();
		this.props.actions.createArticle(this.state.article);
		this.backToArticlesList();
	}

	updateArticleState(event) {
		let field = event.target.name;
		let article = this.state.article;
		article[field] = event.target.value;
		if (field === 'tags') {
			article[field] = article[field].split(', ')
		}
		this.setState({article: article});
	}

	backToArticlesList() {
		browserHistory.push('/');
	}

	render() {

		let {article = {}} = this.props;

		return (
			<ArticleForm
				article= {article}
				buttonName = 'Save'
				onChange= {this.updateArticleState}
				onSubmit= {this.saveArticle}
				onCancel= {this.backToArticlesList}
			/>
		);

	}

}

function mapStateToProps(state, props) {
	return {}
}

function mapDispatchToProps (dispatch) {
	return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewArticlePage);
