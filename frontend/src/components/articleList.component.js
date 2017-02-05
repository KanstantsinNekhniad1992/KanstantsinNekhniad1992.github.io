'use strict';
import angular from 'angular';

const ArticleListController  = function($scope, PostAPIService) {
	"ngInject";
	 PostAPIService.query().$promise.then(function (collection) {
		$scope.articles = collection;
	});
}

let articleListComponent = {
	template: '<ul><li ng-repeat="article in articles" class="article"><div class="article-source clearfix"><p class="author">{{article.author}}</p><p class="date">{{article.date}}</p></div><a ui-sref="edit-article({id: article._id})">{{article.title}}</a><ul class="tags-list clearfix"><li ng-repeat="tag in article.tags">{{tag}}</li></ul></li></ul>',
	controller:  ArticleListController
}
export default articleListComponent;
