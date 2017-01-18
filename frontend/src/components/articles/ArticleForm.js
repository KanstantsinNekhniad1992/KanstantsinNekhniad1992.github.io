'use strict';

import React from 'react';

class ArticleForm extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let {onChange, article, onClick, onCancel} = this.props;

		return (
			<div className="article-details">
				<form>
					<ul className="form-controls-wrapper">
						<li>
							<input type="text" name="title" className="form-control" placeholde="Title" onChange={onChange} value={article.title}/>
						</li>
						<li>
							<input type="text" name="author" className="form-control" placeholde="Author" onChange={onChange} value={article.author}/>
						</li>
						<li>
							<textarea type="text" name="description" className="form-control" placeholde="Description" onChange={onChange} value={article.description}/>
						</li>
						<li>
							<input type="text" name="tags" className="form-control" placeholde="Tags" onChange={onChange} value={article.tags}/>
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
