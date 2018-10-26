/**
 * Reset UTC-time-value of Date
 * @return {Date} existed Date with reseted UTC-time-value
 */
module.exports = function() {
    this.setUTCHours(0, 0, 0, 0);
    return this;
};