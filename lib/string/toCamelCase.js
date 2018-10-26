/**
 * Split string by spaces and join to camelCase: 'My camel Case string' to 'myCamelCaseString'
 */
module.exports = function() {
    if (!this) {
        return this;
    }

    var arr = this.split(' ');
    arr[0] = arr[0].toLowerCaseFirst();
    for (var i = 1; i < arr.length; ++i) {
        arr[i] = arr[i].toUpperCaseFirst();
    }

    return arr.join('');
}