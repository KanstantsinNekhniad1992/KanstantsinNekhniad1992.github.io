'use strict';

import angular from 'angular';
import maxLengthValidator from './maxLengthValidator.directive';
import articleForm from './articleForm.directive';

export default angular.module('FrontCampApp.directives', [])
	.directive('articleForm', articleForm)
	.directive('maxLengthValidator', maxLengthValidator)
	.name;
