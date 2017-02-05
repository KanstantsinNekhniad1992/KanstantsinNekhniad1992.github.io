'use strict';

import angular from 'angular';
import ngResource from 'angular-resource';
import PostAPIService from './postAPI.service'

export default angular.module('FrontCampApp.services', [ngResource])
	.factory('PostAPIService', PostAPIService)
	.name;
