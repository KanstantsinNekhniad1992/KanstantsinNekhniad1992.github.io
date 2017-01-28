'use strict';

import angular from 'angular';

export default function () {
	'ngInject';

	return {
		restrict: 'A',
		scope: {},
		require: 'ngModel',
		link: function ($scope, element, attr, ctrl) {

			function maxLengthValidator (ngModelValue) {

				if (ngModelValue.length <= 20) {
					ctrl.$setValidity('maxLengthValidator', false);
				} else {
					ctrl.$setValidity('maxLengthValidator', true);
				}

				return ngModelValue;

			}

			ctrl.$parsers.push(maxLengthValidator);

		}
	}

}
