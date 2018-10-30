/**
 * Delete item from array
 *
 * @param {any|Function} callbackOrValue function to execute on each value in the array for finding item
 * @return {any} item which was deleted
 */
module.exports = function(callbackOrValue) {
    if (!this || !callbackOrValue) {
        return;
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