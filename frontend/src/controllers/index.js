'use strict';
import angular from 'angular';
import HomeController from './HomeController';

export default angular.module('FrontCampApp.controllers', [])
	.controller('HomeController', HomeController)
	.name;
