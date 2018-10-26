/**
 * Return latest item from array
 *
 * @return {any} a last value
 */
module.exports = function last() {
    if (!this || !this.length)
        return;

    return this[this.length - 1];
}