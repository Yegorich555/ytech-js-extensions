module.exports.default = function compareByDate(v1, v2) {
  const d1 = v1.getFullYear() * 1000 + v1.getMonth() * 32 + v1.getDate();
  const d2 = v2.getFullYear() * 1000 + v2.getMonth() * 32 + v2.getDate();

  if (d1 > d2) return 1;
  if (d1 < d2) return -1;
  return 0;
};
