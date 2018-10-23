/*!
  Copyright (c) 2018 Yegor Golubchik.
  Licensed under the MIT License (MIT), see
  https://github.com/Yegorich555/ytech-js-extensions
*/
/* global define */

(function() {
    'use strict';

    /**
     * Compare string with ignore case
     * 
     * @param {String} v
     * @return {Boolean} true if eqauls
     */
    String.prototype.equal = function(v) {
        if (!this && !v)
            return true;
        if (!this || !v)
            return false;

        return this.toUpperCase() == v.toUpperCase();
    }

    /**
     * Set UpperCase for the first character
     * 
     * @return {String} new string if string is not null otherwise same string
     */
    String.prototype.toUpperCaseFirst = function() {
        return this && this.charAt(0).toUpperCase() + this.slice(1);
    }

    /**
     * Set LowerCase for the first character
     * 
     * @return {String} new string if string is not null otherwise same string
     */
    String.prototype.toLowerCaseFirst = function() {
        return this && this.charAt(0).toLowerCase() + this.slice(1);
    }

    /**
     * Split string by spaces and join to camelCase: 'My camel Case string' to 'myCamelCaseString'
     */
    String.prototype.toCamelCase = function() {
        if (!this) {
            return this;
        }

        var arr = this.split(' ');
        arr[0] = arr[0].toLowerCaseFirst();
        for (var i = 1; i < arr.length; ++i) {
            arr[i] = arr[i].toUpperCaseFirst();
        }

        return arr.join('');
    }

    /**
     * Transform string from camelCase: 'myCamelCaseString' to 'My Camel Case String'
     */
    String.prototype.fromCamelCase = function() {
        return this && this.replace(/([a-z](?=[A-Z]))/g, '$1 ').toUpperCaseFirst();
    }
}());