/**
 * Returns new UTC-Date from year, month and date (without time)
 * @param {Number} year The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.
 * @param {Number} month The month as an number between 0 and 11 (January to December).
 * @param {Number} date The date as an number between 1 and 31.
 * @return {Date} new Date
 */
module.exports = function(year, month, date) {
    return new Date(Date.UTC(year, month, date));
}