module.exports = function toUpperCaseFirst() {
  return this && this.charAt(0).toUpperCase() + this.slice(1);
};
