import angular from 'angular';
import uirouter from 'angular-ui-router';

export default angular.module('FrontCampApp.routes', [uirouter])
	.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
		'ngInject';

		$locationProvider.html5Mode(true);

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '/views/partials/home.html',
				controller: 'HomeController'
			})
			.state('new-article', {
				url: '/new-article',
				templateUrl: '/views/partials/newArticle.html'
			})
			.state('edit-article', {
				url: '/edit-article/:id',
				templateUrl: '/views/partials/editArticle.html'
			});

		$urlRouterProvider.otherwise('/');
	})
	.name;
