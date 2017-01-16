import React from 'react';
import Article from '../article/ArticleComponent';

class ArticlesList extends React.Component {

	 constructor () {
		 super();
		 this.state = {};
		 this.getArticles().then((result) => {
			 this.setState({articles: result});
		 });

	 }

	 getArticles () {

		 let promise = fetch('/posts').then((response) => {
			 return response.json();
		 });

		 return promise;

	 }

	 render () {

		 let {articles = []} = this.state;

		 return (
			 <ul className="articles-list">
			 	{articles.map((item) =>
					<li key={item._id}>
						<Article article={item}/>
					</li>
				)}
			 </ul>
		 );
	 }

 }

export default ArticlesList;
