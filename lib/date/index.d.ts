interface Date {
  /**
   * Add days to date
   * @param {Number} value a number of whole days. Can be negative or positive
   * @return {Date} existed Date with added days
   */
  addDays: typeof import("./addDays").default;
  /**
   * Add months to date
   * @param {Number} value a number of whole months. Can be negative or positive
   * @return {Date} existed Date with added months
   */
  addMonths: typeof import("./addMonths").default;
  /**
   * Add years to date
   * @param {Number} value a number of whole years. Can be negative or positive
   * @return {Date} existed Date with added years
   */
  addYears: typeof import("./addYears").default;
  /**
   * Compare by values
   * @return {Boolean} return true if dates is equal (including isNaN == isNaN comparison)
   */
  equal: typeof import("./equal").default;
  /**
   * Compare dates by Date-values only (without Time)
   * @return {Boolean} return true if Date-values is the same (including isNaN == isNaN comparison)
   */
  equalDates: typeof import("./equalDates").default;
  /**
   * Reset time-value of Date
   * @return {Date} existed Date with reseted time-value
   */
  resetTime: typeof import("./resetTime").default;
  /**
   * Reset UTC-time-value of Date
   * @return {Date} existed Date with reseted UTC-time-value
   */
  resetUTCTime: typeof import("./resetUTCTime").default;
}

interface DateConstructor {
  /**
   * Compare by Date-values only (without Time)
   * @return {Number} 1, -1 or 1 compare result
   */
  compareByDate: typeof import("./compareByDate").default;
  /**
   * Returns Date from string if it contains JSON date format
   *
   * @param {String} value value which need tryParse
   * @return {(Date|value)} Date if ok or value if string or not JSON-date
   */
  tryParseJSON: typeof import("./tryParseJSON").default;
  /**
   * Returns new UTC-Date from year, month and date (without time)
   * @param {Date} date The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.
   * @return {Date} new Date
   */
  UTCFromDate: typeof import("./UTCFromDate").default;
  /**
   * Returns new UTC-Date from year, month and date (without time)
   * @param {Number} year The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.
   * @param {Number} month The month as an number between 0 and 11 (January to December).
   * @param {Number} date The date as an number between 1 and 31.
   * @return {Date} new Date
   */
  UTCFromValues: typeof import("./UTCFromValues").default;
}
