/*!
  Copyright (c) 2018 Yegor Golubchik.
  Licensed under the MIT License (MIT), see
  https://github.com/Yegorich555/ytech-js-extensions
*/
/* global define */

(function() {
    'use strict';

    Array.prototype.last = Array.prototype.last || function() {
        if (!this || !this.length)
            return;

        return this[this.length - 1];
    }

    Array.prototype.includes = Array.prototype.includes || function(value) {
        if (!this)
            return;
        return this.indexOf && this.indexOf(value) > -1;
    }

    Array.prototype.find = Array.prototype.find || function(callback) {
        if (!this) {
            return null;
        } else if (typeof callback !== 'function') {
            throw new TypeError('callback must be a function');
        }
        var list = Object(this);
        // Makes sures is always has an positive integer as length.
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        for (var i = 0; i < length; i++) {
            var element = list[i];
            if (callback.call(thisArg, element, i, list)) {
                return element;
            }
        }
    };

    Array.prototype.addIfNotExists = function(newItem, propNameOrGetter = null) {
        if (!this || newItem == null) {
            return null;
        }

        var getVal;
        if (propNameOrGetter == null)
            getVal = function(v) { return v };
        else if (typeof propNameOrGetter === 'string')
            getVal = function(v) { return v[propNameOrGetter] };
        else if (typeof propNameOrGetter === 'function')
            getVal = propNameOrGetter;
        else
            throw new TypeError('propNameOrGetter must be undefined, a function or string');

        var item = this.find(item => getVal(item) === getVal(newItem));
        if (item === undefined) {
            this.push(newItem);
            return newItem;
        }
        return item;
    };
}());