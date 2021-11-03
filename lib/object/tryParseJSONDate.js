const parse = require("../date/tryParseJSON");

module.exports = function tryParseJSONDate(obj) {
  function map(v) {
    if (!v) return v;
    const t = typeof v;
    if (t === "string") {
      return parse(v);
    }
    if (t !== "object" || v instanceof Date) return v;

    if (Array.isArray(v)) {
      for (let i = 0; i < v.length; ++i) {
        v[i] = map(v[i]);
      }
    } else {
      //object
      const keys = Object.keys(v);
      for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        v[key] = map(v[key]);
      }
    }

    return v;
  }

  return map(obj);
};
