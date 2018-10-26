/**
 * Returns Date from string if it contains JSON date format
 *
 * @param {String} value value which need tryParse
 * @return {(Date|value)} Date if ok or value if string or not JSON-date
 */
module.exports = function(value) {
    if (!value || typeof value !== 'string' || value.length < 19 || value.length > 27)
        return value;

    if (/^(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2}):(\d{2})/.test(value)) {
        var v = Date.parse(value);
        if (!isNaN(v))
            return new Date(v);
    }

    return value;
}