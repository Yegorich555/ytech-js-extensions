module.exports.default = function addMonths(value) {
  this.setMonth(this.getMonth() + value);
  return this;
};
