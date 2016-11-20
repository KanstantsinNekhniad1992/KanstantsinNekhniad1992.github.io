;(function () {

	'use strict';

	System.config({
	    map: {
	        'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
	        'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js'
	    },
	    transpiler: 'plugin-babel'
	});

	System.import('js/truthly-falsy-plugin.js');

}());
