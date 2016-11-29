/*jshint esversion: 6 */
'use strict';

let getNewsLink = document.getElementById('get-news-link');

import config from './config';
import customLoaderResult from './test.json';

getNewsLink.addEventListener('click', function(e) {
    e.preventDefault();

    require.ensure([], function(require) {

        let articleService = require('./articles/article-service'),
            articles,
            articlesHolder = document.getElementById('articles-list');

        require('./articles/articles.scss');

        articleService.getArticles({
            url: config.url,
            apiKey: config.apiKey
        }).then((result) => {
            articles = articleService.generateArticlesList(result.articles);
            articlesHolder.appendChild(articles);
            getNewsLink.classList += ' hidden';
        }).catch((error) => {

            if (NODE_ENV === 'development') {
                console.log('fetch error');
            }
        });

    }, 'articles');
});

console.dir(customLoaderResult);
