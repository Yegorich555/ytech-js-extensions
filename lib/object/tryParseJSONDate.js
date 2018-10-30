/**
 * Replace date-JSON-string properties to date
 * 
 * @param {*} obj
 * @return {*} the same object
 */
module.exports = function(obj) {
    var parse = require('../date/tryParseJSON');

    function map(v) {
        var t = typeof v;
        if (t === 'string') {
            return parse(v);
        }
        if (t !== 'object' || v instanceof Date)
            return v;

        if (Array.isArray(v)) {
            for (var i = 0; i < v.length; ++i) {
                v[i] = map(v[i]);
            }
        } else { //object
            var keys = Object.keys(v);
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i]
                v[key] = map(v[key])
            }
        }

        return v;
    }

    return map(obj);
}