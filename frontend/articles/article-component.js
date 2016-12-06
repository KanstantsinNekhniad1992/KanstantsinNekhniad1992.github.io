/*jshint esversion: 6 */
'use strict';

import ArticleStore from './articles-store';
import ArticleActions from './article-actions';
import Logger from '../utils/Logger';
import articleService from './article-service';
import Observer from '../utils/Observer'
import config from '../config';
import Spinner from '../utils/Spinner';

class ArticleComponent {

    constructor() {

        ArticleStore.addLogListener(function() {
            Logger.log(`Article ${this._title} was clicked`, 'log');
        });

        ArticleStore.addGetArticlesListener(function() {

            let getNewsLink = document.getElementById('get-news-link'),
                articlesHolder = document.getElementById('articles-list'),
				articles;

            articleService.getArticles({
                url: config.url,
                apiKey: config.apiKey
            }).then((result) => {
				require.ensure([], function(require) {
					require('./articles.scss');
				});
                ArticleStore.setInitialArticles(result.articles);
                articles = articleService.generateArticlesList(result.articles);
                articlesHolder.appendChild(articles);
				getNewsLink.classList.add('hidden');
                Observer.notify('hide-spinner', Spinner);
            }).catch((error) => {
                Logger.log('fetch error', 'error');
                Observer.notify('hide-spinner', Spinner);
            });
        });
    }


	//will be added aditional methods in future
}

export default new ArticleComponent();
