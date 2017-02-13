'use strict';
import angular from 'angular';
import articleList from 'articleList/articleList.component';
export default angular.module('FrontCampApp.components', [])
    .component('articleList', articleList)
	.name;
