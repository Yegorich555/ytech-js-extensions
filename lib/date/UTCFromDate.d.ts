/**
 * Returns new UTC-Date from year, month and date (without time)
 * @param {Date} date The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.
 * @return {Date} new Date
 */
export default function UTCFromDate(date: Date): Date;
