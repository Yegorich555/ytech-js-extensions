module.exports = function addDays(value) {
  this.setDate(this.getDate() + value);
  return this;
};
