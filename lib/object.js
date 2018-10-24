/*!
  Copyright (c) 2018 Yegor Golubchik.
  Licensed under the MIT License (MIT), see
  https://github.com/Yegorich555/ytech-js-extensions
*/
/* global define */

(function() {
    'use strict';

    var defaultOptions = {
        log: function() {}, //function(msg, v1, v2) { console.warn(msg, v1, v2); }
        onlyOwnProperties: true,
        ignoreEmptyArrays: true,
        ignoreFunctions: true,
        //ignoreNulls: true, always true
        checkKeysLength: false, //only direct checking
        falseReason: false,
    }

    /**
     * Compare two objects if they are equal (including nested properties)
     * 
     * @param {*} v1
     * @param {*} v2
     * @param {Object} [options=defaultOptions]
     * @return {Boolean} true if equal
     */
    Object.equal = function(v1, v2, options) {
        var opt = Object.assign({}, defaultOptions, options);
        if (opt.falseReason !== false) {
            opt.log = function(msg, v1, v2, key) {
                if (typeof options.falseReason === 'function') {
                    options.falseReason();
                } else {
                    options.falseReason = `${msg}. v1 is ${v1}. v2 is ${v2}. key is ${key}`;
                }
                console.warn(msg, v1, v2, key);
            }
        }

        function isEqual(v1, v2, curKey) {
            if (v1 === v2)
                return true;
            var type1 = typeof v1;
            var type2 = typeof v2;
            if (v1 == null || v2 == null) {
                if (v1 == null && v2 == null)
                    return true;

                if (opt.ignoreFunctions && (type1 === 'function' || type2 === 'function')) {
                    return true;
                }
                if (opt.ignoreEmptyArrays) {
                    if ((Array.isArray(v1) && v1.length === 0) || (Array.isArray(v2) && v2.length === 0))
                        return true;
                }

                opt.log('only one value is null', v1, v2, curKey);
                return false;
            }

            if (opt.ignoreFunctions && type1 === 'function' && type2 === 'function') {
                return true;
            }

            if (type1 !== 'object' || type2 !== 'object') {
                opt.log('v1 !== v2', v1, v2, curKey);
                return false;
            }
            if (Array.isArray(v1) || Array.isArray(v2)) {
                if (!Array.isArray(v2) || !Array.isArray(v1)) {
                    opt.log('some is not Array', v1, v2, curKey);
                    return false;
                }
                if (v1.length !== v2.length) {
                    opt.log('different array lengths', v1, v2, curKey);
                    return false;
                }
                for (var i = 0; i < v1.length; ++i) {
                    if (!isEqual(v1[i], v2[i], curKey))
                        return false;
                }
                return true;
            }
            if (v1 instanceof Date || v2 instanceof Date) {
                if (!v1 instanceof Date || !v2 instanceof Date) {
                    opt.log('some is not Date', v1, v2, curKey);
                    return false;
                } else {
                    var r = v1.valueOf() === v2.valueOf();
                    if (!r)
                        opt.log('dates is not equal', v1, v2, curKey);
                    return r;
                }
            }
            var keys = Object.keys(v1);
            if (opt.checkKeysLength) {
                if (keys.length != Object.keys(v2).length) {
                    opt.log('different object-key-lengths', keys, Object.keys(v2, curKey))
                    return false;
                }
            }

            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (opt.onlyOwnProperties && !v1.hasOwnProperty(key))
                    continue;

                if (!isEqual(v1[key], v2[key], key)) {
                    return false;
                }
            }
            return true;
        }

        return isEqual(v1, v2, '');
    }

}());