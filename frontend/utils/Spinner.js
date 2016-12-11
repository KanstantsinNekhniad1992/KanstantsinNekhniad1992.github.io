/*jshint esversion: 6 */
'use strict';

import Subscriber from './Observer';

class Spinner {

	constructor () {
		this._showSpinnerClass = 'show-spinner';
		Subscriber.addObserver('show-spinner', this.showSpinner);
		Subscriber.addObserver('hide-spinner', this.hideSpinner);
	}

	showSpinner () {
		document.body.classList.add(this._showSpinnerClass)
	}

	hideSpinner () {
		document.body.classList.remove(this._showSpinnerClass);
	}
}

export default new Spinner();
