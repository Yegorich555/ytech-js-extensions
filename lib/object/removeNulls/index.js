const RemoveOptions = require("./removeOptions").default;

module.exports.default = function removeNulls(obj, options) {
  const opt = Object.assign({}, new RemoveOptions(), options);

  function map(v) {
    const t = typeof v;
    if (t === "string") {
      if (opt.trimStrings) {
        v = v.trim();
      }
      if (opt.removeEmptyStrings && !v) return;
    }
    if (!v) return v;
    if (t !== "object" || v instanceof Date) return v;
    if (Array.isArray(v)) {
      for (let i = 0; i < v.length; ++i) v[i] = map(v[i]);

      if (opt.removeNullsFromArrays && v.length)
        v = v.filter(function (q) {
          return q != null;
        });

      if (opt.removeEmptyArrays && v.length === 0) return; //will be deleted in #del

      return v;
    } else {
      // only if object
      const keys = Object.keys(v);
      for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        const val = v[key];
        v[key] = map(val);
        if (v[key] == null) {
          //#del
          delete v[key];
        }
      }
    }
    return v;
  }

  return map(obj);
};
