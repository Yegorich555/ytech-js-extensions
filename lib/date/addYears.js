module.exports = function addYears(value) {
  this.setFullYear(this.getFullYear() + value);
  return this;
};
