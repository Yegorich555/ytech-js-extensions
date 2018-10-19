/*!
  Copyright (c) 2018 Yegor Golubchik.
  Licensed under the MIT License (MIT), see
  https://github.com/Yegorich555/ytech-js-extensions
*/
/* global define */

(function () {
    'use strict';

    /**
     * Return latest item from array
     *
     * @return {any} a last value
     */
    Array.prototype.last = function () {
        if (!this || !this.length)
            return;

        return this[this.length - 1];
    }

    /**
     * Return result of existing item in array
     *
     * @param {any} value The value which must find
     * @return {boolean} true if found
     */
    Array.prototype.includes = function (value) {
        if (!this)
            return;
        return this.indexOf && this.indexOf(value) > -1;
    }

    /**
     * Return the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned
     *
     * @param {function} callback function to execute on each value in the array
     * @return {any} the first element in the array that satisfies the provided testing function
     */
    var findPolyfill = function (callback) {
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

    Array.prototype.find = Array.prototype.find || findPolyfill;

    /**
     * Return result of existing item in array
     *
     * @param {any} newItem The value which must find
     * @param {null} propNameOrGetter null for primitive-types which need compare
     * @param {string} propNameOrGetter object.propName which need use for compare
     * @param {function} propNameOrGetter callback which need use for compare: v => v.id == newItem.id - for example
     * @return {any} item which found or item which added
     */
    Array.prototype.addIfNotExists = function (newItem, propNameOrGetter = null) {
        if (!this || newItem == null) {
            return null;
        }

        var getVal;
        if (propNameOrGetter == null)
            getVal = function (v) { return v };
        else if (typeof propNameOrGetter === 'string')
            getVal = function (v) { return v[propNameOrGetter] };
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