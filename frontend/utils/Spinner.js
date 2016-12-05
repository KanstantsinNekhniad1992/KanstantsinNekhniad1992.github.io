/*jshint esversion: 6 */
'use strict';

import Subscriber from './Subscriber';

class Spinner {

	constructor () {
		this._showSpinnerClass = 'show-spinner';
		Subscriber.subscribe('show-spinner', this.showSpinner);
		Subscriber.subscribe('hide-spinner', this.hideSpinner);
	}

	showSpinner () {
		document.body.classList.add(this._showSpinnerClass)
	}

	hideOverlay () {
		document.body.classList.remove(this._showSpinnerClass);
	}
}

export default new Spinner();
