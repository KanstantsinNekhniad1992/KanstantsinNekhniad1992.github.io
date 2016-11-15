/*jshint esversion: 6 */
'use strict';

const URL = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=';
const APIKEY = '6b51303bc9c44fc49fd3973b3a1e108f';

getArticles();

function getArticles () {

    fetch(URL + APIKEY, {
        method: 'GET'
    }).then((response) => {

        if (!response.ok) {
            console.log('ajax request thrown with error: ' + response.statusText);
            return;
        }

		return response.json();
    }).then((result) => {
		generateArticlesList(result.articles);
	}).catch((error) => {
        console.log('fetch error');
    });
}

function generateArticlesList (articles) {

	let articleTemplate,
		documentFragmet,
		articlesHolder,
		articleHTML,
		div,
		compiledTemplate;

	articleTemplate = document.getElementById('article-template');
	articlesHolder = document.getElementById('articles-list');

	compiledTemplate = Handlebars.compile(articleTemplate.innerHTML);
	documentFragmet = document.createDocumentFragment();

	for (let article of articles) {
		div = document.createElement('DIV');
		div.classList.add('article');
		div.innerHTML = compiledTemplate(article);
		documentFragmet.appendChild(div);
	}

	articlesHolder.appendChild(documentFragmet);
}
