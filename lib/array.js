/*!
  Copyright (c) 2018 Yegor Golubchik.
  Licensed under the MIT License (MIT), see
  https://github.com/Yegorich555/ytech-js-extensions
*/
/* global define */

(function() {
    'use strict';

    /**
     * Return latest item from array
     *
     * @return {any} a last value
     */
    Array.prototype.last = function() {
        if (!this || !this.length)
            return;

        return this[this.length - 1];
    }

    /**
     * Return result of existing item in array
     *
     * @param {any} value The value which must find
     * @return {?boolean} true if found
     */
    Array.prototype.includes = function(value) {
        if (!this)
            return;
        return this.indexOf && this.indexOf(value) > -1;
    }

    /**
     * Array.find polyfill
     */
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
    }

    /**
     * Array.filter polyfill
     */
    Array.prototype.filter = Array.prototype.filter || function(func, thisArg) {
        'use strict';
        if (!((typeof func === 'Function' || typeof func === 'function') && this))
            throw new TypeError();

        var len = this.length >>> 0,
            res = new Array(len), // preallocate array
            t = this,
            c = 0,
            i = -1;
        if (thisArg === undefined) {
            while (++i !== len) {
                // checks to see if the key was set
                if (i in this) {
                    if (func(t[i], i, t)) {
                        res[c++] = t[i];
                    }
                }
            }
        } else {
            while (++i !== len) {
                // checks to see if the key was set
                if (i in this) {
                    if (func.call(thisArg, t[i], i, t)) {
                        res[c++] = t[i];
                    }
                }
            }
        }

        res.length = c; // shrink down array to proper size
        return res;
    };

    var valueGetter = function(propNameOrGetter) {
        if (propNameOrGetter == null)
            return function(v) { return v };
        else if (typeof propNameOrGetter === 'string')
            return function(v) { return v[propNameOrGetter] };
        else if (typeof propNameOrGetter === 'function')
            return propNameOrGetter;
        else
            throw new TypeError('propNameOrGetter must be undefined, a function or string');
    }

    /**
     * Add item if it doesn't exist in array
     *
     * @param {any} newItem The value which must find
     * @param {(string|function)} [propNameOrGetter=null] 
     * null for primitive-types or objects which need to compare directly
     * string for object.propName which need to use for comparing
     * callback which need to use for comparing: v => v.id == newItem.id - for example
     * @return {any} item which found or item which added
     */
    Array.prototype.addIfNotExists = function(newItem, propNameOrGetter) {
        if (!this || newItem == null) {
            return null;
        }

        var getVal = valueGetter(propNameOrGetter);

        var item = this.find(function(item) { return getVal(item) === getVal(newItem) });
        if (item === undefined) {
            this.push(newItem);
            return newItem;
        }
        return item;
    };

    /**
     * Delete item from array
     *
     * @param {any|function} callbackOrValue function to execute on each value in the array for finding item
     * @return {any} item which was deleted
     */
    Array.prototype.remove = function(callbackOrValue) {
        if (!this || !callbackOrValue) {
            return null;
        }

        var f;
        if (typeof callbackOrValue === 'function')
            f = callbackOrValue
        else
            f = function(v) { return v === callbackOrValue; }

        for (var i = 0; i < this.length; ++i) {
            if (f(this[i])) {
                var v = this[i];
                this.splice(i, 1);
                return v;
            }
        }
    }

    /**
     * Combines arrays excluding empty-arrays and null
     *
     * @param {any[]} items Additional items to add to the end of array.
     * @return {[]} new array with added items
     */
    Array.concatNotNull = function() {
        var _ref;

        var k = 0;
        for (var len = arguments.length, arrays = Array(len), i = 0; i < len; ++i) {
            var v = arguments[i];
            if (v != null && v.length) {
                arrays[k] = v;
                ++k;
            }
        }

        arrays.length = k;

        return (_ref = []).concat.apply(_ref, arrays);
    };
}());