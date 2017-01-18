'use strict';

import React from 'react';

class ArticleForm extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let {onChange, article = {}, onClick, onCancel} = this.props;

		return (
			<div className="article-details">
				<form>
					<ul className="form-controls-wrapper">
						<li key="title">
							<input type="text" name="title" className="form-control" placeholder="Title" onChange={onChange} value={article.title}/>
						</li>
						<li key="author">
							<input type="text" name="author" className="form-control" placeholder="Author" onChange={onChange} value={article.author}/>
						</li>
						<li key="description">
							<textarea type="text" name="description" className="form-control" placeholder="Description" onChange={onChange} value={article.description}/>
						</li>
						<li key="tags">
							<input type="text" name="tags" className="form-control" placeholder="Tags" onChange={onChange} value={article.tags}/>
						</li>
					</ul>
					<input type="submit" id="edit-button" onClick={onClick} className="form-control btn" value="Edit"/>
					<input type="button" id="cancel-button" onClick={onCancel} className="form-control btn" value="Cancel"/>
				</form>
			</div>
		)
	}

}

export default ArticleForm;
