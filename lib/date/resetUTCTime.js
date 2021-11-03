module.exports.default = function resetUTCTime() {
  this.setUTCHours(0, 0, 0, 0);
  return this;
};
