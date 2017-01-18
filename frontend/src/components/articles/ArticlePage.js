'use strict';

import React from 'react';
import {brrowserHistory} from 'react-router';
import ArticleForm from './ArticleForm';

class ArticlePage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			article: {
				title: '',
				author: '',
				description: '',
				date: ''
			}
		};
		this.updateArticleState = this.updateArticleState.bind(this);
		this.saveArticle = this.saveArticle.bind(this);
		this.backToArticlesList = this.backToArticlesList.bind(this);
	}

	saveArticle (event) {
		event.preventDefault();
		this.props.actions.createPost(this.state.article);
	}

	updateArticleState(event) {
		let field = event.target.name;
		let article = this.state.article;
		article[field] = event.target.value;
		this.setState({article: article});
	}

	backToArticlesList() {
		browserHistory.push('/articles');
	}

	render() {

		return (
			<ArticleForm
				article: {this.state.article}
				onChange: {updateArticleState}
				onSave: {saveArticle}
				onCancel: {backToArticlesList}
			/>
		);

	}

}

export default ArticlePage;
