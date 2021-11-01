/**
 * Returns Date from string if it contains JSON date format
 *
 * @param {String} value value which need tryParse
 * @return {(Date|value)} Date if ok or value if string or not JSON-date
 */
export default function tryParseJSON(value: string): Date | string;
