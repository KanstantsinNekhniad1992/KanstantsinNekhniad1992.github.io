/*jshint esversion: 6 */
'use strict';

import {
    isFunction,
    isString,
    isObject,
    uniqueId
} from 'lodash/fp';

class Subscriber {

	constructor () {
		this._subscribedEvents = {};
	}

	subscribe (eventName, callback) {

		if (!isFunction(callback)) {
			return;
		}

		let events = this._subscribedEvents[eventName];

		if (typeof events === 'undefined') {
			events = this._subscribedEvents[eventName] = [];
		}

		events.push(callback);
	}

	unsubscribe (eventName) {
		delete this._subscribedEvents[eventName];
	}

	fire (eventName, context) {

		let i = 0,
 			events = this._subscribedEvents[eventName],
			len;

       for (len = events.length; i < len; i += 1) {
		   events[i].call(context);
 	   }

	}
}

export default new Subscriber();
