import React from 'react';
import './article.scss';
import { Link } from 'react-router';

class Article extends React.Component {

	constructor(props) {
		super(props);
	}

	render () {

		let article = this.props.article;
		let {tags = []} = article;
		let url = `/post/${article._id}`;

		return (
			<div className="article">
				<div className="article-source clearfix">
					<p className="author">{article.author}</p>
					<p className="date">{article.date}</p>
				</div>
				<Link className="title" to={url}>{article.title}</Link>
				<p className="description">{article.description}</p>
				<h5>Tags</h5>
				<ul className="tags-list clearfix">
					{tags.map(item =>
						<li>{item}</li>
					)}
				</ul>
			</div>
		);

	}

}

Article.propTypes = {
	article: React.PropTypes.object.isRequired
}

export default Article;
