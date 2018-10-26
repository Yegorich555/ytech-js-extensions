/**
 * Add months to date
 * @param {Number} value a number of whole months. Can be negative or positive
 * @return {Date} existed Date with added months
 */
module.exports = function(value) {
    this.setMonth(this.getMonth() + value);
    return this;
};