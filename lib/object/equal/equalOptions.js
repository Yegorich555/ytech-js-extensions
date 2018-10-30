/**
 * Options for equal objects
 */
module.exports = function EqualOptions() {

    /** @type {Boolean} */
    this.checkKeysLength = false; //only direct checking

    /** @type {Boolean} */
    this.ignoreEmptyArrays = true;

    /** @type {Boolean} */
    this.ignoreFunctions = true;

    //this.ignoreNulls= true; always true

    /** @type {(Boolean|Function)} */
    this.showFalseReason = false;

    /** @type {String} */
    this.falseReason;
}