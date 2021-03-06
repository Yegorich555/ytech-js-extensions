/**
 * Add item if it doesn't exist in array
 *
 * @param {any} newItem The value which must find (newItem can be == null)
 * @param {(String|Function)} [propNameOrGetter=null] 
 * null for primitive-types or objects which need to compare directly
 * string for object.propName which need to use for comparing
 * callback which need to use for comparing: v => v.id == newItem.id - for example
 * @return {any} item which found or item which added
 */
module.exports = function(newItem, propNameOrGetter) {
    'use strict'
    if (!this) {
        return;
    }

    var getVal;
    if (propNameOrGetter == null)
        getVal = function(v) { return v };
    else if (typeof propNameOrGetter === 'string')
        getVal = function(v) { return v[propNameOrGetter] };
    else if (typeof propNameOrGetter === 'function')
        getVal = propNameOrGetter;
    else
        throw new TypeError('propNameOrGetter must be undefined, a function or string');

    var item = this.find(function(item) { return getVal(item) === getVal(newItem) });
    if (item === undefined) {
        this.push(newItem);
        return newItem;
    }
    return item;
};