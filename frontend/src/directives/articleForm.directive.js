'use strict';

let ArticleController  = function($scope, $stateParams, PostAPIService, toastr) {
	'ngInject';


	if ($stateParams.id) {
	    PostAPIService.get({
	        id: $stateParams.id
	    }).$promise.then(function(article) {
	        $scope.article = article;
	    });
	}

	$scope.submitForm = function () {

		let tags = $scope.article.tags.replace(/ /g,'').split(',');

		let article = {
			title: $scope.article.title,
			author: $scope.article.author,
			description: $scope.article.description,
			tags: tags
		}

		if ($scope.isNewArticle === 'true') {
			PostAPIService.save($scope.article).$promise.then(function (response) {
				if (response) {
					toastr.success('Create Article', 'Article was created successfully!');
				}
			}, function (error) {
				if (error) {
					toastr.error('Create Article', 'Article was not created!');
				}
			});
		} else {
			PostAPIService.update({id: $stateParams.id}, article).$promise.then(function (response) {
				if (response) {
					toastr.success('Edit Article', 'Article was edited successfully!');
				}
			}, function (error) {
				if (error) {
					toastr.error('Edit Article', 'Article was not edited!');
				}
			});
		}

	}

}

export default function () {

	return {
		restict: 'E',
		scope: {
			submitForm: '&'
		},
		templateUrl: '/partials/article-form.html',
		controller: ArticleController,
		link: function($scope, element, attr, ctrl) {
			$scope.isNewArticle = attr.isnewarticle;
		}
	}

}
