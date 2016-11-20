/*jshint esversion: 6 */
'use strict';

const URL = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=';
const APIKEY = '6b51303bc9c44fc49fd3973b3a1e108f';

function getArticles() {
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

function generateArticlesList(articles) {

    let articleTemplate,
        documentFragmet,
        articlesHolder,
        articleHTML,
        li,
        compiledTemplate;

    articlesHolder = document.getElementById('articles-list');
    documentFragmet = document.createDocumentFragment();

    for (let article of articles) {
        li = document.createElement('LI');
        li.classList.add('article');
        li.innerHTML = `<div class="article-source clearfix">
							<p class="author">${article.author}</p>
							<p class="date">Published at ${article.publishedAt}</p>
						</div>
						<h3 class="title">${article.title}</h3>
						<img src='${article.urlToImage}' alt='${article.title}' />
						<p class="description">${article.description}</p>
						<div class="read-more-link"><a href='${article.url}'>Read more...</a></div>`;
        documentFragmet.appendChild(li);
    }

    articlesHolder.appendChild(documentFragmet);
}
getArticles();
