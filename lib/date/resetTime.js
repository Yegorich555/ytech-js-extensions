/**
 * Reset time-value of Date
 * @return {Date} existed Date with reseted time-value
 */
module.exports = function() {
    this.setHours(0, 0, 0, 0);
    return this;
};