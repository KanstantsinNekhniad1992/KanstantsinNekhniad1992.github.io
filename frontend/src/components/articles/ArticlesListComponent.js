import React from 'react';
import Article from './article/ArticleComponent';

class ArticlesList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let {articles = []} = this.props;

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

ArticlesList.propsTypes = {
    articles: React.PropTypes.array.isRequired
}

export default ArticlesList;
