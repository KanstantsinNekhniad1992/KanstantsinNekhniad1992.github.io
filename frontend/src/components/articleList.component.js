'use strict';
import angular from 'angular';

const ArticleListController  = function($scope) {
	$scope.articles = [];
}

let articleListComponent = {
	template: '<ul><li ng-repeat="article in articles" class="article"><div class="article-source clearfix"><p class="author">{{article.author}}</p><p class="date">{{article.date}}</p></div><a href="/post/id">{{article.title}}</a></li></ul>',
	controller:  ArticleListController
}

export default articleListComponent;
