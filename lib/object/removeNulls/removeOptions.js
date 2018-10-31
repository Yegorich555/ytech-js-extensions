/**
 * Options for removeNulls()
 */
module.exports = function RemoveOptions() {
    /** @type {Boolean} */
    this.removeEmptyArrays = true;

    /** @type {Boolean} */
    this.removeNullsFromArrays = true;

    /** @type {Boolean} */
    this.trimStrings = true;

    /** @type {Boolean} */
    this.removeEmptyStrings = true;
}