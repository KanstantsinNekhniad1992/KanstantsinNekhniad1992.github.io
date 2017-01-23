'use strict';
import angular from 'angular';
import ArticleList from './articleList.component';
let ComponentsModule = angular.module('FrontCampApp.components', [])
    .component('articleList', ArticleList);

export default ComponentsModule;
