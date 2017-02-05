'use strict';

import 'angular';
import 'angular-mocks/angular-mocks';
console.log('123');
let testContext = require.context('.', true, /\.spec\.js$/);
testContext.keys().forEach(testsContext);