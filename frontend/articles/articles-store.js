/*jshint esversion: 6 */
'use strict';

import config from '../config';
import Dispatcher from '../FrontcampDispatcherInstance';
import events from 'events';
import isArray from 'lodash/fp';

let EventEmitter,
    ArticleStore,
    actionTypes,
    _title,
    _articles = [];

EventEmitter = events.EventEmitter;
actionTypes = config.actions;

ArticleStore = Object.assign({}, EventEmitter.prototype, {

    _title: '',

    setInitialArticles: function(articles) {
        _articles = isArray(articles) ? articles : [];
    },

    addLogListener: function(callback) {
        this.on('log', callback);
    },

    removeLogListener: function(callback) {
        this.on('log', callback);
    },

    emitLog: function() {
        this.emit('log')
    },

    getAllArticles: function() {
        return _articles;
    }

    // here you can add addition methods (e.g getArticlesById, updateArticle)
});


Dispatcher.register(function(payload) {
    switch (payload.actionType) {
        case actionTypes.LOG_ARTICLE:
            ArticleStore._title = payload.title;
            ArticleStore.emitLog();
            break;
    }
});

export default ArticleStore;
