/*jshint esversion: 6 */
'use strict';

import {
    isFunction,
    isString,
    isObject,
    uniqueId
} from 'lodash/fp';

class Observer {

	constructor () {
		this._callbacks = {};
	}

	addObserver (eventName, callback) {

		if (!isFunction(callback)) {
			return;
		}

		let events = this._callbacks[eventName];

		if (typeof events === 'undefined') {
			events = this._callbacks[eventName] = [];
		}

		events.push(callback);
	}

	removeObserver (eventName) {
		delete this._callbacks[eventName];
	}

	notify (eventName, context) {

		let i = 0,
 			events = this._callbacks[eventName],
			len;

       for (len = events.length; i < len; i += 1) {
		   events[i].call(context);
 	   }

	}
}

export default new Observer();
