/*jshint esversion: 6 */
'use strict';

import {
    isFunction,
    isString,
    isObject,
    uniqueId
} from 'lodash/fp';

class FrontcampDispatcher {

    constructor() {
        this._callbacks = {};
        this._isPending = {};
        this._pendingPayload = {};
        this._prefix = 'frontcamp-dispatcher_';
    }

    /**
     * register callback
     * @param  {Function} callback  event callback
     */
    register(callback) {

        if (!isFunction(callback)) {
            return;
        }

        let id = uniqueId(this._prefix);

        this._callbacks[id] = callback;
    }

    /**
     * dispath event
     * payload {Object} payload
     */
    dispatch(payload) {

        if (!isObject(payload)) {
            return;
        }

        this._startDispatching(payload);
        try {
            for (var id in this._callbacks) {
                if (this._isPending[id]) {
                    continue;
                }
                this._invokeCallback(id);
            }
        } finally {
            this._stopDispatching();
        }

    }

    /**
     * id {Strind} dispatcher token
     */
    _invokeCallback(id) {

        if (!isString(id)) {
            return;
        }

        this._isPending[id] = true;
        this._callbacks[id](this._pendingPayload);
    }

    /**
     * payload {Object} payload data
     */
    _startDispatching(payload) {

        if (!isObject(payload)) {
            return;
        }

        for (var id in this._callbacks) {
            this._isPending[id] = false;
        }
        this._pendingPayload = payload;
    }

    _stopDispatching() {
        this._pendingPayload = {};
    }

}

export default FrontcampDispatcher;
