'use strict';
import angular from 'angular';

export default function($resource) {
	'ngInject';
    return $resource('/posts/:id', { _id: '@id'}, {
        update: {method: 'PUT'}
    });
}
