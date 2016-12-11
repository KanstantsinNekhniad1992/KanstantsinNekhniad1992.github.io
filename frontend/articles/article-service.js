/*jshint esversion: 6 */
'use strict';

/**
 * get articles by ajax request
 * @param  {Object} options initial options
 * @param  {String} options.url request url
 * @param  {String} options.apiKey specific param to get artcles
 */
function getArticles(options) {

    options = options || {};
    return fetch(options.url + options.apiKey, {
        method: 'GET'
    }).then((response) => {
        return response.json();
    });
}

/**
 * generate articles list template
 * @param  {Array} articles list of articles
 */
function generateArticlesList(articles) {

    let documentFragmet,
        li;

    documentFragmet = document.createDocumentFragment();

    for (let article of articles) {
        li = document.createElement('LI');
        li.classList.add('article');
        li.innerHTML = `<div class="article-source clearfix">
							<p class="author">${article.author}</p>
							<p class="date">Published at ${article.publishedAt}</p>
						</div>
						<h3 class="title" id="article-title">${article.title}</h3>
						<img src='${article.urlToImage}' alt='${article.title}' />
						<p class="description">${article.description}</p>
						<div class="read-more-link"><a href='${article.url}'>Read more...</a></div>`;
        documentFragmet.appendChild(li);
    }

	return documentFragmet;
}

module.exports = {
	getArticles: getArticles,
	generateArticlesList: generateArticlesList
};
