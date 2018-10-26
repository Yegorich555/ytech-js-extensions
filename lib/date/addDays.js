/**
 * Add days to date
 * @param {Number} value a number of whole days. Can be negative or positive
 * @return {Date} existed Date with added days
 */
module.exports = function(value) {
    this.setDate(this.getDate() + value);
    return this;
};