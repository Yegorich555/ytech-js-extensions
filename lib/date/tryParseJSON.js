module.exports.default = function tryParseJSON(value) {
  if (typeof value !== "string" || value.length < 19 || value.length > 27)
    return value;

  if (/^(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2}):(\d{2})/.test(value)) {
    let v = Date.parse(value);
    if (!isNaN(v)) return new Date(v);
  }

  return value;
};
