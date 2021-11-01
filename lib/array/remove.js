export default function remove(callbackOrValue) {
    'use strict'
    if (!this) {
        return;
    }

    var f;
    if (typeof callbackOrValue === 'function')
        f = callbackOrValue
    else
        f = function(v) { return v === callbackOrValue; }

    for (var i = 0; i < this.length; ++i) {
        if (f(this[i])) {
            var v = this[i];
            this.splice(i, 1);
            return v;
        }
    }
}