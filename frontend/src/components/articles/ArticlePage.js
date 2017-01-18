'use strict';

import React from 'react';
import {browserHistory} from 'react-router';
import ArticleForm from './ArticleForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/articleActions';

class ArticlePage extends React.Component {

	constructor(props) {
		super(props);
		if (!this.props.article) {
			this.props.actions.getArticle(this.props.params.id);
		}

		this.state = {
		    article: {
		        title: '',
		        author: '',
		        tags: [],
		        description: '',
		        date: ''
		    }
		}

		this.updateArticleState = this.updateArticleState.bind(this);
		this.editArticle = this.editArticle.bind(this);
		this.backToArticlesList = this.backToArticlesList.bind(this);
	}

	updateArticleState(event) {
		let field = event.target.name;
		let article = this.props.article;
		article[field] = event.target.value;
		if (field === 'tags') {
			article[field] = article[field].split(', ')
		}
		this.setState({article: article});
	}

	backToArticlesList() {
		browserHistory.push('/');
	}

	editArticle(event) {
		event.preventDefault();
		this.state.article.date = new Date();
		this.props.actions.editArticle(this.state.article);
		this.backToArticlesList();
	}

	render() {

		let {article = {}} = this.props;

		return (
			<ArticleForm
				article= {article}
				buttonName= 'Edit'
				onChange= {this.updateArticleState}
				onSubmit= {this.editArticle}
				onCancel= {this.backToArticlesList}
			/>
		);

	}

}

function mapStateToProps(state, props) {
	return {
		article: state.articleReducer.article
	}
}

function mapDispatchToProps (dispatch) {
	return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
