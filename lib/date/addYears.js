/**
 * Add years to date
 * @param {Number} value a number of whole years. Can be negative or positive
 * @return {Date} existed Date with added years
 */
module.exports = function(value) {
    this.setFullYear(this.getFullYear() + value);
    return this;
};