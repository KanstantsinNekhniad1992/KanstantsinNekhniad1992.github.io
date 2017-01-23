'use strict';
import angular from 'angular';
import components from './components';
import controllers from './controllers';
// import router from 'angular-ui-router';
console.log(components);
angular.module('FrontCampApp', [components.name, controllers]);
