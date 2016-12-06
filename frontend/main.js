/*jshint esversion: 6 */
'use strict';

import style from './style.scss';
import config from './config';
import customLoaderResult from './test.json';
import ArticleActions from './articles/article-actions';
import ArticleStore from './articles/articles-store';
import Observer from './utils/Observer';
import Spinner from './utils/Spinner';
import Logger from './utils/Logger';

let getNewsLink = document.getElementById('get-news-link'),
	articlesHolder = document.getElementById('articles-list');

getNewsLink.addEventListener('click', function(e) {
    e.preventDefault();

    require.ensure([], function(require) {

        let articleService = require('./articles/article-service'),
            articles;

        require('./articles/articles.scss');
		Observer.notify('show-spinner', Spinner);
        articleService.getArticles({
            url: config.url,
            apiKey: config.apiKey
        }).then((result) => {
			ArticleStore.setInitialArticles(result.articles);
			ArticleStore.addLogListener(function () {
				Logger.log(`Article ${this._title} was clicked`, 'log');
			});
            articles = articleService.generateArticlesList(result.articles);
            articlesHolder.appendChild(articles);
            getNewsLink.classList += ' hidden';
			Observer.notify('hide-spinner', Spinner);
        }).catch((error) => {
			logger.log('fetch error', 'error');
			Observer.notify('hide-spinner', Spinner);
        });

    }, 'articles');
});

articlesHolder.addEventListener('click', (e) => {

    if (e.target.id === 'article-title') {
		var title = e.target.innerHTML;
		ArticleActions.logArticle(title);
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
