/**
 * Compare string with ignore case
 * 
 * @param {String} v
 * @return {Boolean} true if equal
 */
module.exports = function(v) {
    'use strict'
    if (!this && !v)
        return true;
    if (!this || !v)
        return false;

    return this.toUpperCase() == v.toUpperCase();
}