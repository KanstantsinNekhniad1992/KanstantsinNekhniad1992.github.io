'use strict';
import angular from 'angular';
import toastr from 'angular-toastr';
import ngAnimate from 'angular-toastr';
import '../../node_modules/angular-toastr/dist/angular-toastr.css';
import componets from './components';
import directives from './directives';
import controllers from './controllers';
import services from './services';
import routes from './routes';
import '../style.scss';

angular.module('FrontCampApp', [componets, ngAnimate, toastr, controllers, services, routes, directives]);
