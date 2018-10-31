/**
 * Remove null, undefined, ''(empty-string) properties (note: with options.removeNullsFromArrays==true arrays will be replaced)
 * 
 * @param {(Array|String|Object)} obj
 * @param {RemoveOptions} [options=defaultOptions]
 * @return {*} the same object
 */
module.exports = function(obj, options) {
    var filter = Array.prototype.filter || require('../../array/filter.js');
    var RemoveOptions = require('./removeOptions')
    var opt = Object.assign({}, new RemoveOptions(), options)

    function map(v) {
        var t = typeof v
        if (t === 'string') {
            if (opt.trimStrings) {
                v = v.trim()
            }
            if (opt.removeEmptyStrings && !v)
                return;
        }
        if (!v)
            return v;
        if (t !== 'object' || v instanceof Date)
            return v
        if (Array.isArray(v)) {
            for (var i = 0; i < v.length; ++i)
                v[i] = map(v[i])

            if (opt.removeNullsFromArrays && v.length)
                v = filter.call(v, function(q) { return q != null })

            if (opt.removeEmptyArrays && v.length === 0)
                return; //will be deleted in #del

            return v
        } else { // only if object
            var keys = Object.keys(v);
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i]
                var val = v[key]
                v[key] = map(val)
                if (v[key] == null) { //#del
                    delete v[key]
                }
            }
        }
        return v
    }

    return map(obj)
}