module.exports = function UTCFromValues(year, month, date) {
  return new Date(Date.UTC(year, month, date));
};
