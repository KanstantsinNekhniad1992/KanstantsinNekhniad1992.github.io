'use strict';

import 'angular';
import 'angular-mocks/angular-mocks';

let testContext = require.context('./frontend', true, /\.spec\.js$/);
testContext.keys().forEach(testContext);