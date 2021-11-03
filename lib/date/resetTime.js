module.exports = function resetTime() {
  this.setHours(0, 0, 0, 0);
  return this;
};
