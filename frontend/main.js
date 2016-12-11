/*jshint esversion: 6 */
'use strict';

import style from './style.scss';
import customLoaderResult from './test.json';
import ArticleComponent from './articles/article-component';
import ArticleActions from './articles/article-actions';

document.body.addEventListener('click', (e) => {

    if (e.target.id === 'article-title') {
		var title = e.target.innerHTML;
		ArticleActions.logArticle(title);

    } else if (e.target.id === 'get-news-link') {
		e.preventDefault();
		ArticleActions.getArticles();
	}

	/*This is a facade pattern realization
	In future we can add addition conditions.
	For example:
	if (e.target.id === 'some-id') {
		doSomething();
	}
	*/
});

console.dir(customLoaderResult);
