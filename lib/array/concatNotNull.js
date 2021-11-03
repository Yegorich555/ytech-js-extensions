/**
 * Combines arrays excluding empty-arrays and null
 *
 * @param {any[]} items Additional items to add to the end of array.
 * @return {[]} new array with added items
 */
module.exports.default = function concatNotNull() {
  var _ref;

  var k = 0;
  for (var len = arguments.length, arrays = Array(len), i = 0; i < len; ++i) {
    var v = arguments[i];
    if (v != null && v.length) {
      arrays[k] = v;
      ++k;
    }
  }

  arrays.length = k;

  return (_ref = []).concat.apply(_ref, arrays);
};
