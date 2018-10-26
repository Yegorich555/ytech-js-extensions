/**
 * Returns new UTC-Date from year, month and date (without time)
 * @param {Date} date The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.
 * @return {Date} new Date
 */
module.exports = function(date) {
    if (isNaN(date))
        return date;
    return Date.UTCFromValues(date.getFullYear(), date.getMonth(), date.getDate());
}