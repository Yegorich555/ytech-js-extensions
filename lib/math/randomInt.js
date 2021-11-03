/**
 * Generate random int value
 *
 * @param {Number} [min=0]
 * @param {Number} [max=32767]
 * @return {Number} result in int-type between min and max values
 */
module.exports = function (min = 0, max = 32767) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
