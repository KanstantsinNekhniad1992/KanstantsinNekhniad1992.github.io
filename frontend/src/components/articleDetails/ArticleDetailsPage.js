'use strict';
import React from 'react';
import { Link } from 'react-router';

class ArticleDetails extends React.Component {

	constructor (props) {
		super(props);
		this.state = {};
		let articleId = props.params.id;
		this.getArticleById(articleId)
			.then((result) => {
				this.setState({article: result});
			});
	}

	getArticleById (id) {
		let promise;

		promise = fetch(`/post/${id}`).then(function (response) {
			return response.json();
		});

		return promise;
	}

	render () {

		if (!this.state.article) {
			return null;
		}

		let {article = {}} = this.state;
		let url = '/update-post/' + article._id;

		return (
			<div className="article-details">
				<form action={url} encType="application/x-www-form-urlencoded">
					<ul className="form-controls-wrapper">
						<li>
							<input type="text" name="title" className="form-control" placeholde="Title" value={article.title}/>
						</li>
						<li>
							<input type="text" name="author" className="form-control" placeholde="Author" value={article.author}/>
						</li>
						<li>
							<textarea type="text" name="description" className="form-control" placeholde="Description" value={article.description}/>
						</li>
						<li>
							<input type="text" name="tags" className="form-control" placeholde="Tags" value={article.tags}/>
						</li>
					</ul>
					<input type="submit" id="edit-button" className="form-control btn" value="Edit"/>
					<input type="button" id="cancel-button" className="form-control btn" value="Cancel"/>
				</form>
			</div>
		);

	}

}

export default ArticleDetails;
