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
		if(!this.props.article) {
			this.props.actions.getArticle(this.props.params.id);
		}

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
		let article = this.props.article;
		article[field] = event.target.value;
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
				onChange= {this.updateArticleState}
				onSave= {this.saveArticle}
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
