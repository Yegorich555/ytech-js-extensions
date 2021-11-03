module.exports = function UTCFromDate(date) {
  if (isNaN(date)) {
    return date;
  }
  return Date.UTCFromValues(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
};
