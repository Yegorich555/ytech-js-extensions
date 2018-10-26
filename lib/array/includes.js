/**
 * Return result of existing item in array
 *
 * @param {any} value The value which must find
 * @return {?Boolean} true if found
 */
module.exports = function(value) {
    if (!this)
        return;
    return this.indexOf && this.indexOf(value) > -1;
}