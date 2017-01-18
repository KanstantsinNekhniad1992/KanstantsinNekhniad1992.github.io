'use strict';

import {combineReducers} from 'redux';
import actionReducer from './articleReducer';

const rootReducers = combineReducers({
    actionReducer
});

export default rootReducers;
