module.exports = function last() {
  if (!this || !this.length) return;

  return this[this.length - 1];
};
