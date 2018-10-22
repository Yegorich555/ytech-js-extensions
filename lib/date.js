/*!
  Copyright (c) 2018 Yegor Golubchik.
  Licensed under the MIT License (MIT), see
  https://github.com/Yegorich555/ytech-js-extensions
*/
/* global define */

(function() {
    'use strict';

    /**
     * Returns Date from string if it contains JSON date format
     *
     * @param {string} value value which need tryParse
     * @return {(Date|value)} Date if ok or value if string or not JSON-date
     */
    Date.tryParseJSON = function(value) {
        if (!value || typeof value !== 'string' || value.length < 19 || value.length > 27)
            return value;

        if (/^(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2}):(\d{2})/.test(value)) {
            var v = Date.parse(value);
            if (!isNaN(v))
                return new Date(v);
        }

        return value;
    }

    /**
     * Compare by Date-values only (without Time)
     * @return {number} 1, -1 or 1 compare result
     */
    Date.compareByDate = function(v1, v2) {
        var d1 = v1.getFullYear() * 1000 + v1.getMonth() * 32 + v1.getDate();
        var d2 = v2.getFullYear() * 1000 + v2.getMonth() * 32 + v2.getDate();

        if (d1 > d2)
            return 1;
        if (d1 < d2)
            return -1;
        return 0;
    };

    /**
     * Compare dates
     * @return {boolean} return true if dates is equal (including isNaN == isNaN comparison)
     */
    Date.equal = function(v1, v2) {
        if (isNaN(v1) && isNaN(v2))
            return true;
        return v1.valueOf() === v2.valueOf();
    };

    /**
     * Compare dates by Date-values only (without Time)
     * @return {boolean} return true if Date-values is the same (including isNaN == isNaN comparison)
     */
    Date.equalDates = function(v1, v2) {
        if (isNaN(v1) && isNaN(v2))
            return true;
        return v1.getFullYear() === v2.getFullYear() && v1.getMonth() === v2.getMonth() && v1.getDate() === v2.getDate();
    };

    /**
     * Add days to date
     * @param {number} value a number of whole days. Can be negative or positive
     * @return {Date} existed Date with added days
     */
    Date.prototype.addDays = function(value) {
        this.setDate(this.getDate() + value);
        return this;
    };

    /**
     * Add months to date
     * @param {number} value a number of whole months. Can be negative or positive
     * @return {Date} existed Date with added months
     */
    Date.prototype.addMonths = function(value) {
        this.setMonth(this.getMonth() + value);
        return this;
    };

    /**
     * Add years to date
     * @param {number} value a number of whole years. Can be negative or positive
     * @return {Date} existed Date with added years
     */
    Date.prototype.addYears = function(value) {
        this.setFullYear(this.getFullYear() + value);
        return this;
    };

    /**
     * Reset time-value of Date
     * @return {Date} existed Date with reseted time-value
     */
    Date.prototype.resetTime = function() {
        this.setHours(0, 0, 0, 0);
        return this;
    };

    /**
     * Reset UTC-time-value of Date
     * @return {Date} existed Date with reseted UTC-time-value
     */
    Date.prototype.resetUTCTime = function() {
        this.setUTCHours(0, 0, 0, 0);
        return this;
    };

    /**
     * Returns new UTC-Date from year, month and date (without time)
     * @param {number} year The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.
     * @param {number} month The month as an number between 0 and 11 (January to December).
     * @param {number} date The date as an number between 1 and 31.
     * @return {Date} new Date
     */
    Date.UTCFromValues = function(year, month, date) {
        return new Date(Date.UTC(year, month, date));
    }

    /**
     * Returns new UTC-Date from year, month and date (without time)
     * @param {Date} date The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.
     * @return {Date} new Date
     */
    Date.UTCFromDate = function(date) {
        if (isNaN(date))
            return date;
        return Date.UTCFromValues(date.getFullYear(), date.getMonth(), date.getDate());
    }

}());