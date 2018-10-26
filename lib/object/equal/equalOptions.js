/**
 * Options for equal objects
 */
module.exports = function EqualOptions() {

    /** @type {Boolean} */
    this.onlyOwnProperties = true;

    /** @type {Boolean} */
    this.ignoreEmptyArrays = true;

    /** @type {Boolean} */
    this.ignoreFunctions = true;
    //this.ignoreNulls= true; always true

    /** @type {Boolean} */
    this.checkKeysLength = false; //only direct checking

    /** @type {(Function|Boolean)} */
    this.falseReason = false;
}